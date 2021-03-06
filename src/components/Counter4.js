import React, { Component } from 'react';
class Counter4 extends Component {
    state = {
        count: 0
      
    };

    handleIncrement = () => {
        this.setState({count: this.state.count +1 });
    }
    styles={
        fontSize:13,
        fontWeight:'bold'
    }
    render() { 
        let classes = "badge m-2 badge-";
            classes+= this.state.count === 0 ? "warning" : "primary";
    return(
        <div style={{fontSize:'1.5rem'}}>
			Computer
            <span style={this.styles} className={classes}>{this.formatCount()}</span> 
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm "> increement </button>
            <button
             onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
   
        </div>);
    }
    formatCount(){
        const { count } = this.state;
        return count ===0 ? 'Zero' : count;
    }
}
 
export default Counter4;