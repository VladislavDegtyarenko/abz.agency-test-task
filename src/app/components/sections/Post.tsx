import SectionWrapper from "../ui/SectionWrapper";
import PostForm from "../PostForm";

import styles from "@/app/scss/components/sections/Post.module.scss";

const Post = () => {
  return (
    <SectionWrapper id="post" className={styles.post}>
      <PostForm />
    </SectionWrapper>
  );
};

export default Post;
