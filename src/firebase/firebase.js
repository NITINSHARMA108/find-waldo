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
    
    // firebase.initializeApp(firebaseConfig);

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
   // console.log(app);
    const dbRef = ref(getDatabase());
    let flag=false;
    const data =  await get(child(dbRef, `screen`))
                .catch((err)=>{
                  console.log('server not responding!!');
                  flag=true;
                  return false;
                }); 
    if(flag===true){
      return false;
    }
     console.log(data);

     const datasheet = await data.toJSON();
     
     const tempX = (x/screenX)*100;
     const tempY = (y/screenY)*100;
     console.log(tempX,tempY);
     /* && (tempY)>=datasheet[name].y1 && (tempY)<=datasheet[name].y2 */
     if((tempX)>=datasheet[name].x1 && (tempX)<=datasheet[name].x2 && (tempY)>=datasheet[name].y1 && (tempY)<=datasheet[name].y2 )
     {
        console.log('match found');
        return true;
     }
            
      
      return false;
     
   
   
    // return datasheet;

    

}

// const datasheet=getInfo();

export default getInfo;
/*

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
*/