import Container from "./Container";
import { SectionWrapperProps } from "@/app/types";
import styles from "@/app/scss/components/ui/SectionWrapper.module.scss";

const SectionWrapper = ({ children, tag, className, ...props }: SectionWrapperProps) => {
  const SectionTag = tag || "section";

  return (
    <SectionTag className={`${className} ${styles.section}`} {...props}>
      <Container>{children}</Container>
    </SectionTag>
  );
};

export default SectionWrapper;
