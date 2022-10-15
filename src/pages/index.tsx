import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { getGames, Country, OfferGame } from "epic-free-games";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/US");
  });

  return <></>;
};

export default Home;
