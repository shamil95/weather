import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [city, setCity] = useState("1");
  const [fake, setFake] = useState({
    image: "",
    price: "",
  });

  const handleChangeInput = (event) => {
    setCity(event.target.value);
  };

  const showWeather = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${city}`
    );
    setFake({
      image: response.data.image,
      price: response.data.price,
    });
  };

  useEffect(() => {
    showWeather();
  }, [city]);

  return (
    <>
      <div>
        <input onChange={handleChangeInput} />
        <button onClick={showWeather}>Show weather</button>
      </div>
      <div>
        <img src={fake.image} />
        <div>{fake.price}</div>
      </div>
    </>
  );
};

export default Home;
