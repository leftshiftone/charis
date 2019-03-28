import * as React from 'react';

export class Banner extends React.Component<{}, {}> {

    public render() {
        return (<div className={"lto-banner"}>{this.props.children}</div>);
    }

}
