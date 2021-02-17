---
permalink: "/making-vscode-run-faster-on-chromebooks/"
cover: img.jpg
title: "Making VSCode run faster on Chromebooks"
description: "You can run Visual Studio Code on Chromebooks. Here is a way to run it with great performance."
category: Web Development
img: https://miro.medium.com/max/1200/1*4qgpMAf4TadK6plhCdxnZg.png
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/96/96/1*Dn8pr_cbYLtc_KfmUNhnBA.png
tags: [Visual Studio Code, Chrome OS, Development, Web Development, Linux]
---

# Making VSCode run faster on Chromebooks

When Linux came to ChromeOS, I was very happy to start using Visual Studio code again as my main text editor. Unfortunately my Chromebook isn’t very fast and Visual Studio code was running very slowly.

This was because the visuals were being run in a Chrome instance on Linux then forwarded to ChromeOS which is an expensive thing to do on a HiDPI screen like the Pixelbook.

This seems like a waste of resources to me considering we are already running a Chrome front end in ChromeOS itself. We can take advantage of this by running a version of VSCode which exposes the front end via a HTTP server we can access from ChromeOS.

### Getting started

The project we are using to do this is called [code-server](https://github.com/cdr/code-server):

> [**cdr/code-server**
*code-server is VS Code running on a remote server, accessible through the browser. Try it out: docker...](https://github.com/cdr/code-server)

Code server is a server which runs the VSCode backend and exposes the front end via HTTP or HTTPS. We will run this back-end in crostini then access it through Chrome, so it works entirely offline but through the local browser.

1. Download the latest linux release from [here](https://github.com/cdr/code-server/releases).

1. Extract the code-server binary.

1. Use chmod +x code-server to make it executable.

I wrote a short script to automate this process since it needs to be repeated each time it is updated. I download the executable to a folder ~/bin which I have added to my path.

```bash
#!/bin/bash

DIR="$HOME/bin"

cd /tmp

curl -s https://api.github.com/repos/cdr/code-server/releases/latest \
| grep "browser_download_url.\+linux-x64.tar.gz" \
| cut -d : -f 2,3 \
| tr -d \" \
| wget --output-document=code-server.tar.gz -qi -

tar xvzf /tmp/code-server.tar.gz --strip=1 --overwrite --wildcards --no-anchored -C "$DIR" 'code-server'
chmod +x "$DIR/code-server"
```

### Running Visual Studio Code

Since we are running it locally and don’t want to make a HTTPS certificate we will run it as HTTP, on port 8080.

./code-server -H -p 8080

![Example output](https://cdn-images-1.medium.com/max/3836/1*3TvcYrtJ4F-WkQpX2RBYSQ.png)*Example output*

The important part is the Password and the URL:

![The bit to look out for, Password and the Link to open](https://cdn-images-1.medium.com/max/2000/1*pPtoveOPQN0Vc9HPD9hK4Q.png)*The bit to look out for, Password and the Link to open*

The password is randomly generated if you didn’t set it in advanced.

The localhost URL it provided **will not work **on ChromeOS, in this case replace “localhost” with “[penguin.linux.test](https://penguin.linux.test/)”. Keep the port and the ‘http’ the same.

We will open [http://penguin.linux.test:8080](http://penguin.linux.test:8080)

![](https://cdn-images-1.medium.com/max/4800/1*uvcKfOneOlLepV7I71bjwg.png)

and paste the password from the terminal. It should then show the familiar VSCode Interface.

![](https://cdn-images-1.medium.com/max/4800/1*nYYMdhO2VostAZf8kcbczw.png)

This isn’t ideal since we still have a URL bar and bookmarks etc, so we will pin it so that it can open as a window.

![](https://cdn-images-1.medium.com/max/4800/1*Z5aQuyYC7gYZhlXGRJZdgg.png)

Remember to click ‘Open as Window’

![](https://cdn-images-1.medium.com/max/2464/1*z65LiLpL9ZtaTlzyETH7RQ.png)

It will now open in a window of it’s own without any Browser Chrome.

![](https://cdn-images-1.medium.com/max/4800/1*4qgpMAf4TadK6plhCdxnZg.png)

Some tips to make things a bit better still:

* Set the password in the command you use to open it so that you don’t have to enter a new password each time you run the command: PASSWORD=veryLongPassword ./code-server -H -p 8080

* ChromeOS didn’t always treat penguin.linux.test as a secure origin, in this case you may need to use HTTPS with a self-signed certificate to hide the URL bar.

* For advanced users, try making it as a systemd service so that it runs whenever Linux is running. Here is what my service looks likes:
```
[Unit]
Description=Code Server Init
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
User=sobrietypi
Environment=PASSWORD=veryLongPassword
ExecStart=/home/sobrietypi/bin/code-server -H --port 8080  /home/sobrietypi/gitWorkingDir/

[Install]
WantedBy=multi-user.target
```


By Ada Rose Cannon on October 8, 2019.

[Canonical link](https://medium.com/samsung-internet-dev/making-vscode-run-faster-on-chromebooks-1591ee5e885b)
