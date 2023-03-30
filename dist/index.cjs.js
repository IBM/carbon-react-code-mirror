'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CodeMirror = require('@uiw/react-codemirror');
var codemirrorThemes = require('@uiw/codemirror-themes');
var langJavascript = require('@codemirror/lang-javascript');
var highlight = require('@lezer/highlight');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var CodeMirror__default = /*#__PURE__*/_interopDefaultLegacy(CodeMirror);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.left-text {\n    text-align: left;\n}";
styleInject(css_248z);

const carbonDesignCodemirrorTheme = codemirrorThemes.createTheme({
  theme: "light",
  settings: {
    background: "#F4F4F4",
    foreground: "#161616",
    caret: "#161616",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#F4F4F4",
    gutterForeground: "#161616"
  },
  styles: [{
    tag: highlight.tags.comment,
    color: "#161616"
  }, {
    tag: highlight.tags.variableName,
    color: "#161616"
  }, {
    tag: [highlight.tags.string, highlight.tags.special(highlight.tags.brace)],
    color: "#161616"
  }, {
    tag: highlight.tags.number,
    color: "#161616"
  }, {
    tag: highlight.tags.bool,
    color: "#161616"
  }, {
    tag: highlight.tags.null,
    color: "#161616"
  }, {
    tag: highlight.tags.keyword,
    color: "#161616"
  }, {
    tag: highlight.tags.operator,
    color: "#161616"
  }, {
    tag: highlight.tags.className,
    color: "#161616"
  }, {
    tag: highlight.tags.definition(highlight.tags.typeName),
    color: "#161616"
  }, {
    tag: highlight.tags.typeName,
    color: "#161616"
  }, {
    tag: highlight.tags.angleBracket,
    color: "#161616"
  }, {
    tag: highlight.tags.tagName,
    color: "#161616"
  }, {
    tag: highlight.tags.attributeName,
    color: "#161616"
  }]
});
const CarbonCodeMirror = props => {
  return /*#__PURE__*/React__default["default"].createElement(CodeMirror__default["default"], {
    className: props.className,
    readOnly: props.readOnly,
    value: props.code,
    extensions: [langJavascript.javascript({
      jsx: true
    })],
    theme: carbonDesignCodemirrorTheme
  });
};
CarbonCodeMirror.defaultProps = {
  className: "left-text",
  readOnly: true
};
CarbonCodeMirror.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  readOnly: PropTypes__default["default"].bool.isRequired,
  code: PropTypes__default["default"].string.isRequired
};

exports.CarbonCodeMirror = CarbonCodeMirror;
