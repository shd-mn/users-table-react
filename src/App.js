import 'bootstrap/dist/css/bootstrap.min.css';
import MainProvider from './context/MainContext';
import './styles.css';
import Main from './components/Main';
import Header from './components/Header';

export default function App() {
    return (
        <div className="App">
            <MainProvider>
                <Header />
                <Main />
            </MainProvider>
        </div>
    );
}
