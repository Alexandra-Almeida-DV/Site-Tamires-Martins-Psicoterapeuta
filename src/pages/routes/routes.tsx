import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {

    return (
     <Routes>
       <Route path="tamires_psi" element={<p>Tamires Martins</p>} />

       <Route path="*" element={<Navigate to="/tamires_psi"/>} />
     </Routes>
    );
}