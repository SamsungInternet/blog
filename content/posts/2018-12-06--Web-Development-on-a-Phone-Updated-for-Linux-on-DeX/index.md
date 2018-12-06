---
cover: Untitled-12a71479-25be-4760-8091-8bac687ea14f.png
title: Web Development on a Phone. Updated for Linux on DeX"
description: "Last year I wrote about how you can use a phone for web development using an Android Linux Terminal, now it's possible to have full desktop linux on the phone, lets see how that changes things."
category: Web Development
img: Untitled-12a71479-25be-4760-8091-8bac687ea14f.png
author: Ada Rose Cannon
authorImg: https://s.gravatar.com/avatar/540d78b76ce4ea7704f3715e3605f496?s=80&r=g
tags: [Web Development, Linux, Android]
---

Last year I wrote about how you can use a phone for web development using an Android Linux Terminal and a simple editor I'd made as a [Progressive Web App](https://medium.com/samsung-internet-dev/writing-software-using-a-phone-e71976f1f18d). It worked pretty well but had some drawbacks, for example you couldn't debug Samsung Internet on the DeX you had to use an external laptop.

<iframe width="560" height="315" name="youtube" src="https://www.youtube.com/embed/yvpOIz7zAtY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Since then Samsung has released Linux on DeX as a beta which addresses many of the issues I had previously. I was lucky enough to borrow a Note 9 from work to test out how well I can port my work flow to only need the DeX.

- Setup [00:00:17]
- Installing Node [00:04:32]
- Installing Visual Studio Code [00:05:35]
- Installing git, zsh and tmux [00:09:23]
- Copying across my config files into Linux on DeX [00:10:25]
- Installing GIMP and changing the wallpaper [00:20:02]
- Testing running a http server [00:21:34]
- Quitting VIM [00:26:10]
- Setting up Blender [00:26:18]
- Testing gamepad support [00:28:17]
- Testing WebGL [00:30:55]
- Debugging Samsung Internet on DeX through Chrome on Linux for DeX [00:32:31]

## Setup

