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
import Modal from "../Modal";
import Assembly from "../../../api/assembly/ModalAssembly";
import EmitterAwareComponent from "../../../api/emitter/EmitterAwareComponent";

export default class ModalContainer extends EmitterAwareComponent<{}, ModalContainerState> {

    constructor(props: {}) {
        super(props);
        this.state = {assembly: null};
    }

    public render() {
        return (<div className="lto-modal-container">
            {
                [this.state.assembly].map((a, i) => {
                    if (a) {
                        return (
                            <Modal key={i} assembly={a} visible={true} onClose={() => this.onClose()}>
                                {a.getContent(this.onClose)}
                            </Modal>
                        );
                    }
                    return <div key={i}/>;
                })
            }
        </div>);
    }

    private onClose = () => this.setState({assembly: null});

    public componentDidMount() {
        const $this = this;
        this.register(Emitter.addListener("charis:modalContainer:show", (args: any[]) => {
            $this.setState({assembly: args[0]});
        }));
        this.register(Emitter.addListener("charis:modalContainer:hide", () => {
            $this.setState({assembly: null});
        }));
    }

}

interface ModalContainerState {
    assembly: Assembly | null;
}
