import { Component, OnInit } from '@angular/core';

// Importing Form Stuff
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Importing CRUD Service
import { ShoppingCrudService } from '../services/shopping-crud.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  // Creating a variable for Firebase to put collection data
  shoppingData;

  public showForm:boolean = false; // Shows the form to create a new item
  public showButtons:boolean = false; // Shows the Buttons to Update and Delete
  public showUpdateForm2: boolean = false; // Shows the Update Form if the Update Button is selected


  //New Shopping Item form
  newItemForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemDescription: new FormControl('', [Validators.required])
  })

  // Update Shopping Item form
  updateItemForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    itemDescription: new FormControl('', [Validators.required])
  })

  // Show Form Button
  toggleForm(){
    this.showForm = !this.showForm;
    if(document.querySelector('#formReveal').innerHTML === "Add New Item"){
      document.querySelector('#formReveal').innerHTML = "Close Form"
    }else{
      document.querySelector('#formReveal').innerHTML = "Add New Item"
    }
  }

  active: number;
onClick(index: number) {
  this.active = index;
  this.showButtons = true;
  for(let i = 0; i < this.shoppingData.length;i++){
    if(this.shoppingData[i].id === this.active){
      document.querySelector('#shoppingInfo').innerHTML = this.shoppingData[i].itemDescription;
    }
  }
}

showUpdateForm(){
  this.showUpdateForm2 = !this.showUpdateForm2;
  if(document.querySelector('#updateButton').innerHTML === "Update"){
    document.querySelector('#updateButton').innerHTML = "Close Form";
  }else{
    document.querySelector('#updateButton').innerHTML = "Update";
  }
}

// Close shopping info
closeForms(){
  this.active = 0;
  this.showButtons = false;
  this.showUpdateForm2 = false;
  document.querySelector('#shoppingInfo').innerHTML = "";
}

// Creating a new Shopping Item data submission
onSubmitNewItem(){
  this.crudService.create_Item(this.newItemForm.value.itemName,this.newItemForm.value.itemDescription);
  // since data doesn't clear automatically, the below resets the form
  this.newItemForm.reset();
}

// Updating item data submission
onSubmitUpdateItem(id){
  this.crudService.update_Item(id,this.updateItemForm.value.itemName,this.updateItemForm.value.itemDescription);
  this.updateItemForm.reset();
  // the item Description does not update until you click out of the item and then click back in. Need to fix this.
}


// Deleting item data submission
deleteItem(id){
  this.crudService.delete_Item(id);
  this.active = 0;
  this.showButtons = false;
  document.querySelector('#shoppingInfo').innerHTML = "";
}

  constructor(public crudService: ShoppingCrudService) { }

  ngOnInit(): void {
    // Pulling the data to show in initialization
    this.crudService.retrieve_Item().subscribe(data=>{
      this.shoppingData = data.map(rawData=> {
        return {
          id: rawData.payload.doc.id,
          itemName: rawData.payload.doc.data()['itemName'],
          itemDescription: rawData.payload.doc.data()['itemDescription']
        }
      })
    })
  }

}
