import { useState, useEffect } from "react";
import axios from "axios";


function ApartmentsList(){

    const [apartmentArray, setApartmentArray] = useState(null);

    useEffect(() => {
      getApartmentsFromApi();
    }, []);
    
    const url = "https://ironbnb-m3.herokuapp.com/apartments"
  
    const getApartmentsFromApi = () => {
      axios.get(url)
        .then((response) => {
          console.log(response.data);
  
          setApartmentArray(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    return(
        <>
        <h1>This is ApartmentsList</h1>
        {apartmentArray === null
                ? "loading..."
                : apartmentArray.map((apartmentDetails, index) => {
                    return (
                        <div className="character" key={apartmentDetails._id} >
                            <img src={apartmentDetails.img} alt="apartment"></img>
                            <h2>{apartmentDetails.title}</h2>
                            {/*<Link to={"/apartments/" + apartmentDetails.id}>More Details</Link>*/}
                        </div>
                    )
                })}
        </>
    )
}

export default ApartmentsList;