import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { LoadingButton } from "@/components/common/loading-button";
import { InputFormField } from "@/components/common/input-form-field";
import { SingleSelectField } from "@/components/common/single-select-field";
import { ProfileUpload } from "@/components/common/profile-upload";
import { AddressInputField } from "@/components/common/address-input-field";
import { NepaliDatePicker } from "@/components/common/nepali-date-picker";

import {
  DonorProfileDefaultValues,
  DonorProfileFields,
  DonorProfileSchema,
  DonorProfileType,
} from "@/lib/schemas/donor-profile.schema";

import { ErrorMessage } from "@hookform/error-message";
import { usePost } from "@/hooks/queryFn";
import { getEnglishDate } from "@/lib/utils/date-utils";

export const AddDonorForm = () => {
  const form = useForm<DonorProfileType>({
    resolver: zodResolver(DonorProfileSchema),
    defaultValues: DonorProfileDefaultValues,
  });

  const mutation = usePost<FormData>("/donors", "post");

  const onSubmit = async (values: DonorProfileType) => {
    const formData = new FormData();
    Object.keys(values).map((key) => {
      if (key == "image") {
        formData.append("image", values.image);
      } else if (key == "dob") {
        const date = getEnglishDate(values.dob);
        formData.append("dob", new Date(date).toISOString());
      } else {
        formData.append(key, values[key as keyof typeof form.getValues]);
      }
    });

    (await mutation).mutate(formData);
  };
  useEffect(() => {
    form.getValues("dob");
    // console.log(form.formState.errors);
  }, [form.watch()]);

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="page__title">Add New Donor</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-12 gap-4 "
            >
              {DonorProfileFields.map((item) => {
                return item.fieldTag == "input" ? (
                  item.type === "file" ? (
                    <div
                      key={item.fieldId}
                      className="col-span-12 flex items-center justify-center"
                    >
                      <ProfileUpload
                        fieldId={item.fieldId}
                        setValue={form.setValue}
                        values={form.getValues("image")}
                      />
                    </div>
                  ) : (
                    <div
                      key={item.fieldId}
                      className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3"
                    >
                      <InputFormField item={item} form={form} />
                    </div>
                  )
                ) : item.type === "address" ? (
                  <AddressInputField
                    key={item.fieldId}
                    item={item}
                    form={form}
                  />
                ) : (
                  item.options && (
                    <div
                      key={item.fieldId}
                      className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3"
                    >
                      <SingleSelectField
                        item={item}
                        form={form}
                        values={item.options}
                      />
                    </div>
                  )
                );
              })}

              <div className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3">
                <NepaliDatePicker form={form} />
                <span className="text-red-500 text-sm">
                  <ErrorMessage errors={form.formState.errors} name="dob" />
                </span>
              </div>

              <div className="col-span-12">
                <LoadingButton
                  isLoading={false}
                  loadingLabel="Please wait"
                  label="Submit"
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
