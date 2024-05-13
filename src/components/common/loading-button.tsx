import { ComponentPropsWithoutRef } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface PropsType extends ComponentPropsWithoutRef<"button"> {
  loadingLabel: string;
  label: string;
  isLoading: boolean;
}

export const LoadingButton = ({
  loadingLabel,
  label,
  isLoading,

  ...props
}: PropsType) => {
  const loadingLabelWidth = `${loadingLabel.length + 6}ch`; // 'ch' unit represents the width of the '0' character in the current font
  return (
    <Button type="submit" {...props} style={{ width: loadingLabelWidth }}>
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
      )}
      {isLoading ? loadingLabel : label}
    </Button>
  );
};
