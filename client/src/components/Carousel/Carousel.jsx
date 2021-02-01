import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Bottles from './Images/Bottles.jpg';
import Casks from './Images/Casks.jpg';
import Glasses from './Images/Glasses.jpg';
import Sign from './Images/Sign.jpg';
import './Carousel.css';

const Carousel = () => {
    const items = [
        <img className='header-image' src={Bottles} alt='Bottles' />,
        <img className='header-image' src={Casks} alt='Casks' />,
        <img className='header-image' src={Glasses} alt='Glasses' />,
        <img className='header-image' src={Sign} alt='Sign' />
    ];

    return (
            <AliceCarousel
                className='carousel-images'
                items={items}
                animationType='fadeout'
                animationDuration='500'
                autoPlayInterval='5000'
                disableDotsControls='true'
                disableButtonsControls='true'
                infinite='true'
            />
    );
}

export default Carousel;