import React from "react";
import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import moment from "moment-timezone";

//npm install https://npm.mobiscroll.com/@mobiscroll/react-trial/-/react-trial-5.6.0.tgz --save --registry=https://npm.mobiscroll.com
import getBookingsToCalender from "../services/getBookingDatesToCalender";

let momentTimezone = moment.momentTimezone;

function BookingsCalender() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    // getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
    //     setEvents(events);
    // }, 'jsonp');
    async function fetchEvents() {
      let dates = await getBookingsToCalender();
      setEvents(dates);
    }
    fetchEvents();
  }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { popover: true, count: true },
    };
  }, []);

  return (
    <div className="container">
      <Eventcalendar
        theme="ios"
        themeVariant="dark"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
        dataTimezone="utc"
        displayTimezone="local"
        timezonePlugin={momentTimezone}
      />
    </div>
  );
}

export default BookingsCalender;
