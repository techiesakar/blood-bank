import { cn } from "@/lib/utils/tailwind-utils";
import { ChangeEvent } from "react";
import { FaTrash } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";

type PropsType = {
  setValue: any;
  values: any;
  label?: string;
  fieldId: string;
  require?: boolean;
  className?: string;
};

export const ProfileUpload = ({
  fieldId,
  setValue,
  values,
  className,
}: PropsType) => {
  return (
    <div
      className={cn(
        "flex gap-4 items-center justify-center flex-col w-full border size-[160px] rounded-full relative",
        className
      )}
    >
      {(values instanceof File ||
        (typeof values == "string" && values.trim() !== "")) &&
      (values !== undefined || values !== null) ? (
        <div className="flex items-center justify-center gap-3  w-full h-full relative">
          {values instanceof File && (
            <img
              src={URL.createObjectURL(values)}
              className="size-[150px] rounded-full max-w-full"
              width={150}
              height={150}
              alt="image"
            />
          )}

          {typeof values == "string" && values.length > 5 && (
            <img
              src={`${import.meta.env.VITE_REACT_APP_API_URL}/${values}`}
              className="size-[150px] rounded-full max-w-full"
              width={150}
              height={150}
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
            className="text-red-500  cursor-pointer text-xl w-full group h-full hover:bg-gray-800/30 duration-300 ease-linear rounded-full absolute"
          >
            <FaTrash className="absolute top-1/2 right-1/2 invisible group-hover:visible text-red-500 size-6 -translate-y-1/2 translate-x-1/2" />
          </span>
        </div>
      ) : (
        <label
          htmlFor={fieldId}
          className=" w-full px-4 py-3  transition   flex items-center justify-center gap-3 cursor-pointer  text-uppercase"
        >
          <IoCloudUploadOutline className="size-6" />
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
