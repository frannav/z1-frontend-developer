/* eslint-disable no-unused-vars */
import { AppState } from "../../types/appState";

export type Props = {
  changeStatus: (newState: AppState) => void;
  status: AppState;
};
