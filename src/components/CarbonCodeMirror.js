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
    gutterForeground: "#fffffff",
  },
  styles: [
    { tag: [t.standard(t.tagName), t.tagName], color: "#7ee787" },
    { tag: [t.comment, t.bracket], color: "#8b949e" },
    { tag: [t.className, t.propertyName], color: "#d2a8ff" },
    {
      tag: [t.variableName, t.attributeName, t.number, t.operator],
      color: "#79c0ff",
    },
    {
      tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
      color: "#ff7b72",
    },
    { tag: [t.string, t.meta, t.regexp], color: "#a5d6ff" },
    { tag: [t.name, t.quote], color: "#7ee787" },
    { tag: [t.heading], color: "#d2a8ff", fontWeight: "bold" },
    { tag: [t.emphasis], color: "#d2a8ff", fontStyle: "italic" },
    { tag: [t.deleted], color: "#ffdcd7", backgroundColor: "ffeef0" },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: "#ffab70" },
    { tag: t.link, textDecoration: "underline" },
    { tag: t.strikethrough, textDecoration: "line-through" },
    { tag: t.invalid, color: "#f97583" },
  ],
});

export const CarbonCodeMirror = (props) => {
  return (
    <div className={props.wrapperClassName}>
      <CodeMirror
        className={props.className}
        readOnly={props.readOnly}
        value={props.code}
        extensions={[javascript({ jsx: true })]}
        theme={props.light ? carbonDesignCodemirrorTheme : codeMirrorDark}
      >
        {props.children ? props.children : ""}
      </CodeMirror>
    </div>
  );
};

CarbonCodeMirror.defaultProps = {
  className: "left-text",
  readOnly: true,
  light: false,
  wrapperClassName: "",
};

CarbonCodeMirror.propTypes = {
  className: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  code: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
  children: PropTypes.node,
  wrapperClassName: PropTypes.string.isRequired,
};
