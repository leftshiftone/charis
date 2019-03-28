import * as React from 'react';
import {Component} from 'react';
import Margin from "../../element/division/Margin";
import Email from "../../element/input/Email";
import Password from "../../element/input/Password";
import Button from "../../element/button/Button";

export default class AuthnLayout extends Component<AuthnProps, AuthnState> {

    constructor(props: AuthnProps) {
        super(props);
        this.state = {username: this.props.initUsername, password: this.props.initPassword};
    }

    public render() {
        return (
            <div className={`lto-layout-authn ${this.props.className || ""}`}>
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
                <Margin key={"username"} bottom={20}>
                    <Email value={this.state.username} onChange={e => this.update({username: e.target.value})}/>
                </Margin>
                <Margin key={"password"} bottom={20}>
                    <Password value={this.state.password} onChange={e => this.update({password: e.target.value})}/>
                </Margin>
                <Button block={true} onClick={this.props.authn}>Anmelden</Button>
            </div>
        );
    }

    private update = (update: any) => this.setState(Object.assign(this.state, update));

}

interface AuthnProps {
    initUsername?: string;
    initPassword?: string;

    header?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    authn: () => void;
    className?: string;
}

interface AuthnState {
    username?: string;
    password?: string;
}
