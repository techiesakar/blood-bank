import * as React from "react";

import { cn } from "@/lib/utils/tailwind-utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative h-10 w-full">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {!showPassword ? (
          <EyeOff
            onClick={() => setShowPassword(true)}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 z-1000 cursor-pointer"
          />
        ) : (
          <Eye
            onClick={() => setShowPassword(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-5 z-1000 cursor-pointer"
          />
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
