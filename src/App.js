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
    
    if ( this.state.tiles[tileIdx].clicked === true ) {
      console.log("WRONG.  Reset Game");
      resetGame();
    } else {
      console.log("Right Answer");
      updatedTiles[tileIdx].clicked=true;
      this.setState({ 
        score: this.state.score + 1,
        tiles: updatedTiles
     })
    }
  };

  resetGame = () => {
    console.log("RESETTING GAME");
    mixTiles();
    this.setState({
      score: 0
    })
  };

  mixTiles = () => {
    console.log("MIX TILES");
  }

  render() {
    return (
      <Wrapper>
        <h1 className="score">SCORE: {this.state.score}</h1>
      { 
          this.state.tiles.map( tile => {
          return (
        <ClickCard
          key={tile.id}
          id={tile.id} 
          image={tile.image}
          clicked={tile.clicked}
          handleClick={this.tileCardClick}
        />) } )
      }
       
      </Wrapper>
    );
  }

}

export default App;
