import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllCats() {
    const [cats, setCats] = useState([])

    // const navigate() = useNavigate()

    useEffect(() => {
        fetchAllCats()

    },[])

    async function fetchAllCats() {
        let GetAPI_Url = 'https://api.thecatapi.com/v1/'
        const API_KEY = 'live_L6gVZiuMbBTEAnxt04msUgyPTUO0M9xl0Fh0fbSTuohi1TpcvAguudh4Ud8JX2Vr'
        try {
            const response = await fetch(`${GetAPI_Url}breeds?limit=10`, {
              method: "GET", // or 'PUT'
              headers: {
                "x-api-key": API_KEY,
              }
            });
        
            const result = await response.json();
            console.log(result);
            let breedNames = result.map((b) => {return b.name})

            console.log(breedNames)

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
                              <h3>{cat.name}</h3>
                              <img src={cat.image} />

                            </div>
                            
                            <div className="btn">
                              <button onClick={() => navigate(`/details/${cat.id}`)}>Details</button>
                              <button className='deleteBtn' onClick={() => removeCat(cat.id)}>Remove</button>

                            </div>
                        </div>
            })
            :
            <h2>No Kittens Here! 😮 </h2>
    }

    </main>
}

export default AllCats;

 