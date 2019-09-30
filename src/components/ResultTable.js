import React, { Component } from 'react';
import Requests from '../services/Requests';
import '../style/ResultTable.css';

export default class ResultTable extends Component {

    constructor(props) {
        super(props)
        this.requests = new Requests();
    }

    async getRepositories(){
        const {login} = this.props.resultProfile;
        const resp = await this.requests.getRepos(login);
        this.props.handlerRepos(resp);
    }

    async getStarredRepo(){
        const {login} = this.props.resultProfile;
        const resp = await this.requests.getStars(login);
        this.props.handlerStarr(resp);
    }

    render() {
        const { id, name, login, avatar_url, created_at, repos_url, followers,
            following, public_repos, public_gists } = this.props.resultProfile;
        let createAt = new Date(created_at).toLocaleDateString();
        const result = 
        (
        <div id="resultTableFoundId" className="container pt-5">
            <div className="row">
                <div className="col-md-2 col-12 image-content">
                    <img className="image" src={avatar_url} alt="Avatar"/>
                </div>
                </div>
                <div className="col-md-4 col-12">
                    <p>Id: {id}</p>
                    <p>Name: {name}</p>
                    <p>Login: {login}</p>
                    <p>Create: {createAt}</p>
                </div>
                <div className="col-md-5 col-12">
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                    <p>Public Repositories: {public_repos}</p>
                    <p>Public Gists: {public_gists}</p>
                    <p>Repository URL: <a href={repos_url} className="text-white">{repos_url}</a></p>
                </div>
                <div className="col-md-1 col-12">
                    <div className="row">
                        <div className="col-md-12 col-6">
                            <button className="btn-primary" onClick={()=> this.getRepositories()}>Repos</button>
                        </div>
                        <div className="col-md-12 col-6">
                            <button className="btn-default" onClick={()=> this.getStarredRepo()}>Starred</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );

        return (
            <div className="container">
                {this.props.resultProfile.message
                ?
                (<div id="resultTableNotFoundId" className="row">
                    <div className="col-md-12 col-12 not-found-msg text-center">
                        {this.props.resultProfile.message}
                        <p>Sorry, we really don't know this dev, try another one!</p>
                        <p>:(</p>
                    </div>
                </div>)
                :
                result}
            </div>
        )
    }
}
