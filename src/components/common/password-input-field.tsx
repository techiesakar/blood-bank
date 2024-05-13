import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { PasswordInput } from "./password-input";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  item: {
    fieldId: string;
    type: string;
    label: string;
    placeholder?: string;
  };
};

export const PasswordInputFormField = ({ form, item }: PropsType) => {
  return (
    <FormField
      key={item.fieldId}
      control={form.control}
      name={item.fieldId}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{item.label}</FormLabel>
            <FormControl>
              <PasswordInput
                {...field}
                placeholder={item.placeholder || "Enter password"}
              />
            </FormControl>
            <FormMessage className="text-sm font-light" />
          </FormItem>
        );
      }}
    />
  );
};
