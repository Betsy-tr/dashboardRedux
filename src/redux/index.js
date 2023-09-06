import { configureStore } from "@reduxjs/toolkit";
import { sliceCompteur } from "./compteurStore";
import { sliceUser } from "./userStore";


// EXPORTATION DES ACTIONS 
export const { plus , moins } = sliceCompteur.actions ; 
export const { initUser , resetUser } = sliceUser.actions

// export const { fonction1 , fonction2 , etc ... } = monSlice.actions ; 


// EXPORTATION DU STORE
export const store = configureStore({
    reducer:{
        compteur : sliceCompteur.reducer , 
        user : sliceUser.reducer , 

        // monReducer : monSlice.reducer
    }
})