import React, { Component } from 'react';
import Counter from './counter';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter4 from './Counter4';

class Counterss extends Component {
     state = { counters: [
         {id:1, value:0},
         {id:2, value:0},
         {id:3, value:7},
        {id:4, value:0}]  };

        handleDelete=()=>{
            const counters = this.state.counters.filter(c=>c.id!==this.state.value);
            this.setState({counters});
            // count onDelete = {this.handleDeete}
        }
    render() { 
        return (
              
            <div>
                {/* {this.state.counters.map(counter => 
                <Counter
                 key={counter.id}
                 onDelete={this.handleDelete}
                  value={counter.value}
                   selected={true}
                   id={counter.id}
                     />)} */}
                  
                 <Counter />
				 <Counter1 />
				 <Counter2 />
				  <Counter4 />
			
              
            </div>
          );
    }
}
 
export default Counterss;