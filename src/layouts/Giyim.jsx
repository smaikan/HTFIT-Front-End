import React from 'react'
import Productlist from '../components/productlist'
import { giyimitem } from '../components/items/itemlists/giyimitem'

const Giyim = () => {
  return (
    <div><Productlist text='SPOR GİYİM' item={giyimitem} /></div>
  )
}

export default Giyim