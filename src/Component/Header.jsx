const Header = () => {
    return (
        <>
        <div className="top-header">
            <div className="topic">
                <p>О сайте</p>
                <p>Отзывы</p>
                <p>Статьи</p>
                <p>Ответы на вопросы</p>
                <p></p>
            </div>
            <div className="contact">
                <img src="" alt="" />
                <p className="phone-number">+380685929820</p>
            </div>
        </div>
        <div className="header">
            <div className="left-block">
                <img src="" alt="logo" className="logo" />
                <div className="catalog">Каталог</div>
            </div>
            <div className="right-block">
                <input placeholder="Поиск статей" type="text" name="" id="" />
                <img src="" alt="search" className="search" />
            </div>
        </div>
        </>
    );
}

export default Header;
