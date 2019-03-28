import * as React from 'react';
import {Component} from 'react';

export default class Right extends Component<{}, {}> {

    constructor(props:{}) {
        super(props);
    }

    public render() {
        return (<div className="lto-right">{this.props.children}</div>);
    }

}
