import React, { useState, useEffect } from 'react';
import styles from './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="bg-white dark:bg-primary-foreground flex items-center justify-between fixed">
            <div className="flex items-center">
                <div className="flex items-center p-4">
                    <span className="text-black text-lg">{time}</span>
                    <img src="https://placehold.co/40.png" alt="User Avatar" className="rounded-full ml-4"/>
                    {/*<div className="ml-4 p-2 text-lg">*/}
                    {/*    <span className="text-white">Current Location</span>*/}
                    {/*    <div className="text-white">Lagos, Nigeria</div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className=' flex  text-black '
                 style={{width: '38rem', gap: '3rem', paddingRight: '8rem', justifyContent: 'space-between'}}>
                <p className='hover-text'>HOME</p>
                <p className='hover-text'>EVENTS</p>
                <p className='hover-text'>ABOUT</p>
                <p className='hover-text'>PAGES</p>
                <p className='hover-text'>SPEAKERS</p>
                <p className='hover-text'>BLOG</p>
                <p className='hover-text'>CONTACT</p>

            </div>
            <button
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '0.8rem',
                    borderRadius: '0.35rem',
                    marginRight: '6rem',
                    transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'green';
                    e.currentTarget.style.transform = 'rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'red';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'rotate(0deg)';
                }}
            >
                GET TICKET
            </button>


            {/*<div className="flex p-4 items-center relative">*/}

            {/*<span className="absolute left-6 top-2 text-zinc-500">🔍</span>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder="Search . . ."*/}
            {/*        className="bg-white dark:bg-black text-black dark:text-white rounded-full p-2 pl-10 focus:outline-none"*/}
            {/*        value={query}*/}
            {/*        onChange={handleInputChange}*/}
            {/*    />*/}

            {/*    <button className="text-white ml-4" onClick={handleSearch}>*/}
            {/*        <div className="h-6 w-6">*/}
            {/*            <div className="w-full h-0.5 bg-white dark:bg-black mb-1"></div>*/}
            {/*            <div className="w-full h-0.5 bg-white dark:bg-black mb-1"></div>*/}
            {/*            <div className="w-full h-0.5 bg-white dark:bg-black"></div>*/}
            {/*        </div>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar;