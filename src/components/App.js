import React from "react";
import SearchBar from "./SearchBar.js";
import youtube from "../apis/youtube.js";

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
