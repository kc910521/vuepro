
export function SPLIT_DATA_SHOW (colNums, orgList) {
  let ctIdx = 0
  let innerLs = []
  let returnLs = []
  for (var itm of orgList) {
    console.log(itm)
    innerLs.push(itm)
    if (ctIdx !== 0 && ctIdx % 2 === 0) {
      returnLs.push(innerLs)
      innerLs = []
    }
    ctIdx += 1
  }

  if (innerLs.length > 0) {
    returnLs.push(innerLs)
  }
  return returnLs
}
