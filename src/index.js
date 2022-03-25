/* eslint-disable no-eval */
import { createEditor } from './create-editor';
import {
  EASING,
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

// -------------------------------------------------------------------

let updateDelayId;
let currentFunction;

// -------------------------------------------------------------------

const ctx = document.getElementById('graph').getContext('2d');
const editorElem = document.getElementById('editor-container');
const easingElem = document.getElementById('easing-list');
const editor = createEditor();

// -------------------------------------------------------------------

function drawAll() {
  let max = OVERFLOW_TOP;
  let min = OVERFLOW_BOTTOM;
  for (let x = 0; x < GRAPH_WIDTH; x += 1) {
    const t = currentFunction(x / GRAPH_WIDTH);
    max = Math.max(max, t);
    min = Math.min(min, t);
  }

  const overflowTop = Math.ceil((max - OVERFLOW_TOP) * 10);
  const overflowBottom = Math.ceil((OVERFLOW_BOTTOM - min) * 10);
  const overflow = overflowTop + overflowBottom;

  const cols = 10;
  const rows = 10;

  const graphSpaceRow = GRAPH_HEIGHT / (rows + overflow);
  const graphSpaceCol = GRAPH_WIDTH / cols;
  const zeroY = GRAPH_PAD + (rows + overflowTop) * graphSpaceRow;
  const innerHeight = GRAPH_HEIGHT - overflow * graphSpaceRow;

  ctx.clearRect(0, 0, TOTAL_WIDTH, TOTAL_HEIGHT);

  drawRows(
    ctx,
    GRAPH_PAD,
    GRAPH_PAD,
    GRAPH_WIDTH,
    graphSpaceRow,
    rows,
    overflowTop,
    overflowBottom,
  );
  drawCols(ctx, GRAPH_PAD, GRAPH_PAD, graphSpaceCol, GRAPH_HEIGHT, cols);
  drawAxis(ctx, GRAPH_PAD, GRAPH_PAD, GRAPH_WIDTH, GRAPH_HEIGHT, zeroY);
  drawGraph(ctx, GRAPH_PAD, zeroY, GRAPH_WIDTH, innerHeight, currentFunction);
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
