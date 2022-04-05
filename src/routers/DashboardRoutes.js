import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/hero/HeroScreen'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />


        <div className="p-4">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />}></Route>
              <Route path="dc" element={<DcScreen />}></Route>
              <Route path="search" element={<SearchScreen />}></Route>
              <Route path="hero/:heroId" element={<HeroScreen />}></Route>

              <Route path="/" element={<MarvelScreen />}></Route>
          </Routes>
        </div>
        
        
    </>
  )
}
