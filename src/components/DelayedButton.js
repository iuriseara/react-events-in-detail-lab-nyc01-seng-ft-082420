import React from 'react';

class DelayedButton extends React.Component {
   
   
    clickHandler = (props) => {
        props.persist();
        setTimeout(() => {
            this.props.onDelayedClick(props);
        }, 
        this.props.delay);
    }

   
    render() {
        return (<button onClick={this.clickHandler}>Button2</button>)
    }
}

export default DelayedButton