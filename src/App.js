import Header from 'components/Header';
import HomePageFeature from 'features/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePageFeature />} />
      </Routes>
    </div>
  );
}

export default App;
