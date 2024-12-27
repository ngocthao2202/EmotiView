import AboutUs from "./../components/AboutUs/aboutus";
import Emotion from "./../components/Emotion/emotion";
import Hero from "./../components/Hero/hero"
import News from "./../components/News/news";
import Predict from "./../components/Predict/predict";

const Home = () => {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          padding: "32px 0",
        }}
        className="container"
      >
        <Hero />
        <AboutUs />
        <Emotion />
      </div>
      <Predict />
      <div className="container">
        <News />
      </div>
    </div>
  );
}

export default Home;
