import React from "react";
import Text from "../atoms/text/text";
import { EventCard } from "../molecules/event_card";
import Flex, { FlexItem } from "../atoms/flex/flex";
import defaultLogo from "../../../assets/logo.png";
import "./event_section.css";

const EventSection = ({ events, isUpcoming }) => {
  let sectionTitle = "Upcoming Events";
  if (isUpcoming === false) {
    sectionTitle = "Past Events";
  }
  return (
    <div className="sectionFlex">
      <Flex>
        <div className="headingFlex">
          <Text text={sectionTitle} type="heading" />
        </div>
        {events.map(({ name, start, logo, url, id, description }) => {
          const maxChar = 200;
          if (description.text.length > maxChar) {
            description.text = description.text.substring(0, maxChar);
            description.text =
              description.text.substring(
                0,
                Math.min(
                  description.text.length,
                  description.text.lastIndexOf(" ")
                )
              ) + " . . .";
          }
          return (
            <FlexItem key={id}>
              <EventCard
                name={name ? name.text : "Young Masterbuilders In Motion Event"}
                start={start ? start.local : "TBA"}
                logo={logo ? logo.url : defaultLogo}
                url={url}
                description={description.text ? description.text : ""}
              />
            </FlexItem>
          );
        })}
      </Flex>
    </div>
  );
};

export default EventSection;
