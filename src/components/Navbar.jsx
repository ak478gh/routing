
import {Link, NavLink} from 'react-router-dom';

export default function Navbar() {

    const style = {
        backgroundColor: 'pink',
        padding: '10px',
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
        </div>
    )
}