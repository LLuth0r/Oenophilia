import React from 'react'
import Carousel from '../../components/Carousel/Carousel';
import './Header.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import Bottles from '../../components/Carousel/Images/Bottles.jpg';
import Casks from '../../components/Carousel/Images/Casks.jpg';
import Glasses from '../../components/Carousel/Images/Glasses.jpg';
import Sign from '../../components/Carousel/Images/Sign.jpg';

export default function Header() {
   
    return (
        <div className='header'>
            <img src={Casks} alt='' className='header-image' />
        </div>
    )
}
