/* eslint-disable no-unused-vars */
import { StaticImageData } from "next/image";
import { AppState } from "../../types/appState";

export type Props = {
  changeStatus: (newState: AppState) => void;
  status: AppState;
  image: StaticImageData;
};
