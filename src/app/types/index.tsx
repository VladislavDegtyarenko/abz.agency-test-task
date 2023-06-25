import { ReactNode, InputHTMLAttributes, MouseEventHandler } from "react";
import { ImageProps } from "next/image";

export interface Element {
  children: ReactNode;
}

export interface TypographyProps {
  children: string;
  tag?: string;
  className?: string;
  center?: boolean;
  href?: string;
}

export interface HeadingProps extends TypographyProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface TextLinkProps extends TypographyProps {
  href: string;
  tooltip?: string;
}

// export interface BodyProps extends TypographyProps {}

export interface ButtonProps {
  children: string;
  type?: "submit";
  href?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

export interface SectionWrapperProps extends Element {
  tag?: "header" | "footer" | "main" | "div";
  className?: string;
  id?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
}

export interface TooltipProps extends Element {
  label: string;
}

export interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  errorMessage?: string;
}

export interface InputFileProps extends InputFieldProps {
  filename?: string;
}

export interface UsersResponseProps {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: UserProps[];
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

export interface PostFormData {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: FileList;
}

export interface PositionsData {
  success: boolean;
  positions: Position[];
}

interface Position {
  id: number;
  name: string;
}

export interface UsersContextProps {
  data: UsersResponseProps[] | undefined;
  error: any;
  isLoadingMore: boolean | undefined;
  reachedEnd: boolean;
  showMore: () => Promise<UsersResponseProps[] | undefined>;
  reload: () => void;
}

export interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}
