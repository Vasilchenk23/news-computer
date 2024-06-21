import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import ArticleDetail from './Component/ArticleDetail';
import Donation from './Component/Donation';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/donation" element={<Donation />} />
            </Routes>
        </Router>
    );
}

export default App;
