import React from 'react';
import KeenKeeper from '../../assets/logo-xl.png';
import instapic from '../../assets/instagram.png';
import fbpic from '../../assets/facebook.png';
import twitterpic from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div className='bg-teal-800 text-center py-6 space-y-10'>
            <div className='space-y-2'>
                <img className='mx-auto' src={KeenKeeper} alt="" srcset="" />
                <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h4 className='text-xl text-white font-bold'>Social Links</h4>
                <div className='flex justify-center gap-4'>
                    <img src={instapic} alt="" srcset="" />
                    <img src={fbpic} alt="" srcset="" />
                    <img src={twitterpic} alt="" srcset="" />
                </div>
            </div>
            <hr className='text-emerald-700 container mx-auto'/>
            <div className='text-white flex justify-between container mx-auto'>
                <p>© 2026 KeenKeeper. All rights reserved. </p>
                <div className='flex justify-between gap-10'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;