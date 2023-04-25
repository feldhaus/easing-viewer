/* eslint-disable no-eval */
import { createEditor } from './create-editor';
import {
  EASING,
  GRAPH_ROWS,
  GRAPH_COLS,
  GRAPH_WIDTH,
  TOTAL_WIDTH,
  TOTAL_HEIGHT,
  GRAPH_HEIGHT,
  GRAPH_PAD,
  OVERFLOW_TOP,
  OVERFLOW_BOTTOM,
} from './const';
import { createFunction } from './create-function';
import { drawRows } from './draw/draw-rows';
import { drawCols } from './draw/draw-cols';
import { drawAxis } from './draw/draw-axis';
import { drawGraph } from './draw/draw-graph';
import { drawAnim } from './draw/draw-anim';

// -------------------------------------------------------------------

let updateDelayId;
let currentFunction;

// -------------------------------------------------------------------

const context = document.getElementById('graph').getContext('2d');
const editorElem = document.getElementById('editor-container');
const easingElem = document.getElementById('easing-list');
const editor = createEditor();

// -------------------------------------------------------------------

let overflowTop;
let overflowBottom;
let overflow;
let graphSpaceRow;
let graphSpaceCol;
let zeroY;
let innerHeight;

function drawAll() {
  let max = OVERFLOW_TOP;
  let min = OVERFLOW_BOTTOM;
  for (let x = 0; x < GRAPH_WIDTH; x += 1) {
    const t = currentFunction(x / GRAPH_WIDTH);
    max = Math.max(max, t);
    min = Math.min(min, t);
  }

  overflowTop = Math.ceil((max - OVERFLOW_TOP) * GRAPH_ROWS);
  overflowBottom = Math.ceil((OVERFLOW_BOTTOM - min) * GRAPH_ROWS);
  overflow = overflowTop + overflowBottom;

  graphSpaceRow = GRAPH_HEIGHT / (GRAPH_ROWS + overflow);
  graphSpaceCol = GRAPH_WIDTH / GRAPH_COLS;
  zeroY = GRAPH_PAD + (GRAPH_ROWS + overflowTop) * graphSpaceRow;
  innerHeight = GRAPH_HEIGHT - overflow * graphSpaceRow;

  context.clearRect(0, 0, TOTAL_WIDTH, TOTAL_HEIGHT);

  drawRows(
    context,
    GRAPH_PAD,
    GRAPH_PAD,
    GRAPH_WIDTH,
    graphSpaceRow,
    GRAPH_ROWS,
    overflowTop,
    overflowBottom,
  );
  drawCols(
    context,
    GRAPH_PAD,
    GRAPH_PAD,
    graphSpaceCol,
    GRAPH_HEIGHT,
    GRAPH_COLS,
  );
  drawAxis(context, GRAPH_PAD, GRAPH_PAD, GRAPH_WIDTH, GRAPH_HEIGHT, zeroY);
  drawGraph(
    context,
    GRAPH_PAD,
    zeroY,
    GRAPH_WIDTH,
    innerHeight,
    currentFunction,
  );
}

function updateFunction() {
  currentFunction = createFunction(editor.getSession().getValue());
  if (currentFunction) {
    editorElem.classList.remove('has-error');
    editorElem.classList.add('has-success');
  } else {
    editorElem.classList.remove('has-success');
    editorElem.classList.add('has-error');
    return;
  }
  drawAll();
}

function setEasingFromList(index) {
  if (typeof index === 'undefined') {
    editor.getSession().setValue(EASING[easingElem.selectedIndex].value);
  } else {
    easingElem.options[index].selected = true;
    editor.getSession().setValue(EASING[index].value);
  }
}

EASING.forEach((entry, index) => {
  const option = document.createElement('option');
  option.innerHTML = entry.name;
  option.value = index;

  if (entry.value === null) {
    option.style.color = '#8bc34a';
    option.disabled = true;
  }

  easingElem.add(option);
});

// -------------------------------------------------------------------

editor.addEventListener('input', () => {
  clearTimeout(updateDelayId);
  updateDelayId = setTimeout(updateFunction, 100);
});

easingElem.addEventListener('change', (event) => {
  setEasingFromList(event.target.value);
});

setEasingFromList(33);

// -------------------------------------------------------------------

let now;
let then = Date.now();
let elapsed;

const fps = 60;
const fpsInterval = 1000 / fps;
const startTime = then;

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;

  if (elapsed < fpsInterval) return;
  then = now - (elapsed % fpsInterval);

  if (!currentFunction) return;
  const progress = currentFunction(((now - startTime) % 3000) / 3000);
  context.clearRect(TOTAL_WIDTH - 10, 0, 20, context.canvas.height);
  drawAnim(context, TOTAL_WIDTH, GRAPH_PAD, GRAPH_HEIGHT, innerHeight, zeroY, progress);
}
animate();
