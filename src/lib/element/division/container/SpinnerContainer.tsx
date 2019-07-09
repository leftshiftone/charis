/*
 * Copyright (c) 2016-2018, Leftshift One
 * __________________
 * [2018] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

import * as React from 'react';
import Emitter from "../../../api/emitter/Emitter";
import EmitterAwareComponent from "../../../api/emitter/EmitterAwareComponent";

export default class SpinnerContainer extends EmitterAwareComponent<{}, ModalContainerState> {

    constructor(props: {}) {
        super(props);
        this.state = {show: false};
    }

    public render() {
        return (
            <div className={"lto-spinner-container"}>
                <div />
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"/>
                    <div className="sk-cube2 sk-cube"/>
                    <div className="sk-cube4 sk-cube"/>
                    <div className="sk-cube3 sk-cube"/>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        const $this = this;
        this.register(Emitter.addListener("charis:spinnerContainer:show", () => {
            $this.setState({show: true});
        }));
        this.register(Emitter.addListener("charis:spinnerContainer:hide", () => {
            $this.setState({show: false});
        }));
    }

}

interface ModalContainerState {
    show: boolean;
}
