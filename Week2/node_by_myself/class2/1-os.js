const os = require('os')


// Info about the user

const userInfo = os.userInfo()
console.log(userInfo);


// Method returnsthe system uptime

const uptime = os.uptime()
console.log(uptime/60);

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOs);