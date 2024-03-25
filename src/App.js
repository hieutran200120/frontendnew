import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './css/bootstrap.min.css'
import Layout from './layouts/Layout';
import LawDetailPage from './page/law/LawDetailPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LawPage from './page/law/LawPage';
import SocialPoliticsPage from './page/socialPolitics/SocialPoliticsPage';
import SocialPoliticsDetail from './page/socialPolitics/SocialPoliticsDetail';
function App() {
  const [dataDetail, setDataDetail] = useState(null);
  const [dataSocialPolitics, setDataSocialPolitics] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LawPage setDataDetail={setDataDetail} />} />
            <Route path='/get_new/' element={<LawDetailPage dataDetail={dataDetail} />} />
            <Route path='/ctxh' element={<SocialPoliticsPage setDataSocialPolitics={setDataSocialPolitics} />} />
            <Route path='/ctxh/get_new' element={<SocialPoliticsDetail dataSocialPolitics={dataSocialPolitics} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
