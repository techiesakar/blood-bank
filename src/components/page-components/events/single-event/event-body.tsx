import { fakeEvent } from "@/lib/data/fake-event";
import BannerImage from "@/assets/eventBanner.webp";
export const EventBody = () => {
  return (
    <div className="prose min-w-full mt-6">
      <img src={BannerImage} alt="" />
      <div dangerouslySetInnerHTML={{ __html: fakeEvent.content }} />
    </div>
  );
};
