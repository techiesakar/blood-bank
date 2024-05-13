import { z } from "zod";
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const FIleType = z
  .instanceof(File, {
    message: "Image must be jpg or jpeg or png",
  })
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, "Image size must be less than 3MB")
  .refine((file) => {
    return (
      !file ||
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    );
  }, "Image must be jpg or jpeg or png");

export const FileWithStringType = z.union([z.string(), FIleType]);
