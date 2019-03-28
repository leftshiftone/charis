import * as React from 'react';

export default class Link extends React.Component<LinkProps, {}> {

    constructor(props: LinkProps) {
        super(props);
    }

    public render() {
        return (
            <div className={`lto-link ${this.props.active ? "lto-active" : ""}`} onClick={this.props.onClick}>
                {this.props.text}
                </div>
        );
    }

}

interface LinkProps {
    text: string;
    active?: boolean;
    onClick:() => void;
}
