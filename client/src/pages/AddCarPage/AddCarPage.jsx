import "./AddCarPage.css";
import api from "../../Components/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCarPage() {
  const [data, setData] = useState({});
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [petrol, setPetrol] = useState("");
  const [policyNumberInput, setPolicyNumberInput] = useState("");
  const [providerInput, setProviderInput] = useState("");
  const [coverageDetalis, setCoverageDetalis] = useState("");
  const [statusData, setStatusData] = useState("");

  const handleAddCar = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("api/cars", {
        make,
        model,
        year,
        manufacturer,
        petrol,
        carInsurance: {
          policyNumber: policyNumberInput,
          provider: providerInput,
          coverageDetalis: coverageDetalis,
        },
      });
      if (response.status === 201) {
        setStatusData("Your car is successfully added!");
      }

      setMake("");
      setModel("");
      setYear("");
      setManufacturer("");
      setPetrol("");
      setPolicyNumberInput("");
      setProviderInput("");
      setCoverageDetalis("");
      console.log(response.data.newCar);
      setData(response.data.newCar);
    } catch (error) {
      console.log(error);
      if (error) {
        setMake("");
        setModel("");
        setYear("");
        setManufacturer("");
        setPetrol("");
        setPolicyNumberInput("");
        setProviderInput("");
        setCoverageDetalis("");
        toast.error("Invalid car informations, enter valid informations!", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    }
  };
  return (
    <section className="AddCarPage">
      <div className="addCarFrom">
        <h1>Add your car details here</h1>
        <form action="" method="POST" className="form-addCar-container">
          <div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
              <span></span>
              <label>Car name</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <span></span>
              <label>Car model</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <span></span>
              <label>Car year</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
              <span></span>
              <label>Car manufacturer</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={petrol}
                onChange={(e) => setPetrol(e.target.value)}
              />
              <span></span>
              <label>Car petrol</label>
            </div>
          </div>
          <div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={policyNumberInput}
                onChange={(e) => setPolicyNumberInput(e.target.value)}
              />
              <span></span>
              <label>Car policy number</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={providerInput}
                onChange={(e) => setProviderInput(e.target.value)}
              />
              <span></span>
              <label>Car provider</label>
            </div>
            <div className="txt-field">
              <input
                type="text"
                name="text"
                required
                value={coverageDetalis}
                onChange={(e) => setCoverageDetalis(e.target.value)}
              />
              <span></span>
              <label>Car coverage details</label>
            </div>
          </div>
        </form>
        <button name="submit" type="Submit" onClick={handleAddCar}>
          Add your car
        </button>
        <p className="message-status">{statusData}</p>
      </div>
      <div className="viewAddedCar">
        <div className="addCarCard">
          {data ? (
            <ul className="addCarCardList">
              <li key={data.id} className="addCarName">
                {data.make}
              </li>
              <li key="model">
                <strong>Model:</strong> {data.model}
              </li>
              <li key="year">
                <strong>Year:</strong> {data.year}
              </li>
              <li key={data.manufacturer}>
                <strong>Manufacturer:</strong> {data.manufacturer}
              </li>
              <li key={data.petrol}>
                <strong>Petrol:</strong> {data.petrol}
              </li>
            </ul>
          ) : null}
          <div className="btnDiv">
            <Link to="/cars">
              <button className="backToCarsBtn">Back to cars page</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </section>
  );
}

export default AddCarPage;
