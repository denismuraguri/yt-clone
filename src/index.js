import ReactDom from 'react-dom';
import React from "react"
import App from "./App";
import { Provider } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css'

import "./_base.scss"
import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
        <App />,
    </Provider>, document.getElementById("root"))

