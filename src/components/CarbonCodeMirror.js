import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import PropTypes from "prop-types";

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
    gutterForeground: "#161616",
  },
  styles: [
    { tag: t.comment, color: "#161616" },
    { tag: t.variableName, color: "#161616" },
    { tag: [t.string, t.special(t.brace)], color: "#161616" },
    { tag: t.number, color: "#161616" },
    { tag: t.bool, color: "#161616" },
    { tag: t.null, color: "#161616" },
    { tag: t.keyword, color: "#161616" },
    { tag: t.operator, color: "#161616" },
    { tag: t.className, color: "#161616" },
    { tag: t.definition(t.typeName), color: "#161616" },
    { tag: t.typeName, color: "#161616" },
    { tag: t.angleBracket, color: "#161616" },
    { tag: t.tagName, color: "#161616" },
    { tag: t.attributeName, color: "#161616" },
  ],
});

export const CarbonCodeMirror = (props) => {
  return (
    <CodeMirror
      className={props.className}
      readOnly={props.readOnly}
      value={props.code}
      extensions={[javascript({ jsx: true })]}
      theme={carbonDesignCodemirrorTheme}
    />
  );
};

CarbonCodeMirror.defaultProps = {
  className: "left-text",
  readOnly: true,
};

CarbonCodeMirror.propTypes = {
  className: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
};
