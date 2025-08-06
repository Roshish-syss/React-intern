import React,{useState} from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const Post = () => {
    const [postData,setPostData]=useState([]);

    const getPostData=async ()=>{
        try{
           const data=await axios.get('https://jsonplaceholder.typicode.com/posts');
            if(data?.status===200){
                setPostData(data?.data);
            }
        }
        catch(error){
           console.log(error);
           alert("Error on getting data");
        }
       }

  return (
    <div className='w-auto h-auto flex justify-center'>
        {
            postData?.length<=0 &&
       <Button onClick={getPostData}>Get Data</Button>
        }
       <div>
        {
            postData?.length>0 && (
                <>
                <table>
                    <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                postData?.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item?.userId}</td>
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                        </tr>
                    )
                       })
                     } 
                    </tbody>
                </table>
                </>
            )
        }
       </div>
    </div>
  )
}

export default Post