import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import LatestNews from '../Components/LatestNEws.jsx';
import Navbar from '../Components/Navbar.jsx';
import LeftAside from '../Components/HomeLayout/LeftAside.jsx';
import RightAside from '../Components/HomeLayout/RightAside.jsx';
import Loading from '../Page/Loading.jsx';
const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>

            <Navbar className='w-11/12 mx-auto my-3'>

            </Navbar>

            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state == "loading" ? <Loading /> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;