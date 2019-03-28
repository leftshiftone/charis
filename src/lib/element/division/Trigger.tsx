import * as React from 'react';
import {Component, MouseEvent} from 'react';

export default class Trigger extends Component<TriggerProps, {}> {

    constructor(props: TriggerProps) {
        super(props);
    }

    public render() {
        return (<div className={"lto-trigger"} data-lto-trigger={this.props.type} onClick={this.props.onClick}>
            {this.props.children}
        </div>);
    }

}

interface TriggerProps {
    type: string;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
