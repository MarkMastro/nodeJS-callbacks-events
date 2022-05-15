const express = require('express');
const EventEmitter = require('events');
const { builtinModules } = require('module');

async function app(args) {
//create instance of event emitter
const emitter = new EventEmitter();
//take in args from terminal
//gets called by event listener function, returns the sum of the multiples under 1000
const getMultiplesSum= (numbers) => {
    let nums = [parseInt(numbers[0]), parseInt(numbers[1])]
    const multiples = [...nums];
    for (let num of nums) {
        let multiple = num+num;
        while (multiple <= 1000) {
            multiples.push(multiple);
            multiple += num;
        }
    }
    const sum = multiples.reduce((previousValue, currentValue) => previousValue + currentValue)
    return sum;
}

//calls getMultiplesSum with the args passed from terminal, logs the args and their sum of multiples under 1000, after 2 seconds
async function  logInfo(args)  {
    const sum = getMultiplesSum(args)
    return new Promise (resolve =>{
        setTimeout(()=>{
            console.log(`Multiples of ${args[0]} ${args[1]} ${sum}`)
        }
        , 2000)
    }) 
}
//make an event listener which calls logInfo with the args passed from terminal when event called MyEvent is created
emitter.on('MyEvent', logInfo)

//emit the event MyEvent with the args passed from the terminal

emitter.emit('MyEvent', args)
}

module.exports = app;



