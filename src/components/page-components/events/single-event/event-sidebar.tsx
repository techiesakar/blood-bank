import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

export const EventSidebar = () => {
  return (
    <div className="space-y-4 sticky top-0">
      <Card>
        <CardContent className="flex flex-col gap-1 p-4">
          <h2 className="text-lg font-medium">Organizer</h2>
          <p className="text-sm text-muted-foreground">
            HubIT Training and Solution
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-1 p-4">
          <div className="flex items-center jb gap-4">
            <Clock className="size-6 text-muted-foreground" />
            <div className="text-muted-foreground text-sm space-y-3">
              <p>Saturday, May 11, 2024</p>
              <p>7:00 PM to 9:00 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-1 p-4">
          <div className="flex items-center jb gap-4">
            <MapPin className="size-6 text-muted-foreground" />
            <div className="text-muted-foreground text-sm space-y-3">
              <p>Butwal-11, MilanChowk</p>
              <p>GaneshPath</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-1 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8580085693084!2d83.4618006760785!3d27.69078312622069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868839e2a553%3A0x1194302b35728cbf!2sHUB%20IT%20TRAINING%20%26%20SOLUTION%20(Computer%20Institute)!5e0!3m2!1sen!2snp!4v1715329891931!5m2!1sen!2snp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
};
