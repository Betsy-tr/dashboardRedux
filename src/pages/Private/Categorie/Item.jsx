import React from 'react'

const Item = ({categorie}) => {
  return (
        
            <tr>
                <th></th>
                <td className='text-2xl'>{categorie.icone}</td>
                <td className='font-serif text-black text-xl'>{categorie?.name}</td>
                <td></td>
            </tr>
        
  )
}

export default Item