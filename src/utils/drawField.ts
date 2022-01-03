export interface DrawFieldParams {
  el: HTMLElement;
  field: number[][];
  onCellClick: any;
}

export function drawField({ el, field, onCellClick }: DrawFieldParams) {
  /* eslint no-param-reassign: "error" */
  el.innerHTML = '';
  const table = document.createElement('table');
  field.forEach((row, y) => {
    const tr = document.createElement('tr');
    row.forEach((cell, x) => {
      const td = document.createElement('td');
      td.classList.add('cell');
      td.classList.add(cell === 0 ? 'cell--dead' : 'cell--alive');
      td.dataset.x = String(x);
      td.dataset.y = String(y);
      tr.append(td);
    });
    table.append(tr);
  });

  table.addEventListener('click', (evt) => {
    const element = evt.target as HTMLElement;
    if (element.classList.contains('cell')) {
      const isAlive = element.classList.contains('cell--alive');
      onCellClick(
        Number(element.dataset.x),
        Number(element.dataset.y),
        isAlive,
      );
    }
  });
  el.append(table);
}
