import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

import { LoadingButton } from "@/components/common/loading-button";

import { InputFormField } from "@/components/common/input-form-field";
import { SingleSelectField } from "@/components/common/single-select-field";
import {
  OrganizationProfileDefaultValues,
  // OrganizationProfileDefaultValues,
  OrganizationProfileFields,
  OrganizationProfileSchema,
  // OrganizationProfileSchema,
  OrganizationProfileType,
} from "@/lib/schemas/organization-profile.schema";
import { ProfileUpload } from "@/components/common/profile-upload";
import { AddressInputField } from "@/components/common/address-input-field";
import { usePost } from "@/hooks/queryFn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export const AddOrganizationForm = () => {
  const form = useForm<OrganizationProfileType>({
    resolver: zodResolver(OrganizationProfileSchema),
    defaultValues: OrganizationProfileDefaultValues,
  });
  const mutation = usePost<FormData>("/organizations", "post");
  useEffect(() => {
    console.log(form.formState.errors);
  });

  const onSubmit = async (values: OrganizationProfileType) => {
    const formData = new FormData();

    Object.keys(values).map((key) => {
      if (key == "logo") {
        formData.append("logo", values.logo);
      } else {
        formData.append(key, values[key as keyof typeof form.getValues]);
      }
    });
    (await mutation).mutate(formData);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="page__title ">Add New Organization</CardTitle>
        </CardHeader>
        <CardContent className="py-4 pb-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-12 gap-4 "
            >
              {OrganizationProfileFields.map((item) =>
                item.fieldTag == "input" ? (
                  item.type === "file" ? (
                    <div
                      key={item.fieldId}
                      className="col-span-12 flex items-center justify-center"
                    >
                      <ProfileUpload
                        fieldId={item.fieldId}
                        setValue={form.setValue}
                        values={form.getValues("logo")}
                      />
                    </div>
                  ) : (
                    <div
                      key={item.fieldId}
                      className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3"
                    >
                      <InputFormField
                        key={item.fieldId}
                        item={item}
                        form={form}
                      />
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
                        key={item.fieldId}
                        item={item}
                        form={form}
                        values={item.options}
                      />
                    </div>
                  )
                )
              )}
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
