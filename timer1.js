/*
---- Simple Timer ----
M1/Wk4/Code Review/Simple Timer: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/390?journey_step=32

---- INSTRUCTIONS ----
In this challenge, we are going to combine our prior experience with command line arguments and asynchronous programming in order to implement a simple Alarm Clock / Timer app.

Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

---- EXAMPLE USAGE ----
node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

Beep:
process.stdout.write('\x07');

---- NOTES ----
    - As a NaN cannot be >= 0, letters & symbols do not run
    - The output will be chronological due to the timer
    - If multiple of the same number are input there will be 1 beep, but the console.log will print all 3 at the same time

*/

//use process.argv to accept argurments from the terminal
//output: [ '10', '3', '5', '15', '9' ]
const  args = (process.argv).slice(2);
console.log("args:", args);


let alarm = (arr) => {
    for (const item of arr) {
        if (item >= 0) {
        let timer = item * 1000;
        setTimeout(() => {
            process.stdout.write('\x07');
            console.log(item);   
        }, timer)
    }
}
};

alarm(args);
