import {auth} from '../firebase'

import {signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const loginByEmail = async (email , password) => {

    try {
        return signInWithEmailAndPassword(auth , email , password)
    } catch (error) {
        return error
    }
}

export const logout = () =>{

    signOut(auth)
}