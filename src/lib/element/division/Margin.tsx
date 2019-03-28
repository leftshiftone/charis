import * as React from 'react';
import {Component} from 'react';

export default class Margin extends Component<MarginProps, {}> {

    constructor(props:MarginProps) {
        super(props);
    }

    public render() {
        const classes:string[] = ["lto-margin"];
        if (this.props.right) {
            classes.push("lto-margin-r" + this.props.right);
        }
        if (this.props.left) {
            classes.push("lto-margin-l" + this.props.left);
        }
        if (this.props.top) {
            classes.push("lto-margin-t" + this.props.top);
        }
        if (this.props.bottom) {
            classes.push("lto-margin-b" + this.props.bottom);
        }
        if (this.props.class) {
            classes.push(this.props.class);
        }
        classes.push(this.props.width === "auto" ? "" : "lto-width-full");
        classes.push(this.props.height === "auto" ? "" : "lto-height-full");

        return (<div className={classes.join(" ")}>
            {this.props.children}
            </div>);
    }

}
interface MarginProps {
    right?: 5 | 10 | 15 | 20 | 25;
    left?: 5 | 10 | 15 | 20 | 25;
    top?: 5 | 10 | 15 | 20 | 25;
    bottom?: 5 | 10 | 15 | 20 | 25;
    class?:string;
    width?:"full" | "auto";
    height?:"full" | "auto";
}
