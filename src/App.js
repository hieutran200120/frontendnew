import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css'
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LawPage from './page/law/LawPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LawPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
