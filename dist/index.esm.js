import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags } from '@lezer/highlight';
import PropTypes from 'prop-types';

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

const carbonDesignCodemirrorTheme = createTheme({
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
    tag: tags.comment,
    color: "#161616"
  }, {
    tag: tags.variableName,
    color: "#161616"
  }, {
    tag: [tags.string, tags.special(tags.brace)],
    color: "#161616"
  }, {
    tag: tags.number,
    color: "#161616"
  }, {
    tag: tags.bool,
    color: "#161616"
  }, {
    tag: tags.null,
    color: "#161616"
  }, {
    tag: tags.keyword,
    color: "#161616"
  }, {
    tag: tags.operator,
    color: "#161616"
  }, {
    tag: tags.className,
    color: "#161616"
  }, {
    tag: tags.definition(tags.typeName),
    color: "#161616"
  }, {
    tag: tags.typeName,
    color: "#161616"
  }, {
    tag: tags.angleBracket,
    color: "#161616"
  }, {
    tag: tags.tagName,
    color: "#161616"
  }, {
    tag: tags.attributeName,
    color: "#161616"
  }]
});
const codeMirrorDark = createTheme({
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
    tag: [tags.standard(tags.tagName), tags.tagName],
    color: "#7ee787"
  }, {
    tag: [tags.comment, tags.bracket],
    color: "#8b949e"
  }, {
    tag: [tags.className, tags.propertyName],
    color: "#d2a8ff"
  }, {
    tag: [tags.variableName, tags.attributeName, tags.number, tags.operator],
    color: "#79c0ff"
  }, {
    tag: [tags.keyword, tags.typeName, tags.typeOperator, tags.typeName],
    color: "#ff7b72"
  }, {
    tag: [tags.string, tags.meta, tags.regexp],
    color: "#a5d6ff"
  }, {
    tag: [tags.name, tags.quote],
    color: "#7ee787"
  }, {
    tag: [tags.heading],
    color: "#d2a8ff",
    fontWeight: "bold"
  }, {
    tag: [tags.emphasis],
    color: "#d2a8ff",
    fontStyle: "italic"
  }, {
    tag: [tags.deleted],
    color: "#ffdcd7",
    backgroundColor: "ffeef0"
  }, {
    tag: [tags.atom, tags.bool, tags.special(tags.variableName)],
    color: "#ffab70"
  }, {
    tag: tags.link,
    textDecoration: "underline"
  }, {
    tag: tags.strikethrough,
    textDecoration: "line-through"
  }, {
    tag: tags.invalid,
    color: "#f97583"
  }]
});
const CarbonCodeMirror = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.wrapperClassName
  }, /*#__PURE__*/React.createElement(CodeMirror, {
    className: props.className,
    readOnly: props.readOnly,
    value: props.code,
    extensions: [javascript({
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
  className: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  children: PropTypes.node,
  wrapperClassName: PropTypes.string.isRequired
};

export { CarbonCodeMirror };
