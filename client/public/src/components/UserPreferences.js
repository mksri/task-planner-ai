import { useState, useEffect } from "react"

export default function UserPreferences(){

const [prefs,setPrefs] = useState({
diet:"",
wakeTime:"",
sleepTime:""
})

useEffect(()=>{

const saved = localStorage.getItem("userPrefs")

if(saved){
setPrefs(JSON.parse(saved))
}

},[])

const handleChange = (e)=>{

setPrefs({
...prefs,
[e.target.name]: e.target.value
})

}

const savePrefs = ()=>{

localStorage.setItem(
"userPrefs",
JSON.stringify(prefs)
)

alert("Preferences saved!")

}

return(

<div className="card">

<h2 className="card-title">
Your Preferences
</h2>

<div className="form-group">

<label>Diet Type</label>

<input
name="diet"
value={prefs.diet}
onChange={handleChange}
placeholder="Veg / Vegan / Keto"
/>

</div>

<div className="form-group">

<label>Wake Time</label>

<input
name="wakeTime"
value={prefs.wakeTime}
onChange={handleChange}
placeholder="7:00 AM"
/>

</div>

<div className="form-group">

<label>Sleep Time</label>

<input
name="sleepTime"
value={prefs.sleepTime}
onChange={handleChange}
placeholder="11:00 PM"
/>

</div>

<button onClick={savePrefs}>
Save Preferences
</button>

</div>

)

}