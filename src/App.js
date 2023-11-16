import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  pageSize = 15
  country = "in"
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country={this.country} category={"general"} />}/>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.country} category={"business"} />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.country} category={"entertainment"} />}/>
          <Route exact path="/general" element={<News key="generral" pageSize={this.pageSize} country={this.country} category={"general"} />}/>
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.country} category={"health"} />}/>
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.country} category={"science"} />}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.country} category={"sports"} />}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} category={"technology"} />}/>
        </Routes>
      </Router>
    );
  }
}