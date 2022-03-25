import { GRAPH_FONT_SIZE, GRAPH_TEXT_PAD, STYLE } from '../const';

export function drawRows(ctx, startX, startY, width, height, rows, overflowTop, overflowBottom) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.grid.lineWidth;
  ctx.strokeStyle = STYLE.grid.color;
  ctx.font = STYLE.grid.font;
  ctx.textAlign = STYLE.grid.textAlign;
  ctx.fillStyle = STYLE.grid.fillStyle;

  for (let row = 0; row < (rows + overflowTop + overflowBottom + 1); row += 1) {
    const y = startY + row * height;
    ctx.moveTo(startX, y);
    ctx.lineTo(startX + width, y);
    ctx.fillText(
      ((rows - row + overflowTop) / rows).toFixed(1),
      startX - GRAPH_TEXT_PAD,
      y + GRAPH_FONT_SIZE / 2,
    );
  }

  ctx.stroke();
}
