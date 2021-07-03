import React from 'react'
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

//npm install https://npm.mobiscroll.com/@mobiscroll/react-trial/-/react-trial-5.6.0.tgz --save --registry=https://npm.mobiscroll.com
import getBookedToCalender from '../services/getBookedToCal'

function BookedCalender(props) {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        // getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
        //     setEvents(events);
        // }, 'jsonp');
        async function fetchEvents() {
            let dates = await getBookedToCalender(props.roomID)
            setEvents(dates)
        }
        fetchEvents()
        
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);

    const view = React.useMemo(() => {
        return {
            calendar: { popover: true, count: true }
        };
    }, []);


    return (
        <div>
            <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
        </div>
    )
}

export default BookedCalender
