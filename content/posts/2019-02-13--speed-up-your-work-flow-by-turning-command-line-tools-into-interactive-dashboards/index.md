---
cover: img.jpg
title: "Speed up your work flow by turning command line tools into interactive dashboards"
description: "Ever feel like you live in a terminal?"
category: Web Development
img: https://cdn-images-1.medium.com/max/1200/0*1t4HX79oa6-UpZRX
author: Ada Rose Cannon
authorImg: https://avatars3.githubusercontent.com/u/4225330?s=88&v=4
tags: [Terminal, Bash, Development, Developer Tools, Linux]
---

# Speed up your work flow by turning command line tools into interactive dashboards

Ever feel like you live in a terminal?

I don’t mean an airport terminal (I'm stuck in the SFO terminal whilst I type this.)

I ‘m talking about the computer terminal, to run command line applications. When I am doing development it feels like I run the same few commands over and over again.

If you are a terminal power user you probably run multiple windows or a terminal multiplexer like tmux (pictured) to compartmentalise your work into different sessions in each one you will probably run the same few commands, one to view the state of something and others to modify it.

![My TMUX configuration on ChromeOS.](https://cdn-images-1.medium.com/max/4000/0*1t4HX79oa6-UpZRX)*My TMUX configuration on ChromeOS.*

One of these tools I keep in it’s own session is a [command line to-do-list tool](https://github.com/gammons/ultralist) to keep track of what I am currently working on. It’s really handy and I can sync it across my computers, but it can be a little cumbersome for quick usage. I have to do a lot of typing to make use of it. E.g.

* todolist l to view my todo list

* todolist a "write blog post" to add an item to the list

* todolist c 1 to complete an item on the list

Each time I have to retype todolist and remember to use quotes around the entries. To reduce this bottle neck I used BASH to create a small interface to display my up-to-date todo list and use single button presses to interact with it.

Fortunately bash is an ideal tool for making interfaces for this, here is the code for the interface in the bottom left of the picture above, and in this post I will explain how it works, so you can make your own.

<iframe src="https://medium.com/media/0c023dca16cb1127e806aa7a41989cd1" frameborder=0></iframe>

## Breaking down the script

The first things we do in the bash script are to use tput smcup to save the terminal state so we don't fill the terminal our old output as we refresh the output, when the user exits to restore the terminal again we use tput rmcup to restore what was previously there. We also use stty -echo to hide the cursor until the user is inputting some text.

    #!/bin/bash

    tput smcup

    stty -echo

The display function is used to draw the interface. The important thing to notice is that we render everything into a buffer then echo the buffer to the screen, this reduces flickering by reducing the time between refreshes.

tput is the command which does a lot of the magic for controlling writing the output in the terminal. tput clear is used to clear the screen. I then write out what I want to be displayed. tput cup $[$(tput lines)-1] 0 is used to move the cursor to the bottom of the screen so we can write instructions \e[7m \e[27m are used to invert the colours and then return them normal so we can highlight the first character of each word.

    display() {
      BUFFER=$(
        tput clear
        todolist l | sed '/./,$!d'
        echo -ne "\n\n"
        tput cup $[$(tput lines)-1] 0
        echo -ne ' \e[7ma\e[27mdd \e[7mc\e[27momplete \e[7mr\e[27memove \e[7mq\e[27muit'
      )
      echo -ne "$BUFFER"
    }

We use signal traps to work out when we need to redraw and to clean up when the user quits by killing the process.

    trap display WINCH
    trap 'tput sgr0; tput cnorm; tput rmcup || clear; exit 0' SIGINT

The at start of the main loop tput civis is used to make the cursor invisible whilst were waiting for a command to be entered. We then wait for a character to be pressed and then use tput cnorm to restore the cursor. We timeout the read statement every 2 seconds so that the interface can update automatically. This way if I edit my todolist on a different computer it gets synced and updated.

Next we hide the instructions by moving the cursor to the last line, clearing the line with echo -en "\\033[2K" and move the cursor back to the second to last line for text input in case the command needs some interaction.

    while :
    do
      display

      tput civis
      tput cup $[$(tput lines)-2] 0
      read -sen 1 -t 2 ACTION
      tput cnorm

      [[ -z "$ACTION" ]] && continue

      tput cup $[$(tput lines)-1] 0
      echo -en "\\033[2K"

      tput cup $[$(tput lines)-2] 0

Finally we use the case statement to respond to the different inputs, remember to turn stty echo back on if you are reading input from the user during this step and to turn it off again after.

      a) # Add an item for a
        stty echo
        read -e -p "Add Item: " ACTION
        stty -echo
        [[ -z "$ACTION" ]] && continue
        eval "todolist a \"$ACTION\"" > /dev/null
      ;;

After this it loops back to the beginning and awaits more input from the user. Adding new case statements lets me add more functionality so now I can build little dashboards for the things I do most frequently.

I hope this inspires you to start building your own dashboards in the terminal.



By Ada Rose Cannon on February 13, 2019.

[Canonical link](https://medium.com/samsung-internet-dev/speed-up-your-work-flow-by-turning-command-line-tools-into-interactive-dashboards-7ebfd7333340)
