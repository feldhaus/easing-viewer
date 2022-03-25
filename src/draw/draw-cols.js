import { GRAPH_FONT_SIZE, GRAPH_TEXT_PAD, STYLE } from '../const';

export function drawCols(ctx, startX, startY, width, height, cols) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.grid.lineWidth;
  ctx.strokeStyle = STYLE.grid.color;
  ctx.font = STYLE.grid.font;
  ctx.textAlign = STYLE.grid.textAlign;
  ctx.fillStyle = STYLE.grid.fillStyle;

  for (let col = 0; col < cols + 1; col += 1) {
    const x = startX + col * width;
    ctx.moveTo(x, startY);
    ctx.lineTo(x, startY + height);

    // eslint-disable-next-line no-continue
    if (col === 0) continue;

    ctx.fillText(
      (col / cols).toFixed(1),
      x,
      startY + height + GRAPH_FONT_SIZE + GRAPH_TEXT_PAD,
    );
  }

  ctx.stroke();
}
