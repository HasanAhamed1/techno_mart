import { AnnotationIcon, BriefcaseIcon, PhotographIcon, PlusCircleIcon, PlusIcon, TagIcon, UserIcon } from "@heroicons/react/outline";
import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="grid justify-center m-10">
        <h1 className="my-3 text-3xl font-bold text-red-400">Add New Item:</h1>
        <hr />
        <br />
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center h-12 w-96 border p-5">
              <PhotographIcon className="h-5 w-5 mr-5"></PhotographIcon>
          <input placeholder="Image" {...register("image")} required />
          </div>
          <br />
          <div className="flex items-center h-12 w-96 border p-5">
              <BriefcaseIcon className="h-5 w-5 mr-5"></BriefcaseIcon>
              <input placeholder="Product Name" {...register("productName")} required />
          </div>
          <br />
          <div className="flex items-center h-12 w-96 border p-5">
              <PlusIcon className="h-5 w-5 mr-5"></PlusIcon>
              <input placeholder="Quantity" {...register("quantity")} required />
          </div>
          <br />
          <div className="flex items-center h-12 w-96 border p-5">
              <UserIcon className="h-5 w-5 mr-5"></UserIcon>
              <input placeholder="Supplier Name" {...register("supplierName")} required />
          </div>
          <br />
          <div className="flex items-center h-18 w-96 border p-5">
              <AnnotationIcon className="h-5 w-5 mr-5"></AnnotationIcon>
              <textarea placeholder="Description" {...register("description")} required />
          </div>
          <br />
          <div className="flex items-center h-12 w-96 border p-5">
              <TagIcon className="h-5 w-5 mr-5"></TagIcon>
              <input placeholder="Price" {...register("price")} required />
          </div>
        
        <br />
        <input className="grid justify-items-end border h-10 w-28 bg-red-300 text-white font-bold" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;