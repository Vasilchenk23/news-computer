import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Footer from './Footer';

const articles = [
    { 
        image: '/img/logo.png', 
        title: 'Windows 11 22H2', 
        overview: 'V2 MSDN 6e3 TPM2.0', 
        content: 'Это последняя версия Windows 11, включающая улучшенную поддержку TPM 2.0 и новые функции.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo2.png', 
        title: 'Windows 11 22H2', 
        overview: 'X64-v2 MSDN', 
        content: 'Windows 11 22H2 для 64-битных систем, включающая новые возможности и исправления.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo3.png', 
        title: 'Windows 7 Thin PC', 
        overview: 'X86 Thin PC', 
        content: 'Windows 7 Thin PC - это специальная версия Windows 7 для слабых или виртуальных машин с архитектурой x86.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo4.png', 
        title: 'Windows 7 plus office 2016', 
        overview: 'SP1 2019 by SmokieBlahBlah', 
        content: 'Windows 7 с интегрированным обновлением SP1 2019 и пакетом Office 2016 от SmokieBlahBlah.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo5.png', 
        title: 'Windows 10 official 22H2', 
        overview: 'X64-x86 MSDN', 
        content: 'Официальная версия Windows 10 22H2 для 64-битных и 32-битных систем с поддержкой MSDN.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo6.png', 
        title: 'Windows 8.1', 
        overview: 'Embedded Industry Pro', 
        content: 'Windows 8.1 Embedded Industry Pro - версия операционной системы для встраиваемых решений и IoT.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo7.png', 
        title: 'Windows 7', 
        overview: 'MSDN X64', 
        content: 'Windows 7 от MSDN для 64-битных систем.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo8.png', 
        title: 'Windows XP', 
        overview: 'Professional SP3 MSDN', 
        content: 'Windows XP Professional SP3 от MSDN - одна из самых известных версий Windows.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo9.png', 
        title: 'Windows 10', 
        overview: 'MSDN X64/86 LTSC 2019', 
        content: 'Windows 10 LTSC 2019 от MSDN для 64-битных и 32-битных систем.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo10.png', 
        title: 'Windows 10', 
        overview: 'MSDN Media Creation Tool', 
        content: 'Windows 10 от MSDN с инструментом создания медиа для установки.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo11.png', 
        title: 'Windows 10', 
        overview: 'MSDN LTSC 2021', 
        content: 'Windows 10 LTSC 2021 от MSDN - долгосрочная поддержка для корпоративных клиентов.',
        downloadLink: 'https://drive.google.com' 
    },
    { 
        image: '/img/logo12.png', 
        title: 'Windows 10', 
        overview: 'MSDN LTSB 2016', 
        content: 'Windows 10 LTSB 2016 от MSDN - стабильная версия для специфических нужд.',
        downloadLink: 'https://drive.google.com' 
    },
];
const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles[id];

    if (!article) {
        return <div>Статья не найдена</div>;
    }

    return (
        <>
        <Header/>
            <div className="article-detail" style={{textAlign:'center'}}>
                <img src={article.image} alt="Article" className="article-image" />
                <h2 className="article-title">{article.title}</h2>
                <p className="article-overview">{article.overview}</p>
                <p>{article.content}</p>
                <a href={article.downloadLink} target="_blank" rel="noopener noreferrer"><button style={{cursor:'pointer'}} className='download-link'>Скачать материалы</button></a>
            </div>
        <Footer/>
        </>
    );
}

export default ArticleDetail;
