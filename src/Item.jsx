import React from 'react';
import {items} from './assets/index.js';

function Item({data}) {
  return (
    items.map((item)=>(
    <div className="max-w-xs bg-black text-white p-4 text-center">
    <img src={item.Image} alt="Fortnite" className="w-full" />
    <p className="mt-2 font-thin">{item.Title}</p>
  </div>
 ))
  )
}

export default Item