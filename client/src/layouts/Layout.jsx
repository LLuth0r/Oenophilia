// import './Layout.css';
import Nav from './Nav/Nav';
import UserNav from './UserNav/UserNav';
import Footer from './Footer/Footer';

export default function Layout(props) {
    
    return (
        <div className='layout'>
            {props.currentUser ? <UserNav username={props.currentUser.username}/> : <Nav />}
            <div className="layout-children">{props.children}</div>
            <Footer />
        </div>
    )
}
