import './App.css';
import boyimage from"./images/Boy.jpg";

function App() {
  return (
    <div>
      <h1 className='text-center font-mono font-bold text-2xl'>Profile Card</h1>
      <div className='h-auto w-2/4 mx-auto my-10 border-solid border-black border-slate-300 border-4 p-10'>
          <div className='flex justify-center'>
             <img src={boyimage} height={180} width={180} alt='boy profile' className='rounded'/>
          </div> 
          <div>
            <h2>Vicky Kaushal</h2>
            <p>Actor</p>
            <p>Kaushal was born on 16 May 1988 in a suburban chawl in Mumbai to Sham Kaushal, an action director in Indian films, and Veena Kaushal, a homemaker. His younger brother, Sunny, is also an actor. His family is Punjabi Hindu with their ancestral roots in Hoshiarpur, Punjab.</p>
          </div>
          <div>
            <button>Connect</button>
          </div>
      </div>
    </div>
  );
}

export default App;
