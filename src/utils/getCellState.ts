export function getCellState(field: number[][], x: number, y: number): number {
  const row: number[] = field[y];
  if (row === undefined) {
    return 0;
  }
  const cell: number = row[x];
  if (cell === undefined) {
    return 0;
  }
  return cell;
}
