import React from 'react'
import Ajouter from './Ajouter'
import Lister from './Lister'

const Categorie = () => {
  return (
    <div className='w-full'>
        <h1 className='text-[#14b0dd] font-semibold text-4xl font-serif'>Ajouter une nouvelle catégorie</h1>
        <Ajouter/>
        <div className=' p-11'>
            <Lister/>
        </div>
        
    </div>
  )
}

export default Categorie