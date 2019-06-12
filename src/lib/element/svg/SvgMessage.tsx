import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgMessage extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 0,1700 L 10000,1700"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 151,1700 L 151,8500"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 0,8431 L 10000,8431"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 9851,1700 L 9851,8500"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 4980,4400 L 131,1700"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" strokeLinejoin="round" d="M 4830,4400 L 9881,1700"/>
                <path stroke="rgb(0,0,0)" strokeWidth="200" strokeLinejoin="round" d="M 3800,3800 L 151,7400"/>
                <path stroke="rgb(0,0,0)" strokeWidth="200" strokeLinejoin="round" d="M 6200,3800 L 9851,7400"/>
            </g>
        );
    }

}
