import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state={
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  pageSize = 15
  render() {
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} country={this.country} category={"general"} />}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} country={this.country} category={"business"} />}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} country={this.country} category={"entertainment"} />}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress}key="generral" pageSize={this.pageSize} country={this.country} category={"general"} />}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} country={this.country} category={"health"} />}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} country={this.country} category={"science"} />}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} country={this.country} category={"sports"} />}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} country={this.country} category={"technology"} />}/>
        </Routes>
      </Router>
    );
    }
}
