export function filterRelevantEnemies(enemies, floor, soloMode) {
  return enemies.filter(enemy =>
    enemy.startFloor <= floor
    && enemy.endFloor >= floor
    && (soloMode || !enemy.mainlyDangerousWhenSolo)
  )
}

export function isBossFloor(floor) {
  return (floor % 10 == 0 && floor < 100)
    || floor == 99;
}

export function validateFloor(floor) {
  const floorNumber = Number(floor);
  return !isNaN(floorNumber) && floorNumber > 0 && floorNumber <= 100;
}

export function tryTransform(transformFn, value) {
  const result = transformFn(Number(value));
  return validateFloor(result) ? result : value;
}

export function isFinalFloor(floor) {
  return floor == 100;
}