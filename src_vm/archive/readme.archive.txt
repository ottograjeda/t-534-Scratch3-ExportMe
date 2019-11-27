Archive

All custom scratch virtual machines (vm) are made
from this repo https://github.com/LLK/scratch-vm

Since I did not fork or clone the repo, I provide
written record of changes made to get a low file
size (for exportMe or vm-otto) :

* removed all fonts except for 1 (default font)
  @ node_modules/scratch-render-fonts/src/index.js

* removed all extensions except for 2 (coreExample + music)
  @ src/extension-support/extension-manager.js

* removed all sound files except for 2 (a snare + a synth)
  @ src/extensions/scratch3_music/assets/drums/1-snare.mp3
  @ src/extensions/scratch3_music/assets/instruments/21-synth-pad/60.mp3

* removed all html/css/js files in src/playground, except for 2
  + src/playground/scratch-vm-otto.js
  + src/playground/scratch-vm-exportMe.js
  < provided in this repo ; not in the LLK repo or zip file >

* removed any reference to "scratch-sb1" in src/virtual-machine.js

* installed TerserPlugin (used to transpile/minify ES6 JavaScript)

* update Webpack config to use the custom scratch-vm files 
  + archive/webpack.config.vm-otto.js
  + archive/webpack.config.exportMe.js
  < provided in this repo ; not in the LLK repo or zip file >

//...

Once the above is done, you can npm run build (as needed).
On build artifact (aka resulting file), minify as needed.
