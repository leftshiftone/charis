import {id} from "../Random";

export default class ModalAssembly {
    private name:string;
    private text:string;
    private size:"full" | "half" | "third" | "auto";
    private content:(close:() => void) => React.ReactElement<any> | React.ReactElement<any>[];
    private showCloseButton:boolean;

    constructor(text:string = "",
                content:(close:() => void) => React.ReactElement<any> | React.ReactElement<any>[],
                size:"full" | "half" | "third" | "auto" = "auto",
                showCloseButton:boolean = true) {
        this.name = id();
        this.text = text;
        this.size = size;
        this.content = content;
        this.showCloseButton = showCloseButton;
    }

    public getName = () => this.name;
    public getText = () => this.text;
    public getContent = (close:() => void) => this.content(close);
    public getSize = () => this.size;
    public getShowCloseButton = () => this.showCloseButton;

}
