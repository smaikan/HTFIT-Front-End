import { useEffect } from 'react'
import Images from '../components/fullimages'
import Items from '../components/items'
import { bestsellerItem } from '../components/items/itemlists/bestselleritem'
import { giyimitem } from '../components/items/itemlists/giyimitem'
import { Newitem } from '../components/items/itemlists/newitem'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Images />
      <Items text='Yeni ürünler' item={Newitem}/>
      <Items text='En çok satılanlar' item={bestsellerItem}/>
      <Items text='Spor giyim' item={giyimitem}/>
    </div>
  )
}

export default Home