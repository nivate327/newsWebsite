import React from 'react'
import { useGlobalContext } from './Context'
import Search from './Search';


const Stories = () => {

  const {hits, nbPage, isLoading, removePost}=useGlobalContext()





  if(isLoading)
  {
    return(
      <>
        <p className='loadText'>Loading...</p>
      </>
    )
  }

  return (
    <>
      <div className="container">
      
        
        <div className="row">
        
          {
            hits.map((curPost) => {
              let { title, author, num_comments, objectID, url } = curPost;
              return (
               
                  <div className="col-10 col-xl-8 col-lg-8 col-md-8 newsBox" key={objectID}>
                    <div className="card newsCard">
                      <h3 className="title">{title}</h3>
                      <p className="comments_and_by">By {author} | {num_comments} comments </p>
                      <div className="readmoreAndRemove">
                        <a href={url} className="readmore">Read More</a>
                        <button className='btn remove' onClick={()=> removePost(objectID)}>Remove</button>
                      </div>
                    </div>
                  </div>
                
              )
            })
          }
        </div>
      </div>
     
    </>
  )
}

export default Stories
