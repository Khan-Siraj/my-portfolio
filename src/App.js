import './App.css';
import Home from './components/home';
import 'animate.css';
import Experience from './components/experience';

const App = ()=>{
  return (
    <>
     <div className="overflow-hidden">
      <Home />
      <Experience/>
     </div>
    </>
  )
}

export default App;
