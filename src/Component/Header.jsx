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
                <div class="navigation-block">
                    <div class="nav-item">
                        <div class="icon programs-icon"></div>
                        <div class="text">Программы</div>
                    </div>
                    <div class="nav-item">
                        <div class="icon patches-icon"></div>
                        <div class="text">Патчи</div>
                    </div>
                    <div class="nav-item os-version">
                        <div class="icon os-icon"></div>
                        <div class="text">Версии ОС</div>
                    </div>
                </div>
            </div>
            <div className="right-block">
                <input type="text" placeholder="Поиск по сайту..." class="search-bar"/>
            </div>
        </div>
        </>
    );
}

export default Header;
