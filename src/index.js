import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
