"use client";

// Context
import { useContext } from "react";
import UsersContext from "../context/UsersContext";

// UI
import UserCard from "./ui/UserCard";
import Button from "./ui/Button";
import Preloader from "./ui/Preloader";

// SASS
import styles from "@/app/scss/components/UsersWrapper.module.scss";

// Component
const UsersWrapper = () => {
  const ctx = useContext(UsersContext);
  if (!ctx) return;

  const { data, error, isLoadingMore, reachedEnd, showMore } = ctx;

  if (error) throw new Error(error);

  return (
    <>
      <div className={styles.users}>
        {data
          ? data?.map((pageData) =>
              pageData?.users.map((user) => <UserCard key={user.email} {...user} />)
            )
          : null}
      </div>

      {isLoadingMore ? <Preloader /> : null}

      {!reachedEnd && !isLoadingMore ? (
        <Button onClick={showMore}>Show more</Button>
      ) : null}
    </>
  );
};

export default UsersWrapper;
