declare module "react-copy-to-clipboard" {
    import React, { PropsWithChildren } from "react";

    interface Options {
        debug: boolean;
        message: string;
    }

    interface Props {
        text: string;
        onCopy?(a: string, b: boolean): void;
        options?: Options;
    }

    class CopyToClipboard extends React.Component<PropsWithChildren<Props>, {}> { }
    export default CopyToClipboard;
}