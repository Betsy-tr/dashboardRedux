import React, { useState , useEffect } from 'react'
import { addDataToCollection , getAll } from '../../../commonjs/db'


const Ajouter = () => {

  const [sousCategorie, setSousCategorie] = useState("")
  const [categories , setCategories] = useState([])
  const [selectedCategorie , setSelectedCategorie] = useState("")

  const handleChangeSousCategorie = (event) => { 

    setSousCategorie(event.target.value)
  }

  const handleDropCategorie = (event) => { // Changement d'état du select

    setSelectedCategorie(event.target.value)

  }

  const save = async () => { 

    if (sousCategorie != '' && selectedCategorie != '') {

        console.log('save')
        const data = {
          categorie : selectedCategorie ,
          name : sousCategorie
        } // Formatage de la data sous forme d'objet
        await addDataToCollection("sousCategorie" , data)

        setSousCategorie("") // Remise à 0 du formulaire

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
      <select value={selectedCategorie} onChange={handleDropCategorie} className="select select-info w-full max-w-xs font-serif text-black">
        <option defaultValue={''} className='font-serif text-black text-sm'>Sélectionner une catégorie</option>
        {categories?.map(data =><option key={data.id} value={data.id} className='font-serif text-black text-sm'>{data.name}</option>)}
      </select>
      <input name='formSousCategorie' type="text" value={sousCategorie} onChange={handleChangeSousCategorie} className='input input-bordered input-[#14b0dd] w-full max-w-xs border border-[#14b0dd]' />
      <button onClick={save} type="submit" className='inline-block cursor-pointer rounded-md bg-[#14b0dd] font-serif text-white py-3 px-5 text-xl font-semibold'>Ajouter</button>
    </div>
  )
}

export default Ajouter