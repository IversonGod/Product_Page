export default function BagCard({ item, ...props }) {
  const formattedNumber = item.price.toLocaleString();

  return (
    <div
      {...props}
      className="flex snap-start font-sans bg-white rounded-lg overflow-hidden mt-2"
    >
      <div className="flex-none w-56 relative">
        <img
          src={`/${item.image}.png`}
          alt="Nike Go FlyEase"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-6">
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
        <div className="flex items-center mt-4 gap-1">
          <p className="text-sm font-medium">Quantity:</p>
          <p className="w-14 h-9 flex justify-center items-center rounded-lg font-semibold border border-slate-300">
            {item.size}
          </p>
        </div>
        <button
          className="h-10 px-6 font-semibold rounded-md mt-4 border border-slate-300 bg-black text-white duration-300"
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
