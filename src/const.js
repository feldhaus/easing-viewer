export const GRAPH_ROWS = 10;
export const GRAPH_COLS = 10;
export const GRAPH_PAD = 40;
export const GRAPH_TEXT_PAD = 5;
export const GRAPH_MAX_Y = 10;
export const GRAPH_MAX_OVERFLOW_TOP = 10;
export const GRAPH_MIN_Y = 0;
export const GRAPH_MAX_OVERFLOW_BOTTOM = 10;
export const GRAPH_MAX_TIME = 10;
export const GRAPH_MIN_TIME = 0;
export const GRAPH_FONT_SIZE = 8;
export const TOTAL_WIDTH = 500;
export const TOTAL_HEIGHT = 500;
export const GRAPH_WIDTH = TOTAL_WIDTH - GRAPH_PAD * 2;
export const GRAPH_HEIGHT = TOTAL_HEIGHT - GRAPH_PAD * 2;
export const OVERFLOW_TOP = 1;
export const OVERFLOW_BOTTOM = 0;

// easing functions
export const EASING = [
  { name: '[Linear]', value: null },
  {
    name: 'Linear',
    value: 'return x;',
  },
  { name: '[Sine]', value: null },
  {
    name: 'Sine-In',
    value: 'return 1 - Math.cos((x * Math.PI) / 2);',
  },
  {
    name: 'Sine-Out',
    value: 'return Math.sin((x * Math.PI) / 2);',
  },
  {
    name: 'Sine-InOut',
    value: 'return -(Math.cos(Math.PI * x) - 1) / 2;',
  },
  { name: '[Quad]', value: null },
  {
    name: 'Quad-In',
    value: 'return x ** 2;',
  },
  {
    name: 'Quad-Out',
    value: 'return 1 - (1 - x) ** 2;',
  },
  {
    name: 'Quad-InOut',
    value: 'return x < 0.5\n  ? 2 * x ** 2\n  : 1 - ((-2 * x + 2) ** 2) / 2;',
  },
  { name: '[Cubic]', value: null },
  {
    name: 'Cubic-In',
    value: 'return x ** 3;',
  },
  {
    name: 'Cubic-Out',
    value: 'return 1 - (1 - x) ** 3;',
  },
  {
    name: 'Cubic-InOut',
    value: 'return x < 0.5\n  ? 4 * x ** 3\n  : 1 - ((-2 * x + 2) ** 3) / 2;',
  },

  { name: '[Quart]', value: null },
  {
    name: 'Quart-In',
    value: 'return x ** 4;',
  },
  {
    name: 'Quart-Out',
    value: 'return 1 - (1 - x) ** 4;',
  },
  {
    name: 'Quart-InOut',
    value: 'return x < 0.5\n  ? 8 * x ** 4\n  : 1 - ((-2 * x + 2) ** 4) / 2;',
  },
  { name: '[Quint]', value: null },
  {
    name: 'Quint-In',
    value: 'return x ** 5;',
  },
  {
    name: 'Quint-Out',
    value: 'return 1 - (1 - x) ** 5;',
  },
  {
    name: 'Quint-InOut',
    value: 'return x < 0.5\n  ? 16 * x ** 5\n  : 1 - ((-2 * x + 2) ** 5) / 2;',
  },
  { name: '[Expo]', value: null },
  {
    name: 'Expo-In',
    value: 'return x === 0 ? 0 : 2 ** (10 * x - 10);',
  },
  {
    name: 'Expo-Out',
    value: 'return x === 1 ? 1 : 1 - 2 ** (-10 * x);',
  },
  {
    name: 'Expo-InOut',
    value:
      'return x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : x < 0.5\n  ? 2 ** (20 * x - 10) / 2\n  : (2 - 2 ** (-20 * x + 10)) / 2;',
  },
  { name: '[Circ]', value: null },
  {
    name: 'Circ-In',
    value: 'return 1 - Math.sqrt(1 - x ** 2);',
  },
  {
    name: 'Circ-Out',
    value: 'return Math.sqrt(1 - (x - 1) ** 2);',
  },
  {
    name: 'Circ-InOut',
    value:
      'return x < 0.5\n  ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2\n  : (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2;',
  },
  { name: '[Back]', value: null },
  {
    name: 'Back-In',
    value:
      'const c1 = 1.70158;\nconst c3 = c1 + 1\nreturn c3 * x ** 3 - c1 * x ** 2;',
  },
  {
    name: 'Back-Out',
    value:
      'const c1 = 1.70158;\nconst c3 = c1 + 1;\nreturn 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2;',
  },
  {
    name: 'Back-InOut',
    value:
      'const c1 = 1.70158;\nconst c2 = c1 * 1.525;\nreturn x < 0.5\n  ? (((2 * x) ** 2) * ((c2 + 1) * 2 * x - c2)) / 2\n  : (((2 * x - 2) ** 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;',
  },
  { name: '[Elastic]', value: null },
  {
    name: 'Elastic-In',
    value:
      'const c4 = (2 * Math.PI) / 3;\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : -(2 ** (10 * x - 10)) * Math.sin((x * 10 - 10.75) * c4);',
  },
  {
    name: 'Elastic-Out',
    value:
      'const c4 = (2 * Math.PI) / 3;\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : 2 ** (-10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;',
  },
  {
    name: 'Elastic-InOut',
    value:
      'const c5 = (2 * Math.PI) / 4.5;\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : x < 0.5\n  ? -(2 ** (20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2\n  : (2 ** (-20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;',
  },
  { name: '[Bounce]', value: null },
  {
    name: 'Bounce-In',
    value:
      'x = 1 - x;\nconst n1 = 7.5625;\nconst d1 = 2.75;\nif (x < 1 / d1) {\n  return 1 - (n1 * x * x);\n} else if (x < 2 / d1) {\n  return 1 - (n1 * (x -= 1.5 / d1) * x + 0.75);\n} else if (x < 2.5 / d1) {\n  return 1 - (n1 * (x -= 2.25 / d1) * x + 0.9375);\n} else {\n  return 1 - (n1 * (x -= 2.625 / d1) * x + 0.984375);\n}',
  },
  {
    name: 'Bounce-Out',
    value:
      'const n1 = 7.5625;\nconst d1 = 2.75;\nif (x < 1 / d1) {\n  return n1 * x * x;\n} else if (x < 2 / d1) {\n  return n1 * (x -= 1.5 / d1) * x + 0.75;\n} else if (x < 2.5 / d1) {\n  return n1 * (x -= 2.25 / d1) * x + 0.9375;\n} else {\n  return n1 * (x -= 2.625 / d1) * x + 0.984375;\n}',
  },
  { name: '[Wiggle]', value: null },
  {
    name: 'Wiggle-In',
    value: 'const cycles = 5.0;\nreturn Math.sin(2 * cycles * Math.PI * x) * x;',
  },
  {
    name: 'Wiggle-Out',
    value: 'const cycles = 5.0;\nreturn Math.sin(2 * cycles * Math.PI * x) * (1 - x);',
  },
  { name: '[Custom]', value: null },
  {
    name: 'Steps',
    value: 'return Math.ceil(x * 10) / 10;',
  },
  {
    name: 'Cycles',
    value: 'const cycles = 2.0;\nreturn Math.sin(2 * cycles * Math.PI * x);',
  },
];

export const STYLE = {
  grid: {
    color: '#e0e0e0',
    lineWidth: 1,
    font: `${GRAPH_FONT_SIZE}pt verdana`,
    textAlign: 'right',
    fillStyle: '#282a36',
  },
  axis: {
    color: '#282a36',
    lineWidth: 2,
    font: `${GRAPH_FONT_SIZE}pt verdana`,
    textAlign: 'center',
    fillStyle: '#6272a4',
  },
  animation: {
    color: '#e0e0e0',
    lineWidth: 1,
    fillStyle: '#ff79c6',
    radius: 8,
  },
  graph: {
    color: '#ff79c6',
    lineWidth: 3,
  },
};
