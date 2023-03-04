import React from 'react'
import Header from './components.js/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index';
import useApi from './hooks/useApi';
import { useSelector, useDispatch } from "react-redux";
import { setCategories } from './redux/actiton/category-action';
import { Link } from 'react-router-dom';
import CategoryDetails from './pages/index/category-details';


function App() {
  const { categoryState } = useSelector((state) => state);
  const dispatch = useDispatch()
  const api = useApi();
  
  if (categoryState.initialized === false) {
    const params = { page: 1, itemsPerPage: 30 };

    api.get("shop/taxons", { params })
      .then((res) => {
        console.log(res);
        dispatch(setCategories(res.data))
      })
  }


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path='category/:category_code' element={<CategoryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



