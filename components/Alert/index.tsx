import Image from "next/image";
import CheckIcon from "../../public/Images/check-icon.svg";
import LightIcon from "../../public/Images/light-icon.svg";
import { AlertContainer } from "./styles";

type Props = {
  alertText: string;
  loading: boolean;
};

export default function Alert({ alertText, loading }: Props) {
  const ICON = loading ? LightIcon : CheckIcon;

  return (
    <AlertContainer>
      <Image src={ICON} alt="Check Icon" width={30} height={30} />
      <p>{alertText}</p>
    </AlertContainer>
  );
}
