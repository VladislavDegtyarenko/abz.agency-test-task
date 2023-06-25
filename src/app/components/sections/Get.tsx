import SectionWrapper from "../ui/SectionWrapper";
import Heading from "../ui/typography/Heading";
import UsersWrapper from "../UsersWrapper";

import styles from "@/app/scss/components/sections/Get.module.scss";

const Get = () => {
  return (
    <SectionWrapper className={styles.getWrapper} id="get">
      <Heading tag="h2" center>
        Working with GET request
      </Heading>

      <UsersWrapper />
    </SectionWrapper>
  );
};

export default Get;
