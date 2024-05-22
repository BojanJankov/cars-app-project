import { useEffect, useState } from "react";
import "./CarsPage.css";

function CarsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const url = "https://car-data.p.rapidapi.com/cars?limit=10&page=0";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e21431883emshb3f2cc144967a45p192292jsn4e925c11773b",
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <section className="CarsPage">
      <div className="filtersDiv">
        <div className="searchDiv">
          <input
            type="search"
            name="search"
            className="searchInput"
            placeholder="Search cars..."
          />
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
        <div>
          <select name="searchByMenu" className="dropDownMenu">
            <option value="none" selected disabled hidden>
              Search By
            </option>
            <option value="model">Name</option>
            <option value="make">Brand</option>
            <option value="type">Type</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
      <div className="cardsDiv">
        {isLoading ? <p className="loading">Loading...</p> : null}
        {data.map((car) => (
          <>
            <div className="carCard">
              <ul className="carCardList">
                <li key={car.id} className="carName">
                  {car.model}
                </li>
                <li key={car.make}>
                  <strong>Brand:</strong> {car.make}
                </li>
                <li key={car.type}>
                  <strong>Type:</strong> {car.type}
                </li>
                <li key={car.year}>
                  <strong>Year:</strong> {car.year}
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default CarsPage;
