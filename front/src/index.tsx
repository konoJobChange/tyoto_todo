import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./ts/components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript4" framework="React" />,
    document.getElementById("example")
);
