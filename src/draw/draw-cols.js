import { STYLE } from '../const';

export function drawCols(ctx, startX, startY, width, height, cols) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.grid.lineWidth;
  ctx.strokeStyle = STYLE.grid.color;
  for (let col = 0; col < cols + 1; col += 1) {
    const x = startX + col * width;
    ctx.moveTo(x, startY);
    ctx.lineTo(x, startY + height);
  }

  ctx.stroke();
}
