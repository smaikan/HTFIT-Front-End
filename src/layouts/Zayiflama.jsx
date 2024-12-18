import React from 'react'
import Item from '../components/items/item'
import { Zayiflamaitem } from '../components/items/itemlists/zayiflamaitem'
import Productlist from '../components/productlist'

const Zayiflama = () => {
  return (
    <div><Productlist item={Zayiflamaitem} text='ZAYIFLAMA'/></div>
  )
}

export default Zayiflama