import React from 'react';

import Card from '../components/Card';

import blog from '../assets/images/blog.jpg';
import youtube from '../assets/images/youtube.png';
import github from '../assets/images/github.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Blog ',
                    subTitle: 'Technical Blogs',
                    imgSrc: blog,
                    link: 'https://nexavblog.blogspot.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Umesh Prajapati',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'for developers',
                    imgSrc: github,
                    link: 'https://github.com/Umesh11032000',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around col-12 mx-auto">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;