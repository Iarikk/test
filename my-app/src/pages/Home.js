import React, { Component } from 'react';
import './Home.css'; // Подключение стилей для страницы
import logo from '../components/images/logo.svg'; // Импорт изображения

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="image-blocks">
                    {/* Изображение добавлено с помощью тега img */}
                    <img src={logo} alt="Your Alt Text" />
                    <img src={logo} alt="Your Alt Text" />
                    <img src={logo} alt="Your Alt Text" />
                </div>
                <button className="start-button">Начать с нами</button>
            </div>
        );
    }
}