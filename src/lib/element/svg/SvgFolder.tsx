import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgFolder extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path className={"fillColour"} stroke="none"
                      d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                <path className={"strokeColour"} fill="none" strokeLinejoin="round"
                      d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                <path className={"fillColour"} stroke="none"
                      d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                <path className={"strokeColour"} fill="none" strokeLinejoin="round"
                      d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                <rect fill="none" stroke="none" x="2904" y="1300" width="1129" height="896"/>
                <path className={"fillColour"} stroke="none"
                      d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
                <path className={"strokeColour"} fill="none" strokeLinejoin="round"
                      d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
            </g>
        );
    }

}
