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

function Welcome(props) {
    return <h1>Hello {props.name}</h1>;
}
const welcomeElement = <Welcome name="Sara"></Welcome>;
// ReactDOM.render(
//     welcomeElement,
//     document.getElementById('welcome')
// )


// this class has same meaning as previous function
class WelcomeComponent extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
const welcomeClassElement = <WelcomeComponent name="Jake"></WelcomeComponent>;
// ReactDOM.render(
//     welcomeClassElement,
//     document.getElementById('welcome-class')
// )

setInterval(() => {
    let element;
    if(new Date().getSeconds() % 2 === 0){
        element = welcomeElement;
    } else {
        element = welcomeClassElement;
    }
    ReactDOM.render(
        element,
        document.getElementById('welcome')
    );
})

ReactDOM.render(
    <div>
        <Welcome name="Make" />
        <WelcomeComponent name="Jude" />
        <Welcome name="Patrick" />
    </div>,
    document.getElementById('welcomes')
);



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
