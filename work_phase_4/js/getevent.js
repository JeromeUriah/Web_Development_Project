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
        card.className = 'card';
        card.innerHTML = `
            <img src="${event.genericevent_photo}" class="card-img-top" alt="User Photo" onerror="this.src='../../work_phase_4/Assets/icons/default.jpg'">
            <h4 class="card-title">${event.event_name}</h4>
            <h5 class="card-text">${event.event_type}</h5>
            <h4 class="card-text">${event.description}</h4>
            <p class="card-text">${event.date_time}</p>
            <p class="card-text">${event.location}</p>
            <p class="card-text">${event.organiser}</p>
        `;
        container.appendChild(card);
        });
    });
});