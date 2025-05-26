import { postFormData } from '../js/modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        feedback.textContent = 'Submitting...';
        const { success, data } = await postFormData(
            form, 
            "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/",
            {
                student_number: "s4546184",
                uqcloud_zone_id: "230a76c2",
            }
        );

        if (success) {
            feedback.textContent = data.message || 'Event added successfully!';
            form.reset();
        } else {
            feedback.textContent = data.message || 'Something went wrong.';
        }
        });
});