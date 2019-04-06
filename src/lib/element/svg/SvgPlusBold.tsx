import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgPlus extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <React.Fragment>
                <g>
                    <path fill="rgb(102,255,255)" stroke="none"
                          d="M 6006,492 C 6006,320 5835,149 5663,149 L 4288,147 C 4116,147 3944,318 3944,490 L 3934,9571 C 3934,9743 4106,9915 4278,9915 L 5653,9917 C 5825,9917 5996,9745 5996,9573 L 6006,492 Z"/>
                    <path fill="none" stroke="rgb(102,255,255)" id="Drawing_3_0" strokeLinejoin="round"
                          d="M 6006,492 C 6006,320 5835,149 5663,149 L 4288,147 C 4116,147 3944,318 3944,490 L 3934,9571 C 3934,9743 4106,9915 4278,9915 L 5653,9917 C 5825,9917 5996,9745 5996,9573 L 6006,492 Z"/>
                    <rect fill="none" stroke="none" x="3934" y="147" width="2073" height="9771"/>
                    <path fill="rgb(102,255,255)" stroke="none"
                          d="M 9534,6065 C 9706,6065 9878,5895 9878,5723 L 9878,4348 C 9878,4176 9708,4003 9536,4003 L 455,3999 C 283,3999 110,4170 110,4342 L 110,5717 C 110,5889 281,6061 453,6061 L 9534,6065 Z"/>
                    <path fill="none" stroke="rgb(102,255,255)" id="Drawing_4_0" strokeLinejoin="round"
                          d="M 9534,6065 C 9706,6065 9878,5895 9878,5723 L 9878,4348 C 9878,4176 9708,4003 9536,4003 L 455,3999 C 283,3999 110,4170 110,4342 L 110,5717 C 110,5889 281,6061 453,6061 L 9534,6065 Z"/>
                    <rect fill="none" stroke="none" x="110" y="3998" width="9770" height="2068"/>
                </g>
            </React.Fragment>)
    }

}
