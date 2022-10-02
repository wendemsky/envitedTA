import './App.css';
import LandingHead from './components/LandingHead';
import LandingImg from './components/LandingImg';

function App() {
  return (
    <div className="container" style={{margin: "100px 160px 106.31px 170px", display: "flex",
    flexWrap: "wrap-reverse", 
    alignItems: "left"}}>
    <div><LandingImg/></div>
    <div><LandingHead/></div>
    
      
      
    </div>

    
  );
}

export default App;
