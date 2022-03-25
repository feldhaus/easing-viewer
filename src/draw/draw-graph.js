import { STYLE } from '../const';

export function drawGraph(ctx, startX, startY, width, height, func) {
  ctx.beginPath();

  ctx.lineWidth = STYLE.graph.lineWidth;
  ctx.strokeStyle = STYLE.graph.color;
  for (let x = 0; x < width; x += 1) {
    ctx.lineTo(startX + x, startY + func(x / width) * -height);
  }

  ctx.stroke();
}
