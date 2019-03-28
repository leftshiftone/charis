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

export default class Image extends React.Component<ImageProps, {}> {

    constructor(props: ImageProps) {
        super(props);
    }

    public render() {
        return (<img src={this.props.src} className={`lto-image lto-${this.props.align}`} />);
    }

}

interface ImageProps {
    src: string;
    align?: "left" | "center" | "right";
}
