import Image from "next/image";
import { useState } from "react";
import {
  Container,
  ImageContainer,
  Button,
  PictureStatusRejected,
  PictureStatusAccepted,
  RetakeButton,
} from "./styles";
import { AppState } from "../../types/appState";
import ImageId from "../../public/Images/id-bg-white.svg";
import IdCard from "../../public/Images/id-card.png";
import CrossIcon from "../../public/Images/cross.svg";
import CheckIcon from "../../public/Images/check.svg";

const FETCH_URL = "https://front-exercise.z1.digital/evaluations";

export type Props = {
  changeStatus: any;
  status: AppState;
};

export default function Scanner({ changeStatus, status }: Props) {
  const [fetchResult, setFetchResult] = useState("initial");

  const addPicture = () => {
    changeStatus(AppState.Loading);
  };

  const postRequest = async () => {
    fetch(FETCH_URL, {
      method: "POST",
      body: JSON.stringify({
        image: "test",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.summary.outcome === "Too Much Glare") {
          setFetchResult("rejected");
        }
        if (data.summary.outcome === "Approved") {
          setFetchResult("accepted");
        }
      });
  };

  if (status === AppState.FetchingData && fetchResult === "initial") {
    postRequest();
  }

  return (
    <Container>
      <h1>Scan your ID</h1>
      <p>
        Take a picture. It may take time to validate your personal information.
      </p>

      {status === AppState.InitialState && (
        <ImageContainer>
          <Image
            src={ImageId}
            alt="ID background image"
            width={260}
            height={160}
          />
          <Button onClick={addPicture}>
            <span>TAKE PICTURE</span>
          </Button>
        </ImageContainer>
      )}
      {status === AppState.FetchingData && (
        <ImageContainer>
          <Image
            src={IdCard}
            alt="ID background image"
            width={260}
            height={160}
          />
          {fetchResult === "rejected" && (
            <PictureStatusRejected>
              <RetakeButton onClick={addPicture}>
                <span>RETAKE PICTURE</span>
              </RetakeButton>
              <div>
                <Image
                  src={CrossIcon}
                  alt="Cross icon"
                  width={30}
                  height={30}
                />
                <span>Rejected</span>
              </div>
            </PictureStatusRejected>
          )}
          {fetchResult === "accepted" && (
            <PictureStatusAccepted>
              <div>
                <Image
                  src={CheckIcon}
                  alt="Check icon"
                  width={30}
                  height={30}
                />
                <span>Accepted</span>
              </div>
            </PictureStatusAccepted>
          )}
        </ImageContainer>
      )}
    </Container>
  );
}
