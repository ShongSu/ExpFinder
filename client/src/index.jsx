import App from './App.jsx'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const render = (Component) => {
    ReactDOM.render(Component, document.getElementById('contents'));
}

render(App)