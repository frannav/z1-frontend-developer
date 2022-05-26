import Image from "next/image";
import { useEffect } from "react";
import IdCard from "../../public/Images/id-card.png";
import { Container, ImageContainer, Button } from "./styles";
import Alert from "../../components/Alert";
import { AppState } from "../../types/appState";
import { Props } from "./types";

export default function CheckPicture({ changeStatus, status }: Props) {
  const cancelCheck = () => {
    changeStatus(AppState.InitialState);
  };

  useEffect(() => {
    const addPicture = () => {
      changeStatus(AppState.PictureAdded);
    };
    if (status === AppState.Loading) {
      setTimeout(() => {
        addPicture();
      }, 1000);
    }
    if (status === AppState.PictureAdded) {
      setTimeout(() => {
        changeStatus(AppState.FetchingData);
      }, 1500);
    }
  }, [status, changeStatus]);

  return (
    <Container>
      <h1>Take Picture</h1>
      <p>Fit your ID card inside the frame.</p>
      <p>The picture will be taken automatically</p>

      <ImageContainer>
        <Image
          src={IdCard}
          alt="ID background image"
          width={260}
          height={160}
        />
      </ImageContainer>

      {status === AppState.Loading && (
        <Alert alertText="Room lighting is too low" loading={true} />
      )}

      {status === AppState.PictureAdded && (
        <Alert alertText="Picture taken!" loading={false} />
      )}

      <Button onClick={cancelCheck}>
        <span>CANCEL</span>
      </Button>
    </Container>
  );
}
