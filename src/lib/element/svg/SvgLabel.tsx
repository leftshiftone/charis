import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgLabel extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path fill="rgb(152,255,255)" stroke="none"
                      d="M 114,5355 C 23,5182 0,4695 0,2932 0,506 23,369 476,134 812,-39 5006,-45 5331,128 5590,266 9761,4457 9887,4706 10008,4945 9998,5256 9861,5514 9723,5774 5700,9794 5452,9920 5271,10011 4917,10027 4708,9953 4528,9889 246,5603 114,5355 Z M 3112,2176 C 3112,1895 2888,1544 2619,1405 2285,1232 1792,1300 1538,1554 1122,1971 1257,2787 1781,3015 2114,3160 2275,3158 2595,3006 2869,2876 3112,2485 3112,2176 Z"/>
                <rect fill="none" stroke="none" x="0" y="1" width="9972" height="10000"/>
            </g>
        );
    }

}
