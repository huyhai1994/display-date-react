import logo from './logo.svg';
import './App.css';

/*TODO: conponent*/

/*TODO: khi return chi render ra 1 phan tu -> su dung the div bao lai
*       hoac su dung the div trang <> </>*/
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
