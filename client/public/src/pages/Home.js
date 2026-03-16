import { useEffect, useState } from "react"
import { fetchSummary } from "../api"
import Dashboard from "../components/Dashboard"

export default function Home(){

const [data,setData] = useState(null)

useEffect(()=>{
  fetchSummary().then(setData)
},[])

if(!data){
return <div className="app-title">Loading dashboard...</div>
}

return(

<div className="app-container">

<h1 className="app-title">
AI Life Assistant
</h1>

<Dashboard data={data}/>

<p className="footer-text">
Your daily productivity companion
</p>

</div>

)

}