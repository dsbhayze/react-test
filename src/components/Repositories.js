import React, { Component } from 'react';
import '../style/Common.css';

export default class Repositories extends Component {

    formatDate(date) {
        let newDate = new Date(date).toLocaleDateString();
        return newDate;
    }

    formatHtml() {
        const repoList = this.props.resultRepo.map((repo, i) => {
            return <li key={i} className="forEach-topic-style-content col-md-12">
                <div className="col-md-3 col-12">
                    <p>Name: {repo.name}</p>
                    <p>Id: {repo.id}</p>
                    <p>Create at: {this.formatDate(repo.created_at)}</p>
                    <p>Update at: {this.formatDate(repo.updated_at)}</p>
                </div>
                <div className="col-md-3 col-12">
                    <p>Language: {repo.language}</p>
                    <p>Watchers: {repo.watchers}</p>
                    <p>Default Branch: {repo.default_branch}</p>
                    <p>Private: {repo.private}</p>
                </div>
                <div className="col-md-6 col-12">

                    <p>Full name: {repo.full_name}</p>
                    <p>Description: {repo.description}</p>
                    <p>Url: {repo.url}</p>
                    <p>Clone Url: {repo.clone_url}</p>
                </div>
            </li>;
        })
        return <ul className="forEach-topic-style col-md-12 col-12">{repoList}</ul>;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.resultRepo.length >= 1 ?
                        <div className="topic-style col-md-12 col-12">
                            <div className="row">
                            <div className="col-md-10 col-10 title-repo">Repositories</div>
                            <div className="col-md-2 col-2">
                                <button type="button" className="close-btn pull-right" aria-label="" onClick={() => this.props.closeFunction()}>
                                    <span aria-hidden="true" className="x-icon">&times;</span>
                                </button>
                            </div>
                            {this.formatHtml()}
                            </div>
                        </div> :
                        <div className="col-md-12 col-12 not-found-msg text-center">
                            <p>Sorry, this user don't have any repository, hmmm... lazy guy...</p>
                            <p>:T</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}