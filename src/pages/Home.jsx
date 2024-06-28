import React from 'react'
import './Pages.css'
import Image from '../assets/megumipng.gif'
import Logo from '../assets/rc_logo_black.png'
import Search from '../assets/magnifying-glass-solid.svg'
import Spinner from '../assets/spinner-solid.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()

  return (
<div>
    <nav class="nav__bar">
      <div class="content-wrapper">
        <a href="https://github.com/RyamaCoding" target="_blank">
          <img src={Logo} class="personal__logo" alt="GitHub" />
        </a>
        <ul class="nav__list">
          <li class="nav__link">
            <a href="#" class="nav__text nav__text-effect"> <span class="blue">Home</span></a>
          </li>
          <li class="nav__link">
            <a onClick={() => navigate('/posts')} class="nav__text nav__text-effect2">Find your anime</a>
          </li>
          <li class="nav__link">
            <button href="" id="contactButton" onclick="showErrorMessage()" class="btn__contact">CONTACT</button>
          </li>
        </ul>

      <button class="btn__menu" onclick="openMenu()">
        <i class="fas fa-bars"></i>
      </button>
      <div class="menu__backdrop">
        <button class="btn__menu btn__menu--close" onclick="closeMenu()">
          <i class="fas fa-times"></i>
        </button>
        <ul class="menu__links">
          <li class="menu__list"><a href="#" class="menu__link nav__text-effect3" onclick="closeMenu()">Home</a></li>
          <li class="menu__list"><a onClick={() => navigate('/posts')} class="menu__link nav__text-effect3" onclick="closeMenu()">Find your anime</a></li>
          <li class="menu__list"><a href="#" class="menu__link no-cursor nav__text-effect3" onclick="closeMenu()">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

    <section id="landing-page">
      <div class="container">
        <div class="landing__box">
          <div class="landing__description">
            <h1 class="landing__title">Welcome to the UK's #1 anime search engine</h1>
            <h2 class="landing__sub-title">Find the <span class="blue2">anime</span> of your <span class="blue2">choice</span></h2>
            <form action="anime.html" method="GET" class="landing__form">
              <input type="text" name="search" id="search-input" placeholder="Search for your favourite animes here" class="landing__search"></input>
              <button type="submit" id="search-button" class="landing__btn btn__loading" onclick="startLoading()">
                <img class="btn__img" src={Search}></img>
                <img class="btn__img--loading" src={Spinner} alt=""></img>
              </button>
            </form>
          </div>
          <img src={Image} alt="" class="landing__img" />
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home
