import * as React from "react";
import {Component} from "react";

export default class SeventyThirtyLayout extends Component<SeventyThirtyLayoutProps, {}> {

    public render() {
        return <section className={`lto-seventythirty-layout ${this.props.className || ""}`}>
            <div>
                <div className={"lto-component"}>{this.props.componentA}</div>
            </div>
            <div>
                <div>
                    <div className={"lto-component"}>{this.props.componentB}</div>
                </div>
                <div>
                    <div className={"lto-component"}>{this.props.componentC}</div>
                </div>
            </div>
        </section>;
    }

}

interface SeventyThirtyLayoutProps {
    componentA: React.ReactElement<any>;
    componentB: React.ReactElement<any>;
    componentC: React.ReactElement<any>;
    className?: string;
}
