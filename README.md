Scratch 3: ExportMe
=================
"ExportMe" is a tool to export a Scratch 3 game into an HTML file. 

The use case is to create games in [Scratch 3](https://en.scratch-wiki.info/wiki/Scratch_3.0) (using Scratch as a game engine). Once a game is release ready, export it using this tool. Once exported, the game can be embedded into your website. If you are a developer, then the game can be refactored into a mobile app (using ReactJS & React-Native).

Motivation
============
I have 2 creative kids & a crafty wife; they asked if we, as a family, could create a game. I said “Yes, let’s do it!”

Installation
============
This is not a *normal* repo. If you are a developer, you can use the following
* [pre-built public files](https://github.com/ottograjeda/public_ticket.534/tree/master/public)
* source files for [public/index](https://github.com/ottograjeda/public_ticket.534/tree/master/src_exportMe/for_index)
* source files for the exported [template file](https://github.com/ottograjeda/public_ticket.534/tree/master/src_exportMe/for_template)
* various [pre-built virtual machines](https://github.com/ottograjeda/public_ticket.534/tree/master/src_vm) (based on LLK's [repo](https://github.com/LLK/scratch-vm))
* if you want to create your own vm, [source files for the vm](https://github.com/ottograjeda/public_ticket.534/tree/master/src_vm/archive), including a [list of changes](https://github.com/ottograjeda/public_ticket.534/blob/master/src_vm/archive/readme.archive.txt) made


Demo & Animated GIFs
===========
* [Live Demo](https://t-534-game.web.app/) at [Firebase Hosting](https://firebase.google.com/docs/hosting)     
* [Google PageSpeed Analysis](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-534-game.web.app%2F&tab=desktop) for the tool (this tool is a desktop tool)    
**Note** Mobile devices can load the tool but the export function will not work due to [compatibility issues](https://github.com/rndme/download/issues).     

![Animated GIF - Game 1 Export + Test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_web_clickerballoon.gif)
![Animated GIF - Game 2 Export + test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_web_flakcannon.gif)
![Animated GIF - iOS Game 1 Test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_ios_clickerballoon.gif)
![Animated GIF - iOS Game 2 Test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_ios_flakcannon.gif)
![Animated GIF - Android Game 1 Test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_android_clickerballoon.gif)
![Animated GIF - Android Game 2 Test](https://github.com/ottograjeda/public_ticket.534/blob/master/_docs/ezgif-720_android_flakcannon.gif)

Notes - Development
===========
Developers who want the exported game to work on mobile devices should review these repos: [SimpleApp](https://github.com/ottograjeda/public_ticket.528) and/or [SimpleLanding](https://github.com/ottograjeda/public_ticket.530). The virtual machine, the game, and the mobile development repos... are all in JavaScript.


Inspiration
============
[Sheep_maker](https://scratch.mit.edu/users/Sheep_maker/) created a tool called [HTMLifier](https://sheeptester.github.io/words-go-here/htmlifier/) and his tool inspired Nekrofage aka [JeuLibre](https://jeulibre.laboratoire-bidouille.dev/scratch3/scratch2html/) to create a [similar exporter](https://github.com/Nekrofage/scratch2html). All tools, including mine, use [download.js](http://danml.com/download.html), LLK’s [Scratch Virtual Machine](https://github.com/LLK/scratch-vm), and custom JavaScript.
