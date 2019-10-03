import * as React from "react";

export default class Circle extends React.Component<CircleProps, {}> {

    public render(): React.ReactNode {
        return <svg className={"lto-circle " + (this.props.className || "")} viewBox="0 0 33.83098862 33.83098862" width="200" height="200">
            <circle stroke={this.props.innerColor || "#efefef"} strokeWidth="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"/>
            <circle stroke={this.props.outerColor || "#00acc1"} strokeWidth="2" strokeDasharray={this.props.score * 100 + ",100"}
                    strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"/>
            <g>
                <text className="circle-chart__percent" x="16.91549431" y="15.5" alignmentBaseline="central"
                      textAnchor="middle"
                      fontSize="8">{parseFloat((this.props.score * 100).toString()).toFixed(0)}%
                </text>
                {
                    this.props.text ?
                        <text className="circle-chart__percent" x="16.91549431" y="20.5" alignmentBaseline="central"
                              textAnchor="middle"
                              fontSize="4">text
                        </text> :
                        <React.Fragment />
                }
            </g>
        </svg>;
    }
}

interface CircleProps {
    score: number;
    heading?: string;
    className?:string;
    innerColor?: string;
    outerColor?: string;
    text?: string;
}
