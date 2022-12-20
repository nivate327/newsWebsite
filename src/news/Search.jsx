import React from 'react'
import { useEffect, useState } from 'react';
import { useGlobalContext } from './Context';


const Search = () => {
       let {query, searchPost}=useGlobalContext();

        return <>
                <h3 className='newsHead'>TECH NEWS APP</h3>
                <form onSubmit={(e)=> e.preventDefault()} className="form-group">
                        <input type="text" name="search" id="" className='form-control search' 
                        placeholder='Search Here' value={query} onChange={(e)=> searchPost(e.target.value)}/>
                </form>
        </>
    
 
}

export default Search;
