import { useCallback, useState } from "react";
import HeartIcon from "./HeartIcon";

export default function Favorite() {
  const [change, setChange] = useState();

  const togleLike = ()=> {
    setChange((prev) => !prev)
  }

  return (
    <>
      <button type="button" className={`hover:bg-neutral-200 rounded-full p-2 duration-300 ${change ? "bg-red-600 text-slate-200" : "bg-transparent text-slate-900"}`}
      onClick={togleLike} aria-label="Like"
      >
        <HeartIcon height={`2rem`} width={`2rem`} strokeWidth={2} />
      </button>
    </>
  );
}
