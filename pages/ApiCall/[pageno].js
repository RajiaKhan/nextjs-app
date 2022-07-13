export const getStaticPaths = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const paths = data.results.map((curElem) => {
      return { params: { pageno: curElem.id.toString() } };
    });
    return { paths, fallback: false };
  };
  export const getStaticProps = async (context) => {
    const id = context.params.pageno;
    const res = await fetch(`https://rickandmortyapi.com/api/character/ ${id}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };
  const myData = ({ data }) => {
    return (
      <>
        <div
          key={data.id}
          className="border flex bg-gray-50 items-center justify-center p-5"
        >
          <img className="my-2 rounded md:w-64 w-40" src={data.image} />
          <div class="ml-2 md:ml-5 my-auto">
            <h3 className="font-extrabold italic sm:text-lg text-sm sm:mb-2 mb-0">
              {data.id}
            </h3>
  
            <h2 className="font-bold text-xl text-gray-800">
              Name: {data.name}
            </h2>
  
            <h2 className="font-semibold text-lg text-gray-800">
              Status:{data.status}
            </h2>
  
            <h2 className="italic text-sm text-gray-800">{data.url}</h2>
            <h2 className="italic text-sm text-gray-800">{data.speciesl}</h2>
          </div>
        </div>
      </>
    );
  };
  
  export default myData;