import OutputLines from "./OutputLines";
import {useState, useEffect} from 'react';

export default function EducationPlanner(){

  // maintaining states
    let [stateSubjectName, updateStateSubjectName] = useState('');
    let [stateSubjectHours, updateStateSubjectHours] = useState('');
    let [stateStatusMessage, updateStateStatusMessage] = useState ({
      message: 'hi there i am cortana',
      displayNone : 'displayNone',
      type : 'Error',
      classNames : {
        error: 'text-red-300',
        success: 'text-green-300'
      }
    });

    // setting initial state
    let initialState = localStorage.getItem ('alex21cEducationPlannerWebApp');
    if(initialState){
      initialState = JSON.parse(initialState);
    }else{
      initialState = [];
    }
    // console.log(initialState);
    // return;
    let [stateDbSubjects, updateStateDbSubjects] = useState(
            initialState
        );

    useEffect(()=>{
      // console.log(stateDbSubjects,  Object.entries(stateDbSubjects));
  
      localStorage.setItem ('alex21cEducationPlannerWebApp', JSON.stringify(stateDbSubjects));


    }, [stateDbSubjects]);
      

  // helper functions


    let generateUniqueId = ()=> {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 10000); // Adjust as needed
      return `${timestamp}-${random}`;
    }

    let showErrorMsg = (msg)=>{
      updateStateStatusMessage(previousState=>(
        {
          ...previousState,
          message: msg,
          displayNone: ''
        }
      ));
    }


let addSubjectAndHours = ()=>{
  // console.log('okay adding, wait!');
  // console.log(stateSubjectName, typeof stateSubjectHours);


  
  // console.log(key);
// console.log('subject horus are ', typeof stateSubjectHours)
  if(stateSubjectHours < 0 ){
    // console.log('wait there is an error');
    showErrorMsg(`do you really want negative hours, kindly provide hours from 0 to Infinity!`);
    return;
    // just return

  }
  else  if(stateSubjectName === '' ){
    // console.log('wait there is an error');
    showErrorMsg(`Kindly provide any Subject Name!`);
    return;
    // just return

  }
  else  if(stateSubjectHours === '' ){
    // console.log('wait there is an error');
    showErrorMsg(`Kindly provide some value for Hours from 0 to Infinity`);
    return;
    // just return

  }
  
  else{
    // hide the error
    updateStateStatusMessage(previousState=>(
      {
        ...previousState,
        displayNone: 'displayNone'
      }
    ));          
  }
  
  
  updateStateDbSubjects((previousState)=>{

    let key = generateUniqueId();
    updateStateSubjectName('');
    updateStateSubjectHours('');
    // console.log('key is' , key);
    return {
      ...previousState,
      [key] : {
        subject: stateSubjectName,
        hours: stateSubjectHours
      }      
   };

   // clear
   
  });
    
  //   {
  //   ...previousState,
  //   {key} : {
  //     subject: stateSubjectName,
  //     hours: stateSubjectHours
  //   }
  // }))
  
  // // console.log(key);
  // localStorage.setItem(key, data);
  
  // localStorage.setItem
}

// returning JSX  
  return (
    <div id='wrapperEducationPlannerWebApp' className="border-2 border-slate-200 p-[2rem] w-[50rem] mt-[2rem] m-auto rounded-md flex flex-col gap-[2rem] text-[1.2rem] text-slate-200">
      <header className="flex flex-col items-center gap-[1rem]">
        <h1 className="smallCaps text-center font-semibold text-[3rem]  text-slate-50">Education Planner Web-App</h1>
        <form className="flex flex-col gap-[1rem]  w-[100%]">
          <input required value={stateSubjectName} className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]   rounded-md" type="text" placeholder="Subject" onChange={
            (e)=>{
              updateStateSubjectName(e.target.value);
            }
          }/>
          <input required  value={stateSubjectHours} className="text-slate-900 transition focus:outline focus:outline-2 focus:outline-yellow-500 p-[.5rem]    rounded-md" type="number" placeholder="Hours" onChange={
            (e)=>{
              updateStateSubjectHours(Number(e.target.value));
            }
          }/>
        <div className={`${stateStatusMessage} ${stateStatusMessage.type.toLocaleLowerCase() === 'error' ? stateStatusMessage.classNames.error : stateStatusMessage.classNames.success} ${stateStatusMessage.displayNone} flex gap-[.5rem] items-center` }>
          <span className="font-bold smallCaps text-[2rem]"
          >{stateStatusMessage.type}:</span>
          <span>{stateStatusMessage.message}</span>
        </div>

          <button className="font-semibold flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer p-[1rem] rounded-md hover:text-slate-50 text-slate-900 text-[1.5rem]" type="submit" onClick ={
            (e)=>{
              e.preventDefault();
              addSubjectAndHours();
            }
          }>
            <i className="fa-solid fa-database"></i>
            <span>Add</span>
          </button>
        </form>
      </header>

<div className="flex flex-col gap-[2rem]">
  {
    Object.entries(stateDbSubjects).map(([key, data]) => (
      <OutputLines 
        key={key} 
        keyAndData={[key, data]} 
        updateStateDbSubjects={updateStateDbSubjects}
        stateDbSubjects = {stateDbSubjects}
      />
    ))
  }
</div>


    </div>
  );
}