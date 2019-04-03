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
import ToastAssembly from "../../../api/assembly/ToastAssembly";
import Toast from "../Toast";
import {id} from "../../../api/Random";

export default class ToastContainer extends React.Component<{}, ToastContainerState> {

    constructor(props: {}) {
        super(props);
        this.state = {assemblies: []};
    }

    public render() {
        return (<div className="lto-toast-container">
            {
                this.state.assemblies.map((assembly) => {
                    return <Toast key={assembly[0]} assembly={assembly[1]} onClick={() => this.removeAssembly(assembly)}/>;
                })
            }
        </div>);
    }

    public componentDidMount() {
        const $this = this;
        Emitter.addListener("charis:toastContainer:show", (args: any[]) => {
            $this.setState({assemblies: [[id(), args[0]], ...this.state.assemblies]});
        });
        Emitter.addListener("charis:toastContainer:hide", (args: any[]) => {
            $this.removeAssembly(args[0]);
        });
    }

    private removeAssembly(assembly:[string, ToastAssembly]) {
        this.setState({assemblies:this.state.assemblies.filter(e => e[0] !== assembly[0])});
    }

}

interface ToastContainerState {
    assemblies: [string, ToastAssembly][];
}
