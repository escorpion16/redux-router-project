import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import NameForm from './components/NameForm';
import Characters from './components/Characters';
import ProtectedRoute from './components/ProtectedRoute';
import CharacterDetail from './components/CharacterDetail';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<NameForm/>} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/characters" element={<Characters/>} />
            <Route path="/characters/:id" element={<CharacterDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
