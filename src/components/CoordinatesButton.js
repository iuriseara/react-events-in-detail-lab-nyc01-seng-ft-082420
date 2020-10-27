import React from 'react';

class CoordinatesButton extends React.Component {

    clickHandler = (props) => {
        this.props.onReceiveCoordinates([props.clientX, props.clientY]);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Button1</button>
            </div>
        )
    }

}

export default CoordinatesButton;