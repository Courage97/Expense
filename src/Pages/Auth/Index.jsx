import React from 'react'
import {auth, provider} from '../../Config/Firebase_config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

 export const Index = () => {
    
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider) 
        const  authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.photoURL,
            isAuth: true
        }
        localStorage.setItem("auth", JSON.stringify(autoInfo))
        console.log(results)
        

        navigate('/expense')
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-indigo-600">
            <h1 className="text-3xl font-bold mb-4">WELCOME TO EXPENSE TRACKER</h1>
            <p className="text-lg mb-8">Sign in with your Google account</p>
            <button
                onClick={signInWithGoogle}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" >
                Sign In with Google
            </button>
        </div>
  )
}

export default Index;
