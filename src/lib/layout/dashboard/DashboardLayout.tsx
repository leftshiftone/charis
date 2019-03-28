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
import INavigation from "../../element/navigation/api/INavigation";
import ModalContainer from "../../element/division/ModalContainer";

export default class DashboardLayout extends React.Component<LayoutProps, {}> {

    constructor(props: LayoutProps) {
        super(props);
    }

    public render() {
        return (
            <main className={"layout dashboard"}>
                <ModalContainer/>
                {this.props.navigation}
                <section>
                    {this.props.children}
                </section>
            </main>
        );
    }

}

interface LayoutProps {
    children: any;
    navigation: React.ReactElement<INavigation>;
}