The first thing which is really pleasant with the Note 9 is that you no longer need the specialised DeX dock, any USB-C dongle with HDMI, USB and Charging will work. I have one which I got a while ago for the [VJ-OTG demo](https://medium.com/samsung-internet-dev/vj-on-the-go-e56666fe55eb) so I used that.

I plugged in a USB charger and mouse and keyboard to the dongle and DeX started straight away! The phone screen still works whilst DeX is running, so you can use it as a secondary screen for Android apps. 

## About Linux on DeX

[Linux on Dex](https://www.linuxondex.com/) is an app for the Note 9 which gives you a Linux container you can access as a full desktop Linux environment on DeX. You can also access a terminal only version on the phone.

![Linux on DeX running in terminal mode on the phone.](Untitled-ac64f1ee-854b-4c9c-b040-3d79295d390a.png)

Linux on DeX running in terminal mode on the phone.

The terminal only mode is a great way to run commands when you are on the move.

When you run it from the DeX you get full desktop Linux you'd inspect.

![Linux on DeX running desktop mode in DeX](Untitled-12a71479-25be-4760-8091-8bac687ea14f.png)

Linux on DeX running desktop mode in DeX

Linux on DeX is so performant because it's not running in a virtual machine, it's a container which takes advantage of the device's resources. So software written for it needs to be made for the device's ARM architecture.

## Software

Linux for ARM devices is widely used because of the popularity of Linux powered SoC ARM devices such as the raspberry pi. As a result there is a lot of linux software compiled for ARM architecture ready to install using APT.

For example you can install node with:

    sudo apt-get install node-js

This will prompt you for the root password which is 'secret' out the box but you should probably change it.

For the editor I wanted to use Visual Studio code which is what I like to use on my personal computer. Unfortunately it's not available for download for ARM architecture from the website. Fortunately because it's open source software it has been compiled for ARM from [https://code.headmelted.com/](https://code.headmelted.com/)

The default script couldn't install automatically for security reasons so I had to run ‘apt-get install code-oss’ after running the script from the site which added the repos.

## Configuring

If you're like me you probably want to configure the Linux desktop to your liking. All the command line tools I like to use such as zsh and tmux. Worked really well. I copied my configuration for these from my personal laptop to the phone and they worked out the box.

To copy them across I put them on a memory stick and plugged it into the phone. I then moved them into the "Internal storage/LoD_Share/" to make it available on Linux on DeX. I then linked them into the right places.

zsh is a terminal shell, like bash, which provides nice features for autocompletion. I use oh-my-zsh with the powerlevel9k theme to make it really useful.

tmux is a tool which lets you tile terminal layouts, and have them in different "windows" so you can run multiple processes from one terminal and easily switch between them. I use a slightly modified version of [this set up](https://github.com/gpakosz/.tmux). Which gives me some really nice functionality when dealing with lots of processes.

Both zsh and tmux take advantage of [powerline fonts](https://github.com/powerline/fonts) which are really handy for making an attractive and useful terminal.

Configuring the window manager unfortunately was not as easy.

Linux on DeX uses Gnome 2 out the box. Unfortunately Gnome Tweak Tools doesn't work on Linux on DeX right now. Gnome Desktop also appears to have some issues wrt changing windows.

It can be changed to Mate which may be familiar to those of you who use Linux Mint on your laptops. Mate works well and it also can be tweaked. I haven't looked into using it on Linux on DeX yet but that is probably the route I will take.

## Using

One really powerful feature of Linux on DeX is that it is runs great alongside the standard DeX experience. It starts extremely quickly, pressing the keys win+return can be used to quickly minimise it and holding the mouse at the bottom of the screen shows the DeX taskbar for taking screenshots and showing notifications.

The clipboard is shared between both systems allowing you to copy text between Linux and Android desktop.

DeX gets paused when it's minimised which is really handy for saving power but not very useful when you want to run a long running task or a web server in Linux and then go do something else. I'm hoping it's going to be possible to keep it running in the background in the future.

## Graphics

The Note 9 has loads of RAM and a really powerful CPU, so lots of things were really fast. Unfortunately Linux on DeX cannot yet access the graphics capabilities of the device. Which means that things which would take advantage of this are slow or don't work at all.

WebGL and Blender run pretty slow. Especially when comparing WebGL in Samsung Internet on DeX to Chrome in the Linux on DeX container.

## Gamepad

In a related note, we tested the Gamepad API in Linux on DeX. It seems gamepads were not exposed. They could not be accessed in Linux on DeX but worked great in Samsung Internet for DeX. [This article](https://medium.com/samsung-internet-dev/the-gamepad-reloaded-5ba866770003) by [@diekus](https://twitter.com/diekus) and I shows how different controllers get mapped in the browser.

## Debugging Samsung Internet on DeX from Chrome on Linux on DeX

This is the functionality I was most looking forward to and it works really well, with a small caveat.

It does require an ADB command on an external laptop to enable it but it lasts until the device is restarted.

Here are the steps to do it:

1. Enable USB debugging on the device
2. Plug in the phone to the laptop with a USB-C cable. I had to use the one which came with the device. My regular USB-C cables didn't work.
3. Agree to the prompt on the phone to allow debugging.
4. On the laptop run, `adb tcpip 5555`
5. Plug the phone into DeX, start Linux on Dex, make sure that ADB is installed by running in the Linux on DeX terminal:
`sudo apt-get install android-tools-adb android-tools-fastboot`
6. To start debugging run, `adb connect [localhost](http://localhost)` in the terminal.
7. Open chrome and browse to `chrome://inspect` to inspect open browsers.

It works really well with Samsung Internet running on the small phone screen and debugging it via Linux on DeX. It's a great experience to do responsive design for both mobile and desktop at the same time on one device!!


![Samsung Internet on Phone Chrome Inspect on Desktop](debug.svg)

## Thanks

Thank you [Daniel Blandford](https://twitter.com/SmilerOnlineDeX) for helping with DeX and Linux on DeX tips!!

## Video Transcript:

**Ada:** [00:00:17] So as you can see where I’m DeX at the moment here is the device.

[00:00:26] So, it’s is plugged in via a normal USB-C to with HDMI, USB and stuff.

[00:00:36] It’s probably the kind of thing you already have if you have a Mac because you have a bunch of dongles. So the cool thing about the Note 9 is that. So the cool thing about the note 9 is that it doesn’t need the DeX dock to plug in because normally you need something like…

[00:01:02] So you have to use one of these like a DeX dock to do it in so you put the phone in like so and it would work.

[00:01:12] But with the Note 9 you can just plug it straight in to USB-C HDMI and it just connects and starts.

[00:01:23] You can also like switch between the two modes. So I can go here and go. So I can switch a screen screen mirroring instead. Just using the HDMI as a screen mirror. Or I can use it as DeX. I’ve only got one mouse annoyingly so I keep having to switch it from one computer to the other. But now that should be the last time because I’m not going to fire up Linux on DeX. So there’s a small amount of latency between the mouse and the DeX because I’m running it through a HDMI capture card but it’s actually still pretty good okay to use. Which makes me impressed by my HDMI capture card. I’m also using a midi controller to switch between the different video modes so I can be like boom boom boom to switch. So yeah this is one I installed earlier. All I did was download the image from the Linux on DeX website and uncompress it and use it, and I updated. I did an apt-get update so I can have the latest packages and that’s it. I haven’t touched it in any other way. So everything we’re doing today is me playing with this for the very first time. Lets first see what it comes with. But yeah there’s not much here. There’s also this Linux on DeX share. Ah cool so that’s for accessing the filesystem from the regular DeX from inside Linux on DeX. And I just opened up IntelliJ I think. Close you. Go away has as close yet so I am going to install, let’s start off with node.

[00:04:07] So the default password for Linux on Dex is secret but I haven’t changed yet. I should change it later.

[00:04:32] That’s going to bug me, apt-get autoremove.

[00:04:32] So we’ve got node on here now.

[00:04:36] We do Node 8 that’s pretty okay.

[00:04:54] I’m happy with that. Do have NPM? Hey that’s good as well. And npm is 6.4. yeah I’m happy with that too. CooI didn’t expect it to come with the latest node and well not lates t but pretty recent node and npm. Do we have npx? We Do! Awesome. Hah awesome. Right cool that was too easy. What’s the next thing we should do? To look at getting a text editor. Like I like vs code. Any other preferences? I could do sublime, atom. Well I can try and do sublime or atom or vs code. Like I said this is all totally fresh and haven’t actually done any of this yet. Ah I see i’m going to use Firefox because I prefer Firefox. Shoot. I think this might only be for Intel, well 64 bit and 32 bit processors we will give it a go see what happens.

[00:06:36] That isn’t gonna work.

[00:06:39] Because this isn’t an Intel processor it’s an ARM processor that like you get in a telephone. But eh, let’s see what happens. Good right.

[00:07:10] Uh dpkg -i

[00:07:30] Yeah didn’t think so. OK so visual studio code is a no go see if anyone has done a bill for an ARM systems.

[00:07:49] Ha this is cool.

[00:07:59] Okay good. I trust this is running in a virtual machine anyway. What’s worse that can happen. So it is very much do what I say is not what I do cause I’m just going to run some code from the Web site. At least it’s via https.

[00:08:22] Here we go.

[00:08:37] I think we’re in luck. Yes this is awesome.

[00:09:23] Good shout with that vscode. Cool so we have visual studio code going on. I’m happy with that. If that’s good enough everyone else I think I’ll stick with that. Awesome lets install git, ssh and tmux because they’re what I like to use. So firefox and chrome already set up debugging Samsung internet something which I know should work but haven’t been able to get done tweaking the terminal.

[00:10:24] Yeah let’s do that.

[00:10:35] I’ll try. Let’s try that then.

[00:11:01] Yes I see it. So you have to copy it into LoD Share in internal storage and there it is. Thank you so much. Yes. Oh yeah that’s a good point. This is still in beta some stuff that’s not working now may be fixed when it’s released. That’s super cool and amazing. I’m going to move that. Internal storage files.

[00:11:42] Let’s move it here.

[00:11:50] Cool. All right so I’m going to start of with. My zshrc.

[00:12:09] Ah it is missing my oh my zsh setup, but I can clone that.

[00:12:17] So oh-my-zsh. Cool that worked.

[00:13:29] But this is using a theme which is an external theme. I really like. There we go. Now it should work cool that works for now I need the power line fonts. So I want to use FIRA Code. That’s the one I liked the most. Font Viewer.

[00:15:15] Yep. And now. Custom font yeah.

[00:15:49] Cool, that looks pretty good I think.

[00:15:51] Cool cool cool cool cool cool.

[00:15:58] So Tmux, Tmux is my bae. I love it. So. Ah yes I forgot that bit. Cool, good and I have mouse control ooh that broke, it didn’t work as I expected but close enough.

[00:18:01] Nice.

[00:18:20] I don’t like any of these, does it not come with Monokai anymore.

[00:18:42] Of course I need a transparent background because what’s the point of not why do I have to add that -S to sudo if I’m using it on the phone?

[00:19:28] So yeah mytmux.sh. And so this is like a little file I wrote so it searches for an unattached session. If there is one then it attaches to it otherwise it will run a fresh to tmux lets see what else I wanted to do. Oh yes.

[00:20:02] Installing GIMP, See how well that works.

[00:20:36] Actually the least I could do is change this wallpaper because I don’t like this one it is boring. Anyway that looks better. So now I have a slick looking terminal.

[00:21:34] Lets try running and hosting something.

[00:22:06] Try and get stuff working let’s just clone this for now. I’m not going to push anything up to see that kind of annoys me and I can’t click on any of these to bring Windows to the front for some reason which is a little irritating.

[00:22:30] Oh there we go woah that is really performant on this.

[00:23:22] Yeah that works. Oh so if I minimised the Linux on DeX then it pauses. Ah okay so it does work. If I do it like this.

[00:23:42] That’s fine. That’s another good thing to know. Cool.

[00:23:48] So yeah it does work which I put a back demo to show because this is a Houdini feature that’s only available in super super recent versions of chrome and doesn’t work yet but the page has loaded as you can see it’s here. Cool. So http server works lets open up code on the URL we’ll want to edit this. Oh. Yeah. Awesome so I have my text editor here. Which works and works well that would actually be really useful. There’s been a few times when I’ve started something going like installing a big package. I then minimized Linux on DeX and then I come back I’m going to carry on doing my thing and it’s made no progress. So that would be really cool if that was possible. There cool this works and i’m liking this. So this is kind of everything I need for working. Aside from the debugging of Samsung Internet which would be really cool.

[00:25:35] I mean of course I can debug it in Chrome or Firefox.

[00:25:52] obviously all the commandline stuff works well wrong password.

[00:26:18] I quite VIM!! Oh yeah I can test blender.

[00:26:23] Great idea.

[00:26:24] I love that one.

[00:26:32] Yeah there are built of Blender. Who’d have thought.

[00:26:40] This was a good suggestion.

[00:26:55] I wonder if I can install steam on here as well I don’t think there are arm builds of steam games. Blenders done.

[00:27:37] Holy shit it’s working. Maybe? It’s working! Holy crap! I’m fricking running Blender on a phone!

[00:27:59] The new version of blender is really nice. I really really like it.

[00:28:17] I shouldn’t’ve doubted the draw of many wires. So am xbox adapter. I can take batteries from the wiimote.

[00:28:42] Annoyingly my snes controller which does work with Android is out of power and that one doesn’t a battery such as a rechargeable so I can’t test that annoyingly but I will find out… JOY CONs! Yes that I do have JoyCon it nothing although It still says pairing. Let’s try it in Samsung Internet so interestingly copy and paste works between the two.

[00:30:38] There we go, so yeah it works in Samsung Internet.

[00:30:41] Oh yeah. Not every button works. I remember this from when we did it before that was a cool test. Good shout. What was the other thing someone mentioned? Oh yeah performance benchmarks and WebGL yeah run a WebGL demo.

[00:31:44] Performance is okay. It’s probably slightly better in just the native browser. I like that I can share the clipboard though. That’s really nice.

[00:32:01] Oh yeah performance is great here.

[00:32:06] So the performance is okay. Better performance in Samsung Internet for Android. This was actually the first thing I ever made with A-Frame. Believe it or not.

[00:32:31] Yes there we go USB debugging wrong USB cable. That was it.

[00:32:45] Right There we go restarting in TCP-IP mode plug this into here.

[00:32:56] Here we go right. So debugging is on.

[00:34:15] Yes that worked. You are amazing. There we go.

[00:34:26] So I can make this like stay on top.

[00:34:40] But there we go. are you not entertained? Good.

[00:34:57] So yeah that works.

[00:35:17] Weirdly it is running two versions. This is cool yes this is Chrome. This is the Version on the little screen. That works really nicely. So it I select an element.

[00:35:50] And then delete that.

[00:36:22] Yep that works well. So I don’t think isn’t an unused instance. I think it’s… there’s Some way to connect inside without going over TCP IP and it’s working on both of them. This one is emulator. 5 5 5 4 and this one is local host 5 5 5 5. So I think this is it exposed internally then at this is that ported to 5 5 5 5 I think that’s just my guess. I that’s pretty much everything right? Git works nicely. npm works nicely. Got V S code, got my terminal nice node installs and builds and stuff. But yeah I think that’s really cool. I really like that you can switch between them so quickly. I kind of wish it was like a little bit easier.

[00:37:45] Like when you start doing stuff here.

[00:37:51] You can’t just switch. So if there’s like hockey to switch between them that would be pretty slick it would be nice to have graphic support. But yeah I think there’s actually been a huge success. I feel perfectly fine just using this as my main computer now. This is just nice and good. I’d probably switch to mate and then really tweak it like how I like it or try and get gnome tweaks working. I spent ages tweaking my Linux themes to get them really like geeky and stuff so I really want to do that. Yeah it’s been pretty cool. Thanks everyone for attending. It’s been really fun it’s been really great having you. This has been a big success and I think I might use this as my day to day computer at work.

[00:38:49] Good Bye!
