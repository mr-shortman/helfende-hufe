import React from "react";
import {
  PageBlocksEvent,
  PageBlocksEventEventList,
  PageBlocksEventEventListFilter,
} from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";
import Header from "@/components/header";
import ImageComponent from "@/components/image";
import { tinaField } from "tinacms/dist/react";

interface Props {
  data: PageBlocksEvent;
}

const EventCard = (props: PageBlocksEventEventList) => {
  const { image, title, description, date } = props;
  return (
    <div className="shadow-lg w-full max-w-sm flex flex-col rounded-large bg-muted gap-4 justify-between">
      <div data-tina-field={tinaField(props, "image")}>
        <ImageComponent src={image} imageRest={{ className: "rounded-md" }} />
      </div>

      <div className="flex flex-col p-8">
        <span
          className="text-sm text-muted-foreground"
          data-tina-field={tinaField(props, "date")}
        >
          {date}
        </span>
        <h5
          className="text-2xl font-bold"
          data-tina-field={tinaField(props, "title")}
        >
          {title}
        </h5>
        <p data-tina-field={tinaField(props, "description")}>{description}</p>
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
        <div data-tina-field={tinaField(data, "title")}>
          <Header text={`${title}`} />
        </div>
        <div data-tina-field={tinaField(data, "description")}>
          <RichText content={description} />
        </div>
      </div>

      {/* EventList */}
      <div className="w-full flex flex-wrap gap-4 lg:gap-10 ">
        {eventList?.map((event, idx) => (
          <EventCard {...event} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Event;
