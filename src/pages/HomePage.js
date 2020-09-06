import React from 'react';
import Hero from '../components/Hero';
import banner from '../assets/images/home-right.png';

const HomePage = () => {

    return (
        <div>
            <Hero
                title="Hello, I am Umesh"
                imgsrc={banner}
                subtitle="I am a web developer"
                link='/about'
                btn='About Me'
            />
        </div>

    );
}

export default HomePage;