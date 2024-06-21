import React from 'react';
import '../index.css'; 

const Donation = () => {
    return (
        <div className="donation-container">
            <h2>Donation Information</h2>
            <div className="donation-details">
                <div className="card-info">
                    <h3>Карта Сбербанк (VISA):</h3>
                    <p>2202 2017 9294 6226</p>
                </div>
                <div className="card-info">
                    <h3>Карта Приват24 (MasterCard):</h3>
                    <p>4149 6090 0160 1931</p>
                </div>
                <div className="links">
                    <h3>Ссылки:</h3>
                    <p>ЮMoney (Яндекс Деньги)</p>
                    <p>Qiwi</p>
                    <p>Приват24</p>
                </div>
                <div className="crypto">
                    <h3>Bitcoin:</h3>
                    <p>1FZkeqrCCQWzJ61C9rxj5314rds2Kum1Vk</p>
                </div>
                <div className="crypto">
                    <h3>Ethereum:</h3>
                    <p>0xDeFa935A46d260C61Ba549A8099222465ba35265</p>
                </div>
            </div>
        </div>
    );
}

export default Donation;
