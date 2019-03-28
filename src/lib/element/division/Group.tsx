import * as React from 'react';

export class Group extends React.Component<{}, {}> {

    public render() {
        return (<div className={"lto-group"}>{this.props.children}</div>);
    }

}
