import * as React from 'react';
// @ts-ignore
import * as Convey from 'gaia-js-sdk-convey/dist/lib/vis';

export default class Doughnut extends React.Component<DoughnutProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:DoughnutProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.DoughnutOptions();
            options.width = this.div.clientWidth / 2;
            options.height = Math.min(this.div.clientHeight, (typeof screen !== "undefined") ? screen.height / 1.5 : this.div.clientHeight);
            options.data = this.props.data;

            // @ts-ignore
            const doughnut = new Convey.Doughnut(options);

            const element = doughnut.render();
            this.div.appendChild(element);
            doughnut.init(element);
        }
    }

}
interface DoughnutProps {
    data:Promise<any>;
    color?:[string];
}
