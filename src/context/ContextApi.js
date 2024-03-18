import React ,{ createContext , useState } from "react";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppConetext = (props) => {
    const [loading , setLoading] = useState(false)
    const [searchResult , setSearchResult] = useState([])
    const [selectCategories , setSelectCategories] = useState("New")
    const [mobileMenu , setMobileMenu] = useState(false)

    useEffect(()=>{
        fetchSelectCategoriesQuries(selectCategories)
    },[selectCategories])

    const fun = () => {

    }
    
    const fetchSelectCategoriesQuries = (query) => {
        setLoading(true);
        // 'search/?q=${query'
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            setSearchResult(contents)
            console.log("==>",contents)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,
            fun,
            setLoading,
            searchResult,
            setSearchResult,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )

}