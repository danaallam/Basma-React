import "./App.css";
import Home from "./pages/Home";
import LanguageContextProvider from "./context/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <div className="App">
        <Home />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
