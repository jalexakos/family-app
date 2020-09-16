import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BeaCrudService {

  constructor(public afs: AngularFirestore) { }

  /**
   * Creating a new Bea Event
   * 
   * @param beaEvent
   * 
   * Returns a Collection reference and adds information to the firestore database
   * Naming collection 'bea'
   * Returns a Promise of our newly created data response
   */

   create_Event(beaEvent){
     return this.afs.collection('bea').add({
       beaEvent: beaEvent,
       time: new Date().toLocaleTimeString()
     })
   }

   /**
    * No Params
    * 
    * Returns an Observable of the document from the firebase collection and 
    * expose the document ID and an array of data points.
    */

    retrieve_Event(){
      return this.afs.collection('bea', ref=> ref.orderBy('time')).snapshotChanges();
    }

    /**
     * 
     * @param beaEventId
     * @param beaEvent
     * 
     * Update given Bea Event by its documentId and place newly updated information inside of the database
     * 
     */
    update_Event(beaEventId,beaEvent){
      this.afs.doc('bea/' + beaEventId).update({
        beaEvent: beaEvent
      })
    }

    /**
     *
     * @param beaEventId
     * 
     * Delete given Bea Event by its documentId 
     */
      delete_Event(beaEventId){
        this.afs.doc('bea/' + beaEventId).delete()
      }

}
