import './App.css'
import Sidebar from './componets/Sidebar/Sidebar';
import MainDash from './componets/MainDash/MainDash';
import RightSide from './componets/RightSide/RightSide';

function App() {
  return (
    <div className="App">
       <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
       </div>
    </div>
  );
}

export default App;
