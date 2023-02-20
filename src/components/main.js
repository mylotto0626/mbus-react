import React, { Component } from 'react';
import ImageCard from './imagecard';
import ImageFilter from './imagefilter'
import ImageItems from "./imageitems";
import Footer from './Footer';

class main extends Component {
    render() {
        return (
            <div id='page'>
                <ImageCard/>
                <ImageFilter/>
                <ImageItems/>
                <div className=''></div>
                <Footer/>
            </div>
        );
    }
}

export default main;