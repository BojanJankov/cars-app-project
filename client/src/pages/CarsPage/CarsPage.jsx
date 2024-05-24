import { useEffect, useState } from "react";
import "./CarsPage.css";
import api from "../../Components/api";

function CarsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");

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

  const serachFetch = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `http://localhost:3000/api/cars?${query}=${search}&orderBy=${order}`
      );
      setData(response.data);
      console.log(response.data);
      setSearch("");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="CarsPage">
      <div className="filtersDiv">
        <div className="searchDiv">
          <input
            type="search"
            name="search"
            className="searchInput"
            placeholder="Search cars..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select
            name="searchByMenu"
            className="dropDownMenu"
            onChange={(event) => setQuery(event.target.value)}
          >
            <option defaultValue="none" selected disabled hidden>
              Search By
            </option>
            <option value="make">Name</option>
            <option value="model">Model</option>
          </select>
          <button className="searchButton" type="button" onClick={serachFetch}>
            Search
          </button>
        </div>
        <div>
          <select
            name="orderBy"
            className="dropDownMenu"
            onChange={(event) => setOrder(event.target.value)}
          >
            <option defaultValue="none" selected disabled hidden>
              Order By
            </option>
            <option value="year">Year</option>
            <option value="none">None</option>
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
