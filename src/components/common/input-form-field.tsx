import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  item: {
    fieldId: string;
    type: string;
    label: string;
    placeholder: string;
  };
};

export const InputFormField = ({ form, item }: PropsType) => {
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
              <Input
                {...field}
                type={item.type}
                placeholder={item.placeholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
