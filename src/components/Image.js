import React, {useState} from 'react';

import {get, child} from 'firebase/database';
import List from './List';
import getInfo from '../firebase/firebase';

const Image = function () {
 // getInfo('Waldo',1000,150);
 const [score,setscore]=useState(0);
 if(score===2)
 {
   setscore(0);
   alert('game over');
 }
  const showlist = (x, y) => {

    const list = document.querySelector('.list');
    console.log(list);
    console.log(window.scrollY);
    list.style.display = 'block';
    list.style.position = 'absolute';
    // console.log(window.innerHeight);
    const windowHeight = document.querySelector('.find').offsetHeight;
    console.log(window.innerHeight);
    // console.log(windowHeight);
    console.log(window.innerHeight-windowHeight);
    
    if (windowHeight - y <= 150) {
      
      list.style.top = `${y + window.scrollY}px`;
    } else {
      list.style.top = `${y + window.scrollY}px`;
    }
    list.style.left = `${x}px`;

    
  };

  const callBackend = async (name) => {
    console.log(name);
    const positionY=document.querySelector('.list').offsetTop;
    const positionX=document.querySelector('.list').offsetLeft;
    // positionX=positionX.split(0,positionX.length-2);
    // positionY=positionY.split(0,positionY.length-2);
    console.log(positionX,positionY);
    const res=await getInfo(name,Number(positionX),Number(positionY),window.innerWidth,window.innerHeight);
    if(res===true){
      document.querySelector('.success').style.display='block';
      setTimeout(()=>{
        document.querySelector('.success').style.display='none';
      },1000);
      setscore(score+1);
      console.log(score);
     
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
