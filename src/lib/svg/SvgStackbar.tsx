import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgStackbar extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        const stroke = this.props.stroke;
        const strokeWidth = this.props.strokeWidth || 100;
        const radius = this.props.radius || 20;

        return(
            <svg style={{width:radius * 2, height: radius * 2}} viewBox="0 0 3964.3596 3964.4806">
                <g transform="matrix(0.84240535,0,0,0.92068749,-7031.5575,-4922.916)"
                   style={{stroke, strokeWidth, fill: "none"}}>
                    <path d="m 10700,9600 c -423,0 -783,-88 -1150,-281 -367,-194 -630,-434 -842,-769 -212,-335 -308,-663 -308,-1050 0,-387 96,-715 308,-1050 212,-335 475,-575 842,-769 367,-193 727,-281 1150,-281 423,0 783,88 1150,281 367,194 630,434 842,769 212,335 308,663 308,1050 0,387 -96,715 -308,1050 -212,335 -475,575 -842,769 -367,193 -727,281 -1150,281 z"/>
                    <path d="m 9000,8400 h 3400"/>
                    <path d="M 9200,8200 V 7800"/>
                    <path d="M 9500,8200 V 6800"/>
                    <path d="M 9800,8200 V 7600"/>
                    <path d="M 10100,8200 V 7400"/>
                    <path d="M 10400,8200 V 6400"/>
                    <path d="M 10700,8200 V 7200"/>
                    <path d="M 11000,8200 V 6600"/>
                    <path d="M 11300,8200 V 7600"/>
                    <path d="M 11600,8200 V 6800"/>
                    <path d="M 11900,8200 V 7400"/>
                    <path d="M 12200,8200 V 7200"/>
                    <path d="M 12200,8200 V 7200"/>
                </g>
            </svg>
        );
    }

}
interface SvgProps {
    stroke?:string;
    strokeWidth?:number;
    radius?:number;
}
