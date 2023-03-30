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
const CarbonCodeMirror = props => {
  return /*#__PURE__*/React.createElement(CodeMirror, {
    className: props.className,
    readOnly: props.readOnly,
    value: props.code,
    extensions: [javascript({
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
  className: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired
};

export { CarbonCodeMirror };
