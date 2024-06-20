import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import ArticleDetail from './Component/ArticleDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
