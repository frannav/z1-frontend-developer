import Image from "next/image";
import { useState } from "react";
import { Props } from "./types";
import {
  Container,
  ImageContainer,
  Button,
  PictureStatusRejected,
  PictureStatusAccepted,
  RetakeButton,
} from "./styles";
import { AppState } from "../../types/appState";
import CrossIcon from "../../public/Images/cross.svg";
import CheckIcon from "../../public/Images/check.svg";
import { postRequest } from "../../lib/api";
import { ResponsePostRequest } from "../../lib/api.types";

export default function Scanner({ changeStatus, status, image }: Props) {
  const [fetchResult, setFetchResult] = useState<
    "initial" | "accepted" | "rejected"
  >("initial");

  const addPicture = () => {
    changeStatus(AppState.Loading);
  };

  if (status === AppState.FetchingData && fetchResult === "initial") {
    postRequest(image).then((data: ResponsePostRequest) => {
      if (data.summary.outcome === "Too Much Glare") {
        setFetchResult("rejected");
      }
      if (data.summary.outcome === "Approved") {
        setFetchResult("accepted");
      }
    });
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
            src={image}
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
            src={image}
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
