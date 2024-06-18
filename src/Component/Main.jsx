import React from 'react';
import '../index.css';

const articles = [
    { image: 'image1.jpg', title: 'Article Title 1', tags: ['Tag1', 'Tag2'] },
    { image: 'image2.jpg', title: 'Article Title 2', tags: ['Tag1', 'Tag2'] },
    { image: 'image3.jpg', title: 'Article Title 3', tags: ['Tag1', 'Tag2'] },
    { image: 'image4.jpg', title: 'Article Title 4', tags: ['Tag1', 'Tag2'] },
    { image: 'image5.jpg', title: 'Article Title 5', tags: ['Tag1', 'Tag2'] },
    { image: 'image6.jpg', title: 'Article Title 6', tags: ['Tag1', 'Tag2'] },
    { image: 'image7.jpg', title: 'Article Title 7', tags: ['Tag1', 'Tag2'] },
    { image: 'image8.jpg', title: 'Article Title 8', tags: ['Tag1', 'Tag2'] },
    { image: 'image9.jpg', title: 'Article Title 9', tags: ['Tag1', 'Tag2'] },
    { image: 'image10.jpg', title: 'Article Title 10', tags: ['Tag1', 'Tag2'] },
    { image: 'image11.jpg', title: 'Article Title 11', tags: ['Tag1', 'Tag2'] },
    { image: 'image12.jpg', title: 'Article Title 12', tags: ['Tag1', 'Tag2'] },
    { image: 'image13.jpg', title: 'Article Title 13', tags: ['Tag1', 'Tag2'] },
    { image: 'image14.jpg', title: 'Article Title 14', tags: ['Tag1', 'Tag2'] },
    { image: 'image15.jpg', title: 'Article Title 15', tags: ['Tag1', 'Tag2'] },
    { image: 'image16.jpg', title: 'Article Title 16', tags: ['Tag1', 'Tag2'] },
];

const Main = () => {
    return (
        <>
            <h1 className='title'>Тут мы вам расскажем все о компьютерах и не только!</h1>
            <p className='page-main'>Ждем ваш отзыв на сайте</p>
            <div className="research">
                <input type="text" name="" id="" />
                <img src="" alt="search" className="search" />
            </div>
            <div className="news-container">
                {articles.map((article, index) => (
                    <div className="news-item" key={index}>
                        <img src={article.image} alt="Article Image" className="news-image" />
                        <h2 className="news-title">{article.title}</h2>
                        <div className="news-tags">
                            {article.tags.map((tag, tagIndex) => (
                                <span className="tag" key={tagIndex}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Main;
