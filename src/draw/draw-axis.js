import { STYLE } from '../const';

export function drawAxis(ctx, startX, startY, width, height, zeroY) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.axis.lineWidth;
  ctx.strokeStyle = STYLE.axis.color;
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + height);
  ctx.moveTo(startX, zeroY);
  ctx.lineTo(startX + width, zeroY);

  ctx.stroke();
}
