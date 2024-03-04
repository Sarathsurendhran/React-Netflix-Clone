import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { baseURL,API_KEY, imageUrl } from '../../constants/constants'  
import Youtube from 'react-youtube'

function RowPost(props){
  const [movies, setMovies] = useState([])
  const [url, setUrl] = useState()

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
     setMovies(response.data.results)
     console.log(response)

    }).catch((arr)=>{
      alert("Network Error")
    })

  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}

  const handleMovie = (id)=>{
    axios.get(`${baseURL}/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data)
      if(response.data.length !==0){
        setUrl(response.data.results[0])
      }
    })
    

  }

  return(
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
       {movies.map((obj)=>
            <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
       )}
      </div>
      {url && <Youtube opts={opts} videoId={url.key}/>}
    </div>
    
  )
}

export default RowPost