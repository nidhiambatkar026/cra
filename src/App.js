import './App.css';
import boyimage from"./images/Boy.jpg";

function App() {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-1'>Profile Card</h1>
      <div className='h-auto w-2/4 mx-auto my-10 border-solid border-black border-black-300 border-4 p-10 rounded-xl shadow-lg shadow-gray-300'>
          <div className='flex justify-center'>
             <img src={boyimage} height={180} width={180} alt='boy profile' className='rounded-full border-solid border-black border-4'/>
          </div> 
          <div>
            <h2 className='text-center mt-2 font-bold text-2xl'>Vicky Kaushal</h2>
            <p className='text-center mt-1 font-medium text-xl'>Actor</p>
            <p className='text-center m-1'>Kaushal was born on 16 May 1988 in a suburban chawl in Mumbai to Sham Kaushal, an action director in Indian films, and Veena Kaushal, a homemaker. His younger brother, Sunny, is also an actor. His family is Punjabi Hindu with their ancestral roots in Hoshiarpur, Punjab.</p>
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-400 p-2 m-3 rounded-lg text-white hover:translate-x-1'>Connect</button>
            <button className='bg-blue-400 p-2 m-3 rounded-lg text-white hover:translate-x-1'>Message</button>
          </div>
      </div>
    </div>
  );
}

export default App;
