import React from 'react';
import { LoginPage } from './pages';
import { TesPage } from './pages/STO';
import { Route, Routes } from 'react-router-dom'
import { RegistrationPage } from './pages/registration';
import { RoutePaths } from './constants/commonConstants';
import { STOPage } from './pages/STO';
import './styles/globalStyles.scss';

export const App: React.FC = () => {
  return (
  <Routes>
    <Route path={RoutePaths.Login} element={<LoginPage />}/>
    <Route path={RoutePaths.Registration} element={<RegistrationPage />} />
    <Route path={RoutePaths.STO} element={<STOPage/>} />
    <Route path={RoutePaths.Tes} element={<TesPage/>} />
    <Route path={'*'} element={<LoginPage />} />
  </Routes>
  );
};