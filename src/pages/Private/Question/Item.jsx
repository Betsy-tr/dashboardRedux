import React, { useEffect, useState } from 'react'
import { getOneById } from '../../../commonjs/db'

const Item = ({question}) => {

  const [categorie , setCategorie] = useState({})
  const [sousCategorie , setSousCategorie] = useState({})

  const getCategorie = async () => { 

    if (question.categorie != undefined) {
      
      const dataCategorie = await getOneById('categorie' , question.categorie)
      setCategorie(dataCategorie)

    }

  }

  const getSousCategorie = async () => { 

    if (question.sousCategorie != undefined) {
      
      const dataSousCategorie = await getOneById('sousCategorie' , question.sousCategorie)
      setCategorie(dataSousCategorie)

    }

  }

  useEffect(() => {

   getCategorie()
   getSousCategorie()

  }, [])
   

  return (
        
            <tr>
                <th></th>
                <td className='font-serif text-black text-xl'>{categorie?.name}</td>
                <td className='font-serif text-black text-xl'>{sousCategorie?.name}</td>
                <td className='font-serif text-black text-xl'>{question?.title}</td>
                <td className='font-serif text-black text-xl'>{question?.type}</td>
                <td></td>
            </tr>
        
  )
}

export default Item