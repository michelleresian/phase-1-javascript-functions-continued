function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");
console.log(saturdayFun);

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective(symbol = "*") {
    return function(adjective = 'special') {
        return `You are ${symbol}${adjective}${symbol}!`;
        console.log(`${part1} ${symbol}`)
    }
}