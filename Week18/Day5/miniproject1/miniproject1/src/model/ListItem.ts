import { v4 as uuidv4 } from 'uuid';

interface ListItemProps {
    id?:string;
    item:string;
    checked:boolean
  }

export default class ListItem {
    private id:string;
    private item:string;
    private checked:boolean;

    constructor({id = uuidv4(), item, checked}:ListItemProps){
        this.id = id;
        this.item = item;
        this.checked = checked;
    }

    getId():string{
        return this.id
    }

    getItem():string{
        return this.item
    }

    setItem(newItem:string):void{
        this.item = newItem;
    }

    isChecked():boolean{
        return this.checked
    }
    setChecked(checked:boolean):void{
        this.checked=checked;
    }

}

