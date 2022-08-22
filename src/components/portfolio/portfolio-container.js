import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";



export default class PortfolioContainer extends Component{
    // State
    // Lifecycle hooks
   
    constructor(){
        super();
       console.log("Portfolio cintainer has rendered")  
       
       this.state={
        pageTitle:"Welcome to my portfolio",
        data: [
            {title: "Quip"},
            {title: "Eventbrite"},
            {title: "Ministry Safe"},
            {title: " One word"}
        ]
       };
       this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    


    portfolioItems(){
        

        return this.state.data.map(item => {
            return <PortfolioItem  title={item.title} url={"google.com"}/>;
        })
    }

    handlePageTitleUpdate(){
        this.setState({
            pageTitle:"My project"
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>
                <button onClick={this.handlePageTitleUpdate}>
                    Change Title
                </button>
        
            </div>
        )
    }
}