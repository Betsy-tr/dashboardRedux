import React, { useEffect, useState } from 'react'
import { getOneById } from '../../../commonjs/db'

const Item = ({question}) => {

  const [categorie , setCategorie] = useState({})

  const getCategorie = async () => { 

    const dataCategorie = await getOneById('categorie' , question.categorie)
    setCategorie(dataCategorie)

  }

  useEffect(() => {

   getCategorie()

  }, [])
   

  return (
        
            <tr>
                <th></th>
                <td className='font-serif text-white text-xl'>{categorie?.name}</td>
                <td className='font-serif text-white text-xl'>{question?.name}</td>
                <td></td>
            </tr>
        
  )
}

export default Item