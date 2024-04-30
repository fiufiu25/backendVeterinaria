import {v2 as cloudinary} from 'cloudinary';
export const CludinaryProvider={
    provide:"CLOUDINARY",
    useFactory:()=>{
        return cloudinary.config({ 
            cloud_name: 'dpuhhj9i0', 
            api_key: '946657155282925', 
            api_secret: '2EXIueXs7k-DdITE2sgdZAw9qhc' 
          });
    }
}
