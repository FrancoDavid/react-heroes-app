import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={
                <PublicRouter>
                  <LoginScreen />
                </PublicRouter>
            }></Route>

            <Route path="/*" element={
                <PrivateRouter>
                  <DashboardRoutes />
                </PrivateRouter>
            }></Route>
        </Routes>
    </BrowserRouter>
  )
}
