import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Bottles from './Images/Bottles.jpg';
import Casks from './Images/Casks.jpg';
import Glasses from './Images/Glasses.jpg';
import Sign from './Images/Sign.jpg';

const Carousel = () => {
    const items = [
        <img src={Bottles} alt='Bottles' />,
        <img src={Casks} alt='Casks' />,
        <img src={Glasses} alt='Glasses' />,
        <img src={Sign} alt='Sign' />
    ];

    return (
        <div className="carousel-images">
            <AliceCarousel
                items={items}
                animationType='fadeout'
                animationDuration='500'
                autoPlayInterval='5000'
                disableDotsControls='true'
                disableButtonsControls='true'
                infinite='true'
            />
        </div>
    );
}

export default Carousel;