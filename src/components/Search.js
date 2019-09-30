import React, { Component } from 'react';
import Requests from '../services/Requests';
import '../style/Search.css';

export default class Search extends Component {

    constructor(props){
        super(props);
        this.requests = new Requests();
        this.state = {
            profileSearch: ""
        }
    }

    async searchProfiles(){
        this.props.clearAll();
        const query = this.state.profileSearch;
        const resp = await this.requests.getProfile(query);
        this.props.handleGenerate(resp);
    }

    updateState = (e) => {
        this.setState({profileSearch:e.target.value})
    }

    render() {
        return (
            <div className="Search">
              <input id="idProfile" value={this.state.profileSearch} onChange={this.updateState} className="form-control" placeholder="Enter with the profile"></input>
              <button className="btn-info" onClick={() => {this.searchProfiles()}}>Search</button>
            </div>
        );
    }
}