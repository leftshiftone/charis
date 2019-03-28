import * as React from 'react';
import {Component} from 'react';

export default class SvgPlay extends Component<SvgProps, {}> {

    constructor(props: SvgProps) {
        super(props);
    }

    public render() {
        const width = this.props.width || "40px";
        const height = this.props.height || "40px";
        const background = this.props.background || "rgb(0,0,0)";

        return (
            <svg style={{width, height}} version="1.2" baseProfile="tiny" width="100mm" height="100mm" viewBox="0 0 10000 10000" preserveAspectRatio="xMidYMid" fillRule="evenodd" strokeWidth="28.222" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
 <g visibility="visible" id="Slide_1_page21">
   <path fill={background} stroke="none" d="M 5000,9952 C 4098,9952 3331,9745 2550,9289 1769,8833 1208,8267 756,7478 305,6688 100,5914 100,5003 100,4092 305,3318 756,2529 1208,1739 1769,1173 2550,717 3331,261 4098,54 5000,54 5902,54 6669,261 7450,717 8231,1173 8792,1739 9244,2528 9695,3318 9900,4092 9900,5003 9900,5914 9695,6688 9244,7477 8792,8267 8231,8833 7450,9289 6669,9745 5902,9952 5000,9952 L 5000,9952 Z"/>
   <path fill="none" stroke={background} id="Drawing_3_0" strokeWidth="100" strokeLinejoin="round" d="M 5000,9952 C 4098,9952 3331,9745 2550,9289 1769,8833 1208,8267 756,7478 305,6688 100,5914 100,5003 100,4092 305,3318 756,2529 1208,1739 1769,1173 2550,717 3331,261 4098,54 5000,54 5902,54 6669,261 7450,717 8231,1173 8792,1739 9244,2528 9695,3318 9900,4092 9900,5003 9900,5914 9695,6688 9244,7477 8792,8267 8231,8833 7450,9289 6669,9745 5902,9952 5000,9952 L 5000,9952 Z"/>
   <path fill="rgb(102,255,255)" stroke="none" d="M 8600,5114 L 2799,8001 2799,2228 8600,5114 Z"/>
   <rect fill="none" stroke="none" x="2799" y="2228" width="5802" height="5774"/>
   <rect fill="none" stroke="none" x="2800" y="2228" width="5802" height="5774"/>
 </g>
</svg>
        );
    }

}
interface SvgProps {
    width?:string;
    height?:string;
    background?: string;
    color?: string;
}
