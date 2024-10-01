import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pizza from '../assets/pizza.png'
import steak from '../assets/steak.png'
import lasagna from '../assets/lasagna.png'
import icecream from '../assets/icecream.png'
import pancakes from '../assets/pancakes.png'
import knicks from '../assets/knicks.png'
import yankees from '../assets/yankees.png'
import rangers from '../assets/rangers.png'
import buffalo from '../assets/buffalo.png'
import jets from '../assets/jets.png'
import hobbies from '../assets/hobbies.png'

export const Hobbies = () => {

    const foodItems = [
        <div><img style={{ height: '430px' }} src={pizza} alt="Pizza" /></div>,
        <div><img style={{ height: '430px' }} src={lasagna} alt="Lasagna" /></div>,
        <div><img style={{ height: '430px' }} src={steak} alt="Skirt Steak" /></div>,
        <div><img style={{ height: '430px' }} src={icecream} alt="Vanilla icecream" /></div>,
        <div><img style={{ height: '430px' }} src={pancakes} alt="Pancakes" /></div>,
    ];
    
    const sportItems = [
        <div><img style={{ height: '430px' }} src={knicks} alt="The New York Knicks" /></div>,
        <div><img style={{ height: '430px' }} src={jets} alt="New York Jets" /></div>,
        <div><img style={{ height: '430px' }} src={yankees} alt="New York Yankees" /></div>,
        <div><img style={{ height: '430px' }} src={buffalo} alt="Buffalo Bills" /></div>,
        <div><img style={{ height: '430px' }} src={rangers} alt="New York Rangers" /></div>,
]
    
        const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            },
        };
    return (
        <div>
            <div className="hobbies-img-container">
            <img className = "hobbies-title" src={hobbies} alt="Hobbies Text" />
            </div>
            <div className="foods-teams-header">
                <h2>favorite foods</h2>
                <h2>favorite sports teams
                </h2>
            </div>
            
            <div className = "carousel-container">
                <Carousel responsive={responsive} infinite={true} className = "carousel">{foodItems}</Carousel>
                <div className="hobbies-text">
                    <p> going to the gym </p>
                    <p> watching basktball/football </p>
                    <p> exploring the city </p>
                    <p> trying out new restaurants</p>
                </div>
                <Carousel responsive={responsive} infinite={true} className = "carousel2">{sportItems}</Carousel>
            </div>
        </div>
    )
}