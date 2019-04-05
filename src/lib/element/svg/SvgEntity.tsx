import * as React from 'react';
import {Component} from 'react';

export default class SvgEntity extends Component<SvgProps, {}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <svg className={this.props.className} width="100mm" height="100mm" viewBox="0 0 10000 10000"
                 onClick={this.props.onClick}>
                <g>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 1300,2664 L 0,2664 0,64 2600,64 2600,2664 1300,2664 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_3_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 1300,2664 L 0,2664 0,64 2600,64 2600,2664 1300,2664 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 1300,9954 L 0,9954 0,7354 2600,7354 2600,9954 1300,9954 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_4_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 1300,9954 L 0,9954 0,7354 2600,7354 2600,9954 1300,9954 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 1300,6400 L 0,6400 0,3800 2600,3800 2600,6400 1300,6400 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_5_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 1300,6400 L 0,6400 0,3800 2600,3800 2600,6400 1300,6400 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 8636,6400 L 7336,6400 7336,3800 9936,3800 9936,6400 8636,6400 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_6_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 8636,6400 L 7336,6400 7336,3800 9936,3800 9936,6400 8636,6400 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 5000,6400 L 3700,6400 3700,3800 6300,3800 6300,6400 5000,6400 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_7_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 5000,6400 L 3700,6400 3700,3800 6300,3800 6300,6400 5000,6400 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 5000,2664 L 3700,2664 3700,64 6300,64 6300,2664 5000,2664 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_8_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 5000,2664 L 3700,2664 3700,64 6300,64 6300,2664 5000,2664 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 8636,2664 L 7336,2664 7336,64 9936,64 9936,2664 8636,2664 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_9_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 8636,2664 L 7336,2664 7336,64 9936,64 9936,2664 8636,2664 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 8636,9954 L 7336,9954 7336,7354 9936,7354 9936,9954 8636,9954 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_10_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 8636,9954 L 7336,9954 7336,7354 9936,7354 9936,9954 8636,9954 Z"/>
                    <path fill="rgb(0,0,0)" stroke="none"
                          d="M 5000,9954 L 3700,9954 3700,7354 6300,7354 6300,9954 5000,9954 Z"/>
                    <path fill="none" stroke="rgb(0,0,0)" id="Drawing_11_0" strokeWidth="100" strokeLinejoin="round"
                          d="M 5000,9954 L 3700,9954 3700,7354 6300,7354 6300,9954 5000,9954 Z"/>
                </g>
            </svg>
        );
    }

}

interface SvgProps {
    className?: string;
    onClick?: () => void;
}
