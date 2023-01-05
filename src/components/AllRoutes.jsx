import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Users from '../pages/Users';
import SingleUserPage from '../pages/SingleUserPage';
import NotFound from '../pages/NotFound';
import PrivateRoutes from './PrivateRoutes';
import Login from '../pages/Login';

export default function AllRoutes() {
    return (
        <>
        <Routes>
            {/* public */}
            <Route path='/' element={<Home/>}/>
            {/* public */}
            <Route path='/about' element={<About/>}/>
            {/* public */}
            <Route path='/contact' element={<Contact/>}/>
            {/* public */}
            <Route path='/login' element={<Login/>}/>
            {/* private */}
            <Route path='/users' element={
                <PrivateRoutes>
                    <Users/>
                </PrivateRoutes>
            } />
            {/* private */}
            <Route path='/users/:user_id' element={
                <PrivateRoutes>
                    <SingleUserPage/>
                </PrivateRoutes>
            }/>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
    )
}