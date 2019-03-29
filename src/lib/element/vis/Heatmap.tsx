import * as React from 'react';
// @ts-ignore
import * as Convey from 'gaia-js-sdk-convey/dist/lib/vis';

export default class Heatmap extends React.Component<HeatmapProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:HeatmapProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.HeatmapOptions();
            options.itemSizeX = this.div.clientWidth / (this.props.itemSizeX || 12);
            options.itemSizeY = this.div.clientHeight / (this.props.itemSizeY || 30);
            options.color = ['rgb(45, 45, 45)', "#30c4c4", "#008d8d", "#0fb5b5", "#53d4d4", "#83e5e5"];
            options.data = this.props.data;
            if (this.props.color !== undefined) {
                options.color = this.props.color;
            }
            if (this.props.colorGroup !== undefined) {
                options.colorGroup = this.props.colorGroup;
            }

            // @ts-ignore
            const heatmap = new Convey.Heatmap(options);
            const element = heatmap.render();

            this.div.appendChild(element);
            heatmap.init(element);
        }
    }

}
interface HeatmapProps {
    data:Promise<any>;
    color?:[string];
    itemSizeX?:number;
    itemSizeY?:number;
    colorGroup?:[number, number] | string;
}
