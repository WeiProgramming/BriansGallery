import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './title';
import MenuBar from './menubar';
import GalleryList from './gallerylist';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomQuote: "Placement quote here",
            pictures: ["https://images.unsplash.com/photo-1506621595993-13649da1c1a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec151e51dbfaa78d5ede0139864eefe9&auto=format&fit=crop&w=1955&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1508709145194-8fec9fa2102b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0651db87a489e855e6d70a687b77722&auto=format&fit=crop&w=1963&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3694576331e527eb0933b269a6fc40fb&auto=format&fit=crop&w=945&q=80",
            ]
        };
    }

    render() {
        return (
            <div className="container">
                <Title quote = {this.state.randomQuote} pictures = {this.state.pictures}/>
                <hr />
                <MenuBar />

            </div>
        );
    }
}
