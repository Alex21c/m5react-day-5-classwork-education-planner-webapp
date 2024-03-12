export default function OutputLines({keyAndData, updateStateDbSubjects, stateDbSubjects}){
  keyAndData = keyAndData;
  // console.log('key and data are' , keyAndData);

//  console.log(props);
//   return;
  // console.log('data is ', data);
  let key = keyAndData[0];
  let data = keyAndData[1];

  
  
  return (
    <div className="outputLine flex gap-[1rem] items-center border-b-[1px] border-yellow-100 pb-[2rem] ">
      <h2 className=" text-[1.8rem]">{data.subject} &mdash; {data.hours} hours</h2>
      <div className="flex gap-[1rem]">

        <button data-key={key} className="font-semibold  outline outline-2 outline-amber-50 bg-green-500 hover:bg-green-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]" onClick={
          (event)=>{
            let key = (event.target.getAttribute('data-key'));
            let updatedStateDbSubjects = { ...stateDbSubjects };
            updatedStateDbSubjects[key]["hours"] += 1; // Update the hours
            updateStateDbSubjects(updatedStateDbSubjects); // Send the updated state back to the parent
          }
        }>
          <i className="fa-sharp fa-solid fa-plus" data-key={key}></i>
        </button>

        <button data-key={key}  className="font-semibold  outline outline-2 outline-amber-50 bg-blue-500 hover:bg-blue-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]" 
        onClick={
          (event)=>{
            let key = (event.target.getAttribute('data-key'));
            let updatedStateDbSubjects = { ...stateDbSubjects };
            if(updatedStateDbSubjects[key]["hours"] <=0){
              // just return no need to decrease it
              return;
            }
            updatedStateDbSubjects[key]["hours"] -= 1; // Update the hours

            updateStateDbSubjects(updatedStateDbSubjects); // Send the updated state back to the parent
          }
        }

        >
          <i data-key={key}  className="fa-regular fa-minus"></i>
        </button>
        <button  data-key={key}  className="font-semibold  outline outline-2 outline-amber-50 bg-red-500 hover:bg-red-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]" 
              onClick={
                (event)=>{
                  let key = (event.target.getAttribute('data-key'));
                  let updatedStateDbSubjects = { ...stateDbSubjects };
                  
                  delete updatedStateDbSubjects[key];
                  updateStateDbSubjects(updatedStateDbSubjects); // Send the updated state back to the parent
                }
              }
        >
          <i className="fa-solid fa-trash"  data-key={key} ></i>
        </button>
      </div>
    </div>
  );
}