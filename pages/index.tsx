import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import CheckPicture from "../views/CheckPicture";
import Nav from "../components/Nav/index";
import Scanner from "../views/Scanner";
import { AppState } from "../types/appState";

const Home: NextPage = () => {
  const [status, setStatus] = useState(AppState.InitialState);

  const modifyStatus = useCallback((newStatus: AppState) => {
    setStatus(newStatus);
  }, []);

  return (
    <div>
      <Head>
        <title>BankClient</title>
        <meta name="description" content="Test Frontend Developer Z1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {(status === AppState.InitialState ||
          status === AppState.FetchingData ||
          status === AppState.Success ||
          status === AppState.Error) && (
          <>
            <Nav />
            <Scanner changeStatus={modifyStatus} status={status} />
          </>
        )}
        {(status === AppState.Loading || status === AppState.PictureAdded) && (
          <CheckPicture changeStatus={modifyStatus} status={status} />
        )}
      </main>
    </div>
  );
};

export default Home;
