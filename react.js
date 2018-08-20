import React from 'react';
import Elm from './dist/elm/main.js';

class ElmComponent extends React.Component {
    constructor(props) {
        super(props);
        this.nodeRef = React.createRef();
    }

    componentDidMount() {
        const app = Elm.Main.init({ node: this.nodeRef.current })
        // set up ports however you want
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return <div ref={this.nodeRef}/>;
    }
}

export default ElmComponent;
