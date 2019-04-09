import * as React from 'react';
import {Component, Fragment} from 'react';
import Margin from "../../element/division/Margin";
import Email from "../../element/input/Email";
import Password from "../../element/input/Password";
import Button from "../../element/button/Button";
import {toBoolean} from "../../api/Boolean";

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
                {this.renderUsername()}
                {this.renderPassword()}
                <Button autoFocus={true} block={true} onClick={() => this.props.authn(this.state)}>Anmelden</Button>
            </div>
        );
    }

    private update = (update: any) => this.setState(Object.assign(this.state, update));

    private renderUsername() {
        if (toBoolean(this.props.showUsername)) {
            return <Margin key={"username"} bottom={20}>
                <Email value={this.state.username} onChange={e => this.update({username: e.target.value})}/>
            </Margin>;
        }
        return <Fragment />;
    }

    private renderPassword() {
        if (toBoolean(this.props.showPassword)) {
            return <Margin key={"password"} bottom={20}>
                <Password value={this.state.password} onChange={e => this.update({password: e.target.value})}/>
            </Margin>;
        }
        return <Fragment />;
    }

}

interface AuthnProps {
    initUsername?: string;
    initPassword?: string;
    showUsername?: boolean;
    showPassword?: boolean;

    header?: React.ReactElement<any>;
    footer?: React.ReactElement<any>;
    authn: (data:AuthnState) => void;
    className?: string;
}

interface AuthnState {
    username?: string;
    password?: string;
}
