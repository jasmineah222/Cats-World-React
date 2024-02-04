import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Kitty() {

    const [ kitty, setKitty ] = useState({})
    const [pic, setPic ] = useState({})

    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        fetchKitty()
    }, [])

    async function fetchKitty() {
        let GetAPI_Url = 'https://api.thecatapi.com/v1/'
        const API_KEY = 'live_L6gVZiuMbBTEAnxt04msUgyPTUO0M9xl0Fh0fbSTuohi1TpcvAguudh4Ud8JX2Vr'
        try {
            const response = await fetch(`${GetAPI_Url}breeds/${id}`, {
              method: "GET", // or 'PUT'
              headers: {
                "x-api-key": API_KEY,
              }
            });
        
            const result = await response.json();
            console.log(result)
            let pic = result.reference_image_id
            console.log(pic)
            

            setKitty(result)

                const call = await fetch(`${GetAPI_Url}images/${pic}`, {
                  method: "GET", // or 'PUT'
                  headers: {
                    "x-api-key": API_KEY,
                      }
                  });
            
                const picture = await call.json();
                console.log(picture)
      
                setPic(picture.url)
                
          } catch (error) {
            console.error("Error:", error);
          }


        }
        

    return <>
        {
            kitty.id ?
            
            <div className="single-cat">
                <h2 className="kitty-name">{kitty.name}</h2>
                <h2>{kitty.breed}</h2>

                <img className="kit" src={pic}/>
                <h2>This adorable breed originated from {kitty.origin}. {kitty.description}</h2>
                <button onClick={() => navigate('/')}>Home Page</button>

            </div>
            :
            <h1>Kitty not found</h1>
        }
    </>
}

export default Kitty;