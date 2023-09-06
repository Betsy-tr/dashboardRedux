import React, { useState } from 'react'
import { addDataToCollection } from '../../../commonjs/db';

const Ajouter = () => {

    const [catName , setCatName] = useState("");

    const handleChangeCategorie = (event) => { 

        setCatName(event.target.value)
    }

    const save = async () => { 

        if (catName != '') {

            console.log('save')
            const data = {name : catName} // Formatage de la data sous forme d'objet
            await addDataToCollection("categorie" , data)

            setCatName("") // Remise à 0 du formulaire

        }else{

            console.log('no save')
        }

    }

  return (
    <div className='flex flex-row gap-4 justify-center w-full mt-10'>
        <input name='formCategorie' type="text" value={catName} onChange={handleChangeCategorie} className='input input-bordered input-[#14b0dd] w-full max-w-xs border border-[#14b0dd]' />
        <button onClick={save} type="submit" className='inline-block cursor-pointer rounded-md bg-[#14b0dd] font-serif text-white py-3 px-5 text-xl font-semibold'>Ajouter</button>
    </div>
  )
}

export default Ajouter