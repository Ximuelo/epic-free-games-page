import type { NextPage } from "next";
import { useState } from "react";
import { EpicFreeGames, Country, OfferGame } from "epic-free-games";
import { useRouter } from "next/router";
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
  let { country } = context.params;
  country = country.toUpperCase();

  const epicFreeGames = new EpicFreeGames({ country: country, includeAll: true })

  const games = await epicFreeGames.getGames(country);
  const currentGames = games["currentGames"];
  const nextGames = games["nextGames"];
  return {
    props: { currentGames, nextGames, country }, // will be passed to the page component as props
  };
}

export default CountryGames;
