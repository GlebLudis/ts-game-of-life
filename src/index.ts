import './styles.scss';
import { createGameOfLife } from './utils/createGameOfLife';

const game: HTMLDivElement = document.createElement('div');

document.body.appendChild(game);

createGameOfLife(10, 10, game);
