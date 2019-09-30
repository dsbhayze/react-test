import React, { Component } from 'react';
import '../style/Common.css';

export default class Starred extends Component {
    
    formatDate(date){
        let newDate = new Date(date).toLocaleDateString();
        return newDate;
    }

    formatHtml() {
        const repoList = this.props.resultStarred.map((repo, i) => {
            return <li key={i} className="forEach-topic-style-content col-md-12">
                <div className="col-md-3">
                    <p>Name: {repo.name}</p>
                    <p>Id: {repo.id}</p>
                    <p>Full name: {repo.full_name}</p>
                    <p>Private: {repo.private}</p>
                </div>
                <div className="col-md-3">
                    <p>Has Issues: {repo.has_issues}</p>
                    <p>Watchers: {repo.watchers}</p>
                    <p>Language: {repo.language}</p>
                </div>
                <div className="col-md-6">
                    <p>Create at: {this.formatDate(repo.created_at)}</p>
                    <p>Update at: {this.formatDate(repo.updated_at)}</p>
                    <p>Clone Url: {repo.clone_url}</p>
                    <p>Description: {repo.description}</p>
                </div>
            </li>;
        })
        return <ul className="forEach-topic-style col-md-12">{repoList}</ul>;
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.props.resultStarred.length >= 1?
                    <div className="row topic-style col-md-12">
                        <div className="col-md-10 title-repo">
                            Starred Repositories
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="close-btn pull-right" aria-label="" onClick={()=> this.props.closeFunction()}>
                                <span aria-hidden="true" className="x-icon">&times;</span>
                            </button>
                        </div>
                        {
                            this.formatHtml()
                        }
                    </div>
                    :<div className="col-md-12 not-found-msg text-center">
                        <p>Sorry, this user don't starred no one... Come on...</p>
                        <p>:(</p>
                    </div>
                    }
                </div>
            </div>
        )
    }
}