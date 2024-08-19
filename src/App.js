import logo from './logo.svg';
import './App.css';
import { NavBar } from '../src/components/NavBar'
import { Banner } from '../src/components/Banner'
import { Skills } from './components/Skills';
import { Connect } from './components/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
