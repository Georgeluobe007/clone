import Pages from './Components/Pages';
import Congratulation from './Components/Congratulation';
import './App.css';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Pages/>}/>
      <Route path='/congratulations' element={<Congratulation/>}/>
      </Routes>
     </div>
  );
}

export default App;
