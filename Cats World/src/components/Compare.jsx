import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Compare() {
    const [cats, setCats] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetchAllCats()

    },[])

    async function fetchAllCats() {
        let GetAPI_Url = 'https://api.thecatapi.com/v1/'
        const API_KEY = 'live_L6gVZiuMbBTEAnxt04msUgyPTUO0M9xl0Fh0fbSTuohi1TpcvAguudh4Ud8JX2Vr'
        try {
            const response = await fetch(`${GetAPI_Url}breeds?limit=12`, {
              method: "GET", // or 'PUT'
              headers: {
                "x-api-key": API_KEY,
              }
            });
        
            const result = await response.json();
            console.log(result);
            let breedNames = result.map((b) => {return b.name})
            let pics = result.map((b) => {return b.image.url})

            console.log(breedNames)

            try {
              console.log(pics)
            } catch (error) {
              console.error(error.message)
            }

            setCats(result)
            
          } catch (error) {
            console.error("Error:", error);
          }

    }

    return <main className='kittens-container'>
    {
        cats.length ? 
            cats.map(cat => {
                return  <div className="kittens-box" key={cat.id}>
                            <div className="intro">
                              <img className="pics" src={cat.image.url} />
                                <h3>{cat.name}</h3>
                                <h3>{cat.affection_level}</h3>
                                <h3>{cat.child_friendly}</h3>
                                <h3>{cat.cat_friendly }</h3>
                                <h3>{cat.dog_friendly}</h3>
                                <h3>{cat.energy_level }</h3>
                                <h3>{cat.grooming}</h3>
                                <h3>{cat.health_issues}</h3>
                                <h3>{cat.intelligence }</h3>
                                <h3>{cat.shedding_level}</h3>
                                <h3>{cat.social_needs }</h3>
                                <h3>{cat.stranger_friendly}</h3>
                                <h3>{cat.vocalisation}</h3>

                            </div>
                            
                            <div className="btn">
                              <button onClick={() => navigate(`/details/${cat.id}`)}>Details</button>
                            </div>
                        </div>
            })
            :
            <h2>No Kittens To Talk To! 🐱  </h2>
            
        }

    </main>
}

export default Compare;

 








