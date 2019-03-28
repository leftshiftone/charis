import {Component} from "react";

export default class EmitterAwareComponent<PROPS, STATE> extends Component<PROPS, STATE> {

    private readonly callbacks: (() => void)[] = [];

    protected register = (callback: () => void) => this.callbacks.push(callback);

    public componentWillUnmount = () => this.callbacks.forEach(e => e());

}
