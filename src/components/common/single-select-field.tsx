import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  values: {
    value: string;
    label: string;
  }[];

  item: {
    fieldId: string;
    label: string;
    placeholder: string;
  };
};

export const SingleSelectField = ({ form, item, values }: PropsType) => {
  return (
    <FormField
      key={item.fieldId}
      control={form.control}
      name={item.fieldId}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{item.label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={item.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {values.map((val, i) => {
                  return (
                    <SelectItem key={i} value={val.value}>
                      {val.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
