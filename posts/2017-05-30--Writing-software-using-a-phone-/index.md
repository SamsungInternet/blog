---
permalink: "/Writing-software-using-a-phone-/"
title: Writing software using a phone!
category: "PWA"
cover: img.jpg
author: Ada Rose Cannon
authorImg: https://miro.medium.com/fit/c/240/240/1*Dn8pr_cbYLtc_KfmUNhnBA.png
---

### Writing software using a phone!

#### Developing without a laptop: Living the dream.

I was sat on my (long) train to work, just reached the halfway point, getting comfy, checking twitter on my phone.

Suddenly I realised!

> “Shit!! I left my laptop at home, what should I do?!”

It was too late to turn back, but I had an idea: the last few days I had been testing websites on Samsung DeX. This is a small dock which turns your S8 smartphone into a desktop computer.

Perhaps it could get me out of trouble? The advertising I saw suggested productivity, but it was mostly focused on normal office job work excel/word/email/etc.

Still, perhaps it could work for me as a developer.

> **“Necessity is the mother of invention**”

Developing on DeX!

The Slack android app has already been optimised for DeX and all the web tools I use day to day, github, trello, jira, can all be used through the full desktop web browser.

But for writing code? Well first I need a terminal!

I installed the app _Termux_. _Termux_ provides a bash terminal for android with many GNU utilities, compiled for android_._ It brings tools like git, node and ruby to the phone_._ I had been using it previously for emergency devops on the go. It was the right choice. Although as a native app that is not adapted for DeX the window cannot be resized, this is not an issue as it is already a perfectly sized terminal window.

On Termux everything I needed could be installed: `node, npm, git, python`. I tested a http server; it was accessible out of the Termux sandbox via its IP address e.g. `127.0.0.1:8080` so I was able to test my sites in Samsung Internet. The mobile versions of Chrome and Firefox are available on DeX too.

#### Two weeks later

I left my laptop at home. On purpose this time. I didn’t need it!

Over two weeks I’d built an Open Source IDE for DeX called [_Web Code_](https://github.com/adaroseedwards/web-code)_._ It is a Web App which uses web sockets to access the Termux file system!

It’s based around Monaco, the same text editing core as Visual Studio Code, so all of my keyboard shortcuts remain the same as on my laptop. This was the missing link to a comfortable developer environment on DeX.

**The rest of this article shows how to set it up yourself and how to work around some of the quirks in Termux, for developing on Android:**

#### Setting it up for yourself

Want a development machine you can fit in your purse? This is an incredibly cool way to work!

![](https://cdn-images-1.medium.com/max/1000/1*hQq2mLQKYvGBuGVY_DZnkQ.png)

Termux, slack and web code on Samsung DeX

Now lets look at setting up the development environment.

#### Get a Terminal

[Install Termux from the App Store](https://play.google.com/store/apps/details?id=com.termux&hl=en_GB), and open in DeX,

You can paste commands into Termux using _ctrl-alt-v_

We can now configure Termux to our liking. Let’s start by giving ourselves access to the rest of the phone’s storage so we can access files we download.

termux-setup-storage

This creates a folder called `storage` in the home directory we can use to access other bits of the phone.

#### Install useful Packages

[**Common packages**  
_Help page for Termux - terminal emulator and Linux environment for Android._termux.com](https://termux.com/common-packages.html "https://termux.com/common-packages.html")[](https://termux.com/common-packages.html)

This command installs most packages needed for the development tools you may find in the web:

apt update

apt install \  
wget \  
less \  
coreutils \  
nano \  
git \  
vim \  
tar \  
openssh \  
clang \  
python \  
python2 \  
make \  
libc++

#### Changing the Shell to zsh, with oh-my-zsh

If you prefer the Termux default shell (bash) to zsh you may skip this step.

apt install zsh  
chsh -s zsh

For oh-my-zsh, it is a little different from the instructions on [https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

Download the install script and make it executable:

wget [https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh](https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)

chmod +x install.sh

Edit the downloaded script `install.sh` with `nano` to remove the check for `zsh` by deleting the lines highlighted below:

nano install.sh

![](https://cdn-images-1.medium.com/max/800/1*hGASqij6jLuexQPjDhHTFA.png)

Remove the highlighted lines

Run the install script

./install.sh

#### Installing Node

If you are a web developer like me you probably want node, for the stable version of node use:

apt install nodejs

For the latest use:

apt install node-current

#### Installing ngrok

Ngrok is a really useful tool for exposing local nework services via a proxy, so you can test from inside locked down networks.

Go to the [ngrok download page](https://ngrok.com/download) Copy the link to the “Linux ARM” binary and download the zip in termux e.g.

wget [https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip](https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip)

Unzip the package to your current directory:

    unzip /path/to/ngrok.zip

Run from termux

./ngrok help

#### Termux Quirks

Only files within Termux’s private space can be made executable. So any executable files such as shell scripts need to be kept inside the app.

This causes some issues because the operating system’s executable files are not in the usual location, `/bin`, but in `/data/data/com.termux/files/usr/bin`. This can cause issues with shell scripts which have a shebang such as `#!/bin/sh`. This can be fixed using `termux-fix-shebang` on the shell scripts.

For example: Installing http-server:

npm install -g http-server  
termux-fix-shebang \`which http-server\`

Now the http server will run correctly.

#### Getting a text editor

Because only files inside the app’s private storage can be executable, you will probably need to develop inside Termux’s private storage.

Unfortunately other Android apps cannot access this area.

To get around this I created a text editor based around Microsoft's Monaco Editor, the same editor which powers Visual Studio Code. All FileSystem operations are sent via Web Sockets allowing you to edit files via the Web Browser.

The editor is installed via npm, and it will fix it’s own shebang after being installed. So it will work right away on Termux.

npm install -g web-code

Open a directory:

web-code ./

This will open up a browser window running the editor at that path.

You can add it to your homescreen using the ambient badging buttons.

Adding Web Code as a Web App with an Icon

Web Code is still very early software. If you would like to contribute to it the github repo is here:

[**AdaRoseEdwards/web-code**  
_web-code - A text editor for the web based around monaco_github.com](https://github.com/adaroseedwards/web-code "https://github.com/adaroseedwards/web-code")[](https://github.com/adaroseedwards/web-code)

### Other DeX ready Apps for Work

*   Slack
*   Gmail
*   Excel
*   Google Docs works great in Samsung Internet for DeX
*   This article was written on medium.com from the Samsung DeX

> Now you are all ready to start building.

> Without a laptop!

Tagged in [Android](https://medium.com/tag/android), [Samsung Galaxy S8](https://medium.com/tag/samsung-galaxy-s8), [Web Development](https://medium.com/tag/web-development), [Samsung Dex](https://medium.com/tag/samsung-dex)

By [Ada Rose Cannon](https://medium.com/@Lady_Ada_King) on [May 30, 2017](https://medium.com/p/e71976f1f18d).

[Read this article on Medium](https://medium.com/@Lady_Ada_King/writing-software-using-a-phone-e71976f1f18d)