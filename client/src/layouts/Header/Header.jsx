import Carousel from '../../components/Carousel/Carousel';
import './Header.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import Casks from '../../components/Carousel/Images/Casks.jpg'

export default function Header() {
   
    return (
        <div className='header'>
            <Link to='/'>
            <img className='logo' src={Logo} alt='' />
            </Link>
            <img className='header_img' src={Casks} alt='' />
        </div>
    )
}
