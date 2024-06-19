import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { db } from '../Config/Firebase_config'
import {useGetUserInfo} from "./useGetUserInfo"
export const useAddTransaction = () =>{
    const transactionCollectionRef = collection(db, "trackers");
    const userInfo = useGetUserInfo(); // Assuming useGetUserInfo returns an object with userID
    const addTransaction = async ({ description, transactionAmount, transactionType }) =>{
        if(userInfo.userID) { // Check if userID is defined
            await addDoc(transactionCollectionRef, {
                userID: userInfo.userID, 
                description,
                transactionAmount,
                transactionType,
                createdAt:serverTimestamp()
            });
        } else {
            console.error("userID is undefined"); // Log an error if userID is undefined
        }
    };
    return{addTransaction}
}