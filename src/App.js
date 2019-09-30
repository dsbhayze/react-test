import React, { Component } from 'react';
import './style/App.css';
import Search from './components/Search';
import ResultTable from './components/ResultTable';
import Repositories from './components/Repositories';
import Starred from './components/Starred';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      profileList: null,
      profileRepo: null,
      profileStar: null
    }
  }

  generateResultTableProfile = (data) => {
    this.setState({profileList:data})
  }

  generateResultTableRepo = (data) => {
    this.setState({profileRepo:data})
  }
  generateResultsStarRepo = (data) => {
    this.setState({profileStar:data})
  }

  closeRepo = () => {
    this.setState({profileRepo:null});
  }
  closeStar = () => {
    this.setState({profileStar:null});
  }

  clearAll = () => {
    this.setState({
      profileRepo:null,
      profileStar:null
    })
  }

  render() {
    return(
    <div className="App">
      <Search 
          handleGenerate = {this.generateResultTableProfile}
          resultRepo = {this.state.profileRepo}
          resultStarred = {this.state.profileStar}
          clearAll = {this.clearAll}
      />
      
      {this.state.profileList &&
      (<ResultTable
          resultProfile = {this.state.profileList}
          handlerRepos = {this.generateResultTableRepo}
          handlerStarr = {this.generateResultsStarRepo}
      />)}
      
      {this.state.profileRepo &&
      (<Repositories 
          resultRepo = {this.state.profileRepo}
          closeFunction = {this.closeRepo}
      />)}

      {this.state.profileStar &&
      (<Starred 
          resultStarred = {this.state.profileStar}
          closeFunction = {this.closeStar}
      />)}

    </div>
    );
  }
}

export default App;
