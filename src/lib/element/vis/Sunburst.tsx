import * as React from 'react';
// @ts-ignore
import * as Convey from "gaia-js-sdk-convey";

export default class Sunburst extends React.Component<SunburstProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:SunburstProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.SunburstOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.legend = false;
            options.data = this.props.data;
            options.b = {w: this.div.clientWidth / 5, h: 20, s: 3, t: 10, r: 3};
            if (this.props.legendBorder !== undefined) {
                options.b = this.props.legendBorder;
            }

            // @ts-ignore
            const scatterplot = new Convey.Sunburst(options);
            const element = scatterplot.render();

            this.div.appendChild(element);
            scatterplot.init(element);
        }
    }

}
interface SunburstProps {
    data:Promise<any>;
    color?:[string];
    legendBorder?:{w: number, h: number, s: number, t: number, r: number};
}
