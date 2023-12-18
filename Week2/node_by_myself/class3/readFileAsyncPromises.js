// Recreating readFile Asnc with a little better syntax

const { readFile } = require ('fs').promises;

// const util = require ('util')

// const readFilePromise = util.promisify(readFile);




const start = async() =>{
    try{
        const first = await readFile('./content/first.txt','utf-8')
        // const second = await getText('./content/second.txt')
        console.log(first);
        // console.log(second);
    }
    catch(error){
        console.log(error);
    }
    
   
}
start()


// const getText=(path)=> {
//     return new Promise ((resolve,reject)=>
//     readFile(path,'utf-8', (err,data)=>{
//         if(err){
//             reject(err)
//         }
//         resolve(data)
//     })
// )}

// getText('./content/first.txt').then(result=> console.log(result)).catch(error => console.log(eroor))