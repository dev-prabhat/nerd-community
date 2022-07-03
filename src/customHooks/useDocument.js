import { useEffect} from "react"

export const useDocument = (pagename) => {
    useEffect(()=>{
      document.title=`Social Circle | ${pagename}`    
    })
}