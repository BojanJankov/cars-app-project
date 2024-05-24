import { useEffect, useState } from "react";
import "./CarsPage.css";
import api from "../../Components/api";

function CarsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("http://localhost:3000/api/cars");

        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
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
            <option value="none" disabled hidden>
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
        {data.cars
          ? data.cars.map((car) => (
              <div className="carCard">
                <ul className="carCardList">
                  <li key={car.id} className="carName">
                    {car.make}
                  </li>
                  <li key="model">
                    <strong>Model:</strong> {car.model}
                  </li>
                  <li key="year">
                    <strong>Year:</strong> {car.year}
                  </li>
                  <li key={car.manufacturer.id}>
                    <strong>Manufacturer:</strong> {car.manufacturer.name}
                  </li>
                  <li key={car.manufacturer.headquarters}>
                    <strong>Headquarter:</strong>{" "}
                    {car.manufacturer.headquarters}
                  </li>
                  <li key={car.carInsurance.policyNumber}>
                    <strong>Policy number:</strong>{" "}
                    {car.carInsurance.policyNumber}
                  </li>
                </ul>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

export default CarsPage;
