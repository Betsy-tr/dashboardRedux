import React, { useEffect, useState } from 'react'
import { getOneById } from '../../../commonjs/db'


const Item = ({souscategorie}) => {

  const [categorie , setCategorie] = useState({})

  const getCategorie = async () => { 

    if (souscategorie.categorie != undefined) {
      
      const dataCategorie = await getOneById('categorie' , souscategorie.categorie)
      setCategorie(dataCategorie)

    }

  }

  useEffect(() => {

    getCategorie()
 
  }, [])

  return (
    <tr>
      <th></th>
      <td className='font-serif text-black text-xl'>{categorie?.name}</td>
      <td className='font-serif text-black text-xl'>{souscategorie?.name}</td>
      <td></td>
    </tr>
  )
}

export default Item