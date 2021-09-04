import '../styles/Style.css';
import React, {Component} from 'react';
import illustration_hero from '../images/illustration-hero.svg';
import music_icon from '../images/icon-music.svg';

class Hero extends Component {
    render() {
        return (
            <div className="hero_container">
                <img src={illustration_hero} alt='Banner image' className="hero_image"/>

                <div className="hero_text">
                    <div className="hero-text-container">
                        <h1>
                            Order Summary
                        </h1>

                        <p>
                            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like !
                        </p>

                        <div className="resume-container">
                            <img src={music_icon} alt="Logo music" className="resume-detail-image"/>

                            <div className="resume-detail">
                                <h2>
                                    Annual Plan
                                </h2>
                                <p>
                                    $59.99/year
                                </p>
                            </div>

                            <a href="https://valentinmarguerie.fr" target="_blank" className="resume-detail-link">Change</a>
                        </div>

                        <div className="button_container">
                            <button className="payment-button">
                                Proceed to Payment
                            </button>

                            <button className="cancel-button">
                                Cancel Order
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;