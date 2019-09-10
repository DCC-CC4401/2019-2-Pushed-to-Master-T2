// Author: Pushed To Master

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid', 'list', 'interaction' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,dayGridMonth,timeGridDay,listWeek'
      },   
      defaultView: 'timeGridWeek',
      locale: 'es',
      // Al clickear un evento muestro la ficha correspondiente
      eventClick:  function(event, jsEvent, view) {
          $('#modalTitle').html(event.title);
          $('#modalBody').html(event.description);
          $('#eventUrl').attr('href',event.url);
          $('#calendarModal').modal();
      },     
      // Ejecuto el modal-menu para agregar una actividad
      dateClick: function(date, jsEvent, view) {
          $("#actividad").modal("show");
          },

      selectable: true,    
      // Multiples selecciones    
      // select: function (start, end, jsEvent, view) {
      //     $("#calendar").fullCalendar('addEventSource', [{
      //         start: start,
      //         end: end,  
      //         rendering: 'background',
      //         block: true,
      //     }, ]);
      //     $("#calendar").fullCalendar("unselect");   
      // },
      //Admito solapamiento de selecciones
      selectOverlap: function(event) {
      return ! event.block;
      },

      nowIndicator: true,
      allDaySlot: false,
      minTime: "07:00:00",
      defaultDate: '2019-08-12',
      navLinks: true, // puedo clickear semana / mes / dia
      editable: true,
      eventLimit: true, // permitos mas links cuando hay demasiados eventos
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
          end: '2019-08-16T13:30:00',
          color: '#9fefae'
        },
        {
          title: 'Limpiar habitación',
          start: '2019-08-12T10:30:00',
          end: '2019-08-12T13:30:00',
          color: '#ebc5c5'
        },
        {
          title: 'Control de la vida',
          start: '2019-08-15T08:30:00',
          end: '2019-08-15T13:30:00',
          color: '#ffb7089e'
        },        
        {
          title: 'Control de ISW',
          start: '2019-08-14T14:30:00',
          end: '2019-08-14T16:30:00',
          color: '#ffb7089e'
        },        
        {
          title: 'Almuerzo',
          start: '2019-08-12T08:00:00',
          color: '#adf7f1'
        },
        {
          title: 'Siesta',
          start: '2019-08-12T14:30:00',
          color: '#fffb0070'
        },
        {
          title: 'Fornai',
          start: '2019-08-12T17:30:00',
          color: '#031dff66'
        },
        {
          title: 'Cena',
          start: '2019-08-12T20:00:00',
          color: '#adf7f1'
        },
        {
          title: 'Matar creeper',
          start: '2019-08-13T13:00:00',
          color: '#031dff66',
          url: '#actividad'
        },
        {
          title: 'Click for Google uwu',
          url: 'http://google.com/',
          start: '2019-08-28'
        }
      ]
    });

    calendar.render();
  });

