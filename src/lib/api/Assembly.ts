import {id} from "./Random";

export default class Assembly {
    private name:string;
    private text:string;
    private size:"full" | "half" | "third" | "auto";
    private content:(close:() => void) => React.ReactElement<any> | React.ReactElement<any>[];

    constructor(text:string = "",
                content:(close:() => void) => React.ReactElement<any> | React.ReactElement<any>[],
                size:"full" | "half" | "third" | "auto" = "auto") {
        this.name = id();
        this.text = text;
        this.size = size;
        this.content = content;
    }

    public getName = () => this.name;
    public getText = () => this.text;
    public getContent = (close:() => void) => this.content(close);
    public getSize = () => this.size;

}
