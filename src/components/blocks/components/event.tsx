import React from "react";
import {
  PageBlocksEvent,
  PageBlocksEventEventList,
  PageBlocksEventEventListFilter,
} from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";
import Header from "@/components/header";
import Image from "@/components/image";

interface Props {
  data: PageBlocksEvent;
}

const EventCard = ({
  image,
  title,
  description,
  date,
}: PageBlocksEventEventList) => {
  return (
    <div className="shadow-lg w-full max-w-sm flex flex-col rounded-large bg-muted gap-4 justify-between">
      <Image src={image} imageRest={{ alt: "", className: "rounded-md" }} />

      <div className="flex flex-col p-8">
        <span className="text-sm text-muted-foreground">{date}</span>
        <h5 className="text-2xl font-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

function Event({ data }: Props) {
  const { title, description, eventList } = data as PageBlocksEvent;
  return (
    <div className="flex  flex-col gap-4 ">
      {/* Header */}
      <div className="flex flex-col max-w-3xl gap-2">
        <Header text={`${title}`} />
        <RichText content={description} />
      </div>

      {/* EventList */}
      <div className="flex flex-wrap gap-5">
        {eventList?.map((event, idx) => (
          <EventCard {...event} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Event;
