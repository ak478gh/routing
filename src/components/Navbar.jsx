
import { NavLink} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';

export default function Navbar() {

    const {isAuth, logout} = useContext(AuthContext);

    const style = {
        backgroundColor: 'pink',
        padding: '10px 0px',
        display: 'flex',
        justifyContent: 'Space-around',
        textDecoration: 'none'
    }
    const defaultLinkStyle = {
        textDecoration: 'none',
        color:'black'
    }

    const activeLinkStyle = {
        textDecoration: 'none',
        color:'red'
    }

    const links = [
        {path:'/', title:'Home'},
        {path:'/contact', title:'Contact'},
        {path:'/about', title:'About'},
        {path:'/users', title:'Users'},
        {path:'/login', title:'Login'},
    ];

    return (
        <div style={style}>
            {links.map((link)=> {
                return <NavLink style={({isActive})=> {
                    return isActive ? activeLinkStyle : defaultLinkStyle;
                }} 
                key={link.path}
                to={link.path}>
                    {link.title}
                </NavLink>
            })}
            <p>Is User Authenticated: {isAuth ? 'Yes' : 'No'}</p>
            <button disabled={!isAuth} onClick={()=> logout()}>Logout</button>
        </div>
    )
}