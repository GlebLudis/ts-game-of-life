import { drawField } from './utils/drawField';

const WIDTH = 10;
const HEIGHT = 10;

export function createGameOfLife(el: HTMLElement) {
  const field: any[][] = Array.from({ length: HEIGHT }).map(() => Array.from({ length: WIDTH }).fill(0));

  const buttonEl: HTMLElement = document.createElement('button');
  buttonEl.innerHTML = 'Start';

  document.body.appendChild(buttonEl);

  buttonEl.addEventListener('click', () => {
    buttonEl.innerHTML = buttonEl.innerHTML === 'Start' ? 'Stop' : 'Start';
  });

  const onCellClick = (x: number, y: number): void => {
    field[y][x] = field[y][x] ? 0 : 1;
    drawField({ el, field, onCellClick });
  };

  drawField({ el, field, onCellClick });
}
