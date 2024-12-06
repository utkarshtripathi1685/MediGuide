document.addEventListener('DOMContentLoaded', () => {
    // Form Submission
    document.querySelector('.recommendation-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const symptom = document.getElementById('symptoms').value.toLowerCase();
        const recommendationsDiv = document.getElementById('recommendations');
        const loadingDiv = document.getElementById('loading');
        const messageDiv = document.getElementById('message');

        // Show loading animation
        loadingDiv.style.display = 'block';
        recommendationsDiv.innerHTML = ''; // Clear previous recommendations
        messageDiv.innerHTML = ''; // Clear previous messages

        // Simulate loading time
        setTimeout(() => {
            loadingDiv.style.display = 'none'; // Hide loading animation
            let recommendation = '';

            // Recommendation logic with common names, precautions, and cures
            if (symptom.includes('headache')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Tylenol</h3>
                        <p>Commonly used for pain relief and reducing fever.</p>
                        <p><strong>Precautions:</strong> Avoid exceeding the recommended dosage. Consult a doctor if headaches persist.</p>
                        <p><strong>Cure:</strong> Stay hydrated, rest, and apply a cold compress to the forehead.</p>
                    </div>`;
            } else if (symptom.includes('cold')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Benadryl</h3>
                        <p>Used to relieve allergy symptoms and cold symptoms.</p>
                        <p><strong>Precautions:</strong> May cause drowsiness; avoid driving or operating heavy machinery.</p>
                        <p><strong>Cure:</strong> Rest, drink warm fluids, and use a humidifier.</p>
                    </div>`;
            } else if (symptom.includes('stomach')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Tums</h3>
                        <p>Used to relieve heartburn and indigestion.</p>
                        <p><strong>Precautions:</strong> Do not use if you have kidney problems. Consult a doctor if symptoms persist.</p>
                        <p><strong>Cure:</strong> Eat smaller meals and avoid spicy or fatty foods.</p>
                    </div>`;
            } else if (symptom.includes('fever')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Advil</h3>
                        <p>Used to reduce fever and relieve pain.</p>
                        <p><strong>Precautions:</strong> Avoid if allergic to NSAIDs. Consult a doctor if fever lasts more than 3 days.</p>
                        <p><strong>Cure:</strong> Stay hydrated and rest; use a fan or cool cloth to lower body temperature.</p>
                    </div>`;
            } else if (symptom.includes('allergy')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Claritin</h3>
                        <p>Used to reduce allergy symptoms.</p>
                        <p><strong>Precautions:</strong> May cause drowsiness; avoid alcohol.</p>
                        <p><strong>Cure:</strong> Identify and avoid allergens; consider allergy shots if symptoms are severe.</p>
                    </div>`;
            } else if (symptom.includes('skin')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Hydrocortisone Cream</h3>
                        <p>Used to relieve skin irritation and inflammation.</p>
                        <p><strong>Precautions:</strong> Do not apply to broken skin. Consult a doctor if irritation persists.</p>
                        <p><strong>Cure:</strong> Keep the affected area clean and moisturized.</p>
                    </div>`;
            } else if (symptom.includes('muscle')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Ibuprofen</h3>
                        <p>Used to relieve pain, reduce inflammation, and lower fever.</p>
                        <p><strong>Precautions:</strong> Avoid if you have stomach ulcers or kidney issues. Consult a doctor if pain persists.</p>
                        <p><strong>Cure:</strong> Rest the affected muscle and apply ice to reduce swelling.</p>
                    </div>`;
            } else if (symptom.includes('eye')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Artificial Tears</h3>
                        <p>Used to relieve dryness and irritation in the eyes.</p>
                        <p><strong>Precautions:</strong> Avoid touching the tip of the bottle to any surface.</p>
                        <p><strong>Cure:</strong> Take breaks from screens and ensure proper lighting.</p>
                    </div>`;
            } else if (symptom.includes('throat')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Throat Lozenges</h3>
                        <p>Used to soothe sore throat symptoms.</p>
                        <p><strong>Precautions:</strong> Do not exceed the recommended dosage.</p>
                        <p><strong>Cure:</strong> Gargle with warm salt water and drink warm fluids.</p>
                    </div>`;
            } else if (symptom.includes('cough')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Cough Syrup</h3>
                        <p>Used to relieve cough and chest congestion.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if cough persists for more than a week.</p>
                        <p><strong>Cure:</strong> Stay hydrated and use a humidifier.</p>
                    </div>`;
            } else if (symptom.includes('diarrhea')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Imodium</h3>
                        <p>Used to treat diarrhea.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if diarrhea lasts more than 2 days.</p>
                        <p><strong>Cure:</strong> Stay hydrated and avoid dairy products.</p>
                    </div>`;
            } else if (symptom.includes('constipation')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Miralax</h3>
                        <p>Used to relieve constipation.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if symptoms persist for more than a week.</p>
                        <p><strong>Cure:</strong> Increase fiber intake and drink plenty of water.</p>
                    </div>`;
            } else if (symptom.includes('nausea')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Zofran</h3>
                        <p>Used to prevent nausea and vomiting.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if nausea persists.</p>
                        <p><strong>Cure:</strong> Eat small, bland meals and stay hydrated.</p>
                    </div>`;
            } else if (symptom.includes('anxiety')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Xanax</h3>
                        <p>Used to treat anxiety and panic disorders.</p>
                        <p><strong>Precautions:</strong> May cause drowsiness; avoid alcohol.</p>
                        <p><strong>Cure:</strong> Consider therapy and relaxation techniques.</p>
                    </div>`;
            } else if (symptom.includes('depression')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Prozac</h3>
                        <p>Used to treat depression and anxiety disorders.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if symptoms worsen.</p>
                        <p><strong>Cure:</strong> Engage in regular physical activity and therapy.</p>
                    </div>`;
            } else if (symptom.includes('insomnia')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Melatonin</h3>
                        <p>Used to regulate sleep-wake cycles.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if sleep issues persist.</p>
                        <p><strong>Cure:</strong> Establish a regular sleep schedule and create a relaxing bedtime routine.</p>
                    </div>`;
            } else if (symptom.includes('fatigue')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Caffeine</h3>
                        <p>Used to reduce fatigue and improve alertness.</p>
                        <p><strong>Precautions:</strong> Avoid excessive consumption; may cause jitters.</p>
                        <p><strong>Cure:</strong> Ensure adequate sleep and nutrition.</p>
                    </div>`;
            } else if (symptom.includes('weight loss')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Alli</h3>
                        <p>Used to help with weight loss.</p>
                        <p><strong>Precautions:</strong> Consult a doctor before use; may cause gastrointestinal side effects.</p>
                        <p><strong>Cure:</strong> Combine with a balanced diet and exercise.</p>
                    </div>`;
            } else if (symptom.includes('weight gain')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Appetite Suppressants</h3>
                        <p>Used to reduce appetite and promote weight loss.</p>
                        <p><strong>Precautions:</strong> Consult a doctor before use; may have side effects.</p>
                        <p><strong>Cure:</strong> Focus on a healthy diet and regular exercise.</p>
                    </div>`;
            } else if (symptom.includes('irregular periods')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Birth Control Pills</h3>
                        <p>Used to regulate menstrual cycles.</p>
                        <p><strong>Precautions:</strong> Consult a doctor for proper usage and potential side effects.</p>
                        <p><strong>Cure:</strong> Maintain a healthy lifestyle and manage stress.</p>
                    </div>`;
            } else if (symptom.includes('infertility')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Clomid</h3>
                        <p>Used to stimulate ovulation.</p>
                        <p><strong>Precautions:</strong> Consult a doctor for proper usage and monitoring.</p>
                        <p><strong>Cure:</strong> Consider lifestyle changes and fertility treatments.</p>
                    </div>`;
            } else if (symptom.includes('erectile dysfunction')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Viagra</h3>
                        <p>Used to treat erectile dysfunction.</p>
                        <p><strong>Precautions:</strong> Consult a doctor if you have heart problems.</p>
                        <p><strong>Cure:</strong> Consider lifestyle changes and therapy.</p>
                    </div>`;
            } else if (symptom.includes('menopause')) {
                recommendation = `
                    <div class="recommendation-card">
                        <h3>Hormone Replacement Therapy</h3>
                        <p>Used to relieve menopause symptoms.</p>
                        <p><strong>Precautions:</strong> Consult a doctor for risks and benefits.</p>
                        <p><strong>Cure:</strong> Consider lifestyle changes and alternative therapies.</p>
                    </div>`;
            } else {
                recommendation = '<div class="recommendation-card"><p>No specific recommendation found.</p></div>';
            }

            recommendationsDiv.innerHTML = recommendation; // Display recommendation
        }, 1000); // Simulate loading time
    });
});
