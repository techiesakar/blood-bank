import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

import { useEffect, useState } from "react";
import { Countries } from "@/lib/data/countries";
import { Label } from "../ui/label";
import { allLocations } from "@/lib/data/location";

type PropsType = {
  form: UseFormReturn<any, any, undefined>;
  item: {
    label: string;
    placeholder?: string;
  };
};

type DistrictType = {
  name: string;
  municipals: string[];
};

export const AddressInputField = ({ form }: PropsType) => {
  const watchCountry = form.watch("country");
  const watchProvince = form.watch("province");

  const watchDistrict = form.watch("district"); // you can also target specific fields by their names

  const [districts, setDistricts] = useState<DistrictType[]>([]);
  const [municipals, setMunicipals] = useState<string[]>([]);

  useEffect(() => {
    form.resetField("district");
    form.resetField("province");
    form.resetField("municipality");
  }, [watchCountry]);

  useEffect(() => {
    const province = form.getValues("province");
    const district = form.getValues("district");

    const currentDistricts = allLocations.find(
      (location) => location.province === province
    )?.districts;

    if (currentDistricts) {
      setDistricts(currentDistricts);

      const currentMunicipals = currentDistricts.find(
        (item) => item.name === district
      );
      if (currentMunicipals) {
        setMunicipals(currentMunicipals.municipals);
      }
    }
  }, [watchProvince, watchDistrict]);

  useEffect(() => {}, [watchCountry]);

  useEffect(() => {
    form.resetField("district");
    form.resetField("municipality");
  }, [watchProvince]);

  useEffect(() => {
    form.resetField("municipality");
  }, [watchDistrict]);

  return (
    <>
      <FormField
        key="country"
        name="country"
        control={form.control}
        render={({}) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>Country</Label>
              <select
                defaultValue={"Nepal"}
                onChange={(e) => form.setValue("country", e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
              >
                {Object.values(Countries).map((value) => {
                  return (
                    <option key={value} value={value} className="capitalize">
                      {value}
                    </option>
                  );
                })}
              </select>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        key="province"
        name="province"
        control={form.control}
        render={({}) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>Province</Label>

              <select
                defaultValue={""}
                onChange={(e) => form.setValue("province", e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
              >
                <option value="">Select Province</option>
                {allLocations.map((item) => {
                  return (
                    <option key={item.province} value={item.province}>
                      {item.province}
                    </option>
                  );
                })}
              </select>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        key="district"
        name="district"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>District</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <select
                    defaultValue={""}
                    onChange={(e) => form.setValue("district", e.target.value)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
                  >
                    <option value="">Select District</option>

                    {districts?.map((item) => {
                      return (
                        <option value={item.name} key={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </FormControl>
              </Select>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        key="municipality"
        name="municipality"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>District</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <select
                    defaultValue={""}
                    onChange={(e) =>
                      form.setValue("municipality", e.target.value)
                    }
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
                  >
                    <option value="">Select District</option>

                    {municipals?.map((item) => {
                      return (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </FormControl>
              </Select>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        key="street"
        name="street"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>Street Address</Label>
              <FormControl>
                <Input {...field} placeholder="Street Address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        key="ward"
        name="ward"
        control={form.control}
        render={({ field }) => {
          return (
            <FormItem className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
              <Label>Ward Number</Label>
              <FormControl>
                <Input {...field} type="number" placeholder="Ward Number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
};
