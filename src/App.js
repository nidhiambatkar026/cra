import './App.css';
import {PROFILE_IMG, NAME, ROLE, Description ,Button1, Button2} from "./config";

function App() {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-1'>Profile Card</h1>
      <div className='h-auto w-2/4 mx-auto my-10 border-solid border-black border-black-300 border-4 p-10 rounded-xl shadow-lg shadow-gray-300'>
          <div className='flex justify-center'>
             <img src={PROFILE_IMG} height={120} width={150} alt='profile' className='rounded-full border-solid border-black border-4'/>
          </div> 
          <div>
            <h2 className='text-center mt-2 font-bold text-2xl'>{NAME}</h2>
            <p className='text-center mt-1 font-medium text-xl'>{ROLE}</p>
            <p className='text-center m-1'>{Description}</p>
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-400 p-2 m-3 rounded-lg text-white hover:translate-x-1'>{Button1}</button>
            <button className='bg-blue-400 p-2 m-3 rounded-lg text-white hover:translate-x-1'>{Button2}</button>
          </div>
      </div>
    </div>
  );
}

export default App;
