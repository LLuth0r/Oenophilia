import Carousel from '../../components/Carousel/Carousel';
import './Header.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';


export default function Header() {
   
    return (
        <div className='header'>
            <Link to='/'>
            <img className='logo' src={Logo} alt='' />
            </Link>
            <Carousel />
        </div>
    )
}
