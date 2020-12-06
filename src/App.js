import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const App = () => {
  
  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/loadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  return (
      <ScheduleComponent selectedDate={new Date(2017,5,5)} eventSettings={{ dataSource: remoteData }}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }

export default App;
