import './Board.css';
import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import EndResult from './EndResult';
import Source from './Source';
import Target from './Target';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      results: [],
    };
  }

  handleDrop(color, shape) {
    console.log("onDrop via handleDrop", color, shape)
    let drops2 = this.state.results.slice();
    // console.log(this.state.results)
    // console.log(drops2)
    let newResult = {color, shape}
    // console.log(newResult)
    drops2.push({newResult})
    // console.log(drops2)
    this.setState({
      results: drops2,
    });
    // console.log(this.state)
  }

  render() {
    console.log(this.state)
    const { results } = this.state;
    return (
      <div id="board">
        <div id="start">
          <Source color="red" onDrop={this.handleDrop} />
          <Source color="green" onDrop={this.handleDrop} />
          <Source color="blue" onDrop={this.handleDrop} />
        </div>
        <div id="middle">
          <Target shape="circle" />
          <Target shape="square" />
        </div>
        {console.log(results)}
        <div id="results">
          {results.map((result, i) => {
            return (
              <EndResult
                color={result.newResult.color}
                key={i}
                shape={result.newResult.shape}
              />
            )
          })}
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Board);
