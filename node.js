
let beg = ["Stop!", "Please..!", "I beg you", "Dont!"]
let direct = ["that monster", "That fiend", "That Madman", "That Demon"]
let bosses = ["Radahn", "Griffith", "Zues", "All for one"]
let fightingtactic = ["Abilities", "Henchmen", "Weapons", "Powers", "Abilities"]
let fate = ["Are Terrying", "Are Inhuman", "Are Too much"]


const godhand = () => { 

const intro1 =  beg[Math.floor(Math.random() * beg.length)];
const insult2 =  direct[Math.floor(Math.random() * direct.length)];
const boss3 =  bosses[Math.floor(Math.random() * bosses.length)];
const power4  =  fightingtactic[Math.floor(Math.random() * fightingtactic.length)];
const fear5 =  fate[Math.floor(Math.random() * fate.length)];


console.log(`${intro1}, ${insult2} ${boss3} ${power4} ${fear5}`)


}

console.log(godhand())