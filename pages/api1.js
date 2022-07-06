export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const api1 = ({ data }) => {
  return (
    <div className="justify-items-center grid gap-12 grid-cols-3 bg-gray-50">
      {data.results.map((curElem) => {
        return (
          <div className=" bg-gray-100 p-5 hover:drop-shadow-xl cursor-pointer">
            <div className="" key={curElem.id}>
              <h3 className=" font-extrabold italic">
                {curElem.id}
                <img className="flex gap-12" src={curElem.image} />
              </h3>
              <h2 className="font-bold">{curElem.name}</h2>
            </div>
            <h2 className="font-semibold">{curElem.status}</h2>
            <h2>{curElem.species}</h2>
            <h2 className="italic">{curElem.url}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default api1;
