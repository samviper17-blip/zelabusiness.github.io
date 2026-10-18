const universitiesData = [
  { name: 'IIT Bombay', state: 'Maharashtra', stream: 'Engineering', description: 'Premier engineering institute with research and innovation focus.', location: 'Mumbai', courses: 'Computer Science, Mechanical, Electrical' },
  { name: 'IIT Delhi', state: 'Delhi', stream: 'Engineering', description: 'World-renowned technology institute with strong industry ties.', location: 'New Delhi', courses: 'Engineering, AI, Robotics, Design' },
  { name: 'IIT Madras', state: 'Tamil Nadu', stream: 'Engineering', description: 'Leading institute for engineering and startup activity.', location: 'Chennai', courses: 'Civil, Mechanical, Computer Science' },
  { name: 'IIT Kanpur', state: 'Uttar Pradesh', stream: 'Engineering', description: 'Respected for engineering, science, and interdisciplinary research.', location: 'Kanpur', courses: 'Computer Science, Materials, Chemical' },
  { name: 'IIT Kharagpur', state: 'West Bengal', stream: 'Engineering', description: 'Largest and oldest IIT with engineering excellence.', location: 'Kharagpur', courses: 'Infrastructure, Engineering, Research' },
  { name: 'BITS Pilani', state: 'Rajasthan', stream: 'Engineering', description: 'Strong engineering education with modern labs.', location: 'Pilani', courses: 'Engineering, Computer Science, Pharmacy' },
  { name: 'VIT Vellore', state: 'Tamil Nadu', stream: 'IT', description: 'Popular for information technology, engineering, and international exposure.', location: 'Vellore', courses: 'Software, AI, Data, Engineering' },
  { name: 'Manipal Institute of Technology', state: 'Karnataka', stream: 'Engineering', description: 'Well-known for technology education and global recognition.', location: 'Manipal', courses: 'Electronics, Mechanical, IT' },
  { name: 'SRM Institute of Science and Technology', state: 'Tamil Nadu', stream: 'Engineering', description: 'Strong multi-disciplinary engineering and technology programs.', location: 'Chennai', courses: 'Engineering, Tech, Research' },
  { name: 'Anna University', state: 'Tamil Nadu', stream: 'Engineering', description: 'Major institution in South India for engineering and technology.', location: 'Chennai', courses: 'Core engineering and technical education' },
  { name: 'Jadavpur University', state: 'West Bengal', stream: 'Engineering', description: 'Highly regarded for engineering, architecture, and applied sciences.', location: 'Kolkata', courses: 'Engineering, Science, Architecture' },
  { name: 'University of Delhi', state: 'Delhi', stream: 'Business', description: 'One of India’s largest universities offering business and commerce programs.', location: 'New Delhi', courses: 'Commerce, Economics, Management' },
  { name: 'NMIMS Mumbai', state: 'Maharashtra', stream: 'Business', description: 'Well-known management institution for business and finance.', location: 'Mumbai', courses: 'MBA, BBA, Finance, Marketing' },
  { name: 'Symbiosis International University', state: 'Maharashtra', stream: 'Business', description: 'Popular for management, media, and business education.', location: 'Pune', courses: 'Management, Business, Media' },
  { name: 'Christ University', state: 'Karnataka', stream: 'Business', description: 'Strong academic reputation in management and commerce.', location: 'Bengaluru', courses: 'BBA, MBA, Commerce' },
  { name: 'Loyola College', state: 'Tamil Nadu', stream: 'Arts', description: 'Highly regarded for arts, humanities, and liberal education.', location: 'Chennai', courses: 'Arts, Humanities, Literature' },
  { name: 'St. Xavier’s College', state: 'West Bengal', stream: 'Arts', description: 'Well-known for arts and humanities.', location: 'Kolkata', courses: 'Arts, Social Sciences, Humanities' },
  { name: 'University of Hyderabad', state: 'Telangana', stream: 'Science', description: 'Strong in science, research, and technology.', location: 'Hyderabad', courses: 'Science, Research, Technology' },
  { name: 'Jawaharlal Nehru University', state: 'Delhi', stream: 'Science', description: 'Known for research and sciences.', location: 'New Delhi', courses: 'Science, Social Sciences, Research' },
  { name: 'AIIMS Delhi', state: 'Delhi', stream: 'Medical', description: 'A top-ranked medical institute famous for medicine and research.', location: 'New Delhi', courses: 'MBBS, Research, Health Sciences' },
  { name: 'CMC Vellore', state: 'Tamil Nadu', stream: 'Medical', description: 'One of India’s most respected medical institutions.', location: 'Vellore', courses: 'Medicine, Nursing, Healthcare' },
  { name: 'Kasturba Medical College', state: 'Karnataka', stream: 'Medical', description: 'Popular medical college with strong healthcare reputation.', location: 'Manipal', courses: 'MBBS, Health Sciences' },
  { name: 'Gujarat Medical Education', state: 'Gujarat', stream: 'Medical', description: 'Recognized for medical and public health training.', location: 'Gujarat', courses: 'Medical, Public Health' },
  { name: 'National Law University, Delhi', state: 'Delhi', stream: 'Law', description: 'Top legal education institution with strong training.', location: 'New Delhi', courses: 'Law, Public Policy, Legal Studies' },
  { name: 'NLSIU Bengaluru', state: 'Karnataka', stream: 'Law', description: 'Prestigious law school known for legal research.', location: 'Bengaluru', courses: 'Law, Legal Practice, Research' },
  { name: 'NIFT Delhi', state: 'Delhi', stream: 'Design', description: 'Leading institution for fashion and design.', location: 'New Delhi', courses: 'Fashion, Textile, Design' },
  { name: 'Pearl Academy', state: 'Delhi', stream: 'Design', description: 'Well-known for creative and design training.', location: 'Delhi', courses: 'Fashion, Interior, Communication Design' },
  { name: 'Banaras Hindu University', state: 'Uttar Pradesh', stream: 'Arts', description: 'Large multidisciplinary university.', location: 'Varanasi', courses: 'Arts, Science, Humanities, Medicine' },
  { name: 'Panjab University', state: 'Punjab', stream: 'Science', description: 'Strong in science, management, and interdisciplinary research.', location: 'Chandigarh', courses: 'Sciences, Business, Arts' },
  { name: 'Andhra University', state: 'Andhra Pradesh', stream: 'Engineering', description: 'Long-established university recognized for engineering and science.', location: 'Visakhapatnam', courses: 'Engineering, Science, Commerce' },
  { name: 'NIT Patna', state: 'Bihar', stream: 'Engineering', description: 'National Institute of Technology with strong engineering education.', location: 'Patna', courses: 'Engineering and Technology' },
  { name: 'IIM Ahmedabad', state: 'Gujarat', stream: 'Business', description: 'Prestigious business school in India.', location: 'Ahmedabad', courses: 'MBA, Strategy, Business Leadership' },
  { name: 'Amity University', state: 'Delhi', stream: 'IT', description: 'Multi-disciplinary education provider with strong IT offerings.', location: 'Noida', courses: 'IT, Business, Management' },
  { name: 'MIT-WPU Pune', state: 'Maharashtra', stream: 'IT', description: 'Popular for digital technology, software education, and entrepreneurship.', location: 'Pune', courses: 'Computer Science, IT, Design' },
  {name: 'MZU Tanhril', state: 'Mizoram', stream: 'History',description: 'Popular for learning Indian history and variety of subject to choose', location: 'Aizawl', courses: 'mizo history'}
];

