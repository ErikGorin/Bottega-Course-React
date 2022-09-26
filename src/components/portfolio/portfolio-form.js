import axios from "axios";
import React , { Component } from "react";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css"
import "../../../node_modules/dropzone/dist/min/dropzone.min.css"

export default class PortfolioForm extends Component{
    constructor(props){
        super(props);

        this.state={
            name:"",
            description:"",
            category: "eCommerce",
            posision:"",
            url: "",
            thumb_image:"",
            banner_image: "",
            logo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig= this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
    }
    componentConfig(){
        return{
            iconFiletypes: [".jpg",".png"],
            showFiletypeIcon:true, 
            postUrl: "https://httpbin.org/post"
        }
    }
    djsConfig(){
        return{
            addRemoveLinks:true,
            mixFiles:1
        }
    }

    buildForm(){
        let formData = new FormData();
        formData.append("portfolio_items[name]",this.state.name);
        formData.append("portfolio_items[description]",this.state.description);
        formData.append("portfolio_items[url]",this.state.url);
        formData.append("portfolio_items[category]",this.state.category);
        formData.append("portfolio_items[position]",this.state.posision);

        return formData;
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        axios.post(
            "https://karl.devcamp.space/portfolio/portfolio_items",
            this.buildForm(),
            {withCredentials: true}
        ).then(response=>{
            this.props.handleSuccsessfulFormSubmission(response.data.portfolio_item);
            console.log("response", response);
        }).catch(error =>{
            console.log("portfolio form handleSubmit error", error);
        });
        
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>PortfolioForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                                name="name"
                                placeholder="Portfolio Item Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        
                        <input type="text"
                                name="url"
                                placeholder="URL"
                                value={this.state.url}
                                onChange={this.handleChange}
                            />
                    </div>
                    <div>
                        <input type="text"
                                name="position"
                                placeholder="Position"
                                value={this.state.posision}
                                onChange={this.handleChange}
                            />
                        
                        <select 
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                            >
                                <option value="eCommerce">eCommerce</option>
                                <option value="Scheduling">Scheduling</option>
                                <option value="Enterprise">Enterprise</option>
                        </select>
                    </div>
                    <div>
                    <textarea
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                    </div>

                    <div className="image-uploaders">
                        <DropzoneComponent
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                        />
                    </div>

                    <div>
                        <button type="submit">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}