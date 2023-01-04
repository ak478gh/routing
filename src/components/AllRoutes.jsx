import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Users from '../pages/Users';
import SingleUserPage from '../pages/SingleUserPage';
import NotFound from '../pages/NotFound';

export default function AllRoutes() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:user_id' element={<SingleUserPage/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
    )
}