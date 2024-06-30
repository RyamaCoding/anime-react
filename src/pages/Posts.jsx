import React, { useEffect, useState } from "react";
import "./Pages.css";
import Image from "../assets/revenge-girl-nightime.jpg";
import Logo from "../assets/rc_logo_black.png";
import Search from "../assets/magnifying-glass-solid.svg";
import Spinner from "../assets/spinner-solid.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Posts = () => {
    const location = useLocation();
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState('')

    const getQueryParameter = (param) => {
        return new URLSearchParams(location.search).get(param);
    }
  
    async function fetchAnime(query) {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
            setCards(data.data);
            console.log(data.data);
        } 

        useEffect(() => {
            const initialQuery = getQueryParameter('search') || '';
            setSearch(initialQuery);
            fetchAnime(initialQuery);
        }, [location.search]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAnime(search);
    }

  let navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${Image})`,
  };

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
                            <a
                                onClick={() => navigate("/")}
                                className="nav__text nav__text-effect--white"
                            >
                                {" "}
                                <span className="white">Home</span>
                            </a>
                        </li>
                        <li className="nav__link">
                            <a href="#" className="nav__text nav__text-effect--white">
                                {" "}
                                <span className="white">Find your anime</span>
                            </a>
                        </li>
                        <li className="nav__link">
                            <button
                                href=""
                                id="contactButton"
                                className="btn__contact--anime"
                            >
                                CONTACT
                            </button>
                        </li>
                    </ul>

                    {/* <button className="btn__menu">
                        <i className="fas fa-bars white-bars"></i>
                    </button>
                    <div className="menu__backdrop--anime">
                        <button className="btn__menu btn__menu--close">
                            <i className="fas fa-times"></i>
                        </button>
                        <ul className="menu__links">
                            <li className="menu__list">
                                <a href="index.html" className="menu__link nav__text-effect3">
                                    Home
                                </a>
                            </li>
                            <li className="menu__list">
                                <a href="#anime" className="menu__link nav__text-effect3">
                                    Find your anime
                                </a>
                            </li>
                            <li className="menu__list">
                                <a
                                    href="#"
                                    className="menu__link no-cursor nav__text-effect3"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>

                <div className="nav__description">
                    <h2 className="landing__sub-title nav__sub-title">
                        Find the <span className="white2">anime</span> of your{" "}
                        <span className="white2">choice</span>
                    </h2>
                    <form action="" className="landing__form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search for your favourite animes here"
                            className="landing__search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit" id="search-button" className="landing__btn" onClick={handleSearch}>
                            <img className="btn__img" src={Search} alt="Search" />
                            <img className="btn__img--loading" src={Spinner} alt="Loading" />
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        <section id="anime">
            <div className="anime__row">
                <div className="card__wrapper">
                    {cards && cards.length > 0 ? (
                        cards.map((card, index) => (
                            <div className="card" key={`${card.mal_id}-${index}`}>
                                <a href={card.url} target="_blank">
                                    <img
                                        src={card.images.jpg.image_url}
                                        alt="anime-image"
                                        className="card__img"
                                    />
                                </a>
                                <div className="card__content">
                                    <h2 className="card__title">{card.title ? card.title : "N/A"}</h2>
                                    <p className="card__para">
                                        <b>Year:</b> {card.year ? card.year : "N/A"}
                                    </p>
                                    <p className="card__para">
                                        <b>Episodes:</b> {card.episodes ? card.episodes : "N/A"}
                                    </p>
                                    <p className="card__para">
                                        <b>Rank:</b> {card.rank ? card.rank : "N/A"}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No cards found.</p>
                    )}
                </div>
            </div>
        </section>
    </div>
);
};

export default Posts;
