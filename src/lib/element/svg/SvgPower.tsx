import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgPower extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={this.props.className} onClick={this.onClick} viewBox="0 0 10000 10000">
                <g>
                    <path fill="rgb(102,255,255)" stroke="none"
                          d="M 4233,9903 C 3342,9811 2316,9375 1586,8779 302,7731 -248,6080 185,4575 434,3708 879,3047 1618,2446 2105,2050 2698,1705 2776,1774 2798,1794 2817,2116 2817,2489 L 2817,3167 2439,3533 C 2231,3735 1943,4119 1799,4387 1544,4859 1536,4897 1537,5621 1538,6321 1552,6395 1764,6791 2249,7697 2943,8238 3986,8524 4664,8710 5041,8713 5745,8540 6866,8264 7654,7643 8089,6693 8239,6366 8267,6195 8267,5621 8267,5048 8239,4877 8089,4550 7902,4142 7506,3621 7179,3353 6995,3202 6987,3167 6987,2503 6987,2122 7007,1793 7031,1771 7103,1708 7777,2108 8242,2490 9988,3925 10262,6306 8891,8111 8615,8474 7892,9072 7455,9299 6837,9621 6112,9842 5461,9908 5113,9944 4812,9969 4792,9965 4772,9961 4520,9933 4233,9903 L 4233,9903 Z M 4185,6295 C 4157,6270 4134,4851 4134,3142 L 4134,35 4903,35 5671,35 5653,3169 5634,6303 4935,6322 C 4551,6332 4213,6320 4185,6295 L 4185,6295 Z"/>
                    <rect fill="none" stroke="none" x="25" y="22" width="9751" height="9957"/>
                    <rect fill="none" stroke="none" x="0" y="0" width="9801" height="10001"/>
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
