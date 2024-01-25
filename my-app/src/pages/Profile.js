import React, { Component } from 'react';
import './Profile.css'; // Styles for the page
import profile from './profile.png';

export default class Profile extends Component {
  render() {
    return (
      <div className="registration-page">
        <div className="registration-container">
          <h2>Регистрация</h2>
          <form>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Электронная почта" />
            <input type="password" placeholder="Пароль" />
            <button className="projects-button">Войти</button>
          </form>
        </div>
        
        <div className="profile-image">
          <img
            src={profile}
            alt="Profile Pic"
            className="profile-pic"
          />
          <p>Text below the image</p>
        </div>
      </div>
    );
  }
}