import { useContext, useEffect, useState } from "react";
import "./CarsPage.css";
import api from "../../Components/api";
import Pagination from "../../Components/CarsPagePagination/Pagination";
import { AuthContext } from "../../Components/AuthContext";
import { Link } from "react-router-dom";

function CarsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const { accessToken } = useContext(AuthContext);

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `http://localhost:3000/api/cars`,
          config
        );

        console.log(response.data.cars);

        setData(response.data.cars);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (accessToken === null) {
      const timeout = setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [accessToken]);

  const serachFetch = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `http://localhost:3000/api/cars?${query}=${search}&orderBy=${order}`
      );
      setData(response.data.cars);

      setSearch("");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (accessToken === null) {
    return (
      <div className="forbiddenContainer">
        <h1>You must be logged in before viewing this page!</h1>
        <p>You'll be redirected in 2 seconds</p>
      </div>
    );
  }

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
            <option value="manufacturer">Manufacturer</option>
            <option value="petrol">Petrol</option>
          </select>
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
          <button className="searchButton" type="button" onClick={serachFetch}>
            Search
          </button>
        </div>
        <div className="addCarDiv">
          <Link to="/addCar">
            <button className="addCarButton">Add your car</button>
          </Link>
        </div>
      </div>
      <div className="cardsDiv">
        {isLoading ? <p className="loading">Loading...</p> : null}
        {data
          ? currentPosts.map((car) => (
              <>
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
                    <li key={car.manufacturer}>
                      <strong>Manufacturer:</strong> {car.manufacturer}
                    </li>
                    <li key={car.petrol}>
                      <strong>Petrol:</strong> {car.petrol}
                    </li>
                    <li key={car.carInsurance.policyNumber}>
                      <strong>Policy number:</strong>{" "}
                      {car.carInsurance.policyNumber}
                    </li>
                  </ul>
                </div>
              </>
            ))
          : null}
      </div>
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </section>
  );
}

export default CarsPage;
