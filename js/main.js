// Right margin in the calendar in %
const CALENDAR_MARGIN = 3;

var calendar = {
    "friday": {
        "dayTitle": "Vrijdag 1 juni",
        "events": [
            {
                "name": "empty",
                "width": 0.6
            },
            {
                "name": "Tent opzetten",
                "start": "19:00",
                "width": 0.2,
                "img": "img/calendar/castle.png"
            },
            {
                "name": "Feest",
                "start": "21:00",
                "width": 0.2,
                "img": "img/calendar/castle.png"
            }
        ]
    },
    "saturday": {
        "dayTitle": "Zaterdag 2 juni",
        "events": [
            {
                "name": "Ontbijten",
                "start": "9:00",
                "width": 0.15,
                "img": "img/calendar/coffee.png"
            },
            {
                "name": "Wedstrijden",
                "start": "10:00",
                "width": 0.2,
                "img": "img/calendar/bal.png"
            },
            {
                "name": "Lunch",
                "start": "13:00",
                "width": 0.15,
                "img": "img/calendar/eat.png"
            },
            {
                "name": "Wedstrijden",
                "start": "14:00",
                "width": 0.2,
                "img": "img/calendar/bal.png"
            },
            {
                "name": "BBQ",
                "start": "18:00",
                "width": 0.15,
                "img": "img/calendar/bbq.png"
            },
            {
                "name": "Themafeest",
                "start": "21:30",
                "width": 0.15,
                "img": "img/calendar/bbq.png"
            }
        ]
    },
    "sunday": {
        "dayTitle": "Zondag 3 juni",
        "events": [
            {
                "name": "Ontbijten",
                "start": "9:00",
                "width": 0.15,
                "img": "img/calendar/coffee.png"
            },
            {
                "name": "Wedstrijden",
                "start": "10:00",
                "width": 0.20,
                "img": "img/calendar/bal.png"
            },
            {
                "name": "Lunch",
                "start": "13:00",
                "width": 0.125,
                "img": "img/calendar/eat.png"
            },
            {
                "name": "Wedstrijden",
                "start": "14:00",
                "width": 0.225,
                "img": "img/calendar/bal.png"
            },
            {
                "name": "Prijsuitreiking",
                "start": "18:00",
                "width": 0.15,
                "img": "img/calendar/bbq.png"
            },
            {
                "name": "empty",
                "width": 0.15
            }
        ]
    }
};

$(document).ready(function () {

    var s = skrollr.init();

    addCalendarToHTML(calendar);
});

function addCalendarToHTML(calendar) {

    var html = "";
    html += createDay(calendar.friday);
    html += createDay(calendar.saturday);
    html += createDay(calendar.sunday);
    console.log(html);
    $(".calendar-body").html(html);
}

function createDay(dayData) {
    var html = "";

    html += "<span class='calendar-day-title'><b>" + dayData.dayTitle + "</b></span>";
    html += "<div class='row calendar-day'>";

    for (var i = 0; i < dayData.events.length; i++) {
        html += createEvent(dayData.events[i], i === (dayData.events.length-1));
    }
    html += "</div>";
    return html;
}

function createEvent(eventData, last) {
    console.log(last);
    var margin = last ? 0 : CALENDAR_MARGIN;
    console.log(margin);
    var html = "";
    if (eventData.name === "empty") {
        html += "<div class='calendar-size' style='width:" + ((eventData.width * 100) - margin) + "%; margin-right:" + margin + "%' class='d-none d-sm-block'>";
        html += "<div class='calendar-entry calendar-empty'>";
        html += "</div>";
        html += "</div>";
    } else {
        html += "<div class='calendar-size' style='width:" + ((eventData.width * 100) - margin) + "%; margin-right:" + margin + "%'>";
        html += "<div class='calendar-entry calendar-event'>";
        html += "<img src='" + eventData.img + "' class='calendar-image'>";
        html += "<p class='calendar-description'>" + eventData.start + "</p>";
        html += "<p class='calendar-description'>" + eventData.name + "</p>";
        html += "</div>";
        html += "</div>";
    }
    return html
}