function renderUniversities(data) {
  const grid = document.getElementById('universityGrid');
  if (!grid) return;

  grid.innerHTML = '';

  data.forEach((uni, index) => {
    const card = document.createElement('article');
    card.className = 'university-card fade-in-up';
    card.style.animationDelay = (index % 3) * 0.1 + 's';
    card.dataset.state = uni.state;
    card.dataset.stream = uni.stream;
    card.dataset.name = uni.name.toLowerCase();

    card.innerHTML = `
      <div class="card-top">
        <span class="tag">${uni.stream}</span>
        <span class="state-tag">${uni.state}</span>
      </div>
      <h3>${uni.name}</h3>
      <p>${uni.description}</p>
      <ul>
        <li>Location: ${uni.location}</li>
        <li>Focus: ${uni.courses}</li>
      </ul>
    `;

    grid.appendChild(card);
  });

  const statsEl = document.getElementById('searchStats');
  if (statsEl) {
    statsEl.textContent = `Showing ${data.length} universities`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const stateFilter = document.getElementById('stateFilter');
  const streamFilter = document.getElementById('streamFilter');
  const searchInput = document.getElementById('searchInput');

  function applyFilters() {
    const selectedState = stateFilter ? stateFilter.value : 'all';
    const selectedStream = streamFilter ? streamFilter.value : 'all';
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = universitiesData.filter((uni) => {
      const matchState = selectedState === 'all' || uni.state === selectedState;
      const matchStream = selectedStream === 'all' || uni.stream === selectedStream;
      const matchSearch = !searchTerm || uni.name.toLowerCase().includes(searchTerm) || uni.courses.toLowerCase().includes(searchTerm);
      return matchState && matchStream && matchSearch;
    });

    renderUniversities(filtered);
  }

  stateFilter && stateFilter.addEventListener('change', applyFilters);
  streamFilter && streamFilter.addEventListener('change', applyFilters);
  searchInput && searchInput.addEventListener('input', applyFilters);

  renderUniversities(universitiesData);

  const admissionsForm = document.getElementById('admissionsForm');
  if (admissionsForm) {
    let currentStep = 1;
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.step'));

    function updateStepUI() {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index + 1 === currentStep);
      });

      progressSteps.forEach((step, index) => {
        step.classList.toggle('active', index + 1 <= currentStep);
      });

      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const submitBtn = document.getElementById('submitBtn');

      if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
      if (nextBtn) nextBtn.style.display = currentStep === steps.length ? 'none' : 'inline-flex';
      if (submitBtn) submitBtn.style.display = currentStep === steps.length ? 'inline-flex' : 'none';
    }

    window.changeStep = function (direction) {
      const next = currentStep + direction;
      if (next >= 1 && next <= steps.length) {
        currentStep = next;
        updateStepUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    updateStepUI();

    admissionsForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Application Submitted';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          admissionsForm.reset();
          currentStep = 1;
          updateStepUI();
        }, 2000);
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = contactForm.querySelector('button[type="submit"]');
      if (!button) return;

      const originalText = button.textContent;
      button.textContent = '✓ Message Sent';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        contactForm.reset();
      }, 2000);
    });
  }
});