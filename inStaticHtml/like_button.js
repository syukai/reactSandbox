// code from [react doc](https://ja.reactjs.org/docs/add-react-to-a-website.html)
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);
const domContainer = document.querySelector('#like_button_container');

// Uncaught ReferenceError: e is not defined
ReactDOM.render(e(LikeButton), domContainer);
