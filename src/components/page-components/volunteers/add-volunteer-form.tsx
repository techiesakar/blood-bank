import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoadingButton } from "@/components/common/loading-button";

import { InputFormField } from "@/components/common/input-form-field";
import { SingleSelectField } from "@/components/common/single-select-field";
import { PasswordInputFormField } from "@/components/common/password-input-field";
import {
  VolunteerProfileDefaultValues,
  VolunteerProfileFields,
  VolunteerProfileSchema,
  VolunteerProfileType,
} from "@/lib/schemas/volunteer-profile.schema";
import { ProfileUpload } from "@/components/common/profile-upload";
import { AddressInputField } from "@/components/common/address-input-field";

export const AddVolunteerForm = () => {
  const form = useForm<VolunteerProfileType>({
    resolver: zodResolver(VolunteerProfileSchema),
    defaultValues: VolunteerProfileDefaultValues,
  });

  const onSubmit = (values: VolunteerProfileType) => {
    console.log(values);
  };
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="page__title">Add New Volunteer</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-12 gap-4 "
            >
              {VolunteerProfileFields.map((item) => {
                return item.fieldTag == "input" ? (
                  item.type === "password" ? (
                    <div
                      key={item.fieldId}
                      className="lg:col-span-4 sm:col-span-6 col-span-12 xl:col-span-3"
                    >
                      <PasswordInputFormField
                        key={item.fieldId}
                        item={item}
                        form={form}
                      />
                    </div>
                  ) : item.type === "file" ? (
                    <div
                      key={item.fieldId}
                      className="col-span-12 flex items-center justify-center"
                    >
                      <ProfileUpload
                        fieldId={item.fieldId}
                        setValue={form.setValue}
                        values={form.getValues("profileImage")}
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
