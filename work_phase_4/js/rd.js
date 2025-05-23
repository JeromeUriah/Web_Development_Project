import { fetchGetData } from '../js/modules/getData.js';
                    
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('community-list');

    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
        student_number: "s4546184",
        uqcloud_zone_id: "230a76c2",
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>';
        return;
        }

        data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${member.photo}" class="card-img-top" alt="User Photo" onerror="this.src='../work_phase_4/Assets/icons/default.jpg'">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || 'No message provided.'}</p>
        `;
        container.appendChild(card);
        });
    });
});