export default function Home() {
    const callAPI = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <div>
        <main>
          <button onClick={callAPI}>Make API Call</button>
        </main>
      </div>
    );
  }
  