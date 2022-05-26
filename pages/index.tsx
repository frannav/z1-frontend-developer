import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import CheckPicture from "../containers/CheckPicture";
import Nav from "../components/Nav/index";
import Scanner from "../containers/Scanner";
import { AppState } from "../types/appState";
import ImageId from "../public/Images/id-bg-white.svg";
import IdCard from "../public/Images/id-card.png";

const Home: NextPage = () => {
  const [status, setStatus] = useState(AppState.InitialState);
  const [image, setImage] = useState<StaticImageData>(IdCard);

  useEffect(() => {
    if (status === AppState.InitialState) {
      setImage(ImageId);
    }
    if (status === AppState.FetchingData) {
      setImage(IdCard);
    }
  }, [status]);

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
          status === AppState.FetchingData) && (
          <>
            <Nav />
            <Scanner
              changeStatus={modifyStatus}
              status={status}
              image={image}
            />
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
