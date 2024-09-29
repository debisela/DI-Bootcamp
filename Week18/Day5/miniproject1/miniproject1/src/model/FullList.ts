import ListItem from "./ListItem";

export default class FullList {
    private items: ListItem[] = [];

    constructor(){
        this.load();
    }

    load():void{
        const storedList = localStorage.getItem('todoList');
        if (storedList) {
            const parsedList = JSON.parse(storedList);
            this.items = parsedList.map((item:any)=> new ListItem(item));
        }
    }
    save():void{
        localStorage.setItem('todoList', JSON.stringify(this.items))
    }

    addItem(item:ListItem):void{
        this.items.push(item);
        this.save()
    }

    removeItem(id:string):void{
        this.items = this.items.filter(item=>item.getId()!==id);
        this.save()
    }
    clearList():void{
        this.items = []
        this.save()
    }
    getItems():ListItem[]{
        return this.items;
    }

}

