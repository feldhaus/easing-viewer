const ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/dracula');

export function createEditor() {
  const editor = ace.edit('editor');
  editor.setTheme('ace/theme/dracula');
  editor.renderer.setShowGutter(false);
  editor.renderer.setPadding(8);
  editor.renderer.setScrollMargin(4, 0, 0, 0);
  editor.setHighlightActiveLine(false);
  editor.getSession().setUseWrapMode(false);
  editor.getSession().setMode('ace/mode/javascript');
  return editor;
}
