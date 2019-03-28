import * as React from 'react';
// @ts-ignore
import * as Convey from "gaia-js-sdk-convey";

export default class Sankey extends React.Component<SankeyProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:SankeyProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.SankeyOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.data = this.props.data;
            if (this.props.color !== undefined) {
                options.color = this.props.color;
            }

            // @ts-ignore
            const sankey = new Convey.Sankey(options);
            const element = sankey.render();

            this.div.appendChild(element);
            sankey.init(element);
        }
    }

}
interface SankeyProps {
    data:Promise<any>;
    color?:[string];
}
