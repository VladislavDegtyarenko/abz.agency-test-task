import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import styles from "@/app/scss/components/sections/Header.module.scss";

const Header = () => {
  return (
    <SectionWrapper tag="header">
      <div className={styles.header}>
        <Link className={styles.logoLink} href="/">
          <Image src="/assets/Logo.svg" alt="logo" width={104} height={26} />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Button href="#get">Users</Button>
            </li>
            <li>
              <Button href="#post">Sign up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default Header;
