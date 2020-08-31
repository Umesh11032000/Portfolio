import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Skills from '../components/Skills';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Umesh. I'm a Backend/frontend stack engineer.</p>
            
            <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS</p>

            <p>My latest project, own portfolio,  You can check it out <a href="https://google.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with React JS.</p>

            <p>When I'm not learning something new chances are I'm creating some YouTube videos. You can find those <a href="http://www.youtube.com/" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>

            <Skills />
        </div>

       
    );

}

export default AboutPage;