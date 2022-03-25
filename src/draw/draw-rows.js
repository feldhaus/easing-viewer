import { STYLE } from '../const';

export function drawRows(ctx, startX, startY, width, height, rows) {
  ctx.lineWidth = STYLE.grid.lineWidth;
  ctx.strokeStyle = STYLE.grid.color;

  ctx.beginPath();
  for (let row = 0; row < rows + 1; row += 1) {
    const y = startY + row * height;
    ctx.moveTo(startX, y);
    ctx.lineTo(startX + width, y);
  }
  ctx.stroke();
}
