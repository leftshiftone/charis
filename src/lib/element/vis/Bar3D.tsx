import * as React from 'react';
import * as Convey from '@leftshiftone/convey';

export default class Bar3D extends React.Component<Bar3DProps, {}> {

    private div: HTMLDivElement | null = null;

    constructor(props: Bar3DProps) {
        super(props);
    }

    public render() {
        return (<div style={{height: "100%"}} ref={div => this.div = div}/>);
    }

    public componentDidMount() {
        if (this.div) {
            // @ts-ignore
            const options = new Convey.Bar3DOptions();
            options.data = this.props.data;
            options.width = this.div.clientWidth * 0.98;
            options.height = this.div.clientHeight;
            options.scale = options.width / 30;

            if (this.props.scale) {
                options.scale = this.props.scale;
            }
            if (this.props.origin) {
                options.origin = this.props.origin;
            }
            if (this.props.textX) {
                options.textX = this.props.textX;
            }
            if (this.props.textY) {
                options.textY = this.props.textY;
            }
            if (this.props.textZ) {
                options.textZ = this.props.textZ;
            }

            // @ts-ignore
            const bar3d = new Convey.Bar3D(options);
            const element = bar3d.render();

            this.div.appendChild(element);
            bar3d.init(element);
        }
    }

}

interface Bar3DProps {
    data: Promise<any>;
    color?: [string];
    scale?: number;
    origin?: (w: number, h: number) => number[];
    gridStroke?: string;
    gridFill?: string;
    legendColor?: string;
    strokeWidth?: number;
    textX?: (d: any) => string;
    textY?: (d: any) => string;
    textZ?: (d: any) => string;
}
