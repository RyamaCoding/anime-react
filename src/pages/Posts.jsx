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
    <nav className="nav__bar nav__bar--anime" style={styles}>
        <div className="nav__container">
            <div className="anime__content-wrapper">
                <a href="https://github.com/RyamaCoding" target="_blank">
                    <img src={Logo} className="anime__personal--logo" alt="GitHub" />
                </a>
                <ul className="nav__list">
                    <li className="nav__link">
                        <a onClick={() => navigate('/')} className="nav__text nav__text-effect--white"> <span className="white">Home</span></a>
                    </li>
                    <li className="nav__link">
                        <a href="#" className="nav__text nav__text-effect--white"> <span className="white">Find your anime</span></a>
                    </li>
                    <li className="nav__link">
                        <button href="" id="contactButton" className="btn__contact--anime">CONTACT</button>
                    </li>
                </ul>
                
                <button className="btn__menu" >
                    <i className="fas fa-bars white-bars"></i>
                </button>
                <div className="menu__backdrop--anime">
                    <button className="btn__menu btn__menu--close" >
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list"><a href="index.html" className="menu__link nav__text-effect3">Home</a></li>
                        <li className="menu__list"><a href="#anime" className="menu__link nav__text-effect3">Find your anime</a></li>
                        <li className="menu__list"><a href="#" className="menu__link no-cursor nav__text-effect3">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="nav__description">
                <h2 className="landing__sub-title nav__sub-title">Find the <span className="white2">anime</span> of your <span className="white2">choice</span></h2>
                <form action="" className="landing__form">
                    <input type="text" id="search-input" placeholder="Search for your favourite animes here" className="landing__search" />
                    <button type="submit" id="search-button" className="landing__btn">
                        <img className="btn__img" src={Search}></img>
                        <img className="btn__img--loading" src={Spinner} alt=""></img>
                    </button>
                </form>
            </div>
        </div>
        </nav>

        <section id="anime">
            <div className="anime__row">
                <div className="card__wrapper">
                </div>
            </div>
        </section>
</div>
  )
}

export default Posts
