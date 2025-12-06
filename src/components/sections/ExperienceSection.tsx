"use client";

import { useState } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineExpand,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "../ui/timeline";
import { SectionHeader, SectionSubheader } from "./Headers";
import { timelineData } from "@/constants/timelineData";
import { SectionContainer } from "./SectionContainer";

export default function ExperienceSection() {
  const [expandedItem, setExpandedItem] = useState<string>();

  const toggleItem = (slug: string) => {
    if (expandedItem === slug) {
      setExpandedItem(undefined);
    } else {
      setExpandedItem(slug);
    }
  };

  return (
    <SectionContainer id="experience" className="text-left pt-16">
      <SectionHeader>Experience</SectionHeader>
      <SectionSubheader>A quick look at how I got here</SectionSubheader>
      <Timeline>
        {timelineData.map((entry, index) => {
          const isExpanded = expandedItem === entry.slug;
          const hasDescription = Boolean(
            entry.description && entry.description.trim() !== "",
          );

          return (
            <TimelineItem
              key={entry.slug}
              onToggle={() => hasDescription && toggleItem(entry.slug)}
              expandable={hasDescription}
            >
              <TimelineHeader isLast={index === timelineData.length - 1}>
                <div className="flex">
                  <TimelineTime>{entry.displayDate}</TimelineTime>
                  <TimelineExpand
                    isExpanded={isExpanded}
                    classNames="sm:hidden my-0 h-6 w-6"
                  />
                </div>
                <TimelineTitle expandable={hasDescription}>
                  {entry.title}
                </TimelineTitle>
                <TimelineExpand
                  isExpanded={isExpanded}
                  classNames="hidden sm:block"
                />
              </TimelineHeader>
              <TimelineDescription>{entry.subheader}</TimelineDescription>
              {hasDescription && (
                <TimelineContent
                  content={entry.description}
                  isExpanded={isExpanded}
                />
              )}
            </TimelineItem>
          );
        })}
      </Timeline>
    </SectionContainer>
  );
}
