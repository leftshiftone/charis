import * as React from 'react';
import {Component, Fragment} from 'react';
import Margin from "../../element/division/Margin";
import Email from "../../element/input/Email";
import Password from "../../element/input/Password";
import Button from "../../element/button/Button";
import {toBoolean} from "../../api/Boolean";
import ToastContainer from "../../element/division/container/ToastContainer";
import ModalContainer from "../../element/division/container/ModalContainer";
import SpinnerContainer from "../../element/division/container/SpinnerContainer";

export default class AuthnLayout extends Component<AuthnProps, AuthnState> {

    constructor(props: AuthnProps) {
        super(props);
        this.state = {username: this.props.initUsername, password: this.props.initPassword};
    }

    public componentWillMount(): void {
        if (typeof document !== "undefined") {
            document.addEventListener("keydown", this.onEnter);
        }
    }

    public componentWillUnmount(): void {
        if (typeof document !== "undefined") {
            document.removeEventListener("keydown", this.onEnter);
        }
    }

    public render() {
        return (
            <div className={`lto-layout-authn ${this.props.className || ""}`}>
                <ToastContainer/>
                <ModalContainer/>
                <SpinnerContainer />
                <div>
                    {this.props.header}
                    {this.renderChallenge()}
                    {this.props.footer}
                </div>
            </div>
        );
    }

    private renderChallenge() {
        return (
            <div>
                {this.renderUsername()}
                {this.renderPassword()}
                <Button block={true} onClick={() => this.authenticate()}>Anmelden</Button>
            </div>
        );
    }

    private onEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13 || e.code === "Enter" || e.code === "enter" || e.which === 13) {
            this.authenticate();
        }
    };

    private authenticate() {
        this.props.authn(this.state);
    }

    private update (update: any) {
        this.setState(Object.assign(this.state, update));
    }

    private renderUsername() {
        if (toBoolean(this.props.showUsername)) {
            return <Margin key={"username"} bottom={20}>
                <Email value={this.state.username} onChange={e => this.update({username: e.target.value})}
                       onInput={(e) => this.onEnter(e)}/>
            </Margin>;
        }
        return <Fragment/>;
    }

    private renderPassword() {
        if (toBoolean(this.props.showPassword)) {
            return <Margin key={"password"} bottom={20}>
                <Password value={this.state.password} onChange={e => this.update({password: e.target.value})}
                          onInput={(e) => this.onEnter(e)}/>
            </Margin>;
        }
        return <Fragment/>;
    }

}

interface AuthnProps {
    initUsername?: string;
    initPassword?: string;
    showUsername?: boolean;
    showPassword?: boolean;

    header?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    authn: (data: AuthnState) => void;
    className?: string;
}

interface AuthnState {
    username?: string;
    password?: string;
}
