import "./AboutPageContainer.css";

function AboutPageContainer() {
  return (
    <div className="AboutContainer">
      <h1>About us</h1>
      <p>
        Explore and join to the world of cars. Cars app is newest app that come
        to web world and is a place where you can find so many cars for you or
        your family. On our app you can check for cars, cars insurences, detalis
        and also their manfucaturer, equipment that come with car and more. We
        have so many options and filters in our app. You can add your car to our
        app and all our clients can see it. Also we have options for searching
        and finding cars by manufacturers or their name or model. So check out
        our app and find best cars that exists in the world. If you want to
        connact us or you have any question, feel free to ask at our{" "}
        <a href="/contact" className="contactPage-a-tag">
          contact page
        </a>
        .
      </p>
    </div>
  );
}

export default AboutPageContainer;
