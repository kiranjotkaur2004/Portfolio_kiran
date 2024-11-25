// src/Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Default styling

const TimelineElements = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Event Title 1</h3>
        <p>Event details go here.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Event Title 2</h3>
        <p>More details about this event.</p>
      </VerticalTimelineElement>
      {/* Add more events as needed */}
    </VerticalTimeline>
  );
};

export default TimelineElements;
