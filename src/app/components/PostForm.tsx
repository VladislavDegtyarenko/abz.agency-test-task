"use client";

// React
import { useState, useContext } from "react";
import UsersContext from "../context/UsersContext";

// React Hook Form
import { useForm } from "react-hook-form";

// UI
import Heading from "./ui/typography/Heading";
import Body from "./ui/typography/Body";
import InputField from "./ui/InputField";
import InputRadio from "./ui/InputRadio";
import InputFile from "./ui/InputFile";
import Button from "./ui/Button";
import Preloader from "./ui/Preloader";
import Image from "next/image";

// SCSS
import styles from "@/app/scss/components/PostForm.module.scss";

// SWR
import useSWR from "swr";
import fetcher, { BASE_URL } from "../utils/fetcher";

// TS
import { PostFormData, PositionsData } from "../types";

// Utils
import validateImageResolution from "../utils/validateImageResolution";

// Regex validation patterns
const EMAIL_REGEX_PATTERN =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const PHONE_REGEX_PATTERN = /^[\+]{0,1}380([0-9]{9})$/;

// Component
const PostForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [alreadyRegisteredError, setAlreadyRegisteredError] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>();

  // To handle the attached file name changes
  const photo = watch("photo");

  // Reload users after successful registration
  const usersCtx = useContext(UsersContext);
  const reload = usersCtx?.reload;

  const onSubmit = handleSubmit((data) => {
    // Get a token
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((res) => res.json())
      .then(({ success, token }) => {
        if (success) {
          // Send form data

          // Append the token to Headers object
          const headers = new Headers();
          headers.append("Token", token);

          // Initialize a FormData object
          const formData = new FormData();
          Object.entries(data).forEach(([k, v]) => {
            const isFile = typeof v === "object" && v[0] instanceof File;

            if (isFile) {
              return formData.append(k, v[0], v[0].name);
            } else {
              return formData.append(k, v);
            }
          });

          // Post request
          fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
            method: "POST",
            body: formData,
            headers,
          })
            .then((res) => {
              // Handle the case when the user is already registered
              if (res.status === 409) {
                setAlreadyRegisteredError(true);
              }

              return res.json();
            })
            .then((data) => {
              if (data.success) {
                setFormSent(true);
                reload && reload();
              }
            })
            .catch(function (error) {
              throw new Error(error);
            });
        }
      });
  });

  // Fetch user positions from API
  // for radio buttons section
  const { data, isLoading } = useSWR(
    `${BASE_URL}/api/v1/positions`,
    fetcher<PositionsData>
  );

  // Show success screen after form sent
  if (formSent) {
    return (
      <>
        <Heading tag="h2" center>
          User successfully registered
        </Heading>
        <div className={styles.successImage}>
          <Image src="/assets/success-image.svg" fill={true} alt="success image" />
        </div>
      </>
    );
  }

  // Otherwise, show the form
  return (
    <>
      <Heading tag="h2" center>
        Working with POST request
      </Heading>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputField
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Username should contain 2-60 characters",
            },
            maxLength: {
              value: 60,
              message: "Username should contain 2-60 characters",
            },
          })}
          errorMessage={errors.name?.message}
          type="text"
          placeholder="Your name"
        />
        <InputField
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: EMAIL_REGEX_PATTERN,
              message: "Please, provide a valid email address. Example: jhon@example.com",
            },
          })}
          errorMessage={errors.email?.message}
          type="email"
          placeholder="Email"
        />
        <InputField
          {...register("phone", {
            required: "This field is required",
            pattern: {
              value: PHONE_REGEX_PATTERN,
              message:
                "Number should start with code of Ukraine +380. Example: +380955388485",
            },
          })}
          errorMessage={errors.phone?.message}
          type="phone"
          placeholder="Phone"
          helperText="+38 (XXX) XXX - XX - XX"
        />

        <fieldset>
          <Body tag="legend">Select your position</Body>

          {data
            ? data.positions.map(({ id, name }) => (
                <InputRadio
                  {...register("position_id")}
                  key={id}
                  label={name}
                  value={id}
                  defaultChecked={id === 1}
                />
              ))
            : null}
          {isLoading ? <Preloader /> : null}
        </fieldset>

        <InputFile
          {...register("photo", {
            required: "Attach the photo",
            validate: {
              acceptedFormats: (files) =>
                ["image/jpg", "image/jpeg"].includes(files[0]?.type) ||
                "The photo format must be jpeg/jpg type",
              minimumSize: (files) =>
                files[0]?.size < 5 * 1024 * 1024 ||
                "The photo size must not be greater than 5 Mb.",
              minResolution: async (files) => {
                const res = await validateImageResolution(files);
                return res;
              },
            },
          })}
          filename={photo && photo[0]?.name}
          errorMessage={errors.photo?.message}
        />

        <div className={styles.serverErrorMessage}>
          {alreadyRegisteredError ? (
            <p>User with this phone or email already exist</p>
          ) : null}
        </div>

        <Button type="submit" disabled={isLoading}>
          Sign up
        </Button>
      </form>
    </>
  );
};

export default PostForm;
