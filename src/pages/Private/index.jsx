import React from 'react'
import { logout } from '../../commonjs/auth'
import { Route, Routes } from 'react-router-dom'

// Importation des composants
import NavGauche from './common/NavGauche'
import Navbar from './common/Navbar'
import Layout from './common/Layout'
import Home from './Home'
import Categorie from './Categorie'
import SousCategorie from './SousCategorie'
import NoMatch from '../NoMatch'
import Question from './Question'

const index = () => {

  return (
    <>
      <NavGauche/> 
    
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

        <Navbar/>

        <div className="px-6 pt-6 2xl:container">

          <Routes>
            <Route path='/' element={<Layout/>}>

              <Route index element={<Home/>}/>
              <Route path='/categorie' element={<Categorie/>}/>
              <Route path='/souscategorie' element={<SousCategorie/>}/>
              <Route path='/question' element={<Question/>}/>
              <Route path='*' element={<NoMatch/>}/>

            </Route>
          </Routes>  

        </div>

      </div>
        
    </>
  )
}

export default index