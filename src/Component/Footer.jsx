const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="about-site">
                <h1>О сайте</h1>
                <p>Картинки</p>
                <p>Команда</p>
            </div>
            <div className="catalog-block">
                <h1>Каталог</h1>
                <p>Программы</p>
                <p>Патчи</p>
                <p>Версии ОС</p>
            </div>
            <div className="video">
                <h1>Видео</h1>
                <a href="https://youtu.be/0dKspmIrBg0?si=HYtxD8HIfUXenyL6" target="_blank" rel="noopener noreferrer"><p>Как удалить вирусы на Windows 10 лучшая программа для удаления вирусов?</p></a>
                <a href="https://youtu.be/xTmHeXA74Q4?si=S3dHPjO6Kjv0ImIX" target="_blank" rel="noopener noreferrer"><p>Нужный набор программ и компонентов для твоего ПК?</p></a>
                <a href="https://youtu.be/LW4TMPBywKA?si=CCFgjt8uw-Sda2IR" target="_blank" rel="noopener noreferrer"><p>Дискорд нагружает ПК что делать падает фпс в игре из-за Дискорда?</p></a>
            </div>
            <div className="contact-block">
                <h1>Мы в социальных сетях</h1>
                <div className="social">
                   <a href="https://t.me/misha_feniks" target="_blank" rel="noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg></a> 
                   <a href="https://www.youtube.com/@Lifesofter/" target="_blank" rel="noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg></a>
                   <a href="tel:+380685929820"  target="_blank" rel="noreferrer"><svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></a>
                </div>
                <p>+380685929820</p>
                <p>По будням с 11:00 до 18:00<br />По выходным с 11:00 до 16:00</p>
            </div>
        </div>
        </>
    );
}

export default Footer;