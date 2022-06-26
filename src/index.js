import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./State/State";
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
    delay: 450,
    once: true,
    anchorPlacement: 'top-center',
});

let renderIntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderIntireTree(store.getState());