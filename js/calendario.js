document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid', 'list', 'interaction' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listWeek'
      },   
      defaultView: 'timeGridWeek',
      locale: 'es',
      nowIndicator: true,
      allDaySlot: false,
      minTime: "07:00:00",
      defaultDate: '2019-08-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Long Event',
          start: '2019-08-07',
          end: '2019-08-10'
        },
        {
          groupId: 999,
          title: 'Bailes de Fornai',
          start: '2019-08-09T12:00:00'
        },
        {
          groupId: 999,
          title: 'Bailes de Fornai',
          start: '2019-08-16T12:00:00',
          end: '2019-08-16T13:30:00'
        },
        {
          title: 'Meeting',
          start: '2019-08-12T10:30:00',
          end: '2019-08-12T13:30:00'
        },
        {
          title: 'Control de la vida',
          start: '2019-08-15T08:30:00',
          end: '2019-08-15T13:30:00'
        },        
        {
          title: 'Control de ISW',
          start: '2019-08-14T14:30:00',
          end: '2019-08-14T16:30:00'
        },        
        {
          title: 'Almuerzo',
          start: '2019-08-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-08-12T14:30:00'
        },
        {
          title: 'Fornai',
          start: '2019-08-12T17:30:00'
        },
        {
          title: 'Cena',
          start: '2019-08-12T20:00:00'
        },
        {
          title: 'Matar creeper',
          start: '2019-08-13T13:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-08-28'
        }
      ]
    });

    calendar.render();
  });