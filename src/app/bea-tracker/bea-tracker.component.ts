import { Component, OnInit } from '@angular/core';

// Importing Form Stuff
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Importing CRUD Service
import { BeaCrudService } from '../services/bea-crud.service';

@Component({
  selector: 'app-bea-tracker',
  templateUrl: './bea-tracker.component.html',
  styleUrls: ['./bea-tracker.component.scss']
})
export class BeaTrackerComponent implements OnInit {

  // Creating variable for Firebase to put collection data
  beaData;

  public showForm:boolean = false;
  public buttonIndex: number;
  public confirmShowForms: boolean = false;
  public showUpdateForm2: boolean = false;


    //New Bea Event form
    newBeaForm = new FormGroup({
      beaEvent: new FormControl('', [Validators.required])
    })
  
    // Show Form Button
    toggleForm(){
      this.showForm = !this.showForm;
      if(document.querySelector('#formReveal').innerHTML === "Add Latest Event"){
        document.querySelector('#formReveal').innerHTML = "Close Form"
      }else{
        document.querySelector('#formReveal').innerHTML = "Add Latest Event"
      }
    }

    // Update Bea Event
    updateBea = new FormGroup({
      updateBeaEvent : new FormControl('', [Validators.required])
    })

    // Reveal Update and Delete Button
    
    showButtons(index:number){
      // for(let i = 0; i < this.testData.length; i++){
      // if(index === i){
      //     this.buttonIndex = index;
      //     this.confirmShowForms = true;
      // }
      // }
      this.buttonIndex = index;
      this.confirmShowForms = true;
    }

    // Reveal Update Form
    showUpdateForm(){
      this.showUpdateForm2 = !this.showUpdateForm2;
      if(this.showUpdateForm2 === true){
        document.querySelector('#updateButton').innerHTML = 'Close Form'
      }else{
        document.querySelector('#updateButton').innerHTML = "Update"
      }
    }

    // Close All Forms
    closeForms(){
      this.confirmShowForms = false;
    }

    // creating new Bea Event data submission
    onSubmitNewEvent(){
      this.crudService.create_Event(this.newBeaForm.value.beaEvent);
      this.newBeaForm.reset();
    }

    // Updating Bea Event data submission
    onSubmitUpdateEvent(id,beaEvent){
      this.crudService.update_Event(id,this.updateBea.value.updateBeaEvent);
      this.updateBea.reset();
      this.showUpdateForm2 === true;
      if(this.showUpdateForm2 === true){
        document.querySelector('#updateButton').innerHTML = 'Close Form'
      }else{
        document.querySelector('#updateButton').innerHTML = "Update"
      }

    }

    // Delete Bea Event data submission
    deleteEvent(id){
      this.crudService.delete_Event(id);
    }

  constructor(public crudService: BeaCrudService) { }

  ngOnInit(): void {
    this.crudService.retrieve_Event().subscribe(data=>{
      this.beaData = data.map(rawData => {
        return {
          id: rawData.payload.doc.id,
          beaEvent: rawData.payload.doc.data()['beaEvent'],
          beaTime: rawData.payload.doc.data()['time']
        }
      })
    })
  }

}
