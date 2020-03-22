import React, { useState, useEffect } from 'react';

export default function useDebounce(value, delay, message, saveDraft) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [msg, setMsg] = useState(null)
    useEffect(
      () => {
        if(message && saveDraft){
          // console.log(message)
          setMsg(message)
        }
        const handler = setTimeout(() => {
          setDebouncedValue(value);
          if(saveDraft) setMsg('已儲存至草稿')
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },[value]);
  
    return {debouncedValue, msg};
}