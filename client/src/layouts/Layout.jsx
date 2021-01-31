import './Layout.css';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;

    return (
        <div className='navbar'>
            <div className='navmenu'>
            {currentUser ? (
                <>
                <div className='user'>Welcome {currentUser.username}!</div>
                <div className='navigation'>
                    <Link to='/wines' className='allwines'>
                        All Wines
                    </Link>
                    <Link className='profile' to='/profile'>
                        Profile
                    </Link>
                    <Link className='signout' to='/' onClick={handleLogout}>
                        Signout
                    </Link>
                </div>
                </>
            ) : (
                <div className='navigation'>
                    <Link to='/wines' className='allwines'>
                        All Wines
                    </Link>
                    <Link to='/login' className='navlogin'>Login</Link>
                    <Link to='/register' className='navregister'>Register</Link>
                </div>            
            )}
            </div>
            {props.children}
            <Footer />
        </div>
    )
}

