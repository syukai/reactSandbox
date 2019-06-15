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
function formatDate(dateValue) {
    return dateValue.toLocaleDateString() + ' ' + dateValue.toLocaleTimeString();
}
function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

ReactDOM.render(
    <Comment date={new Date()}  text="planetext" author={{name: 'taro', avatarUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}} />,
    document.getElementById('comment')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
