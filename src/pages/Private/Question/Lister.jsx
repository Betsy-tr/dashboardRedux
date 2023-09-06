import React, { useEffect, useState } from 'react'
import { getAll } from '../../../commonjs/db'
import Item from './Item'

const Lister = () => {

    const [asks , setAsks] = useState([])

    const initData = async () => { 

        const dataTemp = await getAll('question')
        setAsks(dataTemp)
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
                        <th className='font-serif text-[#14b0dd] text-2xl'>Question</th>
                        <th className='font-serif text-[#14b0dd] text-2xl'>Degré</th>
                    </tr>
                </thead>

                <tbody>

                    {asks?.map(data => <Item key={data.id} question={data}/>)}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Lister