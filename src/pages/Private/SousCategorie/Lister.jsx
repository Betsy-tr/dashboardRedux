import React, { useEffect, useState } from 'react'
import { getAll } from '../../../commonjs/db'
import Item from './Item'

const Lister = () => {

  const [sousCat, setSousCat] = useState([])

  const initData = async () => { 

    const dataTemp = await getAll('sousCategorie')
    setSousCat(dataTemp)
  }

  useEffect(() => {

    initData()

  }, [])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className='font-serif text-[#14b0dd] text-2xl'>Catégorie</th>
              <th className='font-serif text-[#14b0dd] text-2xl'>Sous Catégorie</th>
            </tr>
          </thead>

          <tbody>

            {sousCat?.map(data => <Item key={data.id} souscategorie={data}/>)}
                    
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Lister