import * as React from 'react';
// @ts-ignore
import * as Convey from "gaia-js-sdk-convey";

export default class Line extends React.Component<LineProps, {}> {

    private div:HTMLDivElement | null = null;

    // @ts-ignore
    private heatmap:GaiaSDK.Line;

    constructor(props:LineProps) {
        super(props);
    }

    public render() {
        return (<div className={this.props.class} style={{height: "100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.LineOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.data = this.props.data;
            if (this.props.isDefined) {
                options.isDefined = this.props.isDefined;
            }
            // @ts-ignore
            const line = new Convey.Line(options);
            const element = line.render();

            this.div.appendChild(element);
            line.init(element);
        }
    }

}
interface LineProps {
    data:Promise<any>;
    class?:string;
    isDefined?:(d:any) => boolean;
}
