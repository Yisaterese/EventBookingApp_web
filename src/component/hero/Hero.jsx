import React from 'react';
import heroBgOverlay from '../../assets/hero-bg-overlay.png';
import heroBgUnderlay from '../../assets/hero-bg-underlay.png';
import styles from './index.css';

const Hero = () => {
        return (
            <div className="relative h-screen" style={{width:'100%', height:'100%'}}>
                    <div
                        // style={{
                        //         backgroundImage: `url(${heroBgOverlay})`,
                        //         backgroundSize: 'cover',
                        //         backgroundPosition: 'center',
                        // }}
                        className="absolute inset-0 w-full h-full opacity-50">
                    </div>
                <div className="absolute inset-0 w-full h-full"
                     style={{
                         backgroundImage: `url(${heroBgUnderlay})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                     }}
                >

                    <div style={{margin: '70px 16rem 0 150px ', fontWeight: 'bold',}}>
                        <p style={{fontSize: '2rem'}}>September 22, 2024</p>
                        <p style={{margin: '0', fontSize: '3.5rem'}}>EVENTS, MEET UPS & <br/>CONFERENCES
                        </p>
                    </div>
                    <div className="flex" style={{gap: '2rem', paddingTop: '-2rem', marginTop: '-1rem'}}>
                        <div style={{
                            fontSize: 'larger',
                            fontWeight: 'bolder',
                            margin: '70px 0 0 150px',
                            width: '8rem',
                            height: '5rem'
                        }}>
                            <p style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                margin: '0',
                                borderTopLeftRadius: '0.4rem',
                                borderTopRightRadius: '0.4rem',
                                height: '60%',
                                fontSize: '2.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>-756</p>
                            <p style={{
                                color: 'black',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0',
                                borderBottomLeftRadius: '0.4rem',
                                borderBottomRightRadius: '0.4rem',
                                height: '40%',
                                fontSize: '1.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>Days</p>
                        </div>
                        <div style={{margin: '70px 0 0 0', width: '8rem',    height: '5rem'}}>
                            <p style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                margin: '0',
                                borderTopLeftRadius: '0.4rem',
                                borderTopRightRadius: '0.4rem',
                                height: '65%',
                                fontSize: '2.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>19</p>
                            <p style={{
                                color: 'black',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0',
                                borderBottomLeftRadius: '0.4rem',
                                borderBottomRightRadius: '0.4rem',
                                height: '35%',
                                fontSize: '1.5rem', // Larger text
                                fontWeight: '750' // Very bold
                            }}>Hours</p>
                        </div>
                        <div style={{margin: '70px 0 0 0', width: '8rem', height: '5rem'}}>
                            <p style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                margin: '0',
                                borderTopLeftRadius: '0.4rem',
                                borderTopRightRadius: '0.4rem',
                                height: '65%',
                                fontSize: '2.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>25</p>
                            <p style={{
                                color: 'black',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0',
                                borderBottomLeftRadius: '0.4rem',
                                borderBottomRightRadius: '0.4rem',
                                height: '35%',
                                fontSize: '1.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>Minutes</p>
                        </div>
                        <div style={{margin: '70px 0 0 0', width: '8rem', height: '5rem'}}>
                            <p style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'black',
                                margin: '0',
                                borderTopLeftRadius: '0.4rem',
                                borderTopRightRadius: '0.4rem',
                                height: '65%',
                                fontSize: '2.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>07</p>
                            <p style={{
                                color: 'black',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0',
                                borderBottomLeftRadius: '0.4rem',
                                borderBottomRightRadius: '0.4rem',
                                height: '35%',
                                fontSize: '1.5rem', // Larger text
                                fontWeight: '700' // Very bold
                            }}>Seconds</p>
                        </div>
                    </div>


                    <div className='flex ml-4' style={{margin:'4rem 50rem 4rem  9rem', gap: '1rem' }}>

                        <button className='text-white' style={{
                            borderRadius: '1rem',
                            backgroundColor: 'black',
                            height:'3rem',
                            width:'50%',
                            fontSize: 'large'
                        }}>Book Now
                        </button>
                        <button style={{
                            height:'3rem',
                            color: 'white',
                            fontSize: 'large',
                            backgroundColor: 'transparent',
                            border: '2px solid white',
                            opacity: '1',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            borderRadius: '1rem',
                            width:'50%'
                        }}>
                            View Details
                        </button>

                    </div>

                </div>
            </div>
        );
}

export default Hero;
