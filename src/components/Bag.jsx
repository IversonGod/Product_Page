import { useState } from "react";
import BagCard from "./BagCard";
import BagIcon from "./BagIcon";
import CloseIcon from "./CloseIcon";

export default function Bag({ items = [] }) {
  const [modal, setModal] = useState(false);

  // function handleClick() {
  //   setModal((prevVal)=> !prevVal)
  // }

  let total = 0;

  items.map((items)=> {
    total += items.price;
  });

  console.log(total);

  return (
    <>
      <button
        type="button" 
        onClick={()=>setModal((prevVal)=> !prevVal)}
        className="hover:bg-neutral-200 rounded-full p-2 duration-300 relative flex justify-center items-center"
      >
        <BagIcon width={`2rem`} height={`2rem`} />
        {items.length !== 0 && <span className="absolute pt-1 text-xs font-bold">{items.length}</span>}
      </button>

      {modal && (
        <div className="absolute m-auto left-0 right-0 w-[60rem] h-[40rem] bg-white rounded-xl border border-black z-10 p-5 flex flex-col gap-5">
          <button type="button" className="w-fit self-end">
            <CloseIcon width={`1rem`} 
              onClick={()=>setModal((prevVal)=> !prevVal)} 
              height={`1rem`} 
            />
          </button>
          <div className="grid grid-cols-3 w-full h-full overflow-hidden gap-4">
            <div className="overflow-y-auto col-span-2">
              <div className="flex flex-col">
                <div className="col-span-2 uppercase text-xl font-bold sticky top-0 z-10 bg-white pb-2">
                  Bag: {items.length} item
                </div>
                {items.length !== 0 ? (
                  items.map((item, index) => <BagCard item={item} key={index} />)
                ) : (
                  <p>There are no items in your bag.</p>
                )}
              </div>
            </div>
            <div className="flex flex-col font-semibold gap-2">
              <div className="uppercase text-xl font-bold">Summary</div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{items.length === 0 ? "--" :""}</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between py-3 border-y border-neutral-300 mt-4">
                <p>Total : {total}</p>
                <p>{items.length === total ? "--" :""}</p>
              </div>

              <button
                className="h-10 px-6 font-semibold rounded-md mt-4 border border-slate-300 bg-black text-white duration-300"
                type="button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
