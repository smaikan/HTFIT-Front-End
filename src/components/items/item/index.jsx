import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div className='flex justify-center flex-wrap'>
        {item.map((item,index)=>(
         <Link to={`/product/${item.id}`} className='w-[230px] h-[340px] pt-4 mb-12 flex flex-col mx-8 items-center  rounded-xl  hover:shadow-2xl transition duration-300'  key={index}>
            <div className='h-52 w-52 '><img className='object-cover rounded-lg w-full h-full' src={item.img}/> </div>
            <div className='w-52'>
              <div className='text-s'>{item.category}</div> 
             <div className=' text-lg font-bold mb-[6px]'>{item.name}</div>
       
        <div className='text-xl font-bold text-red-700'>{item.price} TL</div></div>
            
          </Link>
       
       ))}
        
        </div>
  )
}

export default Item;