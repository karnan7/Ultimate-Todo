import Header from "./components/Header";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <div className="app-wrapper">
        <AppHeader/>
        <Home/>
      </div>
      <Toaster toastOptions={{
        style:{
          fontSize: '17px',
          minWidth: '450px',
        }
      }}/>
    </>
   
  );
}

export default App;
