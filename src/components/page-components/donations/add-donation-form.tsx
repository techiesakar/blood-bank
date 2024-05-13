import { InputFormField } from "@/components/common/input-form-field";
import { LoadingButton } from "@/components/common/loading-button";
import { SingleSelectField } from "@/components/common/single-select-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  DonationDefaultValues,
  DonationFormType,
  DonationSchema,
  useDonationFields,
} from "@/lib/schemas/donation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const AddDonationForm = () => {
  const donationFields = useDonationFields();
  const form = useForm({
    resolver: zodResolver(DonationSchema),
    defaultValues: DonationDefaultValues,
  });

  const onSubmit = (values: DonationFormType) => {
    console.log(values);
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="page__title">Add New Donation</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 "
            >
              {donationFields.map((item) => {
                return item.options ? (
                  <SingleSelectField
                    key={item.fieldId}
                    item={item}
                    form={form}
                    values={item.options}
                    defaultValue={item.defaultValue}
                  />
                ) : (
                  <InputFormField key={item.fieldId} item={item} form={form} />
                );
              })}

              <div className="lg:col-span-4 sm:col-span-2 col-span-1 ">
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
