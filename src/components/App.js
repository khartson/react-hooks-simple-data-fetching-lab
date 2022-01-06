// create your App component here

import React, { useEffect, useState } from 'react'; 

function App() {
    const [dog, setDog] = useState(); 
    const [loaded, setLoaded] = useState(false); 
    
    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(result=>{
            setDog(result.message);
            setLoaded(true); 
        }
        ); 
    }, []);

    if (!loaded) return <p>Loading../</p>
    return <img alt='A Random Dog' src={dog} /> 
    
}

export default App; 