import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = "words in variable";
const element = <h1>show "name" variable:{name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);

function tick() {
    const element = (
        <div>
            <h1>Tick-Tock component</h1>
            <h2>It is {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('tick-tock')
    );
}

setInterval(tick, 1000);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
