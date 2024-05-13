import { KeyboardEvent, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Label } from "../ui/label";
type PropsType = {
  form: UseFormReturn<any, any, undefined>;
};

export const NepaliDateInput = ({ form }: PropsType) => {
  const [year, setYear] = useState("");
  const [day, setDate] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    form.setValue("dob", `${year}-${month}-${day}`);
  }, [year, day, month]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Get the typed character
    const typedChar = e.key;

    // Regular expression patterns for year, month, and day
    const yearPattern = /^\d{1,4}$/;
    const monthPattern = /^(0[1-9]|1[0-2])?$|^([1-9])?$/; // Updated month pattern
    const dayPattern = /^(0?[1-9]|[12]\d|3[01])$/;

    // Determine the current input field based on the cursor position
    const inputField = e.currentTarget;

    // Allow tab key to navigate between input fields
    if (typedChar === "Tab") return;

    // Allow backspace
    if (typedChar === "Backspace") return;

    // Check if the typed character is a digit
    if (!/\d/.test(typedChar)) {
      e.preventDefault();
      return;
    }

    // Get the current value of the input field
    const value = inputField.value;

    // Concatenate the typed character with the current value of the input field
    const newValue = value + typedChar;

    // Check which input field is being typed and its corresponding pattern
    let pattern;
    switch (inputField.placeholder) {
      case "YYYY":
        pattern = yearPattern;
        break;
      case "MM":
        pattern = monthPattern;
        break;
      case "DD":
        pattern = dayPattern;
        break;
      default:
        pattern = null;
    }

    // If the typed character does not match the pattern or the year exceeds 4 digits, prevent typing
    if (
      (pattern && !pattern.test(newValue)) ||
      (inputField.placeholder === "YYYY" && newValue.length > 4)
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>Birth Date</Label>
      <div className=" w-full border ">
        <input
          onChange={(e) => setYear(e.target.value)}
          placeholder="YYYY"
          className="w-[7ch] text-sm focus:outline-none  px-3 py-2 "
          type="text"
          onKeyDown={handleKeyDown}
          required
          aria-required
        />
        <span className="text-sm text-gray-500">/</span>
        <input
          onChange={(e) => setMonth(e.target.value)}
          placeholder="MM"
          className="w-[5ch] focus:outline-none px-3 py-2 "
          type="text"
          onKeyDown={handleKeyDown}
          required
          aria-required
        />
        <span className="text-sm text-gray-500">/</span>

        <input
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD"
          className="w-[5ch] focus:outline-none px-3 py-2 "
          type="text"
          onKeyDown={handleKeyDown}
          required
          aria-required
        />
      </div>
    </div>
  );
};
