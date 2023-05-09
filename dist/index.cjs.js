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
const codeMirrorDark = codemirrorThemes.createTheme({
  theme: "dark",
  settings: {
    background: "#262626",
    foreground: "#c6c6c6",
    caret: "#fffffff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#262626",
    gutterForeground: "#fffffff"
  },
  styles: [{
    tag: [highlight.tags.standard(highlight.tags.tagName), highlight.tags.tagName],
    color: "#7ee787"
  }, {
    tag: [highlight.tags.comment, highlight.tags.bracket],
    color: "#8b949e"
  }, {
    tag: [highlight.tags.className, highlight.tags.propertyName],
    color: "#d2a8ff"
  }, {
    tag: [highlight.tags.variableName, highlight.tags.attributeName, highlight.tags.number, highlight.tags.operator],
    color: "#79c0ff"
  }, {
    tag: [highlight.tags.keyword, highlight.tags.typeName, highlight.tags.typeOperator, highlight.tags.typeName],
    color: "#ff7b72"
  }, {
    tag: [highlight.tags.string, highlight.tags.meta, highlight.tags.regexp],
    color: "#a5d6ff"
  }, {
    tag: [highlight.tags.name, highlight.tags.quote],
    color: "#7ee787"
  }, {
    tag: [highlight.tags.heading],
    color: "#d2a8ff",
    fontWeight: "bold"
  }, {
    tag: [highlight.tags.emphasis],
    color: "#d2a8ff",
    fontStyle: "italic"
  }, {
    tag: [highlight.tags.deleted],
    color: "#ffdcd7",
    backgroundColor: "ffeef0"
  }, {
    tag: [highlight.tags.atom, highlight.tags.bool, highlight.tags.special(highlight.tags.variableName)],
    color: "#ffab70"
  }, {
    tag: highlight.tags.link,
    textDecoration: "underline"
  }, {
    tag: highlight.tags.strikethrough,
    textDecoration: "line-through"
  }, {
    tag: highlight.tags.invalid,
    color: "#f97583"
  }]
});
const CarbonCodeMirror = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.wrapperClassName
  }, /*#__PURE__*/React__default["default"].createElement(CodeMirror__default["default"], {
    className: props.className,
    readOnly: props.readOnly,
    value: props.code,
    extensions: [langJavascript.javascript({
      jsx: true
    })],
    theme: props.light ? carbonDesignCodemirrorTheme : codeMirrorDark
  }, props.children ? props.children : ""));
};
CarbonCodeMirror.defaultProps = {
  className: "left-text",
  readOnly: true,
  light: false,
  wrapperClassName: ""
};
CarbonCodeMirror.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  readOnly: PropTypes__default["default"].bool.isRequired,
  code: PropTypes__default["default"].string.isRequired,
  light: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node,
  wrapperClassName: PropTypes__default["default"].string.isRequired
};

exports.CarbonCodeMirror = CarbonCodeMirror;
