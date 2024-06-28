import React from 'react'
import './Pages.css'
import Image from '../assets/revenge-girl-nightime.jpg'
import Logo from '../assets/rc_logo_black.png'
import Search from '../assets/magnifying-glass-solid.svg'
import Spinner from '../assets/spinner-solid.svg'
import { useNavigate } from 'react-router-dom'


const Posts = () => {

  let navigate = useNavigate()

const styles = {
  backgroundImage: `url(${Image})`
}

  return (
      <div id="anime__body">
    <nav class="nav__bar nav__bar--anime" style={styles}>
        <div class="nav__container">
            <div class="anime__content-wrapper">
                <a href="https://github.com/RyamaCoding" target="_blank">
                    <img src={Logo} class="anime__personal--logo" alt="GitHub" />
                </a>
                <ul class="nav__list">
                    <li class="nav__link">
                        <a onClick={() => navigate('/')} class="nav__text nav__text-effect--white"> <span class="white">Home</span></a>
                    </li>
                    <li class="nav__link">
                        <a href="#" class="nav__text nav__text-effect--white"> <span class="white">Find your anime</span></a>
                    </li>
                    <li class="nav__link">
                        <button href="" id="contactButton" onclick="showErrorMessage()" class="btn__contact--anime">CONTACT</button>
                    </li>
                </ul>
                
                <button class="btn__menu" onclick="openMenu()">
                    <i class="fas fa-bars white-bars"></i>
                </button>
                <div class="menu__backdrop--anime">
                    <button class="btn__menu btn__menu--close" onclick="closeMenu()">
                        <i class="fas fa-times"></i>
                    </button>
                    <ul class="menu__links">
                        <li class="menu__list"><a href="index.html" class="menu__link nav__text-effect3" onclick="closeMenu()">Home</a></li>
                        <li class="menu__list"><a href="#anime" class="menu__link nav__text-effect3" onclick="closeMenu()">Find your anime</a></li>
                        <li class="menu__list"><a href="#" class="menu__link no-cursor nav__text-effect3" onclick="closeMenu()">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="nav__description">
                <h2 class="landing__sub-title nav__sub-title">Find the <span class="white2">anime</span> of your <span class="white2">choice</span></h2>
                <form action="" class="landing__form" onsubmit="handleSearch(event)">
                    <input type="text" id="search-input" placeholder="Search for your favourite animes here" class="landing__search" />
                    <button type="submit" id="search-button" class="landing__btn" onclick="startLoading()">
                        <img class="btn__img" src={Search}></img>
                        <img class="btn__img--loading" src={Spinner} alt=""></img>
                    </button>
                </form>
            </div>
        </div>
        </nav>

        <section id="anime">
            <div class="anime__row">
                <div class="card__wrapper">
                </div>
            </div>
        </section>
</div>
  )
}

export default Posts
