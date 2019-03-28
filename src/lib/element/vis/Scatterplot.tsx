import * as React from 'react';
// @ts-ignore
import * as Convey from "gaia-js-sdk-convey";

export default class Scatterplot extends React.Component<ScatterplotProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:ScatterplotProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.ScatterplotOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.data = this.props.data;
            if (this.props.color !== undefined) {
                options.color = this.props.color;
            }

            // @ts-ignore
            const scatterplot = new Convey.Scatterplot(options);
            const element = scatterplot.render();

            this.div.appendChild(element);
            scatterplot.init(element);
        }
    }

}
interface ScatterplotProps {
    data:Promise<any>;
    color?:[string];
}
