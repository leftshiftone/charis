import * as React from 'react';
import * as Convey from "gaia-js-sdk-convey";

export default class Graph extends React.Component<GraphProps, {}> {

    private div:HTMLDivElement | null = null;

    public render() {
        return (<div className={this.props.className || ""} style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            const options = new Convey.GraphOptions();
            options.width = this.div.clientWidth;
            options.height = Math.min(this.div.clientHeight, (typeof screen !== "undefined") ? screen.height / 1.5 : this.div.clientHeight);
            options.data = this.props.data;

            if (this.props.radius) {
                options.radius = this.props.radius;
            }
            if (this.props.distance) {
                options.distance = this.props.distance;
            }
            if (this.props.collision) {
                options.collision = this.props.collision;
            }
            if (this.props.charge) {
                options.charge = this.props.charge;
            }

            const graph = new Convey.Graph(options);

            const element = graph.render();
            this.div.appendChild(element);
            graph.init(element);
        }
    }

}
interface GraphProps {
    data:Promise<any>;
    className?:string;
    radius?:number;
    distance?:(node:any, index:number, links:Array<any>) => number;
    collision?:(node:any, index:number, nodes:Array<any>) => number;
    charge?:(node:any, index:number, data:Array<any>) => number;
}
