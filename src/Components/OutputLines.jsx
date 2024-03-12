export default function OutputLines(){
  return (
    <div className="flex gap-[1rem] items-center ">
      <span className="text-[1.8rem]">Subject #1- 29 hours</span>
      <button className="font-semibold  outline outline-2 outline-amber-50 bg-green-500 hover:bg-green-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]">
        <i class="fa-sharp fa-solid fa-plus"></i>
      </button>
      <button className="font-semibold  outline outline-2 outline-amber-50 bg-blue-500 hover:bg-blue-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]">
        <i class="fa-regular fa-minus"></i>
      </button>
      <button className="font-semibold  outline outline-2 outline-amber-50 bg-red-500 hover:bg-red-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]" >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}