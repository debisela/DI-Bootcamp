import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

export default class ListTemplate {
    private ul: HTMLUListElement;
    constructor(ulId:string){
        this.ul = document.getElementById(ulId) as HTMLUListElement;
    }
render(fullList:FullList):void{
    this.ul.innerHTML='';

    fullList.getItems().forEach(item=>{
        const li = document.createElement('li');
        li.id = item.getId()

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.isChecked();
        checkbox.addEventListener('change', ()=>{
            item.setChecked(checkbox.checked);
            fullList.save();
        });

        const label = document.createElement('label');
        label.textContent = item.getItem();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', ()=>{
            fullList.removeItem(item.getId());
            this.render(fullList);
        });

        li.append(checkbox, label, deleteButton);
        this.ul.append(li)

    })
}

}

