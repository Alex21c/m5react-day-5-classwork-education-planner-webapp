import OutputLines from "./OutputLines";
export default function EducationPlanner(){

  return (
    <div className="border-2 border-slate-200 p-[2rem] w-[50rem] mt-[2rem] m-auto rounded-md flex flex-col gap-[2rem] text-[1.2rem] text-slate-200">
      <header className="flex flex-col items-center gap-[1rem]">
        <h1 className="smallCaps text-center font-semibold text-[3rem]  text-slate-50">Education Planner Web-App</h1>
        <form className="flex flex-col gap-[1rem]  w-[100%]">
          <input className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]   rounded-md" type="text" placeholder="Subject"/>
          <input className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]    rounded-md" type="number" placeholder="Hours"/>
          <button className="font-semibold flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer p-[1rem] rounded-md hover:text-slate-50 text-slate-900 text-[1.5rem]" type="submit" >
            <i class="fa-solid fa-database"></i>
            <span>Add</span>
          </button>
        </form>
      </header>
      <div>
        <OutputLines/>
      </div>
    </div>
  );
}