import React from "react";
import { useForm } from "react-hook-form";
import SaveData from './saveData';
import './create.css';

const Create = ({ update }) => {
  const { register, handleSubmit, _, formState: { errors } } = useForm();
  const onSubmit = data => SaveData(data, update);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <h3> Add your own quote. What makes you think? </h3>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="Title" {...register("title", { required: true })} />
      <input defaultValue="Username" {...register("username", { required: true })} />
      <input defaultValue="Quote" {...register("content", { required: true })} />

      {/* errors will return when field validation fails  */}
      <br /> {errors.title && <span>Title is required</span>}

      <br /> {errors.username && <span>Username is required</span>}

      <br /> {errors.content && <span>Content is required</span>}
      <br />

      <input type="submit" />
    </form>
  );
}

export default Create;
