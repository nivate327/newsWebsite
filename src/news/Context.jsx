import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import reducer from "./reducer";


const AppContext=React.createContext();
const url = `https://hn.algolia.com/api/v1/search?`;

const initialData={
    query:"",
    page:0,
    nbPages:0,
    hits:[],
    isLoading:true,
}


const AppProvider = ({children}) => {

    const [state, dispatch]=useReducer(reducer, initialData);

    const fetchApi=async(url)=>
    {
        dispatch({type:"SET_LOADING"});

      try{
        let api=await fetch(url);
        let data=await api.json();
        console.log(data);

        dispatch({type:"GET_STORIES", payload:{
            hits:data.hits,
            nbPages:data.nbPages
        }})

      } catch(error) {
        console.log(error);
      }

    }

    const removePost=(postId)=>
    {
        dispatch({type:"REMOVE_POST", payload:postId});
    }

    const searchPost=(search)=>
    {
        dispatch({type:"SEARCH_POST", payload:search});
    }

    const getPrev=()=>{
        dispatch({type:"GET_PREV"});
    }

    const getNext=()=>{
        dispatch({type:"GET_NEXT"});
    }


    useEffect(()=>
    {
        fetchApi(`${url}query=${state.query}&page=${state.page}`)
    },[state.query, state.page])

  return (
    <>
      <AppContext.Provider value={{...state, removePost, searchPost, getNext, getPrev}}>
            {children}
      </AppContext.Provider>
    </>
  )
}

const useGlobalContext=()=>
{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext, AppContext}
