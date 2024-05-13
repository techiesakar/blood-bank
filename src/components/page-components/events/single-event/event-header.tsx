import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EventHeader = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary font-medium text-xl">
          Blood Donation Program
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HUBIT</AvatarFallback>
        </Avatar>
        <div>
          <p>Hosted By</p>
          <p className="text-sm text-muted-foreground">
            Hubit Training & Solutions
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
