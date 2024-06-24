
const beg  = ["Stop!", "Please!..", "I beg you", "Dont!"]
const direct = ["that monster", "That fiend", "That Madman", "That Demo"]
const bosses = ["Starscourge Radahn", "Griffith", "Zues", "All for one"]
const fightingtactic = ['Magic', "superspeed", "Intellect", "Weapons", "Powers",'Abilities']
const fate = ['Are Terrying', "Are Inhuman", "Too much"]


const warning = () => Math.floor(Math.random() * beg.length)

console.log(warning())