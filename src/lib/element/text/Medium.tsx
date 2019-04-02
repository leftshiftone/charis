import * as React from 'react';

export default class Medium extends React.Component<MediumProps, {}> {

    public render() {
        return (<span className={`lto-text-medium lto-${this.props.align || "left"} ${this.props.className || ""}`}>
            {this.props.children}
            </span>);
    }

}

interface MediumProps {
    children: (string | HTMLBRElement) | (string | HTMLBRElement)[];
    align?: "left" | "center" | "right";
    className?: string;
}
