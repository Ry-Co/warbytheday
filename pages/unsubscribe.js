import Head from "next/head";
import NavBar from '../components/NavBar'
import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from 'react'
import Modal from '../components/Modal'
export default function unsubscribe() {


    const [contacts, contactsLoading, contactsError] = useCollection(firebase.firestore().collection("emails"), {});
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("Welcome!")
    const [modalSubText, setModalSubText] = useState("You've joined the list, you'll recieve today's newsletter shortly.")
    const db = firebase.firestore();


    const removeEmailFromDB = async (email) => {
        console.log("DELETING " + email);
        await db.collection("emails").doc(email).delete();
    };
    const handleSubmit = (evt) => {
        // Check email, then push proper popup alert
        evt.preventDefault();
        verifyEmail(email)
        // addEmailToDB(email)
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
    const verifyEmail = (email) => {
        if (isInDB(email)) {
            //remove normally
            removeEmailFromDB(email)
            setModalTitle("All good things must end :(")
            setModalSubText("We'll do our best to improve")
            setModal(true)
        } else {
            //didn't find it
            console.log('oof')
            setModalTitle("That's strange")
            setModalSubText("We didn't find that email on our list? Make sure it's entered properly")
            setModal(true)
        }
    }
    return (
        <div className="flex flex-col items-center  min-h-screen pt-2 bg-gray-200 ">
            <Head>
                <title>War by the day</title>
            </Head>

            <div className="w-full">
                <NavBar />
            </div>
            <main className="flex flex-col  justify-center w-full px-20 text-left items-center ">
                <div>
                    <div class="flex items-center justify-center h-screen bg-gray-200 ">
                        <div class="container">
                            <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
                                <div class="text-center">
                                    <h2 class=" tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">😞</h2>

                                    {/* <div class="mt-10">Before you go, what's our biggest shortcomings?</div>
                                    <div>
                                        <div class="mt-2">
                                            <div>
                                                <label class="inline-flex items-center mt-5 ">
                                                    <input type="checkbox" class="form-checkbox text-indigo-600" />
                                                    <span class="ml-2">Uninteresting Content</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center mt-5 ">
                                                    <input type="checkbox" class="form-checkbox text-green-500" />
                                                    <span class="ml-2">Too frequent emails</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center mt-5 ">
                                                    <div>
                                                        <span class="ml-2">Other: </span>
                                                        <input
                                                            className="w-full py-3 px-4 bg-gray-200  border-gray-300 border-1 outline-none placeholder-gray-500 focus:bg-gray-100"
                                                            type="text"
                                                            value={"oof"}
                                                            onChange={e => setEmail(e.target.value)}
                                                            placeholder="please provide details"
                                                        />
                                                    </div>


                                                </label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div class='text-md md:text-lg mt-10'>Enter your email address to unsubscribe</div>
                                </div>
                                <form onSubmit={handleSubmit} className="flex mt-2">
                                    <input
                                        className="w-full py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                    <input className="ml-1 py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600" type="submit" value="Unsubscribe" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {modal
                ?
                <Modal title={modalTitle} subText={modalSubText} onChangeState={(show) => { setModal(show) }} />

                :
                <div></div>}

        </div>
    )

}