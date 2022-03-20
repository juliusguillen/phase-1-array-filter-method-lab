const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(names, string) {
let drivers = names.filter((name) => name.toLowerCase() === string.toLowerCase())
//let matchingName = drivers === string.toLowerCase()
console.log(drivers)
return drivers
}


function fuzzyMatch(names, string) {
    let drivers =  names.filter((name) => name[0] === string[0])
    console.log(drivers)
    return drivers
}

function matchName(names, string) {
    let drivers = names.filter((name) => name.name === string)
    return(drivers)
}
console.log(matchName(drivers,'Bobby' ))