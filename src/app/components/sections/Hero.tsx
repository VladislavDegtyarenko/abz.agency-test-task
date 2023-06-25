import SectionWrapper from "../ui/SectionWrapper";
import Heading from "../ui/typography/Heading";
import Body from "../ui/typography/Body";
import Button from "../ui/Button";
import Image from "next/image";

import styles from "@/app/scss/components/sections/Hero.module.scss";

const Hero = () => {
  return (
    <SectionWrapper className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/assets/bg-crop.jpg"
          alt="hero background image"
          fill={true}
          quality={70}
          priority
        />
      </div>

      <div className={styles.content}>
        <Heading tag="h1" center>
          Test assignment for front-end developer
        </Heading>
        <Body center>
          What defines a good front-end developer is one that has skilled knowledge of
          HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll
          be building web interfaces with accessibility in mind. They should also be
          excited to learn, as the world of Front-End Development keeps evolving.
        </Body>
        <div>
          <Button href="#post">Sign up</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
