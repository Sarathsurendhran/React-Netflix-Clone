import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { Originals, Action } from './urls';

function App() {
  return (
    <div className="App">
      
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title = "Netflix Originals" />
     <RowPost url={Action} title = "Action" isSmall />

    </div>
  );
}

export default App;
