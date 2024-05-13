import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { BS, months } from "@/lib/data/calendar";
import { UseFormReturn } from "react-hook-form";
import { Label } from "../ui/label";
type PropsType = {
  form: UseFormReturn<any, any, undefined>;
};

export const NepaliDatePicker = ({ form }: PropsType) => {
  const [monthIndex, setMonthIndex] = useState<undefined | number>(undefined);
  const [year, setYear] = useState<undefined | number>(undefined);
  const [dayInMonth, setDayInMonth] = useState(32);
  const [date, setDate] = useState<undefined | number>(0);

  useEffect(() => {
    if (monthIndex !== undefined && year !== undefined) {
      setDayInMonth(BS[year][monthIndex]);
      if (date) {
        if (BS[year][monthIndex] < date + 1) {
          setDate(0);
        }
      }
    }
    if (monthIndex !== undefined && year !== undefined && date !== undefined) {
      form.setValue("dob", `${year + 2000}-${monthIndex + 1}-${date + 1}`);
      console.log(`${year + 2000}-${monthIndex + 1}-${date + 1}`);
    }
  }, [monthIndex, year, date]);

  return (
    <div className="flex flex-col gap-4">
      <Label>Select Date of Birth</Label>

      <div className="flex gap-x-2">
        {/* year */}

        <select
          onChange={(e) => setYear(Number(e.target.value))}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
        >
          {BS.map((_, index) => {
            return (
              <option key={index} value={String(index)} className="capitalize">
                {index + 2000}
              </option>
            );
          })}
        </select>

        {/* Month */}
        <select
          onChange={(e) => setMonthIndex(Number(e.target.value))}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
        >
          {months.map((month, index) => {
            return (
              <option key={month} value={String(index)}>
                {month}
              </option>
            );
          })}
        </select>

        {/* Year */}
        <Select
          defaultValue={String(date)}
          onValueChange={(e) => {
            setDate(Number(e));
          }}
          value={String(date)}
        >
          <SelectTrigger className="gap-x-2 focus:ring-0  focus:ring-offset-0">
            <SelectValue placeholder=" Day" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: dayInMonth }, (_, index) => {
              return (
                <SelectItem key={index} value={String(index) || "1"}>
                  {index + 1}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
