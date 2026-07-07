import { Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes></Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
