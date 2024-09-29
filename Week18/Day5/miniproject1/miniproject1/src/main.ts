import './style.css'
import FullList from './model/FullList';
import ListTemplate from './templates/ListTemplate';
import ListItem from './model/ListItem';


const fullList = new FullList();
const listTemplate = new ListTemplate('listItems')

const itemForm = document.getElementById('itemEntryForm') as HTMLFormElement
const newItemInput = document.getElementById('newItem') as HTMLInputElement;
const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement

itemForm.addEventListener('submit', event =>{
  event.preventDefault();

  const newItemText = newItemInput.value.trim();
  if(!newItemText) return;

  const newItem = new ListItem({item: newItemText, checked: false});
  fullList.addItem(newItem);

  listTemplate.render(fullList);
  newItemInput.value='';
})

clearButton.addEventListener('click', ()=>{
  fullList.clearList();
  listTemplate.render(fullList);
})

listTemplate.render(fullList)

