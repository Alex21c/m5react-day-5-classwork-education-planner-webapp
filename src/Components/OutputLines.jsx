export default function OutputLines({keyAndData, updateStateDbSubjects, stateDbSubjects}){
  keyAndData = keyAndData;
  // console.log('key and data are' , keyAndData);

//  console.log(props);
//   return;
  // console.log('data is ', data);
  let key = keyAndData[0];
  let data = keyAndData[1];

  console.log(data, key);
  
  return (
    <div className="flex gap-[1rem] items-center ">
      <span className="text-[1.8rem]">{data.subject}- {data.hours} hours</span>
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
          updatedStateDbSubjects[key]["hours"] -= 1; // Update the hours
          updateStateDbSubjects(updatedStateDbSubjects); // Send the updated state back to the parent
        }
      }

      >
        <i data-key={key}  className="fa-regular fa-minus"></i>
      </button>
      <button className="font-semibold  outline outline-2 outline-amber-50 bg-red-500 hover:bg-red-300 transition cursor-pointer pt-[.5rem] rounded-full pb-[.5rem] p-[1rem]  hover:text-slate-900 text-slate-50 text-[1.5rem]" 
            onClick={
              (event)=>{
                let key = (event.target.getAttribute('data-key'));
                let updatedStateDbSubjects = { ...stateDbSubjects };
                updatedStateDbSubjects[key]["hours"] -= 1; // Update the hours
                updateStateDbSubjects(updatedStateDbSubjects); // Send the updated state back to the parent
              }
            }// write code for delete
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}