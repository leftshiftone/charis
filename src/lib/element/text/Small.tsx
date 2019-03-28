import * as React from 'react';

export default class Small extends React.Component<MarkProps, {}> {

    public render() {
        const style = {
            color: this.props.color || "black"
        };

        return (<span className={`lto-text-small lto-${this.props.align || "left"}`} style={style}>{this.props.children}</span>);
    }

}
interface MarkProps {
    children: string;
    align?: "left" | "center" | "right";
    color?: string;
}
