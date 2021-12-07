import React from "react";
import { useState } from "react";
import "./index.css";
function App() {
  const [error,setError]=useState("");
  const [value,setValue]=useState("");
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [temp,setTemp]=useState("");
  const [url,setUrl]=useState("https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?b=1&k=20&m=1007768414&s=170667a&w=0&h=9ijRGKZYLQJz5GO0ZwisNhraxPRY3wUFWe2wjCfS-Uc=");
  function mf(e){
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b5d0f0e9b4a304c539c96c506b1b4baf`).then(data=>{
      return data.json()
    }).then(data=>{
      document.querySelector("#input").blur();
      setError("");
      setTemp("temp : " +Math.round(data.main.temp-273.15)+"°C");
      setCity(data.name+",");
      setCountry(data.sys.country);
      if(data.weather[0].main==='Clear')
      setUrl("https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?b=1&k=20&m=1007768414&s=170667a&w=0&h=9ijRGKZYLQJz5GO0ZwisNhraxPRY3wUFWe2wjCfS-Uc=");
      else if(data.weather[0].main==="Haze")
      setUrl("https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png");
      else if(data.weather[0].main==="Clouds")
      setUrl("https://www.thoughtco.com/thmb/HBaobb2gkXAlGq-a6K56PeyaLOg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/clouds-5b6b4e50c9e77c0050491212.jpg");
    }).catch(e=>{
          setError("Please enter valid city!");
          setCity("");
          setCountry("");
          setTemp("");
    })
    
  }
  function inf(e){
    setValue(e.target.value);
  }
  return (
    <div className="container">
      <h1>Weather App</h1><br/>
      <form onSubmit={mf}>
        <input autoComplete="off" onChange={inf} id="input" type="text" placeholder="enter your city"/>
        <button type="submit">go</button>
      </form><br/>
      <p>{error}</p>
      <p>{temp}</p><br/>
      <h2>{city} {country}</h2><br/>
      <img alt="pho" src={url}/>
      
    </div> 
  );
} 
export default App;
