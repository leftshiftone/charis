import * as React from 'react';
import {CSSProperties} from 'react';

export class Group extends React.Component<GroupProps, {}> {

    public render() {
        return (<div className={"lto-group"} style={this.props.style}>{this.props.children}</div>);
    }

}
interface GroupProps {
    style?: CSSProperties;
}
