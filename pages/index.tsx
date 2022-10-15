import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { getGames, Country, OfferGame } from "epic-free-games";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  const countries = ["US", "TR", "GB", "DE", "AR", "ES", "MX", "FR", "IT", "JP", "KR", "PL", "BR", "RU", "TH", "CN"];

  const [selected, setSelected] = useState<Country>(countries[0] as Country);
  const [games, setGames] = useState();

  const getCurrentGames = async () => {
    const currentGames = await fetch("https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=ES");
    const currentGamesJson = await currentGames.json();
    setGames(currentGamesJson);
  };

  useEffect(() => {
    // getGames(selected, true).then((res) => {
    //   setGames(res.currentGames);
    // });
    getCurrentGames();
  });

  return (
    <div className="bg-gradient-to-r from-amber-300 to-orange-500 w-screen h-screen flex justify-center">
      {games.map((game, index) => {
        return <h1 key={index}>{game.title}</h1>;
      })}
      <div className="fixed top-16 w-72">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {countries.map((country, countryId) => (
                  <Listbox.Option
                    key={countryId}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`
                    }
                    value={country}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{country}</span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default Home;
