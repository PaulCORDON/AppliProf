import { Page } from "ionic-angular/navigation/nav-util";

export class CardAccueuil {
     
    public imgSource:String;
    public title:String;
    public page:Page;
    constructor(src:String,title:String,page:Page){
            this.imgSource=src;
            this.title=title;
            this.page=page;
        } 
}