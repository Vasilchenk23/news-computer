import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Sliders from './Sliders';

const articles = [
    { image: './img/logo.png', title: 'Windows 11 22H2', overview: 'V2 MSDN 6e3 TPM2.0' },
    { image: './img/logo2.png', title: 'Windows 11 22H2', overview: 'X64-v2 MSDN' },
    { image: './img/logo3.png', title: 'Windows 7 Thin PC', overview: 'X86 Thin PC' },
    { image: './img/logo4.png', title: 'Windows 7 plus office 2016', overview: 'SP1 2019 by SmokieBlahBlah' },
    { image: './img/logo5.png', title: 'Windows 10 official 22H2', overview: 'X64-x86 MSDN' },
    { image: './img/logo6.png', title: 'Windows 8.1', overview: 'Embedded Industry Pro' },
    { image: './img/logo7.png', title: 'Windows 7', overview: 'MSDN X64' },
    { image: './img/logo8.png', title: 'Windows XP', overview: 'Professional SP3 MSDN' },
    { image: './img/logo9.png', title: 'Windows 10', overview: 'MSDN X64/86 LTSC 2019' },
    { image: './img/logo10.png', title: 'Windows 10', overview: 'MSDN Media Creation Tool' },
    { image: './img/logo11.png', title: 'Windows 10', overview: 'MSDN LTSC 2021' },
    { image: './img/logo12.png', title: 'Windows 10', overview: 'MSDN LTSB 2016' },
];

const Main = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleArticleClick = (index) => {
        navigate(`/article/${index}`);
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header/>
            <Sliders/>
            <h1 className='title'>Тут мы вам расскажем все о компьютерах и не только!</h1>
            <p className='page-main'>Ждем ваш отзыв на сайте</p>
            <div className="research">
                <input 
                    type="text" 
                    placeholder="Поиск по сайту..." 
                    className="search-bar-2"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            <h1 className='title-version'>Версии ОС</h1>
            <p className='page-version'>Операционные системы</p>
            <div className="news-container">
                {filteredArticles.map((article, index) => (
                    <div 
                        className="news-item" 
                        key={index} 
                        onClick={() => handleArticleClick(index)}
                    >
                        <img src={article.image} alt="Article" className="news" />
                        <h2 className="news-title">{article.title}</h2>
                        <div className="news-tags">
                            <span className="tag">{article.overview}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default Main;
