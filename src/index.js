import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return <Calculate />;

};
class Calculate extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            calculationResult: ' ',
            inputExpression: ' '

        };
    }

    calculating () {
        this.setState ({
            calculationResult: eval(this.state.inputExpression)
        });
    }
    render() {
        return (
            <div>
                <h1>Enter an Expression</h1>
                <h3>Calculation Result: {this.state.calculationResult}</h3>
                <input
                    type="text"
                    onChange={event => this.setState({inputExpression: event.target.value})}
                     value={this.state.inputExpression}
                    />
                    <button onClick={this.calculating.bind(this)}>CALCULATE RESULT</button>
            </div>


        );


    }
}
ReactDOM.render(<App />, document.getElementById('root'));