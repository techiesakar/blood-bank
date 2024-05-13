import { InputFormField } from "@/components/common/input-form-field";
import { PasswordInputFormField } from "@/components/common/password-input-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  LoginFields,
  LoginFormSchema,
  LoginType,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FloatingLogo } from "./floating-logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/hoc/auth-provider";
import { useEffect } from "react";
import { useAxios } from "@/hooks/useAxios";

export const SignInForm = () => {
  const { persist, setPersist } = useAuth();
  const axiosInstance = useAxios();

  console.log(setPersist);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/overview";

  const { setAuth } = useAuth();
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginType) => {
    const res = await axiosInstance.post("/auth/login", values, {
      withCredentials: true,
    });
    if (res.data) {
      console.log(res.data, "hey data");
      setAuth({
        name: res?.data?.payload?.name,
        email: res?.data?.payload?.email,
        role: res?.data?.payload?.role,
        accessToken: res.data?.accesToken,
        // refreshToken: res?.data?.refreshToken,
      });
      navigate(from, { replace: true });
    }
    console.log(values);
  };

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };

  useEffect(() => {
    localStorage.setItem("persist", `${persist}`);
  }, [persist]);

  return (
    <div className=" lg:col-span-1 col-span-2 max-w-[520px] w-full">
      <Card className="relative">
        <CardHeader>
          <CardTitle className="text-primary text-center mt-10">
            <span>Sign in Your Account</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              {LoginFields.map((item) => {
                return item.type === "password" ? (
                  <PasswordInputFormField
                    key={item.fieldId}
                    item={item}
                    form={form}
                  />
                ) : (
                  <InputFormField key={item.fieldId} item={item} form={form} />
                );
              })}
              <div>
                <Link
                  to={"/forget-password"}
                  className="text-sm hover:text-primary"
                >
                  Forget Password?{" "}
                </Link>
              </div>
              <div>
                <Button className="w-full">Login In</Button>
              </div>
            </form>
          </Form>
          <FloatingLogo />
        </CardContent>
      </Card>
    </div>
  );
};
