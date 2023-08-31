import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import homeIcon from "@/assets/icons/home.svg";

import classes from "./HomeButton.module.scss";

export function HomeButton() {
  const pathname = usePathname();
  const router = useRouter();

  const buttonHandler = () => {
    router.push("/");
  };

  if (pathname === "/") return null;

  return (
    <button onClick={buttonHandler} className={classes.wrapper}>
      <Image src={homeIcon} alt="Accueil" />
    </button>
  );
}
