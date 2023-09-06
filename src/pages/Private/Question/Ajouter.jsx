import React, { useEffect, useState } from 'react'
import { addDataToCollection, getAll } from '../../../commonjs/db';


const Ajouter = () => {

    // Initialisation des states
    const [askName , setAskName] = useState("");
    const [categories , setCategories] = useState([])
    const [selectedCategorie , setSelectedCategorie] = useState("")

    // Initialisation des handles
    const handleChangeAsk = (event) => { // Changement d'état du input

        setAskName(event.target.value)
    }

    const handleDropCategorie = (event) => { // Changement d'état du select

        setSelectedCategorie(event.target.value)

    }



    const save = async () => { 

        if (askName != '' && selectedCategorie != '') {

            console.log('save')
            const data = {
                categorie : selectedCategorie ,
                name : askName} // Formatage de la data sous forme d'objet
            await addDataToCollection("question" , data)

            setAskName("") // Remise à 0 du formulaire

        }else{

            console.log('no save')
        }

    }

    // Gestion des catégories
    const initData = async () => { 

        const dataTemp = await getAll('categorie')
        setCategories(dataTemp)
    }

    useEffect(() => {

      initData()

    }, [])

  return (
    <div className='flex flex-row gap-4 justify-center w-full mt-10'>
        <select value={selectedCategorie} onChange={handleDropCategorie} className="select select-info w-full max-w-xs font-serif text-white">
            <option defaultValue={''} className='font-serif text-white text-sm'>Sélectionner une catégorie</option>
            {categories?.map(data =><option key={data.id} value={data.id} className='font-serif text-white text-sm'>{data.name}</option>)}
        </select>
        <input type="text" value={askName} onChange={handleChangeAsk} className='input input-bordered input-[#14b0dd] w-full max-w-xs border border-[#14b0dd] text-white' />
        <button onClick={save} type="submit" className='inline-block cursor-pointer rounded-md bg-[#14b0dd] font-serif text-white py-3 px-5 text-xl font-semibold'>Ajouter</button>
    </div>
  )
}

export default Ajouter