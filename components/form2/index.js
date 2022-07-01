import { useState, useEffect } from "react";
export default function form2() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [Streetaddress, setStreetaddress] = useState("");
  const [Country, setCountry] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Firstname, Lastname, email, Streetaddress, Country, State, Zip);
    localStorage.setItem("item", JSON.stringify(Lastname));
    localStorage.setItem("item1", JSON.stringify(Firstname));
    localStorage.setItem("item2", JSON.stringify(email));
    localStorage.setItem("item3", JSON.stringify(Streetaddress));
    localStorage.setItem("item4", JSON.stringify(Country));
    localStorage.setItem("item5", JSON.stringify(State));
    localStorage.setItem("item6", JSON.stringify(Zip));
  };
  return (
    
    <div>
      <form
        className="container mx-auto bg-white shadow rounded"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex items-center w-11/12 mx-auto">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="container mx-auto">
              <div className="my-8 mx-auto xl:w-full xl:mx-0">
                <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="FirstName"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      id="FirstName"
                      value={Firstname}
                      onChange={(event) => setFirstname(event.target.value)}
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    />
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="LastName"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      name="lastName"
                      value={Lastname}
                      onChange={(event) => setLastname(event.target.value)}
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    />
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="email2"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-mail"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={3} y={5} width={18} height={14} rx={2} />
                          <polyline points="3 7 12 13 21 7" />
                        </svg>
                      </div>
                      <input
                        id="email2"
                        name="email"
                        required
                        className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-gray-300 rounded border"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="StreetAddress"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={Streetaddress}
                      onChange={(event) => setStreetaddress(event.target.value)}
                      id="StreetAddress"
                      name="streetAddress"
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    />
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="Country"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="Country"
                      name="country"
                      value={Country}
                      onChange={(event) => setCountry(event.target.value)}
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                      placeholder="California"
                    />
                  </div>
                </div>
                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <label
                    htmlFor="State/Province"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="State/Province"
                    value={State}
                    onChange={(event) => setState(event.target.value)}
                    name="state"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    placeholder="California"
                  />
                </div>
                <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                  <div className="flex items-center pb-2">
                    <label
                      htmlFor="ZIP"
                      className="text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      ZIP/Postal Code
                    </label>
                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                      >
                        <path
                          className="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="ZIP"
                    value={Zip}
                    onChange={(event) => setZip(event.target.value)}
                    name="zip"
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    placeholder="e.g 86745"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
