import { useState, useRef } from "react";
import Bag from "./components/Bag";
import Favorite from "./components/Favorite";
import ProductCard from "./components/ProductCard";
import { foods, toys, brushes, bags, shampoo } from "./data";

function App() {
  const [bagItem, setBagItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Refs for each category section to scroll to
  const foodsRef = useRef(null);
  const toysRef = useRef(null);
  const brushesRef = useRef(null);
  const bagsRef = useRef(null);
  const shampooRef = useRef(null);

  function handleAddToBag(item, shoeSize) {
    setBagItem((prevVal) => {
      const newItem = { size: shoeSize, ...item };
      return [...prevVal, newItem];
    });
    console.log(bagItem);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    // Scroll to the corresponding section if the search term matches
    if (event.target.value.toLowerCase() === "foods") {
      foodsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.value.toLowerCase() === "toys") {
      toysRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.value.toLowerCase() === "brushes") {
      brushesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.value.toLowerCase() === "bags") {
      bagsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (event.target.value.toLowerCase() === "shampoo") {
      shampooRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <main className="w-full h-full flex flex-col gap-5 px-10 justify-start overflow-y-auto">
        <nav className="bg-white w-full h-24 flex flex-col drop-shadow-xl sticky top-0 z-20">
          <div className="max-w-screen-xl w-full flex items-center justify-between mx-auto px-4">
            <div className="flex items-center pl-0">
              <img src="logo.png" className="w-48" alt="Logo" />
            </div>
            <div className="hidden md:block md:w-auto mr-36">
              <ul className="font-medium flex space-x-10 pt-4">
                <li>
                  <a className="text-xl block">Home</a>
                </li>
                <li>
                  <a className="text-xl block">Products</a>
                </li>
                <li>
                  <a className="text-xl block">Guides</a>
                </li>
                <li>
                  <a href={"./About.jsx"}>About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="flex gap-2 justify-center items-center mt-24 relative z-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search categories (Foods, Toys, Brushes, Bags, Shampoo)"
            className="border p-2 rounded-md w-1/2"
          />
        </div>

        {/* Content Section */}
        <div className="flex gap-2 justify-center items-center mt-72 relative z-10">
          <Favorite />
          <Bag items={bagItem} />
        </div>

        <div ref={foodsRef}>
          <h4 className="uppercase text-xl font-bold">Foods</h4>
          <div className="flex overflow-x-auto snap-x relative z-0">
            {foods.map((item, index) => (
              <ProductCard item={item} key={index} addItem={handleAddToBag} />
            ))}
          </div>
        </div>

        <div ref={toysRef}>
          <h4 className="uppercase text-xl font-bold">Toys</h4>
          <div className="flex overflow-x-auto snap-x relative z-0">
            {toys.map((item, index) => (
              <ProductCard item={item} key={index} addItem={handleAddToBag} />
            ))}
          </div>
        </div>

        <div ref={brushesRef}>
          <h4 className="uppercase text-xl font-bold">Brushes</h4>
          <div className="flex overflow-x-auto snap-x relative z-0">
            {brushes.map((item, index) => (
              <ProductCard item={item} key={index} addItem={handleAddToBag} />
            ))}
          </div>
        </div>

        <div ref={bagsRef}>
          <h4 className="uppercase text-xl font-bold">Bags</h4>
          <div className="flex overflow-x-auto snap-x relative z-0">
            {bags.map((item, index) => (
              <ProductCard item={item} key={index} addItem={handleAddToBag} />
            ))}
          </div>
        </div>

        <div ref={shampooRef}>
          <h4 className="uppercase text-xl font-bold">Shampoo</h4>
          <div className="flex overflow-x-auto snap-x relative z-0">
            {shampoo.map((item, index) => (
              <ProductCard item={item} key={index} addItem={handleAddToBag} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
