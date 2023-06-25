"use client";

// React
import { createContext, ReactNode } from "react";

// TS
import { SWRInfiniteKeyLoader } from "swr/infinite";
import { UsersResponseProps, UsersContextProps } from "../types";

// Constants
import { BASE_URL } from "../utils/fetcher";

// SWR
import useSWRInfinite from "swr/infinite";
import fetcher from "../utils/fetcher";

// SWR's getKey function
const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData, count = 6) => {
  const page = pageIndex + 1;

  if (previousPageData && !previousPageData.links.next_url) return null;

  if (pageIndex === 0) return `${BASE_URL}/api/v1/users?page=${page}&count=${count}`;

  return previousPageData.links.next_url;
};

// Create Context
const UsersContext = createContext<UsersContextProps | null>(null);

// Context Provider
export const UsersContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetcher<UsersResponseProps>
  );

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  const currentPage = data && data[data.length - 1]?.page;
  const totalPages = data && data[data.length - 1]?.total_pages;
  const reachedEnd = currentPage === totalPages;

  const showMore = () => setSize(size + 1);

  const reload = () => {
    setSize(1);
    mutate(data);
  };

  const context = {
    data,
    error,
    isLoadingMore,
    reachedEnd,
    showMore,
    reload,
  };

  return <UsersContext.Provider value={context}>{children}</UsersContext.Provider>;
};

export default UsersContext;
