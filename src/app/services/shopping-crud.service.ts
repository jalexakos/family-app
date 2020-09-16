import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCrudService {

  constructor(public afs: AngularFirestore) { }

  /**
   * 
   * @param itemName
   * @param itemDescription
   * 
   * Returns a Collection reference and adds information to 
   * the firestore database
   * 
   * Returns a Promise our newly created data response
   * 
   * Naming this collection 'shopping'
   */

   create_Item(itemName,itemDescription){
     return this.afs.collection('shopping').add({
       itemName: itemName,
       itemDescription: itemDescription
     })
   }

   /**
    * No Params needed
    * 
    * Return an Observable of the document from the firebase collection
    * and expose the document ID and an array of data points
    */

    retrieve_Item(){
      return this.afs.collection('shopping').snapshotChanges();
    }

    /**
     * @param itemId
     * @param itemName
     * @param itemDescription
     * 
     * Update given item by its documentId and place newly updated
     * information inside of the database
     */
    update_Item(itemId,itemName,itemDescription){
      this.afs.doc('shopping/' + itemId).update({
        itemName: itemName,
        itemDescription: itemDescription
      })
    }

    /**
     * @param itemId
     * Delete given item by its documentId
     */
    delete_Item(itemId){
      this.afs.doc('shopping/' + itemId).delete()
    }
}
