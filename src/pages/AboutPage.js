import React from 'react';
import Hero from '../components/Hero';
import abouteme from '../assets/images/about-us.png';
import des from '../components/des';


const AboutPage = () =>{

    return (
        <>
            <Hero
                title="Be Relentless"
                imgsrc={abouteme}
                subtitle=
                "
                I'm constantly learning new things. currently those things include gaining more experience with MongoDB,
                React, Express JS, and Node JS. When I'm not learning something new chances are I'm creating some Blogs and YouTube videos.
                "
                link='/skills'
                btn='My Skills' 
                des={des}
                 />  
        </>
    );

}

export default AboutPage;