import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  item: {
    fieldId: string;
    type: string;
    label: string;
    placeholder?: string;
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
            <Label>{item.label}</Label>
            <FormControl>
              <Input
                autoComplete="false"
                {...field}
                type={item.type}
                placeholder={item.placeholder}
              />
            </FormControl>
            <FormMessage className="text-sm font-light" />
          </FormItem>
        );
      }}
    />
  );
};
