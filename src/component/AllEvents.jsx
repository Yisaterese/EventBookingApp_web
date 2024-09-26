import React from 'react';
import { favoritesEvents } from '../data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './index.css';

const AllEvents = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    const handleMouseEnter = (e) => {
        e.currentTarget.classList.add('scroll-away');
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.classList.remove('scroll-away');
    };

    return (
        <div className='justify-center p-4 bg-gray-100'>
            {/*<span>ALL <span  style={{color:"blue", }}/>EVENTS</span>*/}
            {/*<div className={'flex '}>*/}
            {/*    <p className={'mr-10 font-bold text-lg'}>All</p>*/}
            {/*    <p className={'ml-10 text-[#00A6ED]'}>Event</p>*/}
            {/*</div>*/}
            <Slider {...settings} className='w-full max-w-4xl '>
                {favoritesEvents.map(event => (
                    <div key={event.id} className='p-2 justify-center pt-4'>
                        <div
                            className='bg-white shadow-md overflow-hidden event-box'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={event.image} alt={event.name}
                                 className='object-cover scroll-image ' style={{borderRadius:"1rem" ,width:'24rem',height:'24rem'}} />
                            <div className='p-4 flex items-center'>
                                <span className='block text-lg  bg-gray-500 ' style={{fontWeight:'bolder', fontSize:"xx-large"}}>{event.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AllEvents;
