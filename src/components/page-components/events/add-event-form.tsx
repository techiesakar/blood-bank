import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoadingButton } from "@/components/common/loading-button";

import { InputFormField } from "@/components/common/input-form-field";
import { SingleSelectField } from "@/components/common/single-select-field";
import {
  EventDefaultValues,
  EventFields,
  EventSchema,
  EventType,
} from "@/lib/schemas/event-schema";
import { AddressInputField } from "@/components/common/address-input-field";

export const AddEventForm = () => {
  const form = useForm<EventType>({
    resolver: zodResolver(EventSchema),
    defaultValues: EventDefaultValues,
  });

  const { isDirty, isSubmitting } = form.formState;

  const onSubmit = (values: EventType) => {
    console.log(values);
  };
  return (
    <div className="w-full max-w-[720px]">
      <Card>
        <CardHeader>
          <CardTitle>Add New Event</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" grid grid-cols-2 gap-4 "
            >
              {EventFields.map((item) => {
                return item.fieldTag == "input" ? (
                  <div className="lg:col-span-1" key={item.fieldId}>
                    <InputFormField item={item} form={form} />
                  </div>
                ) : item.type == "address" ? (
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

              <div className="sm:col-span-2 col-span-1">
                <LoadingButton
                  disabled={!isDirty || isSubmitting}
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
