import { configureStore } from "@reduxjs/toolkit";
import { sliceCompteur } from "./compteurStore";


// EXPORTATION DES ACTIONS 
export const { plus , moins } = sliceCompteur.actions ; 

// export const { fonction1 , fonction2 , etc ... } = monSlice.actions ; 


// EXPORTATION DU STORE
export const store = configureStore({
    reducer:{
        compteur : sliceCompteur.reducer , 

        // monReducer : monSlice.reducer
    }
})