import React from 'react'

// Importation des composants
import Ajouter from './Ajouter'
import Lister from './Lister'

const Question = () => {
  return (
    <div className='w-full'>
        <h1 className='text-[#14b0dd] font-semibold text-4xl font-serif'>Ajouter une nouvelle question</h1>
        <Ajouter/>
        <div className=' p-11'>
            <Lister/>
        </div>
        
    </div>
  )
}

export default Question