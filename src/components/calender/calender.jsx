import React from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);


let Schedule = props => {

  return (
    <div style={{backgroundColor: "white"}}>
    <BigCalendar
      selectable
      events={[]}
      defaultView="week"
      min={new Date()}
      scrollToTime={new Date()}
      defaultDate={new Date()}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={slotInfo => 
        props.selectTime(slotInfo.start,slotInfo.end)
      }
    />
    </div>
  );
    
}


//====================== REDUX CONNECTION =========================
export default Schedule;
