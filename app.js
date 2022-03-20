//npm - global command that comes with node
//npm --version

//local dependency - use it only on a aprticular project
//npm i <package_Name>

//global dependency - use it in any project
//npm install -g <package_Name>
//sudo npm install -g <package_Name> (mac)

//package.json - manifest file(stores important info about project/package)
//manual Approach-(create package.json in the root,create properties etc.)
//npm init (step by step,press enter to skip)
//npm init -y (everything will come default)

const _ = require('lodash')

const items = [1,[2,[3,4],5]]
const newItems = _.flattenDeep(items)

console.log(newItems)
