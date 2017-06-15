const baseHP = 381 // lowest Vigor is 9, so base is 381
const hpScale = [22,24,27,29,32,35,44,44,43,42,41,40,38,37,35,33,30,23,13,13,18,18,18,17,16,16,16,15,14,14,13,13,12,11,11,9,9,7,7,5,3,2,2,3,2,3,2,2,3]
const ones = [90,93,96,97,99]

export const hitpoints = (vigor) => {
  let hp = baseHP
  // subtract 9, 9 should return base
  for (var i=0; i < vigor-9; i++) {
    if (i < 49) {
      hp = hp + hpScale[i]
    } else if (ones.indexOf(i) > -1) {
      hp = hp + 1
    } else {
      hp = hp + 2
    }
  }

  return [hp, Math.trunc(hp*1.3)]
}
