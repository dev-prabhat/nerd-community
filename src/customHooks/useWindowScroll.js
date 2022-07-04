import { useEffect } from "react"

export const useWindowScroll = () => {
    useEffect(()=>{
      window.scrollTo({top:0,behavior:"smooth"})   
    })
}