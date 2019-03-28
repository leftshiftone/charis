import * as React from 'react';
import {Component} from 'react';

export default class SvgFolder extends Component<SvgProps, {}> {

    constructor(props: SvgProps) {
        super(props);
    }

    public render() {
        const width = this.props.width || "40px";
        const height = this.props.height || "40px";
        const color = this.props.color || "rgb(153, 255, 255)";

        return (
            <svg style={{width, height}} viewBox="0 0 10000 10000" className={this.props.className || ""}>
                <g>
                    <path className={"fillColour"} fill={color} stroke="none" d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                    <path className={"strokeColour"} fill="none" stroke={color} strokeLinejoin="round" d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                </g>
                <g>
                    <path className={"fillColour"} fill={color} stroke="none" d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                    <path className={"strokeColour"} fill="none" stroke={color} strokeLinejoin="round" d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                    <rect fill="none" stroke="none" x="2904" y="1300" width="1129" height="896"/>
                </g>
                <g>
                    <path className={"fillColour"} fill={color} stroke="none" d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
                    <path className={"strokeColour"} fill="none" stroke={color} strokeLinejoin="round" d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    width?:string;
    height?:string;
    color?:string;
    className?:string;
}
