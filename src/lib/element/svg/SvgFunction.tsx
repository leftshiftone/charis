import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgFunction extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={this.props.className || ""} width="100mm" height="100mm" viewBox="0 0 10000 10000" onClick={this.onClick}>
                <g>
                    <path fill="rgb(0,0,0)" stroke="none" d="M 4408,9970 C 3897,9915 3211,9706 2707,9451 2188,9190 1469,8598 1083,8113 -271,6416 -365,3990 855,2207 1707,960 3007,186 4516,28 5664,-92 6839,207 7802,865 8628,1429 9295,2259 9648,3160 10258,4719 10068,6441 9137,7803 8078,9351 6287,10172 4408,9970 Z M 5717,9276 C 7100,9030 8253,8177 8876,6941 9041,6613 9205,6110 9272,5728 9340,5342 9342,4648 9277,4283 9030,2901 8177,1749 6939,1126 5752,529 4258,524 3085,1113 1583,1866 670,3338 670,5005 670,6957 1967,8664 3836,9172 4411,9329 5184,9371 5717,9276 L 5717,9276 Z M 2236,7448 C 2032,7337 2002,7098 2175,6953 2267,6875 2321,6860 2504,6860 2982,6860 3410,6626 3545,6290 3576,6213 3802,5319 4048,4304 4538,2282 4556,2230 4891,1890 5205,1571 5580,1427 6094,1426 6365,1426 6435,1438 6510,1496 6669,1621 6659,1890 6492,1996 6447,2024 6262,2057 6071,2070 5602,2104 5342,2251 5172,2581 5133,2657 4910,3511 4675,4480 4233,6303 4200,6425 4069,6679 3886,7039 3440,7368 3014,7457 2723,7518 2357,7514 2236,7448 L 2236,7448 Z M 4910,7104 C 4923,7058 5046,6908 5181,6770 L 5428,6519 5180,6273 C 5044,6137 4922,5987 4910,5937 4855,5719 5099,5496 5309,5575 5364,5596 5515,5716 5644,5843 L 5877,6074 6091,5856 C 6409,5533 6549,5485 6729,5641 6918,5804 6866,5987 6541,6305 L 6322,6518 6553,6752 C 6680,6880 6801,7031 6822,7087 6899,7293 6672,7545 6457,7491 6413,7480 6258,7363 6114,7232 L 5852,6992 5613,7229 C 5353,7487 5224,7540 5066,7452 4953,7388 4876,7217 4910,7104 Z"/>
                    <rect fill="none" stroke="none" x="0" y="2" width="10001" height="9999"/>
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
