import HeartIcon from "./HeartIcon";
import { useState } from "react";

export default function ProductCard({ addItem, item, ...props }) {
  
  const [quantity, setQuantity] = useState(1);

  const formattedNumber = item.price.toLocaleString();

  function handleSubmit(event) {
    event.preventDefault();
    addItem(item, quantity); // Pass quantity to the addItem function
  }

  return (
    <div
      {...props}
      className="flex min-w-[45rem] snap-start font-sans bg-white rounded-lg overflow-hidden"
    >
      <div className="flex-none w-auto h-full aspect-square relative">
        <img
          src={`/${item.image}.png`}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {item.name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            ₱{formattedNumber}
          </div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {item.description}
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-1">
          <p className="text-sm font-medium">Select quantity</p>
          <div className="flex items-baseline mb-6 pb-6 border-b border-slate-200">
            <select
              required
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 h-9 border border-slate-300 rounded-lg text-center"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Add to bag
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              <span className="flex gap-1 items-center justify-center">
                Favorite
                <HeartIcon width="1.3rem" height="1.3rem" strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
