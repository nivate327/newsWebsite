import React from "react";
import { useReducer } from "react";
import { useContext, useEffect } from "react";
import Reducer from "./Reducer";

const AppContext = React.createContext();
const api = `https://hn.algolia.com/api/v1/search?`;

const intialData = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: []
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, intialData);


    const fetchApi = async (api) => {

        dispatch({type:"SET_LOADING"})

        try {

            const url = await fetch(api);
            const data = await url.json();
            console.log(data);
            dispatch(
                {
                    type: "GET_STORIES",
                    payload: {
                        hits: data.hits,
                        nbPages:data.nbPages
                    }
                }
            )

        } catch (error) {
            console.log(error);
        }

    }

    const getPrev=()=>
    {
        dispatch({type: "GET_PREV"});
    }

    const getNext=()=>
    {
        dispatch({type: "GET_NEXT"});
    }

    const removePost=(postId)=>
    {
        dispatch({type:"DELETE_POST", payload:postId});
    }

    const searchInput=(search)=>
    {
        dispatch({type:"SEARCH_POST", payload:search})
    }

    useEffect(() => {
        fetchApi(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])


    return (
        <>
            <AppContext.Provider value={{ ...state, removePost, searchInput, getPrev, getNext}}>
                {children}
            </AppContext.Provider>
        </>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }