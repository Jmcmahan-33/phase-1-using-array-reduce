const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// first try
// function totalBatteries(batteryBatches) {
//     let batteryCount = []
//     for(const count of batteryBatches) {
//         batteryCount += count
//     }
//     return batteryCount
// }
// console.log(batteryBatches.reduce(totalBatteries,0))


// second try 
// const totalBatteries = (accum, number) => {
//     let total = accum + number
//     accum += total

// }

// let total = batteryBatches.reduce(totalBatteries,0)



// Winner 
const totalBatteries = batteryBatches.reduce(function(battNumber, totalBatch){
    return battNumber + totalBatch
})

// function reducer(totalBatch, batchNumber) {
//     debugger
//     return totalBatch +batchNumber

// }

// batteryBatches.reduce(reducer)