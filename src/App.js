import logo from './logo.svg';
import './App.scss';

//import modules

import Hero from './components/hero';
import Header from './components/header';
import FiftyFifty from './components/fiftyfifty';

function App() {
  return (
    <div>
      <Header />
      <Hero 
      title=""
      BG="hero__bg"
       />

    </div>
  );
}

export default App;
