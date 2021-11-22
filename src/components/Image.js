import React, {useState} from 'react';

import {get, child} from 'firebase/database';
import List from './List';
import getInfo from '../firebase/firebase';

const Image = function () {
 // getInfo('Waldo',1000,150);
  const [score,setscore]=useState([]);
  if(score.length===2)
  {
    window.location.reload();
  }
 
  const showlist = (x, y) => {

    const list = document.querySelector('.list');
    console.log(list);
    console.log(window.scrollY);
    if(list.style.display === 'block')
    {
      list.style.display='none';
      return;
    }
    list.style.display = 'block';
    list.style.position = 'absolute';
    // console.log(window.innerHeight);

    const windowHeight = document.querySelector('.find').offsetHeight;
    console.log(window.innerHeight);
    // console.log(windowHeight);
    console.log(window.innerHeight-windowHeight);
    
    
      
    list.style.top = `${y + window.scrollY}px`;
    
     
    list.style.left = `${x}px`;

    
  };

  const callBackend = async (name) => {
    console.log(name);
    const positionY=document.querySelector('.list').offsetTop-(window.innerHeight/10);
    const positionX=document.querySelector('.list').offsetLeft;
    console.log(positionX,positionY);
    const Y= document.querySelector('.find').offsetHeight;
    console.log(Y);
    const res=await getInfo(name,Number(positionX),Number(positionY),window.innerWidth,Y);
    if(res===true){
      document.querySelector('.success').style.display='block';
      setTimeout(()=>{
        document.querySelector('.success').style.display='none';
      },1000);
      setscore(()=>{
        if(name in score){
          return [...score];
        }
        
        return [...score,name];
        
      })
     
    }
    else{
      document.querySelector('.failure').style.display='block'
      setTimeout(()=>{
        document.querySelector('.failure').style.display='none';
      },1000);
    }
    

    
  };

  const getClickcoord = (e) => {
    
    console.log(e.clientX, e.clientY);
    showlist(e.clientX, e.clientY);
  };
  return (
    <div className="image">
      <img  className="find" src="https://miro.medium.com/max/1400/1*wCKISiDxA7bHzsR8xmfSwg.jpeg" onClick={(e) => getClickcoord(e)} alt="find-place" />
      <List callBackend={callBackend}/>
    </div>
  );
};

export default Image;
