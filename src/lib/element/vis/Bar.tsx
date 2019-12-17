import * as React from 'react';
import * as Convey from '@leftshiftone/convey';

export default class Bar extends React.Component<{}, {}> {

    private div:HTMLDivElement | null = null;

    constructor(props:{}) {
        super(props);
    }

    public render() {
        return (<div style={{height:"100%"}} ref={div => this.div = div} />);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.BarOptions();
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;

            // @ts-ignore
            const bar = new Convey.Bar(options);

            const element = bar.render();
            this.div.appendChild(element);
            bar.init(element);
        }
    }

}
