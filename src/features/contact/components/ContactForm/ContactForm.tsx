'use client';

import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import cn from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { TitleLine } from '@/components/TitleLine/TitleLine';
import { useSendEmail } from '@/features/contact/api/sendEmail';

import styles from './ContactForm.module.scss';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  emailAddress: z.string().email({ message: 'Required' }),
  message: z.string().min(10, { message: 'Required' })
});

const inputKeys = {
  name: 'name',
  emailAddress: 'emailAddress',
  message: 'message'
} as const;

export function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid }
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      emailAddress: '',
      message: ''
    }
  });
  const [message, setMessage] = useState<string | null>(null);

  const { isPending, isSuccess, isError, mutateAsync } = useSendEmail();

  const clearMessage = () => {
    setTimeout(() => {
      reset();
      setMessage(null);
    }, 5000);
  };

  useEffect(() => {
    if (isPending) {
      setMessage('Envoi en cours...');
    } else if (isSuccess) {
      setMessage('Votre message a bien été envoyé !');
      clearMessage();
      reset();
    } else if (isError) {
      setMessage("Une erreur est survenue lors de l'envoi !");
      clearMessage();
    }
  }, [isError, isSuccess, isPending]);

  return (
    <div className={styles.wrapper}>
      <TitleLine text="Contact" className={styles.title} />
      <form
        onSubmit={handleSubmit(data => mutateAsync(data))}
        className={styles.form}
      >
        <input
          className={cn({
            [styles.invalid]: errors.name && touchedFields.name
          })}
          type="text"
          placeholder={'Nom'}
          {...register(inputKeys.name, { required: true })}
        />
        {errors.name && (
          <div className={styles.invalid_text}>
            Veuillez entrer un nom valide.
          </div>
        )}
        <input
          className={cn({
            [styles.invalid]: errors.emailAddress && touchedFields.emailAddress
          })}
          type="text"
          placeholder="E-mail"
          {...register(inputKeys.emailAddress)}
        />
        {errors.emailAddress && (
          <div className={styles.invalid_text}>
            Veuillez entrer une adresse email valide.
          </div>
        )}
        <textarea
          className={cn({
            [styles.invalid]: errors.message && touchedFields.message
          })}
          rows={10}
          placeholder="Message"
          {...register(inputKeys.message)}
        />
        {errors.message && (
          <div className={styles.invalid_text}>
            Veuillez entrer au moins 10 caractères.
          </div>
        )}
        <div className={styles.footer}>
          <button disabled={!isValid} type="submit" className={styles.submit}>
            Envoyer
          </button>
          {message && <div className={styles.sent}>{message}</div>}
        </div>
      </form>
    </div>
  );
}
