import React, { useState } from 'react'
import './Pages.css'
import Image from '../assets/megumipng.gif'
import Logo from '../assets/rc_logo_black.png'
import Search from '../assets/magnifying-glass-solid.svg'
import Spinner from '../assets/spinner-solid.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  let navigate = useNavigate()

  const fetchAnime = async (query) => {
    try {
      const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
      setCards(data.data);
      console.log(data.data);
      navigate(`/posts?search=${search}`);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleHomeClick = () => {
    toggleMenu();
    navigate('/')
  }

  return (
    <div>
      <nav className="nav__bar">
        <div className="content-wrapper">
          <a href="https://github.com/RyamaCoding">
            <img src={Logo} className="personal__logo" alt="GitHub" />
          </a>
          <ul className="nav__list">
            <li className="nav__link">
              <a href="#" className="nav__text nav__text-effect"> <span className="blue">Home</span></a>
            </li>
            <li className="nav__link">
              <a href="/posts" className="nav__text nav__text-effect2">Find your anime</a>
            </li>
            <li className="nav__link">
              <button id="contactButton" className="btn__contact">CONTACT</button>
            </li>
          </ul>

          <button className="btn__menu" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <div className={`menu__backdrop ${menuOpen ? 'menu--open' : ''}`}>
        <ul className="menu__links">
          <li className="menu__list"><a href="#" className="menu__link nav__text-effect3" onClick={handleHomeClick}>Home</a></li>
          <li className="menu__list"><a href="/posts" className="menu__link nav__text-effect3">Find your anime</a></li>
          <li className="menu__list"><a href="#" className="menu__link no-cursor nav__text-effect3">Contact</a></li>
        </ul>
        <button className="btn__menu--close" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <section id="landing-page">
        <div className="container">
          <div className="landing__box">
            <div className="landing__description">
              <h1 className="landing__title">Welcome to the UK's #1 anime search engine</h1>
              <h2 className="landing__sub-title">Find the <span className="blue2">anime</span> of your <span className="blue2">choice</span></h2>
              <form onSubmit={handleSearch} className="landing__form">
                <input type="text" name="search" id="search-input" placeholder="Search for your favourite animes here" className="landing__search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button type="submit" id="search-button" className="landing__btn btn__loading">
                  <img className="btn__img" src={Search} alt=""></img>
                  <img className="btn__img--loading" src={Spinner} alt=""></img>
                </button>
              </form>
            </div>
            <img src={Image} alt="" className="landing__img" />
          </div>
        </div>
      </section>

      {/* Add your modal component here */}
      {/* Example: <Modal onClose={closeModal} /> */}
    </div>
  )
}

export default Home
