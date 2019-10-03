import * as React from 'react';
import * as Convey from 'gaia-js-sdk-convey';

export default class Stackedbar extends React.Component<StackedbarProps, {}> {

    private div: HTMLDivElement | null = null;

    constructor(props: StackedbarProps) {
        super(props);
    }

    public render() {
        return (<div style={{height: "100%"}} ref={div => this.div = div}/>);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.StackedbarOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.data = this.props.data;
            options.legend = false;
            options.textX = this.props.textX || "";
            options.textY = this.props.textY || "";

            // @ts-ignore
            const bar = new Convey.Stackedbar(options);

            const element = bar.render();
            this.div.appendChild(element);
            bar.init(element);
        }
    }

}

interface StackedbarProps {
    data: Promise<any>;
    color?: [string];
    textX?: string;
    textY?: string;
}
