import * as React from "react";
import {Component, Fragment} from "react";

export default class Environment extends Component<EnvironmentProps, {}> {

    public render() {
        if (this.props.type === "client" && typeof document !== "undefined") {
            return this.props.children;
        }
        return <Fragment />;
    }

}
interface EnvironmentProps {
    type:"server" | "client";
}
