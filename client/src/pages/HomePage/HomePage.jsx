import "./HomePage.css";
import HomePageButton from "../../Components/Button/HomePageButton";

function HomePage() {
  return (
    <section className="HomePage">
      <div className="HomePageTextContainer">
        <h1 className="HomePageHeader">Welcome to our Cars App</h1>
        <p className="HomePageText">
          App where you can find so many cars and thier futures. Get information
          about them, check thier insurences, car parts and more detalis about
          them.
        </p>
        <HomePageButton title="Take a look at our cars" linkPath="/cars" />
      </div>
      <div className="HomePageImageContainer">
        <img
          src="../../../images/carsLogo.jpg"
          alt="image of cars"
          width="500px"
        />
      </div>
    </section>
  );
}

export default HomePage;
