import './App.css';

function App() {
  return (
    <div>
      <h1>Profile Card</h1>
      <div>
          <div>
             <img src="./images/Boy.jpg" height={300} width={300} alt='boy profile'/>
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
