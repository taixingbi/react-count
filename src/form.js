import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
  }

  onClick(e) {
      this.setState({
          count: this.state.count + 1
      });
  }
  
  render() {
    return (
      <>
                <div>
                    <h2>Counter</h2>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.onClick.bind(this)}>Count Up!!</button>
                </div>
                
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>

    );
  }
}

export default Form;
