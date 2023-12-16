// npm - global command, comes with node
// npm --version (node --v) 

// local dependencies - use it only in particular projects
// npm i <packagename>

// global dependencies - use it any project 
// npm install -g <packagenam>
// sudo npm install -g <packagename>

// package.json - manifest file (store important information about the package)
// manual approach (create package.json in the root, create properties)
// npm init (set by step, press enter to skip)
// npm init -y(everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);