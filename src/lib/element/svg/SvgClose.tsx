import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgClose extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path fill={"rgb(102, 255, 255)"} stroke="none"
                      d="M 1733,349 C 1611,228 1369,228 1248,350 L 278,1325 C 156,1447 156,1689 278,1811 L 8211,9705 C 8333,9826 8576,9825 8697,9703 L 9667,8729 C 9788,8607 9787,8364 9666,8243 L 1733,349 Z"/>
                <path fill="none" stroke={"rgb(102, 255, 255)"} strokeLinejoin="round"
                      d="M 1733,349 C 1611,228 1369,228 1248,350 L 278,1325 C 156,1447 156,1689 278,1811 L 8211,9705 C 8333,9826 8576,9825 8697,9703 L 9667,8729 C 9788,8607 9787,8364 9666,8243 L 1733,349 Z"/>
                <rect fill="none" stroke="none" x="35" y="108" width="9875" height="9841"/>
                <path fill={"rgb(102, 255, 255)"} stroke="none"
                      d="M 9720,1893 C 9844,1774 9849,1532 9729,1408 L 8776,417 C 8657,293 8415,287 8291,407 L 222,8163 C 99,8281 94,8525 213,8649 L 1166,9640 C 1285,9764 1528,9768 1651,9649 L 9720,1893 Z"/>
                <path fill="none" stroke={"rgb(102, 255, 255)"} strokeLinejoin="round"
                      d="M 9720,1893 C 9844,1774 9849,1532 9729,1408 L 8776,417 C 8657,293 8415,287 8291,407 L 222,8163 C 99,8281 94,8525 213,8649 L 1166,9640 C 1285,9764 1528,9768 1651,9649 L 9720,1893 Z"/>
                <rect fill="none" stroke="none" x="-25" y="169" width="9993" height="9719"/>
            </g>
        );
    }

}
