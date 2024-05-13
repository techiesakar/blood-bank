import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  values: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  showClear?: boolean;

  item: {
    fieldId: string;
    label: string;
    placeholder?: string;
  };
};

export const SingleSelectField = ({
  form,
  item,
  values,
  defaultValue,
}: PropsType) => {
  return (
    <FormField
      key={item.fieldId}
      control={form.control}
      name={item.fieldId}
      render={({ field }) => {
        return (
          <FormItem>
            <Label>{item.label}</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="capitalize">
                  <SelectValue
                    placeholder={item.placeholder}
                    className="uppercase"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent defaultValue={defaultValue}>
                {values.map((val, i) => {
                  return (
                    <SelectItem
                      key={i}
                      value={val.value}
                      className="capitalize"
                    >
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
