import React from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import tiles from "./tiles.json";
import "./App.css";

class App extends React.Component {

  state = {
    tiles: tiles,
    score: 0
  };


  tileCardClick = clickedId => {

    const updatedTiles = tiles;
    let tileIdx = tiles.findIndex(tile => tile.id === clickedId);

    if (this.state.tiles[tileIdx].clicked === true) {
      console.log("WRONG.  Reset Game");
      this.resetGame();
    } else {
      console.log("Right Answer");
      updatedTiles[tileIdx].clicked = true;
      this.setState({
        score: this.state.score + 1,
        tiles: updatedTiles
      })
    }
  };

  resetGame = () => {
    console.log("RESETTING GAME");
    this.mixTiles(this.state.tiles);
    this.setState({
      score: 0
    })
  };

  mixTiles = (tiles) => {
    console.log("MIX TILES");
    return this.shuffle(tiles);
  }

  //================================================/
  // Mix up the images inside the array 
  // Fisher-Yates (aka Knuth) Shuffle
  // http://sedition.com/perl/javascript-fy.html
  //===============================================/
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  componentDidMount() {
    this.setState({
      tiles: this.mixTiles(this.state.tiles)
    });
  }

  render() {
    return (
      <>
      <h1 className="score">SCORE: {this.state.score}</h1>
      <Wrapper>
          {
            this.state.tiles.map(tile => {
              return (

                <ClickCard
                  key={tile.id}
                  id={tile.id}
                  image={tile.image}
                  clicked={tile.clicked}
                  handleClick={this.tileCardClick}
                />)
            })
          }
      </Wrapper>
      </>
    );
  }

}

export default App;
