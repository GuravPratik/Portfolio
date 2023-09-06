import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;

export default function BasicTimeline() {
  return (
    <div className="border w-full flex flex-col items-center justify-center self-end">
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector style={{ background: "#854CE6" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector style={{ background: "#854CE6" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>Eat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
