import { GRAPH_FONT_SIZE, GRAPH_TEXT_PAD, STYLE } from '../const';

export function drawAxis(ctx, startX, startY, width, height, zeroY) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.axis.lineWidth;
  ctx.strokeStyle = STYLE.axis.color;
  ctx.font = STYLE.axis.font;
  ctx.textAlign = STYLE.axis.textAlign;
  ctx.fillStyle = STYLE.axis.fillStyle;

  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + height);
  ctx.moveTo(startX, zeroY);
  ctx.lineTo(startX + width, zeroY);

  ctx.fillText(
    'time (x)',
    startX + width * 0.5,
    startY + height + GRAPH_TEXT_PAD + GRAPH_FONT_SIZE * 3,
  );

  ctx.stroke();
}
