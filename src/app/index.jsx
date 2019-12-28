import { store } from "./store"

import React from "react";
import ReactDOM from "react-dom";

import {Main} from "./components/Main"

document.getElementById("app").innerHTML = "test";

ReactDOM.render(
    <Main />, document.getElementById("app")
);