// Import the functions you need from the SDKs you need

  import { initializeApp } from "firebase/app";
 import env from 'react-dotenv';
 import { getDatabase, ref, get, child} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const getInfo = async (name, x, y, screenX, screenY) => {
    const firebaseConfig = {
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      projectId: env.projectId,
      storageBucket: env.storageBucket,
      messagingSenderId: env.messagingSenderId,
      appId: env.appId,
      databaseURL: env.databaseURL
      
    };
    
    
    const app = initializeApp(firebaseConfig);
  
    const dbRef = ref(getDatabase());
    let flag=false;
    const data = await get(child(dbRef, `screen`))
                .catch((err)=>{
                  console.log('server not responding!!');
                  flag=true;
                  return false;
                }); 
    if(flag===true){
      return {server:false,response:false};
    }
     console.log(data);

     const datasheet = data.toJSON();
     console.log(datasheet);
     const tempX = (x/screenX)*100;
     const tempY = (y/screenY)*100;
     console.log(tempX,tempY);
     
     if((tempX)>=datasheet[name].x1 && (tempX)<=datasheet[name].x2 && (tempY)>=datasheet[name].y1 && (tempY)<=datasheet[name].y2 )
     {
        console.log('match found');
        return {server:true,response:true};
     }
            
      
      return {server:true,response:false};
     
   
   
    

    

}



export default getInfo;
