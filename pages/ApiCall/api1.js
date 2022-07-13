import image from "next/image";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const api1 = ({ data }) => {
  return (
    <div className="justify-items-center grid gap-12 grid-cols-2 bg-gray-50">
      {data.results.map((curElem) => {
        return (
          <div
            key={curElem.id}
            className="flex bg-gray-100 hover:bg-violet-100 p-5 hover:drop-shadow-xl cursor-pointer"
          >
            <img className="my-2 rounded md:w-64 w-40" src={curElem.image} />
            <div class="ml-2 md:ml-5 my-auto">
              <h3 className="font-extrabold">
                {curElem.id}.
              </h3>
              <h2 className="font-semibold text-lg text-gray-600 ">
                Status:{curElem.status}
              </h2>
              <h2 className="font-semibold text-lg  text-gray-600">
                Species:{curElem.species}
              </h2>
              <h2 className="font-semibold text-lg  text-gray-600">
                Gender:{curElem.gender}
              </h2>
              <h2 className="italic text-sm  text-gray-600">{curElem.url}</h2>
              <Link href={`/ApiCall/${curElem.id}`}>
                <h2 className="font-bold text-xl underline mt-5  text-gray-600 hover:text-indigo-700 focus:outline-offset ">
                  Name: {curElem.name}
                </h2>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default api1;
