"use client";

import { createBoard } from "@/actions";

import { useAction } from "@/hooks";
import { FormInput, FormSubmit } from "@/components/form";

export function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.error(error, "ERROR!");
    },
  });

  function onSubmit(formData: FormData) {
    const title = formData.get("title") as string;

    console.log({ title });

    execute({ title });
  }

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
}
