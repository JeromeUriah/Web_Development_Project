import { fetchGetData } from '../js/modules/getData.js';
                    
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('event-list');

    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/', {
        student_number: "s4546184",
        uqcloud_zone_id: "230a76c2",
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to Load Events.</p>';
        return;
        }

        data.forEach(event => {
        const card = document.createElement('div');
        card.className = 'eventcard';
        card.innerHTML = `
        <div class="eventcontainer">
            <img src="${event.genericevent_photo}" class="card-img-top" alt="User Photo" onerror="this.src='../../work_phase_4/Assets/icons/default.jpg'">
            <div class="eventdetails">
                <h4 class="card-title">Event Name: ${event.event_name}</h4>
                <div></div>
                <P class="card-text">Event Type: ${event.event_type}</p>
                <p class="card-text">Description: ${event.description}</p>
                <p class="card-text">Date and Time: ${event.date_time}</p>
                <p class="card-text">Location: ${event.location}</p>
                <p class="card-text">Organiser: ${event.organiser}</p>
                <div></div>
                <div></div>
                <button> Sign Up </button>
            </div>
        </div>
        `;
        container.appendChild(card);
        });
    });
});