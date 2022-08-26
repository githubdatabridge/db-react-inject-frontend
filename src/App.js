import logo from './logo.svg';
import {env} from './env'
import './App.css';

function App() {
    console.log(env)
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: env.REACT_APP_BG_COLOR ?? 'green'}}>
                <img src={env.REACT_APP_LOGO ?? logo} className="App-logo" alt="logo"/>
                <p>
                    <code>{env.REACT_APP_MAIN_TEXT ?? 'SAMPLE TEXT'}</code>
                </p>
                <a
                    className="App-link"
                    href={env.REACT_APP_LINK_URL ?? 'https://www.google.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    INFO LINK
                </a>
            </header>
        </div>
    );
}

export default App;
