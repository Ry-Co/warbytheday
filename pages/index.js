import Head from 'next/head'
import axios from 'axios'
import firebase from "../firebase/clientApp"
import {useCollection} from 'react-firebase-hooks/firestore'

// POST is for adding a new database entry
// PUT is for updating an existing database entry
// GET is for fetching the existing database entry
// DELETE is for deleting the existing database entry
// axios.post('api/entry', {title:"this is a title", slug:"this-is-a-slug", body:"LoremLoremIpsum Ipsum Lora gefardia"})

export default function Home() {
  const [contacts, contactsLoading, contactsError] = useCollection(firebase.firestore().collection("emails"),{})
  const db = firebase.firestore()


  // if(!contactsLoading && contacts){
  //   console.log(contacts)
  //   console.log(contacts.docs)
  //   contacts.docs.map((doc) =>{
  //     console.log(doc.data().email)
  //   })
  // }


  const addEmailToDB = async(email) =>{
    // call this after validating email
    await db.collection("emails").doc(email).set({email})  
  }
  const removeEmailFromDB = async(email) =>{
    console.log('DELETING '+email)
    await db.collection("emails").doc(email).delete();
  }


  return (
    <div>
        <div>Test div</div>
        {/* <div><button onClick={() => addEmailToDB("BUTTONEMAIL@TEST.COM")}>ADD BUTTON</button></div> 
        <div><button onClick={() => removeEmailFromDB("BUTTONEMAIL@TEST.COM")}>DELETE BUTTON</button></div>  */}
    </div>
  )
}
