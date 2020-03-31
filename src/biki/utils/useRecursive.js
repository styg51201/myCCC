import React, { useState, useEffect } from 'react';
import StoryReply from '../components/StoryReply'

export default function useRecursive(){
}

export const getRecursiveJson = (children, parents)=>{
    let leftoutchildren = [...children]
    children.forEach(child=>{
        parents.some(parent=>{
            if(parent.rplyId === child.rplyTo){
                child.rplyToName = parent.Name || parent.Account;
                (parent.children || (parent.children = [])).push(child)
                if(leftoutchildren.indexOf(child) !== -1){
                    leftoutchildren.splice(leftoutchildren.indexOf(child), 1)
                }
                return true;
            }
        })
    })
    // console.log('leftouts:',leftoutchildren)
    if(leftoutchildren.length > 0){
        getRecursiveJson(leftoutchildren, children)
    }
    // console.log('parents:', parents)

    return parents;
}

// export const mapRecursive = (data)=>{
//     return data.map((elm, idx)=>{
//         let child = [
//             <StoryReply
//                     key={elm.rplyId}
//                     // handlers={{
//                     //     submit: handleSubmit
//                     // }}
//                     data={{
//                         name: elm.Name,
//                         img: elm.Image,
//                         id: elm.rplyId,
//                         content: elm.rplyContent,
//                         to: elm.rplyToId,
//                         date: elm.rplyUpdate,
//                         fromNow: elm.fromNow
//                     }}
//                 />
//         ]
//         if(elm.children){
//             child.push(mapRecursive(elm.children))
//         }
//     return <div className="bk-r">{child}</div>
//     })
// }