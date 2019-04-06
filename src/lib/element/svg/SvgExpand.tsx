import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgExpand extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={this.props.className || ""} onClick={this.onClick} width="100mm" height="100mm" viewBox="0 0 10000 10000">
                <g>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 167,9943 C 115,9915 55,9841 33,9779 -25,9611 -20,7296 39,7177 107,7041 312,6953 450,7001 662,7075 673,7125 673,8024 L 673,8837 1887,7624 C 3080,6433 3104,6411 3245,6411 3445,6411 3584,6550 3584,6749 3584,6890 3562,6915 2370,8106 L 1156,9319 1986,9319 C 2775,9319 2821,9323 2890,9392 3017,9519 3041,9634 2970,9779 2935,9850 2866,9928 2817,9952 2678,10021 296,10013 167,9943 L 167,9943 Z M 7190,9962 C 6985,9880 6929,9558 7093,9407 L 7188,9319 8013,9319 8839,9319 7625,8106 C 6433,6915 6410,6890 6410,6749 6410,6550 6549,6411 6749,6411 6890,6411 6915,6433 8107,7624 L 9321,8837 9321,8007 C 9321,7219 9325,7174 9394,7104 9522,6977 9636,6954 9781,7025 9852,7060 9931,7128 9955,7177 9988,7243 10000,7588 10000,8491 10001,9845 9995,9884 9782,9958 9645,10006 7307,10009 7190,9962 L 7190,9962 Z M 3067,3513 C 3038,3502 2487,2968 1843,2327 L 673,1162 673,1976 C 673,2874 662,2924 450,2998 312,3046 107,2958 39,2822 -20,2703 -25,388 33,220 108,7 147,2 1502,2 2406,3 2751,14 2817,47 2866,72 2935,150 2970,221 3041,366 3017,480 2890,607 2821,676 2775,680 1986,680 L 1156,680 2334,1857 C 3490,3013 3512,3038 3512,3178 3512,3283 3489,3345 3424,3410 3334,3500 3164,3549 3067,3513 L 3067,3513 Z M 6482,3176 C 6482,3039 6512,3005 7660,1857 L 8839,680 8024,680 C 7125,680 7075,669 7001,458 6953,320 7041,115 7177,47 7296,-12 9614,-17 9782,41 9995,115 10001,154 10000,1508 10000,2412 9988,2756 9955,2822 9931,2871 9852,2940 9781,2975 9636,3046 9522,3022 9394,2895 9325,2826 9321,2780 9321,1992 L 9321,1162 8151,2331 C 6943,3536 6884,3584 6695,3504 6562,3447 6482,3323 6482,3176 Z"/>
                    <rect fill="none" stroke="none" x="-8" y="0" width="10009" height="10001"/>
                </g>
            </svg>
        );
    }

    private onClick(e: MouseEvent<SVGElement>) {
        if (typeof this.props.onClick === "function") {
            (this.props.onClick as ((e: MouseEvent<SVGElement>) => void))(e);
        } else {
            Emitter.emit("charis:modalContainer:show", this.props.onClick);
        }
    }

}
interface SvgProps {
    className?: string;
    onClick: ((e: MouseEvent<SVGElement>) => void) | ModalAssembly;
}
