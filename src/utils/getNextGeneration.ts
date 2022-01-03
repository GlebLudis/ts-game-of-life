import { getNumberOfAliveAround } from './getNumberOfAliveAround';
import { getNextCellState } from './getNextCellState';

export function getNextGeneration(field: number[][]) {
  const result = field.slice(0);
  for (let y = 0; y < field.length; y += 1) {
    result[y] = result[y].slice(0);

    for (let x = 0; x < field[y].length; x += 1) {
      const num = getNumberOfAliveAround(field, x, y);
      const state = field[y][x] !== 0;
      const nextState = getNextCellState(state, num);
      result[y][x] = nextState ? 1 : 0;
    }
  }
  return result;
}
