import React from "react";
import ClickCard from "./components/ClickCard";
import MsgBar from "./components/MsgBar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import tiles from "./tiles.json";
import "./App.css";

class App extends React.Component {

  state = {
    tiles: tiles,
    score: 0,
    highScore: 0,
    msg: ""
  };


  tileCardClick = clickedId => {

    this.shuffle(this.state.tiles);

    const updatedTiles = [...tiles];
    let tileIdx = tiles.findIndex(tile => tile.id === clickedId);

    if (this.state.tiles[tileIdx].clicked === true) {
      this.setState({ 
        msg: "You've clicked that Tile already. Try Again."
      });
      this.resetGame();
    } else {
      let newScore = this.state.score;
      newScore++;
      if (newScore === 12) {
        this.setState({ 
          msg: "WINNER! That's the best possible score!",
          highScore: this.checkHighScore(newScore),
        });
        this.resetGame();
      } else {
        updatedTiles[tileIdx].clicked = true;
        this.setState({
          msg: "+1 You haven't clicked that Tile before!",
          score: newScore,
          highScore:  this.checkHighScore(newScore),
          tiles: updatedTiles
        })
      }

    }
  };

  checkHighScore = (currentScore) => {
    //-- Already incremented if correct answer, but not setState yet --//
    let newHiScore = Math.max(currentScore, this.state.highScore);

    if ( currentScore < this.state.highScore ) {
      return this.state.highScore;
    } else if (this.state.hightScore === 12)  {
      return 12;
    } else {
      return newHiScore;
    }
  }


  resetGame = () => {
    const updatedTiles = tiles;

    updatedTiles.map(tile => {
      tile.clicked=false;
    });

    this.setState({
      tiles: updatedTiles,
      score: 0
    });
    return true;
  };


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
      tiles: this.shuffle(this.state.tiles)
    });
  }

  render() {
    return (
      <>
        <MsgBar score={this.state.score} highScore={this.state.highScore} msg={this.state.msg}></MsgBar>
        <header id="showcase">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <h1>Welcome to the Clicky Game</h1>
            <p>TEST YOUR MEMORY.</p>
            <p>Don't click the same image more than once &mdash; or your score will reset.</p>

          </div>
        </header>
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
        <Footer></Footer>
      </>
    );
  }

}

export default App;
