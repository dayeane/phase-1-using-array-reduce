const { prototype } = require("mocha");

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const totalBatteries = batteryBatches.reduce(reducer)

// copy and paste from Array prototype reduce.