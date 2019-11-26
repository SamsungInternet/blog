---
permalink: "/Being-fast-and-light/"
title: Being fast and light - Using binary data to optimise libraries on the client and the server.
category: "Web Performance"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Being fast and light: Using binary data to optimise libraries on the client and the server.

The Web has Native support for parsing and editing Binary data. This can be very efficient for example this is how I sync the state of 170 Virtual Reality users in the same venue without bringing down the network.

The first time I built this demo it performed the syncing with JSON over websockets.

ws.send(JSON.stringify(state));

ws.addEventListener('message', function (message) {  
  state = JSON.parse(message);  
});

This wouldn’t have worked for over 100 users because sending lots of data would have brought down the wifi.

Sending JSON strings is inefficient in size. The following JSON string is 162 Bytes long (81 Characters).

'{"rotation":{"x":12.3,"y":34.5,"z":67.8},"position":{"x":12.3,"y":34.5,"z":67.8}}'

An equivalent representation in Binary is just 4 Bytes per Number so 24 Bytes.

On top of that, parsing a JSON string can be expensive , the Binary data can be easily extracted as Numbers so no need to reconstruct a potentially complex object.

The goal of this talk is to introduce binary data and show how I used it in my project.

Binary data is not a magic solution to all speed problems but for a certain class of problem it can be a very useful tool to have.

People have been studying and handling Binary data since before there were computers so it is a very broad field I only hope to touch upon some of the tools the Web Provides which allow us to manipulate and read binary data.

#### Getting started!

ArrayBuffers are a good way to allocate space to work in. In the example below I allocate 32 Bytes.

I can then edit it by using one of `Uint32Array`, `Uint16Array`, `Float32Array` to write binary data to different parts of the ArrayBuffer.

const buffer = new ArrayBuffer(32); // 32 Bytes  
>\> ArrayBuffer { byteLength: 32 }

const array = new Float32Array(buffer);  
>\> Float32Array \[ 0, 0, 0, 0, 0, 0, 0, 0 \]; // 4 Bytes per element, so 8 elements long.

This is useful because Binary data can be very efficient at transferring information. From client to server or between threads using Web Workers.

**Sending some binary data to a Server with Web Sockets:**

const ws = new WebSocket(url);

// The websocket should also recieve binary data as ArrayBuffers  
ws.binaryType = 'arraybuffer';

ws.send(array);

**Transferring some binary data to a worker:**

    const transferList = [array.buffer];myWorker.postMessage({ buffer: array.buffer }, transferList);

The nice thing about this is that the ownership of the allocated chunk of memory is transferred to the Worker so it does not take up additional memory and is incredibly fast.

Once it has been transferred it can no longer be accessed from the original thread.

In the web worker this Array buffer can then be used with `Float32Array` or `Uint32Array` or similar to start editing it.

const array = new Float32Array(message.buffer);

**Storing binary data in the browser:**

You can store ArrayBuffers in IndexedDB, this can be accomplished more simply using a library like `localForage`

    localforage.setItem('my-buffer', array.buffer).then(function() {    // success});

[https://localforage.github.io/localForage/#setitem](https://localforage.github.io/localForage/#setitem)

#### How to represent our data in Binary

Typed Arrays are great if all your data is one Array all of the same type, real world data is rarely so clean. Often it is a mixture of Floats and Integers. I am now going to illustrate how you can mix your data types into a single ArrayBuffer.

Since the underlying data is just bits you can put whatever you like in an ArrayBuffer and use typed Arrays to read just the bits they need. In the example below I create a new 4 Byte (32 bit) long typeArray and I assign the first value to a fairly big number.

I can then read the underlying buffer with any typedArray and it does not error, although the way the data is interpreted does not make sense compared to the original value.

Notice the 8bit interpretation has 4 entries because the original data is 32 bits long. So when it is interpreted as an array of 8bit unsigned integers it fits into 32bits four times.

>\> typedArray = new Uint32Array(new ArrayBuffer(4))  
>\> typedArray\[0\] = 4266311183  
>\> console.log(typedArray);  
Uint32Array \[ 4266311183 \]

>\> new Uint8Array(typedArray.buffer)  
Uint8Array \[ 15, 190, 74, 254 \]

>\> new Float32Array(typedArray.buffer)  
Float32Array \[ -6.737272394695467e+37 \]

![](https://cdn-images-1.medium.com/max/800/0*r3W_SXzV8ec0ASyS.png)

[How different data types fit into an Array Buffer from MDN](https://hacks.mozilla.org/2017/01/typedarray-or-dataview-understanding-byte-order/)

This demonstrates that as long as we are careful about the sizes of individual elements we can mix and match data types safely.

You can even read small chunks of a big ArrayBuffer by setting the byteOffset and length when constructing it.

*   The byteOffset is in Bytes
*   The length is the length of the final Array, so if we get 6 elements of a `Uint32Array` which has 4 Bytes per element is 24 Bytes.

>\> buffer = new ArrayBuffer(1024)  
ArrayBuffer { byteLength: 1024 }

>\> Uint32Array.BYTES\_PER\_ELEMENT  
4

// Access the last 24 Bytes of the ArrayBuffer  
>\> new Uint32Array(buffer, 250 * Uint32Array.BYTES\_PER\_ELEMENT, 6)  
Uint32Array \[ 0, 0, 0, 0, 0, 0 \]

Due to low-level compatibility reasons the start byte of an element needs to line up with a multiple of the number of bytes per element otherwise an error is thrown. For example below I try to start reading one byte earlier, it throws an error because 999 is not a multiple of 4.

>\> new Uint32Array(buffer, 999, 6)  
RangeError: attempting to construct out-of-bounds TypedArray on ArrayBuffer

**To keep things simple** I find it is easier to only use the 32bit Typed Arrays if I get to design my data structure:

*   `Int32Array`
*   `Uint32Array`
*   `Float32Array`

Because if I tried to save space by using a single Byte Uint8 for integers and a 4 Byte Float32 for floating point numbers. Not much space would be saved because the Float32 has to start on a multiple of 4 so any prior slots would be unused. But it would require lots of extra work to ignore the empty spaces.

\[255, wasted, wasted, wasted, 123.45\]

#### Mixing Data

Lets create a 12 Byte ArrayBuffer and use one of a Float32Array, a Uint32Array and an Int32Array to access a different 4 byte chunk. Each 32 Bit Typed Array will be one entry long because 32Bits is 4 Bytes.

>\> buffer = new ArrayBuffer(12)

>\> floatSlot = new Float32Array(buffer, 0, 1);  
>\> intSlot   =   new Int32Array(buffer, 4, 1);  
>\> uintSlot  =  new Uint32Array(buffer, 8, 1);

We will then see how the binary data is written underneath using a Uint8.

>\> scope = new Uint8Array(buffer)  
>\> scope.join(' ')  
"0 0 0 0 0 0 0 0 0 0 0 0"

Write some data to each element and lets watch it update:

>\> floatSlot\[0\] = 3  
>\> intSlot\[0\] = 3  
>\> uintSlot\[0\] = 3

>\> scope.join(' ')

"0 0 64 64   3 0 0 0   3 0 0 0" (extra spaces for legibility)

What we see here is that each section of 4 Bytes in the ArrayBuffer shows how the different numbers represent the value ‘3’

*   Uint and Int both set the first byte to 3, they have similar behavior for positive numbers.
*   Float has a complex relationship with it’s underlying data and became ‘0 0 64 64’

This demo shows how you can have data from different Typed Arrays stored next to each other in the same ArrayBuffer.

#### A Case Study

This section applies what we have seen so far into a real world use case. We will look at the a library I wrote which makes use of binary data and WebSockets for efficient data transfer.

This library is designed to sync the position and rotation of 3D objects between many clients. It has a mix of data types so it is a good example to look at.

The source code is here:

[**AdaRoseEdwards/fast-sync**  
_Contribute to fast-sync development by creating an account on GitHub._github.com](https://github.com/AdaRoseEdwards/fast-sync "https://github.com/AdaRoseEdwards/fast-sync")[](https://github.com/AdaRoseEdwards/fast-sync)

Firstly I thought about the information I was syncing and how I wanted it to be stored and sent.

1.  The server needs to be able to concatenate the data without having to decode it to save cpu.
2.  It has to store the data with minimal memory footprint in order to handle lots simultaneous clients.

3\. The clients need to be able to distinguish objects from different clients and from different objects from the same client.

The end result was data that looked like this:

Each individual object was stored like below, we will call this sequence OBJECT:

  
Uint32 (Object ID, should be unique per client),

Float32 (rotation.x),  
Float32 (rotation.y),  
Float32 (rotation.z),  
    
Float32 (position.x),  
Float32 (position.y),  
Float32 (position.z),  
  

Each client would send up an array buffer that looks like so:

Uint32 (Client ID, from 1 to 1024),

Uint32 (Number of OBJECTS, from 1 to 1024, we'll call this COUNT)

OBJECT

OBJECT

OBJECT

**Sending to the Server**

We use WebSockets to send this to the server. To insure the lightest possible footprint I am using the node module ‘[uws](https://www.npmjs.com/package/uws)’ for web sockets.

When clients send messages to web socket server it fires a message event with the data from the client.

[UWS](https://www.npmjs.com/package/uws) does not clone the buffer before firing the message event, so any future messages which arrive will overwrite this object. Which is great for speed but it means we need to clone the data in order to store it and sync it down.

So on the server (written in node) I create a buffer the size of all the data each client in a room is sending. If any client starts syncing more data then it creates a new empty buffer to fit the new data.

As new clients join the size of the allocated space grows too.

This means that data is occasionally lost is a new client arrives but for these purposes it is okay.

Right now it does not shrink rooms dynamically if users leave this will be added in the future.

**Parsing on the client**

Parsing this data structure, we have a variable `index` which is our current location in the data each time we process a chunk of data we move the pointer along until all the data is read.

We perform a check for long sections of zeros because that is data which the server reserved space for but never arrived or was discarded, all data blocks begin with the ClientId which has to be greater than 1.

We then read how many items we have to iterate over, we check this is something we expect because if an unexpected error has happened and it is reading a Float as a Uint32 Integer it could be very large and cause the system to freeze for a few seconds when it tries to loop over it. This cannot be recovered from so just throw an error and try again next time data arrives.

We then read the Id of the individual object and it’s position and rotation we create a new new Float32Array to read.

We then move the pointer along to the next chunk of data.

var index = 0;  
while (index < message.length) {  
  var id = message\[index\];

  // Skip long sections of zeros  
  if (id === 0) while (id === 0) id = message\[++index\];

  var count = message\[index + 1\];

  // skip self  
  if (id === ws.id) {  
    index += 2 + count * 7;  
    continue;  
  }

  if (count > 1024) {  
    // Throw away the data.  
    throw Error('Something probably went wrong');  
  }

  // iterate over all the data  
  while(count--) { 

    //ID for the 3D object  
    var syncId = message\[index + 2\];  

    // Fetch the 3D object to update  
    if (this.foreignObjects.has(id + ',' + syncId)) {  
      var el = this.foreignObjects.get(id + ',' + syncId);

      // Use a Float32Array to read the next 48 Bytes of data  
      var accessIntAsFloat = new Float32Array(message.buffer, (index + 3) * 4, 6);

      el.setAttribute('rotation', {  
        x: accessIntAsFloat\[0\],  
        y: accessIntAsFloat\[1\],  
        z: accessIntAsFloat\[2\]  
      });

      el.setAttribute('position', {  
        x: accessIntAsFloat\[3\],  
        y: accessIntAsFloat\[4\],  
        z: accessIntAsFloat\[5\]  
      });  
    }  
    index += 7;  
  }  
  index += 2;  
}

#### WebSockets aren’t a magic pill solution

Sending JSON has many advantages it is more robust and can be debugged much easier.

If a data entry is missing it is likely that only a small portion needs to be discarded, unlike with Binary data where it is safest to just abort.

It is best to use Binary data only when JSON or XML is not an option due to performance reasons.

*   Binary Data is Hard to Debug
*   Mistakes can easily be made
*   Off by one mistakes are common
*   Leading to data being written over the wrong section of buffer.

WebSockets can mix and match binary data and text data. So I can have the best of both worlds.

Infrequently I need to send complex data, for this I can use JSON to take advantage of the extra descriptiveness and to conveniently send strings, arrays and objects.

So most data is sent in tiny binary packets with occasional strings for more complex tasks.

Pick the right tool for the job and you can do great things!!

Tagged in [Programming](https://medium.com/tag/programming), [JavaScript](https://medium.com/tag/javascript), [Web Development](https://medium.com/tag/web-development), [Performance](https://medium.com/tag/performance), [Virtual Reality](https://medium.com/tag/virtual-reality)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [July 19, 2017](https://medium.com/p/5709f06ef105).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/being-fast-and-light-using-binary-data-to-optimise-libraries-on-the-client-and-the-server-5709f06ef105)
