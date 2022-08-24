const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
// 1. Get array of all names
const namesList = characters.map(char => {
    return char.name
})
console.log(namesList)
//2. Get array of all heights
const heights = characters.map(char => char.height)
console.log(heights)
//3. Get array of objects with just name and height properties
const namesAndHeights = characters.map(char => char.name + char.height)
console.log(namesAndHeights)
//4. Get array of all first names
const firstNames = characters.map(char => char.name.split(' ')[0])
console.log(firstNames)

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, curr) => total + curr.mass, 0)
console.log(totalMass)
//2. Get total height of all characters
const totalHeight = characters.reduce((total, curr) => total + curr.height, 0)
console.log(totalHeight)
//3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((total, curr) => {
    const color = curr.eye_color
    if (total[color]) {
        total[color]++
    } else {
        total[color] = 1
    }
    return total
}, {})
console.log(totalEyeColor)
//4. Get total number of characters in all the character names
const totalChars = characters.reduce((total, curr) => total + curr.name.length, 0)
console.log(totalChars)
// EXTRA. Get total number of characters by gender
const totalGender = characters.reduce((total, curr) => {
    const gender = curr.gender
    if (total[gender]) total[gender]++
    else total[gender] = 1
    return total
}, {})
console.log(totalGender)

//***FILTER***
//1. Get characters with mass greater than 100
const massMoreThan100 = characters.filter(char => char.mass > 100)
console.log(massMoreThan100)
//2. Get characters with height less than 200
const heightLessThan200 = characters.filter(char => char.height < 200)
console.log(heightLessThan200)
//3. Get all male characters
const males = characters.filter(char => char.gender === 'male')
console.log(males)
//4. Get all female characters
const females = characters.filter(char => char.gender === 'female')
console.log(females)

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => {
    if (a.mass > b.mass) return 1
    return -1
})
console.log(byMass)
//2. Sort by height
const byHeight = characters.sort((a, b) => {
    if (a.height > b.height) return 1
    return -1
})
console.log(byHeight)
//3. Sort by name
const byName = characters.sort((a, b) => {
    if (a.name > b.name) return 1
    return -1
})
console.log(byName)
//4. Sort by gender
const byGender = characters.sort((a,b) => {
    if (a.gender > b.gender) return 1
    return -1
})
console.log(byGender)

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(char => char.eye_color === 'blue')
console.log(allBlueEyes)
//2. Does every character have mass more than 40?
const allMassOver40 = characters.every(char => char.mass > 40)
console.log(allMassOver40)
//3. Is every character shorter than 200?
const allBelow200 = characters.every(char => char.height < 200)
console.log(allBelow200)
//4. Is every character male?
const allMale = characters.every(char => char.gender === 'gender')
console.log(allMale)

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some(char => char.gender === 'male')
console.log(oneMale)
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(char => char.eye_color === 'blue')
console.log(oneBlueEyes)
//3. Is there at least one character taller than 210?
const oneOver210 = characters.some(char => char.height > 210)
console.log(oneOver210)
//4. Is there at least one character that has mass less than 50?
const oneMassBelow50 = characters.some(char => char.mass < 50)
console.log(oneMassBelow50)
