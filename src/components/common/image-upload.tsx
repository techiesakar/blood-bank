import { cn } from "@/lib/utils/tailwind-utils";
import { ChangeEvent } from "react";
import { CiTrash } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";

type PropsType = {
  setValue: any;
  values: any;
  label?: string;
  fieldId: string;
  require?: boolean;
  className?: string;
};

export const ImageUpload = ({
  label,
  require,
  fieldId,
  setValue,
  values,
  className,
}: PropsType) => {
  return (
    <div
      className={cn(
        "flex gap-4 items-center justify-center flex-col w-full border p-4 min-h-[100px] rounded-xl relative",
        className
      )}
    >
      {(values instanceof File ||
        (typeof values == "string" && values.trim() !== "")) &&
      (values !== undefined || values !== null) ? (
        <div className="flex items-center justify-center gap-3  w-full">
          {values instanceof File && (
            <img
              src={URL.createObjectURL(values)}
              className="rounded w-auto max-h-[180px]"
              width={500}
              height={500}
              alt="image"
            />
          )}

          {typeof values == "string" && values.length > 5 && (
            <img
              src={`${import.meta.env.VITE_REACT_APP_API_URL}/${values}`}
              className="max-h-32  rounded w-auto"
              width={500}
              height={500}
              alt="image"
            />
          )}

          <span
            onClick={(e) => {
              e.preventDefault();
              const fileInput = document.getElementById(
                fieldId
              ) as HTMLInputElement;
              if (fileInput !== null) {
                fileInput.value = "";
              }
              setValue(fieldId, [], {
                shouldValidate: true,
              });
            }}
            className="text-red-500 cursor-pointer text-xl absolute top-6 right-6"
          >
            {" "}
            <CiTrash />
          </span>
        </div>
      ) : (
        <label
          htmlFor={fieldId}
          className=" w-full px-4 py-3  transition   flex items-center justify-center gap-3 cursor-pointer  text-uppercase"
        >
          <IoCloudUploadOutline />
          <span className="text-sm font-medium">
            {" "}
            {label} {require && <span className="text-red-500">*</span>}
          </span>
        </label>
      )}
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setValue(fieldId, file, {
              shouldValidate: true,
            });
          }
        }}
        id={fieldId}
        type="file"
        name={fieldId}
        className="hidden"
      />
    </div>
  );
};
