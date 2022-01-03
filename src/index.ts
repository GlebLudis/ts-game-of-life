import './styles.css';
import { createGameOfLife } from './createGameOfLife';

const app: HTMLElement = document.getElementById('app') as HTMLElement;

createGameOfLife(app);
