import React, { useState } from 'react';
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard'

const Restaurant = () => {
  const[menuData, setMenuData] = useState(Menu);
  // console.log(menuData+"mandil")
  return <>
    <MenuCard menuData={menuData}/>
  </>
}

export default  Restaurant
