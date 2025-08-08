document.addEventListener('DOMContentLoaded', function () {

    // Data for the notice board
    // To add a new item, just add a new object to the corresponding array.

    const newEvents = [
        {
            title: 'Titu Rahman Textile Today',
            date: '2025-07-31',
            author: 'Admin',
            link: './notice_page.html'
        },
        {
            title: 'Facebook Post by Metropolitan University',
            date: '2024-12-03',
            author: 'Admin',
            link: 'https://www.facebook.com/metropolitanuniversity/posts/pfbid02epz1N62ULqBodoZtKJdaRayok1bgg2bit9KJRNv8rMNVczj8PC8PTUd6j8oAaVXEl'
        },
        {
            title: 'Another Facebook Post by Metropolitan University',
            date: '2024-08-03',
            author: 'Admin',
            link: 'https://www.facebook.com/photo.php?fbid=716491568049367&set=a.214830691548793&type=3'
        },
        {
            title: 'Annual Science Fair 2025',
            date: '2025-10-15',
            author: 'Admin',
            link: '#'
        },
        {
            title: 'Guest Lecture on Artificial Intelligence',
            date: '2025-11-05',
            author: 'CSE Department',
            link: '#'
        },
    ];

    const importantNotices = [
        {
            title: 'Final Exam Schedule for Fall Semester',
            date: '2025-12-10',
            author: 'Admin',
            link: './notice_page.html'
        },
        {
            title: 'Holiday Notification: College Closed for Winter Break',
            date: '2025-12-20',
            author: 'Admin',
            link: '#'
        },
    ];

    const officialAnnouncements = [
        {
            title: 'New Campus Regulations Effective Immediately',
            date: '2025-09-01',
            author: 'Administration',
            link: '#'
        },
        {
            title: 'Scholarship Application Deadline Extended',
            date: '2025-09-15',
            author: 'Financial Aid Office',
            link: '#'
        },
    ];

    const educationalProgrammes = [
        {
            title: 'Workshop on Modern Web Development',
            date: '2025-10-20',
            author: 'IT Club',
            link: '#'
        },
        {
            title: 'Seminar on Renewable Energy Sources',
            date: '2025-11-12',
            author: 'Physics Department',
            link: '#'
        },
    ];

    const sportsEvents = [
        {
            title: 'Inter-Department Cricket Tournament',
            date: '2025-11-25',
            author: 'Sports Committee',
            link: '#'
        },
        {
            title: 'Annual Sports Day Registration Open',
            date: '2025-12-01',
            author: 'Sports Committee',
            link: '#'
        },
    ];

    // Function to create a notice card HTML
    function createNoticeCard(item) {
        return `
            <div class="notice-card">
                <h4>${item.title}</h4>
                <div class="info">
                    <div class="date"><i class="fas fa-calendar-alt"></i> ${item.date}</div>
                    <div class="author"><i class="fas fa-user"></i> ${item.author}</div>
                </div>
                <a href="${item.link}" class="link">Read Details <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
    }

    // Function to render cards in a specific category
    function renderCards(categoryId, data) {
        const container = document.getElementById(categoryId);
        if (container) {
            container.innerHTML = data.map(createNoticeCard).join('');
        }
    }

    // Render all the cards
    renderCards('new-events', newEvents);
    renderCards('important-notice', importantNotices);
    renderCards('official-announcement', officialAnnouncements);
    renderCards('educational-programmes', educationalProgrammes);
    renderCards('sports-events', sportsEvents);

});
