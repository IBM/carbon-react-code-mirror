# carbon-react-code-mirror

Carbon React Code Mirror is a wrapper for [@uiw/react-codemirror](https://www.npmjs.com/package/@uiw/react-codemirror) that uses Carbon styling.

## Install

```bash
npm i carbon-react-code-mirror
```

## Usage

```js
import React from "react";
import { CarbonCodeMirror } from "carbon-react-code-mirror";

const example = () => {
  return <CarbonCodeMirror code={"<your code here>"} />;
};
```

## Optional Props

Carbon Code Mirror accepts two optional props:

- `className` - string - Classnames to apply to the code mirror pane
- `readOnly` - boolean - Defaults to `true`