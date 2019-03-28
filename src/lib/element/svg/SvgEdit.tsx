import * as React from 'react';
import {Component, MouseEvent} from 'react';

export default class SvgEdit extends Component<SvgProps, {}> {

    constructor(props: SvgProps) {
        super(props);
    }

    public render() {
        const width = this.props.width || "40px";
        const height = this.props.height || "40px";

        return (
            <svg style={{width, height}} onClick={this.props.onClick} width="100mm" height="100mm"
                 viewBox="0 0 10000 10000" preserveAspectRatio="xMidYMid" fillRule="evenodd" strokeWidth="28.222"
                 strokeLinejoin="round">
                <g>
                    <path fill="rgb(102,255,255)" stroke="none" d="M 151,9877 L 906,7703 2355,9219 151,9877 Z"/>
                    <path fill="none" stroke="rgb(153,255,255)" id="Drawing_3_0" strokeLinejoin="round" d="M 151,9877 L 906,7703 2355,9219 151,9877 Z"/>
                    <rect fill="none" stroke="none" x="-573" y="7704" width="2930" height="2931"/>
                    <path fill="rgb(102,255,255)" stroke="none" d="M 8824,541 C 8729,448 8541,449 8448,544 L 7699,1306 C 7605,1400 7607,1589 7702,1682 L 8734,2697 C 8829,2790 9018,2789 9111,2695 L 9860,1933 C 9953,1838 9951,1649 9856,1556 L 8824,541 Z"/>
                    <path fill="none" stroke="rgb(153,255,255)" id="Drawing_4_0" strokeLinejoin="round" d="M 8824,541 C 8729,448 8541,449 8448,544 L 7699,1306 C 7605,1400 7607,1589 7702,1682 L 8734,2697 C 8829,2790 9018,2789 9111,2695 L 9860,1933 C 9953,1838 9951,1649 9856,1556 L 8824,541 Z"/>
                    <rect fill="none" stroke="none" x="7512" y="355" width="2535" height="2531"/>
                    <path fill="rgb(102,255,255)" stroke="none" d="M 8335,3450 C 8459,3331 8464,3089 8345,2965 L 7392,1974 C 7273,1850 7030,1845 6906,1964 L 979,7662 C 855,7781 850,8024 969,8148 L 1922,9139 C 2041,9263 2284,9267 2408,9148 L 8335,3450 Z"/>
                    <path fill="none" stroke="rgb(102,255,255)" id="Drawing_5_0" strokeLinejoin="round" d="M 8335,3450 C 8459,3331 8464,3089 8345,2965 L 7392,1974 C 7273,1850 7030,1845 6906,1964 L 979,7662 C 855,7781 850,8024 969,8148 L 1922,9139 C 2041,9263 2284,9267 2408,9148 L 8335,3450 Z"/>
                    <rect fill="none" stroke="none" x="731" y="1727" width="7852" height="7661"/>
                </g>
            </svg>
        );
    }

}

interface SvgProps {
    width?: string;
    height?: string;
    onClick?: (e:MouseEvent) => void;
}
