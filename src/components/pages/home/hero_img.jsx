import React, { Component } from 'react';
import HeroImgCard from '../../mixins/heroImage/hero_img_card';

class HeroImg extends Component {
    constructor(props) {
        super();
        this.imageMove = this.imageMove.bind(this);
        this.state = {
            top: '0px'
        };
    }

    render() {
        return (
            <section
                id="hero-img"
                className="wrapper"
                style={{
                    backgroundPositionY: this.state.top
                }}
            >
                <div className="">
                    <div className="site-branding">
                        <h1>Welcome to The Place <br/>Where Creativity Begins.</h1>
                    </div>
                    <div id="front-panel">
                        {this.props.articles.map(article => <HeroImgCard key={article.title} article={article}/>)}
                    </div>
                </div>
            </section>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.imageMove);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.imageMove);
    }

    imageMove() {
        const top = window.scrollY / 1.2;
        this.setState({
            top: top
        });
    }
}

export default HeroImg;
