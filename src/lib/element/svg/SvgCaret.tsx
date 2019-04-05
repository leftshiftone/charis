import * as React from 'react';
import {Component} from 'react';

export default class SvgCaret extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={"lto-svg-caret " + this.props.className || ""} viewBox="0 0 10000 10000" onClick={this.props.onClick}>
                <g>
                    <path fill="none" d="M 400,7200 L 5242,2400"/>
                    <path fill="none" d="M 9600,7200 L 4600,2400"/>
                </g>
            </svg>
        );
    }

}

interface SvgProps {
    className?:string;
    onClick?:() => void
}
