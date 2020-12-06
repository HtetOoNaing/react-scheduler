import { useState } from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const App = () => {
  const [localData, setLocalData] = useState([{
    Id: 1,
    Subject: 'Scrum Meeting 1',
    StartTime: new Date(2020, 12, 5, 10, 0),
    EndTime: new Date(2020, 12, 5, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
    RecurrenceException: '20180130T043000Z',
    IsReadonly:true
  },
  {
      Id: 2,
      Subject: 'Scrum Meeting 2',
      StartTime: new Date(2020, 12, 5, 9, 0),
      EndTime: new Date(2020, 12, 5, 10, 30),
      Description: "Meeting time changed based on team activities.",
      RecurrenceID: 1,
      IsBlock: true
  }]);

  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  return (
      <ScheduleComponent height="550px" selectedDate={new Date(2017, 5, 5)} eventSettings={{ dataSource: remoteData }}>
        <ViewsDirective>
          <ViewDirective option='Day' startHour="09:00" endHour="18:00" interval={3} displayName="3 Days"></ViewDirective>
          <ViewDirective option='Week' startHour="09:00" endHour="18:00"></ViewDirective>
          <ViewDirective option='Month' isSelected={true} showWeekNumber={true} showWeekend={false}></ViewDirective>
          <ViewDirective option='TimelineDay'></ViewDirective>
          <ViewDirective option='TimelineMonth'></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth]} />
      </ScheduleComponent>
    );
  }

export default App;
