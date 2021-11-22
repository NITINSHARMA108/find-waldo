// Import the functions you need from the SDKs you need

  import { initializeApp } from "firebase/app";

 import { getDatabase, ref, get, child} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const getInfo = async (name, x, y, screenX, screenY) => {
    const firebaseConfig = {
      apiKey: "AIzaSyCCd9bjsXC7cmKl01CPCI3gFbsZspwpmYM",
      authDomain: "find-waldo-5b71e.firebaseapp.com",
      projectId: "find-waldo-5b71e",
      storageBucket: "find-waldo-5b71e.appspot.com",
      messagingSenderId: "330540042841",
      appId: "1:330540042841:web:79fa5697673cbf559cbf48",
      databaseURL: "https://find-waldo-5b71e-default-rtdb.firebaseio.com/"
      
    };
    
    // firebase.initializeApp(firebaseConfig);

    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
   // console.log(app);
    const dbRef = ref(getDatabase());

    const data =  await get(child(dbRef, `screen`)).catch((err)=>{
      console.log('server not responding!!');
    }); 
    
     console.log(data);

     const datasheet = await data.toJSON();
     
     const tempX = (x/screenX)*100;
     const tempY = (y/screenY)*100;
     console.log(tempX,tempY);
     /* && (tempY)>=datasheet[name].y1 && (tempY)<=datasheet[name].y2 */
     if((tempX)>=datasheet[name].x1 && (tempX)<=datasheet[name].x2 )
     {
       console.log(name);
        return true;
     }
            
      console.log('no bro');
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