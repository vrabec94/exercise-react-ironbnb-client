import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateApartment() {

    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);

    const navigate = useNavigate();

    const url = "https://ironbnb-m3.herokuapp.com/apartments"

    const handleSubmit = (e) => {
        e.preventDefault();
        const newApartment = {
            imgURL: imgURL,
          title: title,
          pricePerDay: pricePerDay,
        };
        axios.post(url, newApartment)
          .then(function (response) {
            navigate("/apartments");
            console.log("added " + newApartment.title + " to Database");
          })
          .catch(function (error) {
            console.log(error);
          });

        setImgURL("");
        setTitle("");
        setPricePerDay(0);
        
      };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required={true}
          placeholder="Enter the Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="number"
          name="rating"
          required={true}
          placeholder="Enter the cost per Day"
          value={pricePerDay}
          onChange={(e) => {
            setPricePerDay(e.target.value);
          }}
        />
        <input
          type="url"
          name="imgURL"
          placeholder="https://your-image-url.com"
          pattern="https://.*"
          value={imgURL}
          onChange={(e) => {
            setImgURL(e.target.value);
          }}
        />

        <button>Create</button>
      </form>
    </>
  );
}

export default CreateApartment;
