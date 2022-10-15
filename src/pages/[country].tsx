import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { getGames, Country, OfferGame } from "epic-free-games";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import { Selector } from "../components/Selector";
import { Card } from "../components/Card";
import Head from "next/head";

interface Props {
  currentGames: OfferGame[];
  nextGames: OfferGame[];
  country: Country;
}

const CountryGames: NextPage<Props> = (props) => {
  const [selected, setSelected] = useState<Country>(props.country);

  const router = useRouter();

  const changeCountry = (country: Country) => {
    setSelected(country);
    router.push(`/${country}`);
  };

  return (
    <>
      <Head>
        <title>Free Epic Games</title>
      </Head>
      <div className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 w-screen md:h-screen flex flex-col items-center">
        <Selector country={selected} changeCountry={changeCountry} />
        <div className="flex flex-col md:flex-row mt-8 md:space-x-4 md:space-y-0 space-y-4">
          {props.currentGames.map((game: OfferGame, index) => {
            return <Card key={index} game={game} current={true} />;
          })}
          {props.nextGames.map((game: OfferGame, index) => {
            return <Card key={index} game={game} current={false} />;
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { country } = context.params;

  const games = await getGames(country, true);
  const currentGames = games["currentGames"];
  const nextGames = games["nextGames"];
  return {
    props: { currentGames, nextGames, country }, // will be passed to the page component as props
  };
}

export default CountryGames;
