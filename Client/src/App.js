import './App.css';

import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Pages/AllRoutes';

import Footer from './Components/Footer/Footer';

import "./App.css";
import Banner from './Components/Footer/Banner';
function App() {
  return (
    <div className="App">
      {/* <LogInSignUp /> */}
      <Navbar/>
      <AllRoutes/>
      <Banner/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
