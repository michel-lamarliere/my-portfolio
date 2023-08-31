"use client";

import React, { useState } from "react";
import { z } from "zod";
import classnames from "classnames";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

import { TitleLine } from "@/components/UI/TitleLine";

import classes from "./ContactForm.module.scss";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  emailAddress: z.string().email({ message: "Required" }),
  message: z.string().min(10, { message: "Required" })
});

type Schema = z.infer<typeof schema>;

const inputs: Schema = {
  name: "name",
  emailAddress: "emailAddress",
  message: "message"
};

export function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: {
      isSubmitted,
      isSubmitSuccessful,
      errors,
      touchedFields,
      isValid
    }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur"
  });
  const [message, setMessage] = useState<string | null>(null);

  const submitHandler = async (values: FieldValues) => {
    setMessage("Envoi en cours...");

    const res = await fetch(
      "https://formsubmit.co/ajax/contact@michel-lamarliere.com",
      {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.emailAddress,
          message: values.message,
          _captcha: "false"
        })
      }
    );

    if (res.ok) {
      setMessage("Votre message a bien été envoyé !");
    } else {
      setMessage("Une erreur est survenue lors de l'envoi !");
    }

    setTimeout(() => {
      reset();
      setMessage(null);
    }, 5000);
  };

  const nameClasses = classnames({
    [classes.invalid]: errors.name && touchedFields.name
  });

  const emailAddressClasses = classnames({
    [classes.invalid]: errors.emailAddress && touchedFields.emailAddress
  });

  const messageClasses = classnames({
    [classes.invalid]: errors.message && touchedFields.message
  });

  return (
    <div className={classes.wrapper}>
      <TitleLine text="Contact" className={classes.title} />
      <form
        onSubmit={handleSubmit(data => console.log(data))}
        className={classes.form}
      >
        <input
          className={nameClasses}
          type="text"
          placeholder={"Nom"}
          {...register(inputs.name, { required: true })}
        />
        {errors.name && (
          <div className={classes.invalid_text}>
            Veuillez entrer un nom valide.
          </div>
        )}
        <input
          className={emailAddressClasses}
          type="text"
          placeholder="E-mail"
          {...register(inputs.emailAddress)}
        />
        {errors.emailAddress && (
          <div className={classes.invalid_text}>
            Veuillez entrer une adresse email valide.
          </div>
        )}
        <textarea
          className={messageClasses}
          rows={10}
          placeholder="Message"
          {...register(inputs.message)}
        />
        {errors.message && (
          <div className={classes.invalid_text}>
            Veuillez entrer au moins 10 caractères.
          </div>
        )}
        <div className={classes.footer}>
          <button
            disabled={!isValid}
            onClick={submitHandler}
            type="submit"
            className={classes.submit}
          >
            Envoyer
          </button>
          {message && <div className={classes.sent}>{message}</div>}
        </div>
      </form>
    </div>
  );
}
