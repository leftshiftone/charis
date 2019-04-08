import * as React from 'react';
import {Component} from 'react';

export default class Padding extends Component<PaddingProps, {}> {

    constructor(props:PaddingProps) {
        super(props);
    }

    public render() {
        const classes:string[] = ["lto-padding"];
        if (this.props.right) {
            classes.push("lto-padding-r" + this.props.right);
        }
        if (this.props.left) {
            classes.push("lto-padding-l" + this.props.left);
        }
        if (this.props.top) {
            classes.push("lto-padding-t" + this.props.top);
        }
        if (this.props.bottom) {
            classes.push("lto-padding-b" + this.props.bottom);
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(this.props.width === "auto" ? "" : "lto-width-full");
        classes.push(this.props.height === "auto" ? "" : "lto-height-full");

        return (<div className={classes.join(" ")}>
            {this.props.children}
            </div>);
    }

}
interface PaddingProps {
    right?: 5 | 10 | 15 | 20 | 25;
    left?: 5 | 10 | 15 | 20 | 25;
    top?: 5 | 10 | 15 | 20 | 25;
    bottom?: 5 | 10 | 15 | 20 | 25;
    className?:string;
    width?:"full" | "auto";
    height?:"full" | "auto";
}
