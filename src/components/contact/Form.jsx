"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000, // can't send more than 1 email per 5 seconds
          }
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
      to_name: "CodeBucks",
      from_name: data.name,
      reply_to: data.email,
      message: data.message
    }
    sendEmail(templateParams)
  }

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
      <input type="text" placeholder="name" {...register("name", {required: true, maxLength: 80})} 
      className="w-full p-3 rounded-md shadow-ld text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"/>
      <input type="text" placeholder="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
      className="w-full p-3 rounded-md shadow-ld text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"/>
      <textarea placeholder="message" {...register("message", {required: true, max: 256, min: 50})} 
      className="w-full p-3 rounded-md shadow-ld text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"/>

      <input value="Cast Your Message!"
       className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize" type="submit" />
    </form>
  );
}