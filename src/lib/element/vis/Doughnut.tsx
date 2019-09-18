import * as React from 'react';
import * as Convey from 'gaia-js-sdk-convey';

export default class Doughnut extends React.Component<DoughnutProps, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:DoughnutProps) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        this.init();
    }

    private init(): void {
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

    shouldComponentUpdate(nextProps: Readonly<DoughnutProps>, nextState: Readonly<{}>, nextContext: any): boolean {
        document.querySelector(".lto-vis-doughnut")!.remove();
        this.init();
        return true;
    }

}
interface DoughnutProps {
    data:Promise<any>;
    color?:[string];
}
