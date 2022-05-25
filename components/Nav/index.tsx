import Link from "next/link";
import { StyledNav } from "./styles";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <a>BankClient</a>
      </Link>
    </StyledNav>
  );
}
