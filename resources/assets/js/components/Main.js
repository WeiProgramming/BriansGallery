import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './menubar';
import axios from 'axios';

const imageAPI = "http://localhost:8000/api/category";

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: null
        };
    } //end of constructor

    setMinMax(){
        return Math.floor(Math.random() * (700 - 300 + 1)) + 300;
    }

    componentDidMount(){
        axios.get(imageAPI).then((response)=>{
            response.data.forEach((picture)=> {
                picture.thumbnailWidth = this.setMinMax();
                picture.thumbnailHeight = this.setMinMax();
            });
            this.setState({pictures:response.data})
        });
    }

    render() {
        return (
            <div className = "container">
                <MenuBar images = {this.state.pictures}/>
            </div>
        );
    }
}