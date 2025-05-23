import React, { useState } from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import Feed from '../../component/Feed/Feed.jsx'
import "./Home.css"
 const Home = ({sidebar}) => {

  const [category,setCategory]=useState(0)

  return (
   
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?"":"large-container"}`}>
      <Feed category={category} />
     </div>
    </>
  )
}
export default Home
