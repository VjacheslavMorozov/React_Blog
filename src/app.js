import React from "react";
import ReactDOM from 'react-dom';
import Wrapper from "./components/wrapper/Wrapper";
import {store} from "./store/store";

import {Provider} from 'react-redux'

import "normalize-scss"
import "./global.scss";

ReactDOM.render(
    <Provider store={store}>
        <Wrapper/>
    </Provider>,
    document.getElementById("app"));