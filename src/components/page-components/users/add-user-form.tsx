import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoadingButton } from "@/components/common/loading-button";

import { InputFormField } from "@/components/common/input-form-field";
import {
  UserProfileDefaultValues,
  UserProfileFields,
  UserProfileSchema,
  UserProfileType,
} from "@/lib/schemas/user-profile.schema";
import { SingleSelectField } from "@/components/common/single-select-field";
import { PasswordInputFormField } from "@/components/common/password-input-field";

export const AddUserForm = () => {
  const form = useForm<UserProfileType>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: UserProfileDefaultValues,
  });

  const onSubmit = (values: UserProfileType) => {
    console.log(values);
  };
  return (
    <div className="w-full max-w-[720px]">
      <Card>
        <CardHeader>
          <CardTitle>Add New User</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-2 gap-4 place-content-center items-center"
            >
              {UserProfileFields.map((item) =>
                item.fieldTag == "input" ? (
                  item.type === "password" ? (
                    <PasswordInputFormField
                      key={item.fieldId}
                      item={item}
                      form={form}
                    />
                  ) : (
                    <InputFormField
                      key={item.fieldId}
                      item={item}
                      form={form}
                    />
                  )
                ) : (
                  item.options && (
                    <SingleSelectField
                      key={item.fieldId}
                      item={item}
                      form={form}
                      values={item.options}
                    />
                  )
                )
              )}
              <div className="col-span-2">
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
