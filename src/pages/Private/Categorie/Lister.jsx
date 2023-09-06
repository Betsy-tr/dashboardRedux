import React, { useEffect, useState } from 'react'
import { getAll } from '../../../commonjs/db'
import Item from './Item'

const Lister = () => {

    const [categories , setCategories] = useState([])

    const initData = async () => { 

        const dataTemp = await getAll('categorie')
        setCategories(dataTemp)
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
                        <th className='font-serif text-[#14b0dd] text-2xl'>Icone</th>
                        <th className='font-serif text-[#14b0dd] text-2xl'>Nom</th>
                        <th className='font-serif text-[#14b0dd] text-2xl'>Degré</th>
                    </tr>
                </thead>

                <tbody>

                    {categories?.map(data => <Item key={data.id} categorie={data}/>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Lister