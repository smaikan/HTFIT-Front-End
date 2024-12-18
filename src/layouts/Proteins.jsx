import React, { useEffect } from 'react'
import Productlist from '../components/productlist'
import { Proteinitem } from '../components/items/itemlists/proteinitem'


const Proteins = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><Productlist text='PROTEİN' item={Proteinitem}/></div>
  )
}

export default Proteins