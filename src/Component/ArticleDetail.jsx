import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Sliders from './Sliders';

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
    const styles = {
        articleDetail: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '200px',
            backgroundColor: '#1E1E1E',
            color: '#FFFFFF',
            marginTop:'100px'
        },
        leftSection: {
            flex: 1,
            textAlign: 'center',
            padding: '20px',
        },
        rightSection: {
            flex: 1,
            textAlign: 'left',
            padding: '20px',
        },
        articleImage: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
        },
        articleTitle: {
            fontSize: '24px',
            margin: '20px 0',
        },
        articleOverview: {
            fontSize: '18px',
            margin: '10px 0',
        },
        articleContent: {
            fontSize: '16px',
            margin: '10px 0',
        },
        downloadButton: {
            padding: '10px 20px',
            fontSize: '16px',
            color: '#FFFFFF',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none',
        }
    };
    

    return (
        <>
         <Header />
         <Sliders/>
            <div className="article-detail" style={styles.articleDetail}>
                <div style={styles.leftSection}>
                    <img src={article.image} alt="Article" style={styles.articleImage} />
                </div>
                <div style={styles.rightSection}>
                    <h2 style={styles.articleTitle}>{article.title}</h2>
                    <p style={styles.articleOverview}>{article.overview}</p>
                    <p style={styles.articleContent}>{article.content}</p>
                    <a href={article.downloadLink} target="_blank" rel="noopener noreferrer">
                        <button style={styles.downloadButton}>Скачать материалы</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ArticleDetail;
