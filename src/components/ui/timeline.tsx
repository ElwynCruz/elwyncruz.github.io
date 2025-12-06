import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./badge";
import { ChevronDown } from "lucide-react";
import { RenderMarkdown } from "./render-markdown";

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={className} {...props} />;
});
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onToggle?: () => void;
  expandable?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, onToggle, expandable, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative pb-8 pl-8 sm:pl-44",
          expandable && "cursor-pointer group",
          className,
        )}
        onClick={expandable ? onToggle : undefined}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TimelineItem.displayName = "TimelineItem";

interface TimelineHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isLast: boolean;
}

const TimelineHeader = React.forwardRef<HTMLDivElement, TimelineHeaderProps>(
  ({ className, isLast, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-1 flex flex-col items-start",
          "before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300",
          "after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground",
          "group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-40 sm:after:left-0 sm:after:ml-40",
          !isLast && "before:px-px",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TimelineHeader.displayName = "TimelineHeader";

type TimelineExpandProps = {
  isExpanded: boolean;
  classNames?: string;
};

const TimelineExpand = ({ isExpanded, classNames }: TimelineExpandProps) => {
  return (
    <ChevronDown
      className={cn(
        "my-auto ml-2 h-4 w-4 text-muted-foreground opacity-60 transition-all duration-200",
        isExpanded && "rotate-180 opacity-80",
        "group-hover:opacity-100",
        classNames,
      )}
    />
  );
};

TimelineExpand.displayName = "TimelineExpand";

interface TimelineTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  expandable?: boolean;
}

const TimelineTitle = React.forwardRef<
  HTMLParagraphElement,
  TimelineTitleProps
>(({ className, expandable, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-xl w-fit font-bold text-text transition-all duration-200",
      expandable && "group-hover:underline",
      className,
    )}
    {...props}
  />
));

TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = ({
  className,
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge
      className={cn(
        "left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center",
        "text-xs font-semibold uppercase sm:absolute sm:mb-0",
        className,
      )}
      {...props}
    />
  );
};

TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
});

TimelineDescription.displayName = "TimelineDescription";

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean;
  content: string;
}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, isExpanded, content, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          "pt-2 pb-4 pl-4 ml-2 text-text-800 leading-relaxed whitespace-pre-wrap",
          isExpanded ? "max-h-100 opacity-100 mt-4" : "max-h-0 opacity-0",
          className,
        )}
        {...props}
      >
        <RenderMarkdown content={content} />
      </div>
    );
  },
);

TimelineContent.displayName = "TimelineContent";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineTime,
  TimelineExpand,
  TimelineDescription,
  TimelineContent,
};
