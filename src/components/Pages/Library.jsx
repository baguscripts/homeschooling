import React from 'react'
import one from "../../images/img1.jpg"
import two from "../../images/img2.jpg"



const Dummy_LIBRARY=[
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:one,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
  {
    id:"1",
    name:'Nancy Drew',
    Genre:"Novel",
    image:two,
    author:"manu",

  },
]
function Library() {
  return (
    <div className='m-4'>
      <h1 className='text-3xl text-center text-grey-700 font-bold pt-2'>Library</h1>
      <div className='flex'>
      <h1 className='font-semibold'>Categories</h1>
      <input  placeholder='e.g Maths' className='bg-gray-200 rounded-md text-center'/>
      <button className='bg-blue-900 text-white rounded-md pl-2 pr-2'>View</button>
      </div>
      {Dummy_LIBRARY.map((item,key)=>(
          <div className='flex'>
            <img src={item.image} className="w-56 h-56 rounded-md m-2"/>
            <div className='flex absolute bottom-0'>
                <h1 className='pr-2'>{item.author}</h1>
                <h1>{item.name}</h1>
            </div>
         </div>         
        )
        )}
    </div>
  )
}

export default Library
