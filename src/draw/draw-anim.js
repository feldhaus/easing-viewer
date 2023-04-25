import { STYLE } from '../const';

export function drawAnim(
  ctx,
  startX,
  startY,
  height,
  innerHeight,
  zeroY,
  progress,
) {
  ctx.beginPath();
  ctx.lineWidth = STYLE.animation.lineWidth;
  ctx.strokeStyle = STYLE.animation.strokeStyle;
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + height);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = STYLE.animation.fillStyle;
  ctx.arc(
    startX,
    zeroY - progress * innerHeight,
    STYLE.animation.radius,
    0,
    2 * Math.PI,
    false,
  );
  ctx.fill();
}
