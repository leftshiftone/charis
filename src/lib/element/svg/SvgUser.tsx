import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgUser extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path fill="rgb(0,255,255)" stroke="none"
                      d="M 746,10479 C 265,10324 14,9912 14,9274 14,8602 168,7827 378,7445 985,6336 2519,5739 3761,6128 4379,6321 5546,6325 6119,6134 7441,5694 9019,6362 9622,7616 9821,8031 9883,8309 9920,8961 9962,9724 9950,9803 9748,10080 9623,10251 9396,10421 9214,10479 8768,10623 1193,10623 746,10479 L 746,10479 Z M 3006,776 C 4388,-574 6862,-57 7585,1734 7832,2344 7794,3224 7497,3765 7239,4235 6676,4743 6150,4981 5639,5212 4680,5276 4151,5114 2158,4504 1550,2199 3006,776 Z"/>
                <rect fill="none" stroke="none" x="1" y="1" width="9953" height="10599"/>
                <rect fill="none" stroke="none" x="0" y="0" width="9955" height="10601"/>
            </g>
        );
    }

}
