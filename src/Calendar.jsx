import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useRef } from "react";

export default function Calendar() {
  const today = new Date();
  const calendarRef = useRef(null);

  const handleDatesSet = (dateInfo) => {
    if (dateInfo.view.currentStart > today) {
      calendarRef.current.getApi().gotoDate(today);
    }
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
      themeSystem="bootstrap"
      headerToolbar={{
        left: "",
        center: "title",
        right: "",
      }}
      footerToolbar={{
        left: "",
        center: "prev,next",
        right: "",
      }}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={true}
      selectable={true}
      dayMaxEvents={true}
      selectMirror={true}
      contentHeight={500}
      aspectRatio={1}
      bootstrapFontAwesome={false}
      datesSet={handleDatesSet} // Handle date changes
    />
  );
}
