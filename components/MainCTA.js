import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from 'react'
import Modal from '../components/Modal'
import { FaHandMiddleFinger } from "react-icons/fa";

function MainCTA() {

  const [contacts, contactsLoading, contactsError] = useCollection(firebase.firestore().collection("emails"), {});
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Welcome!")
  const [modalSubText, setModalSubText] = useState("You've joined the list, you'll recieve today's newsletter shortly.")



  const db = firebase.firestore();
  const addEmailToDB = async (email) => {
    // call this after validating email
    await db.collection("emails").doc(email).set({ email });
  };
  const removeEmailFromDB = async (email) => {
    console.log("DELETING " + email);
    await db.collection("emails").doc(email).delete();
  };



  const verifyEmail = (email) => {
    if (isInDB(email)) {
      //already in DB
      setModalTitle("Houston, we have a problem?")
      setModalSubText("It seems this email is already registered in our list. Maybe try another?")
      setModal(true)
    } else {
      //add to DB
      addEmailToDB(email)
      setModalTitle("Welcome!")
      setModalSubText("You've joined the list, you'll recieve today's newsletter shortly.")
      setModal(true)
    }
  }

  const isInDB = (email) => {
    const emailRay = []
    if (!contactsLoading && contacts) {
      contacts.docs.map((doc) => {
        emailRay.push(doc.data().email)
      })
      if (emailRay.includes(email)) {
        return true
      } else {
        return false
      }
    }

  }

  const handleSubmit = (evt) => {
    // Check email, then push proper popup alert
    evt.preventDefault();
    verifyEmail(email)
    // addEmailToDB(email)
  }

  return (
    <div className="flex flex-col max-w-screen md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
      <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-800">
        <div className="py-6 px-8 md:py-0">
          <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
            Daily WW2 History Newsletter!
          </h2>
          <p className="mt-2 text-gray-600 md:text-gray-300">
            Look back on the most important events of the war with our daily newsletter.
          </p>
          <p className="mt-2 text-gray-600 md:text-gray-300">
            Want to see what we have to offer? Checkout the <b className="md:text-gray-50">sample below!</b>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 border-gray-700">
        <form onSubmit={handleSubmit} className="flex">
          <input
            className="w-full py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input className="ml-1 py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600" type="submit" value="Submit" />
        </form>
      </div>
      {modal
        ?
        <Modal title={modalTitle} subText={modalSubText} onChangeState={(show) => { setModal(show) }} />

        :
        <div></div>}
    </div>
  );
};

export default MainCTA


{/* <div className=" bg-gray-800 bg-opacity-80 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
        <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">Delete Your Acccount ?</div>
                <p className="text-sm text-gray-600 leading-none mt-1">By deleting your account you will lose your all data</p>
              </div>
            </div>
            <button mat-icon-button="" className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
          </div>
        </div>
      </div> */}