import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Pages/Auth/Index';
import { Expense } from './Pages/Expense-tracker/Expense';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
