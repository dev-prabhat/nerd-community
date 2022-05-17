import { MdSearch } from "react-icons/md";
import "./aside.css"

export const Aside = () => {
    return(
        <>
          <div className="search__wrapper">
              <input 
                className="search__field border-radius-sm text-center" 
                type="text" 
                placeholder="Search user here"/>
              <MdSearch className="search__icon"/>
          </div>
        </>
    )
}