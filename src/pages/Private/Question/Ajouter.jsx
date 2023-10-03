import React, { useEffect, useState } from 'react'
import { addDataToCollection, getAll } from '../../../commonjs/db';


const Ajouter = () => {

    // Initialisation des states
    const [askName , setAskName] = useState("");
    const [categories , setCategories] = useState([])
    const [selectedCategorie , setSelectedCategorie] = useState("")
    const [selectedDareOrTruth , setSelectedDareOrTruth] = useState("")

    // Initialisation des handles
    const handleChangeAsk = (event) => { // Changement d'état du input

        setAskName(event.target.value)
    }

    const handleDropCategorie = (event) => { // Changement d'état du select

        setSelectedCategorie(event.target.value)

    }

    const handleDropDareOrTruth = (event) => { // Changement d'état du select

        setSelectedDareOrTruth(event.target.value)

    }



    const save = async () => { 

        if (askName != '' && selectedCategorie != '') {

            console.log('save')
            const data = {
                categorie : selectedCategorie ,
                title : askName , // Formatage de la data sous forme d'objet
                type : selectedDareOrTruth
            }
            await addDataToCollection("DareOrTruth" , data)

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
    <div className='flex flex-row gap-4 justify-center w-full mt-10 ml-28'>
        <select value={selectedCategorie} onChange={handleDropCategorie} className="select select-info w-full max-w-xs font-serif text-black">
            <option defaultValue={''} className='font-serif text-black text-sm'>Sélectionner une catégorie</option>
            {categories?.map(data =><option key={data.id} value={data.id} className='font-serif text-black text-sm'>{data.name}</option>)}
        </select>
        <select value={selectedDareOrTruth} onChange={handleDropDareOrTruth} className="select select-info w-full max-w-xs font-serif text-black">
            <option defaultValue={''} className='font-serif text-black text-sm'>Sélectionner un type</option>
            <option value={'dare'}>Action</option>
            <option value={'truth'}>Vérité</option>
        </select>

        <input type="text" value={askName} onChange={handleChangeAsk} className='input input-bordered input-[#14b0dd] w-full max-w-xs border border-[#14b0dd] text-black' />
        <button onClick={save} type="submit" className='inline-block cursor-pointer rounded-md bg-[#14b0dd] font-serif text-black py-3 px-5 text-xl font-semibold'>Ajouter</button>
    </div>
  )
}

export default Ajouter