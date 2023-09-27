import axios from "axios";
import { useState, useEffect, useRef } from "react";
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;
import Card from "./components/Card/Card";
// const API_KEY = "ji28ItvOyeZ86pQC1-WrT4eHq-VLrLQ3b4OdpDI_mS8";

function App() {
  const [images, setImages] = useState([]);
  const [totalPage, setTotalPages] = useState(0);
  const searchInput = useRef(null);
  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(data.results);
      setTotalPages(data.total_page);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (event) => {
    event.preventDefault();
    fetchImages();
    searchInput.current.value = "";
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  };
  const bodyClassName = images.length <= 0 ? "bg-purple" : "";
  useEffect(() => {
    document.body.className = bodyClassName;
  }, [bodyClassName]);
  console.log(images);
  return (
    <div className="container w-full mx-auto flex flex-col items-center justify-center pt-4">
      <div class="brand-logo">
        <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px" />
      </div>

      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 bg-white rounded-full search-input"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="enter your search here"
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
              ref={searchInput}
            />
            <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
              Search
            </button>
          </form>
          <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
          <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
          <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
          <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
        </div>
      </div>
      <div className="filters flex gap-x-4">
        <button
          className="btn btn-primary text-white"
          onClick={() => handleSelection("nature")}
        >
          Nature
        </button>
        <button
          className="btn btn-primary text-white"
          onClick={() => handleSelection("cats")}
        >
          Cats
        </button>
        <button
          className="btn btn-primary text-white"
          onClick={() => handleSelection("shoes")}
        >
          Shoes
        </button>
        <button
          className="btn btn-primary text-white"
          onClick={() => handleSelection("flowers")}
        >
          Flowers
        </button>
        <button
          className="btn btn-primary text-white"
          onClick={() => handleSelection("birds")}
        >
          Birds
        </button>
      </div>
      <div className="images container mx-auto align-elements mt-8">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {images.length < 1 ? (
            <>
              <div class="central-body">
                <img
                  class="image-404"
                  src="http://salehriaz.com/404Page/img/404.svg"
                  width="300px"
                />
              </div>
              <div class="objects">
                <img
                  class="object_rocket"
                  src="http://salehriaz.com/404Page/img/rocket.svg"
                  width="40px"
                />
                <div class="earth-moon">
                  <img
                    class="object_earth"
                    src="http://salehriaz.com/404Page/img/earth.svg"
                    width="100px"
                  />
                  <img
                    class="object_moon"
                    src="http://salehriaz.com/404Page/img/moon.svg"
                    width="80px"
                  />
                </div>
                <div class="box_astronaut">
                  <img
                    class="object_astronaut"
                    src="http://salehriaz.com/404Page/img/astronaut.svg"
                    width="140px"
                  />
                </div>
              </div>
              <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
            </>
          ) : (
            images.map((image) => {
              return (
                <Card
                  image={image}
                  key={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                  desc={image.description}
                  approved={image?.topic_submissions?.wallpapers?.status}
                  likes={image.likes}
                  tags={image.tags}
                  color={image.color}
                  user={image.user.name}
                />
                // <img
                //   key={image.id}
                //   src={image.urls.small}
                //   alt={image.alt_descreption}
                //   className="image-full"
                // />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
