import "./App.css";
import React, { Component } from "react";
import imgCasino from "./img/casino.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClick = () => {
    this.refs.Card.classList.toggle("backCard");
    this.refs.Card.classList.toggle("frontCard");
    this.refs.frontCard.classList.toggle("deactive");
    this.refs.frontCard.classList.toggle("active");
    this.refs.backCard.classList.toggle("deactive");
    this.refs.backCard.classList.toggle("active");
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <div>
           <div ref="Card" className="frontCard">

             <div ref="frontCard" className="active">
             <div className="row">

              <div className="column1">
                <img alt={"imgCasino"} src={imgCasino} />
              </div>

              <div className="column2" >
              <h1>888CASINO</h1>
              <h2>£1000 BONUS</h2>
              <h3>JOIN</h3>
              <h3>Open account with us, it takes just a few minutes</h3>
              <h3>DEPOSIT</h3>
              <h3>
                Place a single bet up to £30 on any sport in our Sportsbook
              </h3>
                <button className="btn" onClick={() => this.handleClick()}>
                  Ts&Cs
                </button>
                <button className="btn"> FIND OUT MORE</button>
                <button className="btn"> JOIN NOW</button>
              </div>
            </div>
            </div>

             <div ref="backCard" className="back deactive">Back Card
             <h1>888CASINO <p>£1000 BONUS</p></h1>

             <p>text area</p>
             <button className="btn1" onClick={() => this.handleClick()}>
               BACK
             </button>
             <button className="btn3"> JOIN NOW</button>
             </div>

           </div>
         </div>

        </header>
      </div>
    );
  }
}

export default App;
