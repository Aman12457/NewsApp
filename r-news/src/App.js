// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="General"
                  country="in"
                  pageSize={this.pageSize}
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={this.setProgress}
                  key="General"
                  country="in"
                  pageSize={this.pageSize}
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Business"
                  country="in"
                  pageSize={this.pageSize}
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Entertainment"
                  country="in"
                  pageSize={this.pageSize}
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Health"
                  country="in"
                  pageSize={this.pageSize}
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Science"
                  country="in"
                  pageSize={this.pageSize}
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Sports"
                  country="in"
                  pageSize={this.pageSize}
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Technology"
                  country="in"
                  pageSize={this.pageSize}
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
