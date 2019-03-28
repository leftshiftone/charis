import * as React from 'react';

export default class Mark extends React.Component<MarkProps, {}> {

    public render() {
        return (<mark className={"lto-mark"}>{this.props.children}</mark>);
    }

}
interface MarkProps {
    children: string;
}
