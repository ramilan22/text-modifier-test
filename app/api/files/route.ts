import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { stringify } from 'querystring';
import { NextResponse } from 'next/server';
export async function  POST(req:Request) {
  
  
  // Handle preflight request
  
  if (req.method === 'POST'){

    
    

    // Replace with the actual directory path
    const directoryPaths= await req.json()
    
    console.log(directoryPaths)
    
    const directoryPath =directoryPaths.inputValue
    try{
      const files = fs.readdirSync(directoryPath);
      
      files.forEach((file) => {
        const oldFilePath = path.join(directoryPath, file);
        const newFileName = file.replace(/\s+/g, '-');
        const newFilePath = path.join(directoryPath, newFileName);
        
        fs.renameSync(oldFilePath, newFilePath);
      });
      
      console.log('File names changed successfully!');
      return NextResponse.json({data:files})
      console.log('File response!!');
      
    } catch (error) {
      console.error('Error changing file names:', error);
    }
  }else{}
  }
  