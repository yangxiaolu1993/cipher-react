import React, { Component } from 'react';

class Lover extends Component {
    render() {
        return (
            <div>
                夫妻恋人选人页
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }
}

export default Lover;