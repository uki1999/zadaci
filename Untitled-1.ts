// //1.

// function fooBar(n:number):void{
    
//     for(let x = 1; x < n+1;x++){
//         let ret= ""
//         if(x%3==0){
//             ret += 'Foo'
//         }
//         if(x%5==0){
//             ret += 'Bar'
//         }
//         if(ret){
//             console.log(ret)
//         }else{
//             console.log(x)
//         }
//     }

// }

// fooBar(16)

//2.
// function sameValuesCounter(
//     input: string[],
//   ) {
      
//       input.sort();
  
//       let value:string = '';
//       let count:number = 0;  
//        for (var i = 0; i < input.length; i++) {
//           if (input[i] != value) {
//               if (count > 0) {
//                   console.log('Value: '+ value +" | "+ " Count: "+ count + ' ');
//               }
//               value = input[i];
//               count = 1;
//           } else {
//               count++;
//           }
//       }
//       if (count > 0) {
//           console.log('Value: '+ value +" | "+ " Count: "+ count + ' ');
//       }
  
//   }
      
  
//   console.log(sameValuesCounter(['bar', 'foo', 'bar', 'foobar', 'bar', 'foo']));
  
//3.



// import * as path from 'path';
// import * as fs from "fs";

// interface File {
//   name: string;
//   type: 'file' | 'dir';
//   path: string;
//   children?: File[];
// }

// async function listDir(location: string): Promise<File[]> {
//     function readdir (path:string) { 
//     return new Promise((resolve, reject) => { 
//         fs.readdir(path, (err, files) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(files);
//             }
//         });    
//     });
// };

//     function determineType (parentPath:any, childPath:any) { 
//         return new Promise((resolve, reject) => {
//             fs.stat(path.join(parentPath, childPath), (err, stats) => {
//                 if (err) {
//                     reject(err);
//                 }
//                 else {
//                     resolve({ 
//                         path: childPath,
//                         type: stats.isDirectory() ? 'directory' : 'file' 
//                     }); 
//                 }
//             });
//         });
//     };

//     function determineTypes (parentPath:any, paths:any) { 

//         return Promise.all(
//                 paths.map(
// (                    childPath: any) => determineType(parentPath, childPath) 
//                 )
//             );
//     };

//     function readdirTree (rootPath:any):any { 
//         return readdir(rootPath)
//             .then(childPaths => determineTypes(rootPath, childPaths)) 
//             .then(children => {
//                 return Promise.all(children
//                     .filter((child?:any) => child.type === 'directory') 
//                     .map(child => {
//                         return readdirTree(path.join(rootPath, child.path)) 
//                             .then((subTree: any) => {
//                                 return {
//                                     path: (child?:any)=>path,
//                                     subTree: subTree,
//                                 };
//                             });
//                     })
//                 );
//             })
//             .then(children => {
//                 const tree:any = {}; 
//                 children.forEach(directory => {
//                     tree[directory.path] = directory.subTree;
//                 });
//                 return tree;
//             });
//     };

//     readdirTree("c:\\temp")
//         .then((tree: any) => {
//             console.log("tree:");
//             console.log(tree);
//         })
//         .catch((err: any) => {
//             console.error("error:");
//             console.error(err);
//         });
    
// }
// listDir(path.join(__dirname, 'target'))
//   .then((result) => {
//     console.log(JSON.stringify(result, null, '  '));
//   })
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

//3.1.
// import * as path from 'path';
// import { promisify } from 'util';
// import { resolve } from 'path';
// import * as fs from 'fs';
// const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);

// interface File {
//   name: string;
//   type: 'file' | 'dir';
//   path: string;
//   children?: File[];
// }

// async function listDir(location: string): Promise<File[]> {
//   const children = await readdir(location);
//   const files:any = await Promise.all(children.map(async (children)=>{
//     const result:any = resolve(location, children);
//     return (await stat(result)).isDirectory() ? listDir(result) : result;
//   }));
//   return files.reduce((a:any, f:any) => a.concat(f), []);
// }
// listDir(path.join(__dirname, 'target'))
//   .then((result) => {
//     console.log(JSON.stringify(result, null, '  '));
//   })
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

