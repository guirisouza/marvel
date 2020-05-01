
export const submitCharacterFormAction = (data, char) => {
    console.log('AQQQQQUUUUUUUUUUUUUUUUUUIIII',char)
    console.log('AQQQQQUUUUUUUUUUUUUUUUUUIIII',data)
    const keys = Object.keys(data)

    if(keys.includes('name')){char.name = data['name']}
    if(keys.includes('gender')){char.appearance.gender = data['gender']}
    if(keys.includes('race')){char.appearance.race = data['race']}
    if(keys.includes('intelligence')){char.powerstats.intelligence = data['intelligence']}
    if(keys.includes('strength')){char.powerstats.strength = data['strength']}
    if(keys.includes('speed')){char.powerstats.speed = data['speed']}
    if(keys.includes('durability')){char.powerstats.durability = data['durability']}
    if(keys.includes('power')){char.powerstats.power = data['power']}
    if(keys.includes('combat')){char.powerstats.combat = data['combat']}

    return {type: 'CUSTOMIZE_CHARACTER', payload: char}
}