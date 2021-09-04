import Hero from "./components /Hero";
import background from './images/pattern-background-desktop.svg';

function App() {
  return (
    <div className="App">
        <div className="background_container">
            <img src={background} alt="background" className="background_image"/>
            <Hero />
        </div>
    </div>
  );
}

export default App;
