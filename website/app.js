// Diagnostic error catcher helper
window.addEventListener('error', function(e) {
    console.error(e);
    const errDiv = document.createElement('div');
    errDiv.style.position = 'fixed';
    errDiv.style.bottom = '10px';
    errDiv.style.right = '10px';
    errDiv.style.background = 'rgba(239, 68, 68, 0.95)';
    errDiv.style.color = 'white';
    errDiv.style.padding = '12px 20px';
    errDiv.style.borderRadius = '8px';
    errDiv.style.zIndex = '99999';
    errDiv.style.fontSize = '0.72rem';
    errDiv.style.fontFamily = 'monospace';
    errDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    errDiv.textContent = `JS Error: ${e.message} at ${e.filename.split('/').pop()}:${e.lineno}`;
    document.body.appendChild(errDiv);
});

// ==========================================================================
// 1-Month Marketing Planner Prompt Database
// ==========================================================================
const PLANNER_PROMPTS = [
    {
        day: 1,
        category: "Brand Core",
        title: "Introduce Your Vision",
        objective: "Establish your core values and present a welcoming pitch to your target audience. Why do you exist?",
        prompt: "Hey everyone! 🚀 We built [Company Name] because we got tired of [Common Problem]. Today, we're sharing how we plan to fix that for good. Read our story: [Link]",
        assets: "High-contrast ambient mockup picture of your service dashboard or a friendly picture of the core founders."
    },
    {
        day: 2,
        category: "Educational",
        title: "The SEO Secrets",
        objective: "Educate your users on why Google PageSpeed scores impact search rankings and how fast sites convert.",
        prompt: "Did you know that a 1-second delay in mobile load times can decrease conversion rates by up to 20%? ⏱️ We optimize our sites for 95+ PageSpeed scores. Check your site speed: [Link]",
        assets: "Clean infographic bar chart comparing fast vs. slow website bounce rates."
    },
    {
        day: 3,
        category: "Social Proof",
        title: "Highlight a Big Win",
        objective: "Build trust by showcasing real feedback or customer growth stats from a previous project.",
        prompt: "Before working with us, [Client Name] spent 8 hours a week manually entering student grades. Our custom ERP portal solved that in 1 click. Read the success breakdown: [Link]",
        assets: "Quote testimonial card styled with soft glassmorphic borders and a customer avatar."
    },
    {
        day: 4,
        category: "Myth Buster",
        title: "DIY Builders vs Custom Code",
        objective: "Debunk the idea that drag-and-drop page builders are always the cheapest, most efficient option.",
        prompt: "Myth: 'All website builders are SEO-friendly.' Fact: Heavy code bloating in drag-and-drop systems can sink search rankings. Custom semantic HTML gives you a clean headstart. 🔍",
        assets: "Splitscreen mockup: Code Editor vs. complex visual website builder blocks."
    },
    {
        day: 5,
        category: "Engagement",
        title: "Interactive Ask",
        objective: "Start a conversation to find out what custom features your audience needs most.",
        prompt: "Quick question for creators: What is the single biggest bottleneck in your daily workspace flow? (e.g. email inbox, scheduling, invoice tracking). Let us know below! 👇",
        assets: "Vibrant visual polling card graphics with options: 'Manual Admin' vs 'Poor SEO' vs 'Outdated UI'."
    },
    {
        day: 6,
        category: "Behind The Scenes",
        title: "Show Your Tool Stack",
        objective: "Showcase the development environments and design applications you use to build client solutions.",
        prompt: "A look inside our development setup today! 💻 We craft responsive, glassmorphic layouts using clean HSL CSS declarations and custom SVG assets. Here is what's compiling: [Link]",
        assets: "Photo of your monitor displaying vscode with colorful syntax highlighting."
    },
    {
        day: 7,
        category: "Roundup",
        title: "Weekly Industry Tips",
        objective: "Establish thought leadership by sharing three important trends or productivity tips.",
        prompt: "Weekly Roundup: 3 digital rules changing business today. 1️⃣ SEO semantic schemas are vital. 2️⃣ Inbox regulations require proper spam filters. 3️⃣ ERP systems save admin hours. Read full post: [Link]",
        assets: "Abstract gradient image with text overlay 'Weekly Business Tips'."
    },
    {
        day: 8,
        category: "Product Focus",
        title: "Email Marketing Funnels",
        objective: "Explain how automated email flows convert cold traffic into loyal brand customers.",
        prompt: "A website without an email funnel is like a store with no cashier. Automated drip sequences nurture leads 24/7. Here is how we set up our email outreach automation: [Link]",
        assets: "Flowchart diagram mapping customer journey: Landing Page -> Drip 1 -> Conversion."
    },
    {
        day: 9,
        category: "Educational",
        title: "School ERP Simplified",
        objective: "Introduce school administrative clients to digital portal systems.",
        prompt: "Managing student data across three different spreadsheets? Our School ERP integrates admissions, grade reporting, and billing into one secure dashboard. 🏫 Request a demo: [Link]",
        assets: "UI mockup of school dashboard showing grade and attendance charts."
    },
    {
        day: 10,
        category: "Inspiration",
        title: "Founder Vision",
        objective: "Share a motivational perspective that aligns with your business values.",
        prompt: "'Complexity is your enemy. Any fool can make something complicated. It is hard to keep things simple.' — We design clean, minimalist products that focus on solving problems. ✨",
        assets: "Stylized quote graphic with ambient glowing lights in the background."
    },
    {
        day: 11,
        category: "Free Value",
        title: "Share a Launch Checklist",
        objective: "Give away actionable free value to build warm leads for custom development.",
        prompt: "Ready to launch? 🚀 We put together a 15-point checklist covering SEO schemas, favicon checks, and speed validations. Download our Launch Guide for free: [Link]",
        assets: "Preview graphic of an checklist template on an iPad mockup."
    },
    {
        day: 12,
        category: "Social Proof",
        title: "Client Testimonial",
        objective: "Showcase a quotation showing how you resolved a business roadblock.",
        prompt: "'Social Connect transformed our student onboarding. Our administration tasks were reduced by 40% in month one.' — Director, [Academy Name]. Read Case Study: [Link]",
        assets: "Elegant testimonial card with glassmorphism styles and high-end typography."
    },
    {
        day: 13,
        category: "Comparison",
        title: "Speed vs Aesthetics",
        objective: "Explain why beautiful sites also need high performance to succeed.",
        prompt: "A beautiful website is useless if it takes 8 seconds to load. We combine high-end glassmorphic visuals with ultra-light frontend scripts. Performance meets design: [Link] ⚡",
        assets: "Comparison screenshot showing high speed index vs poor speed indexes."
    },
    {
        day: 14,
        category: "Trend Report",
        title: "Inbox Regulations",
        objective: "Warn businesses about new spam filters and pitch email automation setups.",
        prompt: "New spam protection guidelines are active. If your domain isn't authenticated properly, your newsletter drops straight into the junk folder. Let us audit your email settings: [Link]",
        assets: "Visual graphic of a mail envelope passing through a secure scanner."
    },
    {
        day: 15,
        category: "Behind The Scenes",
        title: "Design System Reveal",
        objective: "Show off the CSS palettes and font combinations that set you apart.",
        prompt: "Developing our new Cyberpunk & Emerald themes. Visual variety allows brands to change their aesthetic instantly. Which color palette matches your business vibe? 🎨",
        assets: "Image showing color swatch bubbles (Neon Pink, Sage Green, Coral, Midnight Blue)."
    },
    {
        day: 16,
        category: "Promo",
        title: "Book a Consultation",
        objective: "Direct pitch to schedule an live roadmap planning call.",
        prompt: "Got a bottleneck in your billing flow or a website that isn't ranking? 🛠️ Let's design a custom solution guide. Book a free consultation call with us this week: [Link]",
        assets: "Booking mockup showing a weekly calendar scheduler."
    },
    {
        day: 17,
        category: "Educational",
        title: "SEO Meta Tags",
        objective: "Explain what metadata is and how it influences search listings.",
        prompt: "What Google sees vs. what your user sees. Proper HTML semantic structure and descriptive meta tags help search bots understand your product. Read our quick guide: [Link] 🔍",
        assets: "Split screenshot comparing code head tags to actual Google search result previews."
    },
    {
        day: 18,
        category: "Problem Solving",
        title: "Workflow Automation",
        objective: "Pitch bespoke business solutions by showing a manual workflow saved.",
        prompt: "Still copy-pasting customer details from emails into billing software? 🔁 We code secure Webhooks that handle it automatically. Save hours, avoid errors. Find out how: [Link]",
        assets: "Mockup animation of data moving seamlessly from form fields to dashboard."
    },
    {
        day: 19,
        category: "Roundup",
        title: "Top 3 Marketing Books",
        objective: "Establish authority by recommending valuable resources to your followers.",
        prompt: "3 books that changed our customer marketing approach: 1️⃣ Building a StoryBrand 2️⃣ Contagious 3️⃣ Influence. What are you reading to scale your business this year? 📚",
        assets: "Minimalist photo stack of books on a wooden creative desk workspace."
    },
    {
        day: 20,
        category: "Interactive",
        title: "Feature Request Poll",
        objective: "Ask users to vote on a product template they want built.",
        prompt: "Help us prioritize! We are coding a new design blueprint. Vote for what template you want next: 📊 Option A: School ERP Dashboard | Option B: E-Commerce Landing Page.",
        assets: "Visual poll options banner with clean labels."
    },
    {
        day: 21,
        category: "Brand Core",
        title: "Meet the Partners",
        objective: "Share the team profile, showing professional qualifications and personality.",
        prompt: "Who's behind the screens? 💻 We are developers and marketers who love solving business problems. When we aren't writing clean CSS variables, we're studying speed indexes. 👋",
        assets: "Team group photo displaying smiling faces in a clean design studio."
    },
    {
        day: 22,
        category: "Social Proof",
        title: "Client Case Study",
        objective: "Breakdown project steps and achievements.",
        prompt: "How we took [School Portal Name] from manual paperwork to 100% paperless student registrations. Read the full timeline and system architecture breakdown: [Link] 🏫",
        assets: "Mockup dashboard showing student admission statistics graphs."
    },
    {
        day: 23,
        category: "Problem Solving",
        title: "Common Email Spills",
        objective: "Detail common mistakes in email marketing setup.",
        prompt: "Are your welcome emails ending up in promotion tabs? 📧 Missing SPF/DKIM tags is the usual culprit. We construct secure domains for our client list drips. Nurture leads safely: [Link]",
        assets: "Graphic showing email folders with a warning indicator."
    },
    {
        day: 24,
        category: "Educational",
        title: "Responsive Breakpoints",
        objective: "Show the importance of responsive design in websites.",
        prompt: "Over 55% of global web traffic is on mobile. If your site looks great on desktop but breaks on phone, you're losing customers. We build fluid layouts that fit every screen. 📱",
        assets: "Device mockup rendering the same service dashboard across tablet, phone, and laptop."
    },
    {
        day: 25,
        category: "Inspiration",
        title: "Work Ethic Quote",
        objective: "Share a motivational piece that highlights precision and build quality.",
        prompt: "'Quality is not an act, it is a habit.' — Every line of code we compile and every marketing campaign we run is checked for maximum speed and performance. 🎯",
        assets: "Abstract high-end typography layout displaying the quote."
    },
    {
        day: 26,
        category: "Behind The Scenes",
        title: "ERP Features Preview",
        objective: "Show security roles or database structure within a School ERP.",
        prompt: "Security matters. Our School ERP portals feature secure hashed passwords and role-based permissions (Admin, Teacher, Parent, Student). Take a look at the dashboard layout: [Link]",
        assets: "Clean screenshot of role management settings dashboard."
    },
    {
        day: 27,
        category: "Promo",
        title: "One-Month Social Planner",
        objective: "Pitch the planner service directly to target brands.",
        prompt: "Tired of staring at a blank caption box? 🤯 Get 30 days of pre-researched marketing prompts, objective guides, and visual directions tailored to your business. Claim your Planner: [Link]",
        assets: "Mockup graphic rendering a digital marketing calendar grid."
    },
    {
        day: 28,
        category: "Engagement",
        title: "Ask For Feedback",
        objective: "Prompt the community for constructive feedback on user experience.",
        prompt: "We just updated our site estimating tools! 📊 Try our Quote Estimator at [Link] and let us know if the package options match your project budgets. Your feedback matters!",
        assets: "Sleek card mockup screenshot displaying the Quote Estimator view."
    },
    {
        day: 29,
        category: "Product Focus",
        title: "Custom Integrations",
        objective: "Explain how you write custom integrations to link external APIs.",
        prompt: "Need your site to send data directly to Stripe, Salesforce, or Google Sheets? We code custom integration pipelines to sync your systems in real-time. Link your stacks: [Link] ⚡",
        assets: "Connecting node circles infographic showing Stripe, Google Sheets, and a custom portal."
    },
    {
        day: 30,
        category: "Review",
        title: "Reflecting and Scaling",
        objective: "Summarize achievements and invite users for a planning session for next month.",
        prompt: "Month review! 📈 How did your digital growth stack up this month? Let's sit down and plan your next website build, automated email flow, or social campaign. Scale with us: [Link]",
        assets: "Animated graphical mockup showing upward growth chart arrows."
    }
];

// ==========================================================================
// Pain Points Database (Carousel Mockup Data)
// ==========================================================================
const CAROUSEL_SLIDES = [
    {
        problem: `"Our website loads too slowly on mobile devices, causing potential clients to leave before checking our service listings."`,
        solution: `We custom-code SEO-enabled frontend websites using lightweight semantic HTML and stylesheet caching, guaranteeing a 95+ PageSpeed score.`
    },
    {
        problem: `"We waste 10 hours a week copy-pasting customer payment details from emails into our customer sheets and billing databases."`,
        solution: `We deploy automated AI & API Webhook pipelines that sync your email data, Google Sheets, and CRM in real-time, eliminating clerical errors.`
    },
    {
        problem: `"Our academy registration is manual and slow. We lose prospective student applicants because paper forms are confusing."`,
        solution: `We construct School ERP dashboard portals featuring secure login profiles, online registration databases, and automated grading reports.`
    }
];

// ==========================================================================
// Application State
// ==========================================================================
let currentTab = 'home';
let selectedServices = {
    seo_web: false,
    erp: false,
    seo: false,
    social: false,
    email: false,
    content: false,
    ai: false,
    consulting: false
};
let complexityScale = 1.0;
let carouselIndex = 0;
let carouselTimer = null;

// ==========================================================================
// App Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    runCinematicLoader();
    renderPlannerCalendar();
    selectPlannerDay(1);
    updateCalculatorTotal();
    initCarousel();
    
    // Storytelling Systems Initialization
    animateCursorFollower();
    initCustomCursorHovers();
    initCardTilts();
    initScrollReveals();
    initLiveTerminalLogs();
    initNarrativeTracking();
    
    // Interactive Storytelling Additions
    // initParticleCanvas(); // Disabled redundant 2D particles to optimize performance
    initTypewriter();
    triggerDashboardStats();
    initSmoothScroll();
    // initThreeJSBackground(); // Disabled 3D asteroid scene to run background video instead
});

// ==========================================================================
// Tab Switching Controller
// ==========================================================================
function switchTab(tabId, element) {
    let targetId = '';
    switch(tabId) {
        case 'home': targetId = 'home-sec-hero'; break;
        case 'services': targetId = 'view-services'; break;
        case 'planner': targetId = 'view-planner'; break;
        case 'calculator': targetId = 'view-calculator'; break;
        case 'contact': targetId = 'view-contact'; break;
        default: targetId = tabId;
    }
    
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
        if (window.lenisInstance) {
            window.lenisInstance.scrollTo(targetEl, { offset: -60, duration: 1.5 });
        } else {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Update active tab in header nav
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(n => n.classList.remove("active"));
    
    if (element) {
        element.classList.add("active");
    } else {
        const navbarItems = document.querySelectorAll(".navbar-links .nav-item");
        navbarItems.forEach(item => {
            const clickAttr = item.getAttribute("onclick") || "";
            if (clickAttr.includes(`'${tabId}'`)) {
                item.classList.add("active");
            }
        });
    }

    currentTab = tabId;
}

// Helper to bridge quick header button to Calculator view
function goToCalculator() {
    const calcBtn = document.querySelector(".navbar-links button[onclick*='calculator']");
    switchTab('calculator', calcBtn);
}

// ==========================================================================
// Home Page Problems Carousel Slider
// ==========================================================================
function initCarousel() {
    renderCarousel();
    startCarouselAutoSlide();
}

function renderCarousel() {
    const problemText = document.getElementById("carousel-problem-text");
    const solutionText = document.getElementById("carousel-solution-text");
    const dotsContainer = document.getElementById("carousel-dots-indicator");
    
    if (!problemText || !solutionText) return;
    
    const slide = CAROUSEL_SLIDES[carouselIndex];
    problemText.textContent = slide.problem;
    solutionText.textContent = slide.solution;
    
    // Generate dots
    let dotsHtml = '';
    for (let i = 0; i < CAROUSEL_SLIDES.length; i++) {
        dotsHtml += `<span class="carousel-dot ${i === carouselIndex ? 'active' : ''}" onclick="goToCarouselSlide(${i})"></span>`;
    }
    dotsContainer.innerHTML = dotsHtml;
}

function nextCarouselSlide() {
    carouselIndex = (carouselIndex + 1) % CAROUSEL_SLIDES.length;
    renderCarousel();
    resetCarouselTimer();
}

function prevCarouselSlide() {
    carouselIndex = (carouselIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    renderCarousel();
    resetCarouselTimer();
}

function goToCarouselSlide(index) {
    carouselIndex = index;
    renderCarousel();
    resetCarouselTimer();
}

function startCarouselAutoSlide() {
    carouselTimer = setInterval(() => {
        carouselIndex = (carouselIndex + 1) % CAROUSEL_SLIDES.length;
        renderCarousel();
    }, 7000);
}

function resetCarouselTimer() {
    clearInterval(carouselTimer);
    startCarouselAutoSlide();
}

// ==========================================================================
// 1-Month Marketing Planner Controller
// ==========================================================================
function renderPlannerCalendar() {
    const calendarContainer = document.getElementById("calendar-days-container");
    if (!calendarContainer) return;

    let dayCardsHtml = '';
    for (let day = 1; day <= 30; day++) {
        dayCardsHtml += `
            <div class="day-card" id="cal-day-${day}" onclick="selectPlannerDay(${day})">
                <span class="day-number">${day}</span>
                <span class="day-label">Day</span>
            </div>
        `;
    }
    calendarContainer.innerHTML = dayCardsHtml;
}

function selectPlannerDay(dayNumber) {
    // Remove active highlight from all day cards
    const dayCards = document.querySelectorAll(".day-card");
    dayCards.forEach(c => c.classList.remove("active-day"));

    // Highlight active card
    const targetCard = document.getElementById(`cal-day-${dayNumber}`);
    if (targetCard) {
        targetCard.classList.add("active-day");
    }

    // Load prompt details into panel
    const prompt = PLANNER_PROMPTS.find(p => p.day === dayNumber);
    if (!prompt) return;

    document.getElementById("prompt-day-label").textContent = `Day ${prompt.day}`;
    
    const catSpan = document.getElementById("prompt-category");
    catSpan.textContent = prompt.category;
    catSpan.className = "detail-type";
    const classFriendlyCatName = prompt.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    catSpan.classList.add(`cat-${classFriendlyCatName}`);

    document.getElementById("prompt-title").textContent = prompt.title;
    document.getElementById("prompt-objective").textContent = prompt.objective;
    document.getElementById("prompt-code").textContent = prompt.prompt;
    document.getElementById("prompt-assets").textContent = prompt.assets;
}

function copyPromptToClipboard() {
    const promptText = document.getElementById("prompt-code").textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        alert("Marketing prompt template copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

// ==========================================================================
// Quote Estimator Calculator Controller
// ==========================================================================
function toggleServiceCheckbox(serviceId) {
    const input = document.getElementById(`calc-${serviceId}`);
    const card = input.closest(".checkbox-item");
    
    // Toggle state
    selectedServices[serviceId] = !selectedServices[serviceId];
    input.checked = selectedServices[serviceId];

    if (selectedServices[serviceId]) {
        card.classList.add("checked");
    } else {
        card.classList.remove("checked");
    }

    updateCalculatorTotal();
}

function updateCalculatorScale() {
    const scaleSlider = document.getElementById("calc-scale");
    const displayLabel = document.getElementById("scale-value-display");
    
    complexityScale = parseFloat(scaleSlider.value);
    
    let text = `${complexityScale.toFixed(1)}x `;
    if (complexityScale < 1.0) {
        text += "(Basic Scope)";
    } else if (complexityScale === 1.0) {
        text += "(Standard)";
    } else if (complexityScale <= 1.4) {
        text += "(Medium Scale)";
    } else {
        text += "(Enterprise / Complex)";
    }
    
    displayLabel.textContent = text;
    updateCalculatorTotal();
}

function updateCalculatorTotal() {
    const summaryList = document.getElementById("calc-summary-list");
    const baseTotalDisplay = document.getElementById("summary-base-total");
    const modifierDisplay = document.getElementById("summary-modifier");
    const grandTotalDisplay = document.getElementById("summary-grand-total");

    if (!summaryList) return;

    let baseTotal = 0;
    let listHtml = '';
    let selectedCount = 0;

    // Loop through checkboxes and build list
    for (const service in selectedServices) {
        if (selectedServices[service]) {
            const inputElement = document.getElementById(`calc-${service}`);
            const cost = parseInt(inputElement.value);
            const title = inputElement.closest(".checkbox-item").querySelector(".chk-title").textContent;
            
            baseTotal += cost;
            selectedCount++;
            
            listHtml += `
                <div class="summary-row">
                    <span class="summary-row-title">${title}</span>
                    <span class="summary-row-cost">$${cost.toLocaleString()}</span>
                </div>
            `;
        }
    }

    if (selectedCount === 0) {
        summaryList.innerHTML = `<div class="summary-empty">No services selected yet. Select options on the left to review your custom estimate.</div>`;
    } else {
        summaryList.innerHTML = listHtml;
    }

    const grandTotal = Math.round(baseTotal * complexityScale);

    baseTotalDisplay.textContent = `$${baseTotal.toLocaleString()}`;
    modifierDisplay.textContent = `${complexityScale.toFixed(1)}x`;
    grandTotalDisplay.textContent = `$${grandTotal.toLocaleString()}`;
}

// Transfer Estimate parameters to Contact briefing fields
function lockEstimateAndProceed() {
    let summaryText = '';
    let selectedCount = 0;

    for (const service in selectedServices) {
        if (selectedServices[service]) {
            const inputElement = document.getElementById(`calc-${service}`);
            const title = inputElement.closest(".checkbox-item").querySelector(".chk-title").textContent;
            summaryText += `${title}, `;
            selectedCount++;
        }
    }

    if (selectedCount === 0) {
        alert("Please select at least one service before proceeding to booking!");
        return;
    }

    summaryText = summaryText.slice(0, -2); // Remove trailing comma
    const grandTotalVal = document.getElementById("summary-grand-total").textContent;
    const finalBriefText = `${summaryText} (Scope: ${complexityScale.toFixed(1)}x) - Estimated: ${grandTotalVal}`;
    
    // Put into briefing input
    const briefInput = document.getElementById("contact-scope-info");
    if (briefInput) {
        briefInput.value = finalBriefText;
    }
    
    alert("Your quote configuration has been loaded into the consultation brief below. Please complete your details to submit!");
}

// ==========================================================================
// Consultation Form Submission Controller
// ==========================================================================
function submitConsultationRequest(event) {
    event.preventDefault();
    
    // Validate email & name
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const msg = document.getElementById("contact-msg").value.trim();

    if (!name || !email || !msg) {
        alert("Please fill out Name, Email, and Message text fields.");
        return;
    }

    // Show Success, Hide form
    document.getElementById("contact-agency-form").classList.add("hidden");
    document.getElementById("contact-success-state").classList.remove("hidden");
}

function resetContactForm() {
    // Clear forms
    document.getElementById("contact-agency-form").reset();
    document.getElementById("contact-scope-info").value = "";
    
    // Reset calculator state
    for (const service in selectedServices) {
        selectedServices[service] = false;
        const input = document.getElementById(`calc-${service}`);
        if (input) {
            input.checked = false;
            input.closest(".checkbox-item").classList.remove("checked");
        }
    }
    
    document.getElementById("calc-scale").value = "1.0";
    complexityScale = 1.0;
    updateCalculatorScale();
    
    // Toggle views
    document.getElementById("contact-success-state").classList.add("hidden");
    document.getElementById("contact-agency-form").classList.remove("hidden");
}

// ==========================================================================
// Theme Switching Engine
// ==========================================================================
let userThemeOverridden = false;

function headerThemeSwap(themeName, element, isManual = false) {
    if (isManual) {
        userThemeOverridden = true;
    }
    // Deactivate all quick-theme selectors
    const dots = document.querySelectorAll(".theme-dot");
    dots.forEach(d => d.classList.remove("active"));

    // Activate selected dot
    element.classList.add("active");

    // Swap document body styles
    document.body.className = "";
    document.body.classList.add(`theme-${themeName}`);

    // Remember user's preferred light theme if a light theme is clicked
    if (themeName !== 'cinematic-dark') {
        preferredLightTheme = themeName;
    }

    // Update target WebGL video opacity dynamically based on theme properties
    if (themeName === 'cinematic-dark') {
        targetVideoOpacity = 0.38;
    } else if (themeName === 'cyber-light') {
        targetVideoOpacity = 0.12;
    } else if (themeName === 'sage') {
        targetVideoOpacity = 0.12;
    } else if (themeName === 'sunset-light') {
        targetVideoOpacity = 0.14;
    } else {
        targetVideoOpacity = 0.15; // default for ivory
    }
}

// ==========================================================================
// Storytelling Systems & Custom Cursor Engine
// ==========================================================================
let mouseX = -200, mouseY = -200;
let pos = { x: -200, y: -200 };
let started = false;
const speed = 0.18;
const skewing = 3;
const skewingDelta = 0.001;
const skewingDeltaMax = 0.15;

let blob1X = 0, blob1Y = 0;
let blob2X = 0, blob2Y = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!started) {
        started = true;
        pos.x = mouseX;
        pos.y = mouseY;
        const outer = document.querySelector(".custom-cursor");
        if (outer) outer.style.opacity = "1";
    }

    // Update relative card mouse glow positions (Optimized: Event delegation to avoid layout thrashing)
    const card = e.target.closest(".glass-card");
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
});

document.addEventListener("mouseleave", () => {
    const outer = document.querySelector(".custom-cursor");
    if (outer) outer.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    if (started) {
        const outer = document.querySelector(".custom-cursor");
        if (outer) outer.style.opacity = "1";
    }
});

function animateCursorFollower() {
    const outer = document.querySelector(".custom-cursor");
    const inner = document.querySelector(".custom-cursor-inner");

    if (started && outer && inner) {
        var dx = mouseX - pos.x, dy = mouseY - pos.y;
        pos.x += dx * speed;
        pos.y += dy * speed;
        
        var velX = mouseX - pos.x, velY = mouseY - pos.y;
        var velocity = Math.sqrt(velX * velX + velY * velY);
        var sf = Math.min(velocity * skewingDelta, skewingDeltaMax) * skewing;
        var angle = 0;
        
        if (velocity > 0.5) {
            angle = Math.atan2(velY, velX) * 180 / Math.PI;
        }
        
        outer.style.transform = `translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0) rotate(${angle.toFixed(1)}deg) scale(${((1 + sf)).toFixed(4)}, ${((1 - sf)).toFixed(4)})`;
        inner.style.transform = `rotate(${(-angle).toFixed(1)}deg)`;
    }

    // Gently float background blobs towards mouse (Aesthetic background interaction)
    const blob1 = document.querySelector(".blob-1");
    const blob2 = document.querySelector(".blob-2");

    if (blob1) {
        const targetX = mouseX * 0.12;
        const targetY = mouseY * 0.12;
        blob1X += (targetX - blob1X) * 0.03;
        blob1Y += (targetY - blob1Y) * 0.03;
        blob1.style.transform = `translate3d(${blob1X}px, ${blob1Y}px, 0)`;
    }

    if (blob2) {
        const targetX = (window.innerWidth - mouseX) * 0.1;
        const targetY = (window.innerHeight - mouseY) * 0.1;
        blob2X += (targetX - blob2X) * 0.025;
        blob2Y += (targetY - blob2Y) * 0.025;
        blob2.style.transform = `translate3d(${blob2X}px, ${blob2Y}px, 0)`;
    }

    requestAnimationFrame(animateCursorFollower);
}

function initCustomCursorHovers() {
    const interactiveElements = document.querySelectorAll("button, a, .glass-card, .checkbox-item, .day-card, input, textarea, .nav-item, .browser-mockup");
    const inner = document.querySelector(".custom-cursor-inner");
    
    if (!inner) return;
    
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            inner.classList.add("expand");
        });
        el.addEventListener("mouseleave", () => {
            inner.classList.remove("expand");
        });
    });
}

// ==========================================================================
// 3D Card Hover Perspective Physics
// ==========================================================================
function initCardTilts() {
    const cards = document.querySelectorAll(".glass-card, .browser-mockup");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });
}

// ==========================================================================
// Scroll Reveal Engine
// ==========================================================================
function initScrollReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// Interactive Terminal Log Simulator
// ==========================================================================
const HERO_LOG_TEMPLATES = [
    "git commit -m 'feat: optimize speed index'",
    "Done! PageSpeed rating compiled at 98/100 ⚡",
    "booting AI lead generation webhook...",
    "syncing Gmail queries to CRM sheets... (100%)",
    "parsing admissions database routes...",
    "online_admissions_db -> connection check: OK",
    "scaling cloud databases... instances: 4",
    "deploying SEO semantic HTML indexing...",
    "Compiling route structures in 18ms",
    "All security handshake tokens verified.",
    "System status: 0 errors | 100% operational"
];

const AUTOMATION_LOG_TEMPLATES = [
    "Websocket handshake complete. Listening...",
    "Form submit event captured -> John Doe",
    "Mapping quote variables: seo_web, erp, ai",
    "Triggering customer onboarding pipeline...",
    "Sending personalized email nurture sequence...",
    "Webhook post received: code=200 status=OK",
    "Connecting Stripe checkout endpoints...",
    "Syncing school attendance grade roster...",
    "Processing custom GPT assistant parameters...",
    "Compiling growth metrics dashboard..."
];

function initLiveTerminalLogs() {
    const heroTerminal = document.getElementById("hero-terminal-logs");
    const autTerminal = document.getElementById("automations-terminal-logs");
    
    if (heroTerminal) {
        startTerminalLogger(heroTerminal, HERO_LOG_TEMPLATES, 2400);
    }
    if (autTerminal) {
        startTerminalLogger(autTerminal, AUTOMATION_LOG_TEMPLATES, 3000);
    }
}

function startTerminalLogger(element, templates, interval) {
    let index = 0;
    setInterval(() => {
        const logText = templates[index % templates.length];
        index++;
        
        const timestamp = new Date().toLocaleTimeString().split(' ')[0];
        const line = document.createElement("span");
        line.className = "terminal-line";
        line.innerHTML = `<span class="term-time">[${timestamp}]</span> ${logText}`;
        element.appendChild(line);
        
        element.scrollTop = element.scrollHeight;
        
        if (element.children.length > 5) {
            element.removeChild(element.firstChild);
        }
    }, interval);
}

// ==========================================================================
// Scroll Narrative Timeline Mapper & Scrollspy
// ==========================================================================
const CHAPTER_SECTIONS = [
    { id: 'home-sec-hero', name: 'Opening', theme: 'dark' },
    { id: 'home-sec-about', name: 'Who We Are', theme: 'dark' },
    { id: 'home-sec-stats', name: 'Numbers', theme: 'dark' },
    { id: 'home-sec-industries', name: 'Industries', theme: 'dark' },
    { id: 'view-services', name: 'Services', theme: 'dark' },
    { id: 'view-planner', name: 'Factors', theme: 'dark' },
    { id: 'home-sec-works', name: 'Projects', theme: 'dark' },
    { id: 'view-calculator', name: 'Team', theme: 'dark' },
    { id: 'home-sec-howto', name: 'Process', theme: 'dark' },
    { id: 'home-sec-faq', name: 'FAQ', theme: 'dark' },
    { id: 'view-contact', name: 'Contact', theme: 'dark' }
];

function scrollToHomeSection(secId) {
    let targetEl = document.getElementById(`home-sec-${secId}`) || document.getElementById(`view-${secId}`);
    if (targetEl) {
        if (window.lenisInstance) {
            window.lenisInstance.scrollTo(targetEl, { offset: -60, duration: 1.5 });
        } else {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

let sectionPositions = [];
let chapterDotOffsets = [];

function cacheScrollCoordinates() {
    // Cache section heights and offsets relative to document flow
    sectionPositions = CHAPTER_SECTIONS.map((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
            return {
                index: idx,
                top: el.offsetTop,
                height: el.offsetHeight
            };
        }
        return null;
    }).filter(p => p !== null);

    // Cache chapter dot offsets relative to track (avoids layout measurements on scroll)
    chapterDotOffsets = [];
    const track = document.querySelector(".scroll-rail-track");
    if (track) {
        const trackRect = track.getBoundingClientRect();
        const chapters = document.querySelectorAll(".scroll-rail-chapter");
        chapters.forEach((ch, idx) => {
            const dot = ch.querySelector(".chapter-dot");
            if (dot) {
                const dotRect = dot.getBoundingClientRect();
                chapterDotOffsets[idx] = dotRect.top - trackRect.top + dotRect.height / 2 - 4.5;
            }
        });
    }
}

function initNarrativeTracking() {
    const chapters = document.querySelectorAll(".scroll-rail-chapter");
    const indicator = document.querySelector(".scroll-rail-indicator");

    // Pre-calculate positions on load
    setTimeout(cacheScrollCoordinates, 800); // Wait for page elements to settle
    
    // Recalculate on window resize
    window.addEventListener("resize", cacheScrollCoordinates);

    function updateScrollspy() {
        if (activeOSMode) return;

        let activeChapterIndex = 0;
        const scrollPosition = window.scrollY || window.pageYOffset;
        const centerLine = scrollPosition + window.innerHeight * 0.45;

        // Find active section using cached values (NO layout thrashing!)
        for (let i = 0; i < sectionPositions.length; i++) {
            const pos = sectionPositions[i];
            if (centerLine >= pos.top && centerLine < pos.top + pos.height) {
                activeChapterIndex = pos.index;
                break;
            }
        }

        // Update scroll rail classes
        chapters.forEach((ch, idx) => {
            if (idx === activeChapterIndex) {
                ch.classList.add("active");
            } else {
                ch.classList.remove("active");
            }
        });

        // Position the indicator dot using cached values (NO layout measurements!)
        if (indicator && chapterDotOffsets[activeChapterIndex] !== undefined) {
            indicator.style.top = `${chapterDotOffsets[activeChapterIndex]}px`;
        }

        // Swap body theme and WebGL lights dynamically
        const currentChap = CHAPTER_SECTIONS[activeChapterIndex];
        if (currentChap) {
            const currentTheme = currentChap.theme;
            
            if (!userThemeOverridden) {
                // Set dynamic lighting variables for ThreeJS lerping
                if (currentTheme === 'dark') {
                    targetVideoOpacity = 0.38;
                    if (targetClearColor) targetClearColor.setHex(0x050508);
                    if (targetAmbientColor) targetAmbientColor.setHex(0xa855f7); // deep purple ambient glow
                    targetAmbientIntensity = 0.25;
                    targetKeyIntensity = 0.35;
                    targetRimIntensity = 3.5; // bright glowing edge
                    
                    // Swap navbar quick theme dots
                    const darkDot = document.querySelector('.theme-dot.cinematic-dark');
                    if (darkDot && !darkDot.classList.contains('active')) {
                        headerThemeSwap('cinematic-dark', darkDot);
                    }
                } else {
                    targetVideoOpacity = 0.15;
                    if (preferredLightTheme === 'cyber-light') targetVideoOpacity = 0.12;
                    else if (preferredLightTheme === 'sage') targetVideoOpacity = 0.12;
                    else if (preferredLightTheme === 'sunset-light') targetVideoOpacity = 0.14;
                    else targetVideoOpacity = 0.15;
                    
                    if (targetClearColor) targetClearColor.setHex(0xefefef);
                    if (targetAmbientColor) targetAmbientColor.setHex(0xffffff);
                    targetAmbientIntensity = 0.55;
                    targetKeyIntensity = 0.85;
                    targetRimIntensity = 0.0;
                    
                    const lightDot = document.querySelector(`.theme-dot.${preferredLightTheme}`);
                    if (lightDot && !lightDot.classList.contains('active')) {
                        headerThemeSwap(preferredLightTheme, lightDot);
                    }
                }
            }

            // Sync navbar active state
            let tabId = 'home';
            if (activeChapterIndex === 4) tabId = 'services';
            else if (activeChapterIndex === 5) tabId = 'planner';
            else if (activeChapterIndex === 7) tabId = 'calculator';
            else if (activeChapterIndex === 10) tabId = 'contact';

            if (currentTab !== tabId) {
                currentTab = tabId;
                const navItems = document.querySelectorAll(".nav-item");
                navItems.forEach(n => n.classList.remove("active"));
                const navbarItems = document.querySelectorAll(".navbar-links .nav-item");
                navbarItems.forEach(item => {
                    const clickAttr = item.getAttribute("onclick") || "";
                    if (clickAttr.includes(`'${tabId}'`)) {
                        item.classList.add("active");
                    }
                });
            }
        }
    }

    // Scroll listener
    window.addEventListener("scroll", updateScrollspy);
    // Initial call
    setTimeout(updateScrollspy, 100);
}

// ==========================================================================
// ThreeJS 3D Asteroid & Orbit Background Scene
// ==========================================================================
let threeScene, threeCamera, threeRenderer, threeRockMesh, threeRings = [], threeStars;
let threeAmbientLight, threeKeyLight, threeRimLight;
let targetClearColor, currentClearColor, targetAmbientColor;
let targetAmbientIntensity = 0.25;
let targetKeyIntensity = 0.35;
let targetRimIntensity = 3.5;

let threeTargetRotX = 0, threeTargetRotY = 0;
let threeTargetPosX = 0, threeTargetPosY = 0;
let videoMaterial, backingMaterial;
let targetVideoOpacity = 0.38;
let currentVideoOpacity = 0.38;
let preferredLightTheme = 'ivory';

function initThreeJSBackground() {
    const container = document.getElementById("threejs-bg-container");
    if (!container || !window.THREE) return;

    // Renderer
    threeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(threeRenderer.domElement);

    // Scene & Camera
    threeScene = new THREE.Scene();
    threeCamera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    threeCamera.position.z = 8.5;

    // Colors & Lighting
    targetClearColor = new THREE.Color(0x050508);
    currentClearColor = new THREE.Color(0x050508);
    targetAmbientColor = new THREE.Color(0xa855f7);

    threeAmbientLight = new THREE.AmbientLight(0xa855f7, 0.25);
    threeScene.add(threeAmbientLight);

    threeKeyLight = new THREE.DirectionalLight(0xffffff, 0.35);
    threeKeyLight.position.set(5, 6, 5);
    threeScene.add(threeKeyLight);

    threeRimLight = new THREE.PointLight(0xff4824, 3.5, 15);
    threeRimLight.position.set(-3, -3, -3);
    threeScene.add(threeRimLight);

    // Create floating video display group in place of asteroid
    const videoGroup = new THREE.Group();
    threeScene.add(videoGroup);
    threeRockMesh = videoGroup; // Bind to existing ThreeJS animation variables

    // Video texture initialization
    const video = document.getElementById("bg-video");
    let videoTexture;
    if (video) {
        // Ensure video is playing
        video.play().catch(err => console.log("ThreeJS Video play triggered:", err));
        videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
    }

    // Video face material (DoubleSided so flips are seen, basic so colors match exactly)
    videoMaterial = new THREE.MeshBasicMaterial({
        map: videoTexture || null,
        transparent: true,
        opacity: 0.38,
        side: THREE.DoubleSide
    });

    // Glass backing plate material (semi-transparent dark steel/glass)
    backingMaterial = new THREE.MeshStandardMaterial({
        color: 0x070709,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide
    });

    // Video card: 16:9 ratio
    const videoGeom = new THREE.PlaneGeometry(3.2, 1.8);
    const videoMesh = new THREE.Mesh(videoGeom, videoMaterial);
    videoGroup.add(videoMesh);

    // Glass card backing plate (slightly larger for premium bezel feel)
    const backingGeom = new THREE.PlaneGeometry(3.35, 1.95);
    const backingMesh = new THREE.Mesh(backingGeom, backingMaterial);
    backingMesh.position.z = -0.02; // Offset behind the video plane
    videoGroup.add(backingMesh);

    // Concentric orbit lines
    const ringConfigs = [
        { radius: 2.7, color: 0xff4824, tiltX: 1.25, tiltY: 0.3, speed: 0.004 },
        { radius: 3.3, color: 0x0ea5e9, tiltX: -0.75, tiltY: 0.5, speed: -0.003 },
        { radius: 4.0, color: 0xa855f7, tiltX: 0.45, tiltY: -0.75, speed: 0.005 }
    ];

    ringConfigs.forEach(cfg => {
        const points = [];
        const segments = 120;
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(Math.cos(theta) * cfg.radius, 0, Math.sin(theta) * cfg.radius));
        }
        const ringGeom = new THREE.BufferGeometry().setFromPoints(points);
        const ringMat = new THREE.LineBasicMaterial({
            color: cfg.color,
            transparent: true,
            opacity: 0.18
        });
        const line = new THREE.Line(ringGeom, ringMat);
        line.rotation.x = cfg.tiltX;
        line.rotation.y = cfg.tiltY;
        threeScene.add(line);
        threeRings.push({ mesh: line, speed: cfg.speed });
    });

    // Particle Stars
    const starCount = 300;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
        const radius = 22 + Math.random() * 25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i+1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i+2] = radius * Math.cos(phi);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.045,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true
    });
    threeStars = new THREE.Points(starGeometry, starMaterial);
    threeScene.add(threeStars);

    // Mouse Move Tilt Listener
    window.addEventListener("mousemove", (e) => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = -(e.clientY / window.innerHeight) * 2 + 1;
        threeTargetRotX = ny * 0.35;
        threeTargetRotY = nx * 0.35;
        threeTargetPosX = nx * 0.3;
        threeTargetPosY = ny * 0.3;
    });

    // Window resize
    window.addEventListener("resize", () => {
        threeCamera.aspect = window.innerWidth / window.innerHeight;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start Loop
    animateThreeJS();
}

function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);

    if (activeOSMode) return; // Freeze logic/rendering in OS Mode to save resources

    // Gentle floating bobbing and oscillation sways
    const time = Date.now() * 0.001;
    const floatY = Math.sin(time * 0.8) * 0.12;
    const floatX = Math.cos(time * 0.5) * 0.06;
    
    // Combine base float coordinates with mouse target coordinates
    const targetX = threeTargetPosX + floatX;
    const targetY = threeTargetPosY + floatY;
    
    // Position movement lerping
    threeRockMesh.position.x += (targetX - threeRockMesh.position.x) * 0.06;
    threeRockMesh.position.y += (targetY - threeRockMesh.position.y) * 0.06;

    // Gentle rotation sway (subtle oscillation + mouse tilt coordinates)
    const targetRotX = threeTargetRotX + Math.sin(time * 0.4) * 0.02;
    const targetRotY = threeTargetRotY + Math.cos(time * 0.4) * 0.02;
    const targetRotZ = Math.sin(time * 0.3) * 0.015;
    
    threeRockMesh.rotation.x += (targetRotX - threeRockMesh.rotation.x) * 0.06;
    threeRockMesh.rotation.y += (targetRotY - threeRockMesh.rotation.y) * 0.06;
    threeRockMesh.rotation.z += (targetRotZ - threeRockMesh.rotation.z) * 0.06;

    // Rotate orbits
    threeRings.forEach(r => {
        r.mesh.rotation.z += r.speed;
        r.mesh.position.x = threeRockMesh.position.x * 0.35;
        r.mesh.position.y = threeRockMesh.position.y * 0.35;
    });

    // Stars slow rotation
    threeStars.rotation.y += 0.0002;

    // Smooth color & light lerping transitions
    currentClearColor.lerp(targetClearColor, 0.04);
    threeRenderer.setClearColor(currentClearColor, 0); // alpha is handled by CSS background color

    threeAmbientLight.color.lerp(targetAmbientColor, 0.04);
    threeAmbientLight.intensity += (targetAmbientIntensity - threeAmbientLight.intensity) * 0.04;
    threeKeyLight.intensity += (targetKeyIntensity - threeKeyLight.intensity) * 0.04;
    threeRimLight.intensity += (targetRimIntensity - threeRimLight.intensity) * 0.04;

    // Smooth opacity transitions for the video material and backing card
    if (videoMaterial && backingMaterial) {
        currentVideoOpacity += (targetVideoOpacity - currentVideoOpacity) * 0.05;
        videoMaterial.opacity = currentVideoOpacity;
        backingMaterial.opacity = currentVideoOpacity * 0.5;
    }

    threeRenderer.render(threeScene, threeCamera);
}

// ==========================================================================
// Interactive Canvas Particle Network
// ==========================================================================
function hexToRgba(hex, alpha) {
    hex = hex.trim();
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initParticleCanvas() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let particles = [];
    const maxParticles = 65;
    const connectionDistance = 110;
    const mouseRadius = 150;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    let localMouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
        localMouse.x = e.clientX;
        localMouse.y = e.clientY;
    });
    
    window.addEventListener("mouseleave", () => {
        localMouse.x = null;
        localMouse.y = null;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            if (localMouse.x !== null && localMouse.y !== null) {
                const dx = localMouse.x - this.x;
                const dy = localMouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius;
                    this.x += (dx / distance) * force * 0.35;
                    this.y += (dy / distance) * force * 0.35;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            const themePrimary = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#4f46e5';
            ctx.fillStyle = themePrimary;
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const themePrimary = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#4f46e5';
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < connectionDistance) {
                    const alpha = (connectionDistance - dist) / connectionDistance;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = themePrimary.startsWith('#') ? hexToRgba(themePrimary, alpha * 0.15) : `rgba(79, 70, 229, ${alpha * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ==========================================================================
// Typewriter Engine for Hero Tagline
// ==========================================================================
function initTypewriter() {
    const element = document.getElementById("typewriter-text");
    if (!element) return;
    
    const words = ["schools", "startups", "brands", "SMEs", "businesses"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 50;
        } else {
            charIndex++;
            typingSpeed = 150;
        }
        
        element.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ==========================================================================
// Count-Up Statistics for Hero Dashboard
// ==========================================================================
function triggerDashboardStats() {
    const leadsVal = document.getElementById("hero-stat-leads");
    if (!leadsVal) return;
    
    const target = 1420;
    const duration = 2500;
    const startTime = performance.now();
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = progress * (2 - progress); // easeOutQuad
        const currentCount = Math.floor(easeProgress * target);
        
        leadsVal.textContent = currentCount.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            leadsVal.textContent = target.toLocaleString();
            
            // Continuous micro-growth increments to look live
            setInterval(() => {
                const current = parseInt(leadsVal.textContent.replace(/,/g, ''));
                leadsVal.textContent = (current + Math.floor(Math.random() * 3)).toLocaleString();
            }, 5000);
        }
    }
    
    requestAnimationFrame(updateCount);
}

// ==========================================================================
// ConnectOS Web Audio Synthesizer Engine
// ==========================================================================
let synthAudioActive = false;
let audioCtx = null;

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function toggleSynthAudio() {
    const btn = document.getElementById("audio-toggle-btn");
    const label = document.getElementById("audio-status-lbl");
    
    synthAudioActive = !synthAudioActive;
    
    if (synthAudioActive) {
        initAudioContext();
        btn.classList.add("playing");
        label.textContent = "Synth Sound: ON";
        playSystemBoot();
    } else {
        btn.classList.remove("playing");
        label.textContent = "Synth Sound: OFF";
    }
}

function playSynthTone(freq, type, duration, gainStart, gainEnd) {
    if (!synthAudioActive) return;
    try {
        initAudioContext();
        
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(gainStart || 0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(gainEnd || 0.0001, audioCtx.currentTime + duration);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        console.error("Audio error: ", e);
    }
}

function playSystemBoot() {
    if (!synthAudioActive) return;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, index) => {
        setTimeout(() => {
            playSynthTone(freq, 'triangle', 0.5, 0.12, 0.0001);
        }, index * 110);
    });
}

function playClickSound() {
    playSynthTone(1100, 'sine', 0.07, 0.07, 0.0001);
}

function playKeyboardClick() {
    playSynthTone(Math.random() * 300 + 750, 'triangle', 0.03, 0.04, 0.0001);
}

function playNotificationSound() {
    playSynthTone(523.25, 'sine', 0.12, 0.08, 0.0001);
    setTimeout(() => {
        playSynthTone(783.99, 'sine', 0.25, 0.08, 0.0001);
    }, 120);
}

// Bind audio clicks dynamically to interactive elements globally
document.addEventListener("click", (e) => {
    if (synthAudioActive && e.target.closest("button, a, .nav-item, .theme-dot, .checkbox-item, .day-card, .os-shortcut, .window-dot")) {
        if (!e.target.closest(".os-shortcut") && !e.target.closest(".window-dot")) {
            playClickSound();
        }
    }
});

// ==========================================================================
// ConnectOS Workspace Window Manager
// ==========================================================================
let activeOSMode = false;
let focusedWindow = null;
let openWindows = {
    'terminal-win': true,
    'simulator-win': true,
    'erp-win': false,
    'planner-win': false,
    'contact-win': false
};
let activeOSDesktop = 1;
let windowDesktops = {
    'terminal-win': 1,
    'simulator-win': 1,
    'erp-win': 2,
    'planner-win': 2,
    'contact-win': 1
};

function toggleConnectOSMode() {
    const crt = document.getElementById("crt-overlay");
    if (crt) {
        crt.classList.remove("crt-expand");
        crt.classList.add("crt-active");
        
        setTimeout(() => {
            performModeSwap();
            crt.classList.remove("crt-active");
            crt.classList.add("crt-expand");
            
            setTimeout(() => {
                crt.classList.remove("crt-expand");
            }, 400);
        }, 400);
    } else {
        performModeSwap();
    }
}

function performModeSwap() {
    const mainShell = document.querySelector(".app-container");
    const osWorkspace = document.getElementById("connect-os-workspace");
    const toggleBtn = document.getElementById("os-toggle-btn");
    
    activeOSMode = !activeOSMode;
    
    if (activeOSMode) {
        mainShell.style.display = "none";
        osWorkspace.classList.remove("os-workspace-hidden");
        toggleBtn.textContent = "📄 Switch to Scroll";
        toggleBtn.classList.remove("btn-secondary");
        toggleBtn.classList.add("btn-primary");
        playSystemBoot();
        
        focusOSWindow('terminal-win');
        runROISimulator();
        updateOSClock();
        syncWindowVisibilities();
        
        const timeline = document.querySelector(".side-narrative-map");
        if (timeline) timeline.style.display = "none";

        // Resource optimization: Pause video and hide background canvas container
        const video = document.getElementById("bg-video");
        if (video) video.pause();
        const container = document.getElementById("threejs-bg-container");
        if (container) container.style.display = "none";
    } else {
        mainShell.style.display = "flex";
        osWorkspace.classList.add("os-workspace-hidden");
        toggleBtn.textContent = "🌐 Switch to OS";
        toggleBtn.classList.remove("btn-primary");
        toggleBtn.classList.add("btn-secondary");
        playNotificationSound();
        
        const timeline = document.querySelector(".side-narrative-map");
        if (timeline && window.innerWidth > 1200) timeline.style.display = "flex";

        // Resource optimization: Show background container and resume video playback
        const container = document.getElementById("threejs-bg-container");
        if (container) container.style.display = "block";
        const video = document.getElementById("bg-video");
        if (video) video.play().catch(err => console.log("Video resume on OS exit failed:", err));
    }
}

// Window Dragging Implementation
let dragWindowId = null;
let dragStartX = 0, dragStartY = 0;
let dragStartLeft = 0, dragStartTop = 0;

function startWindowDrag(e, winId) {
    focusOSWindow(winId);
    
    if (e.target.closest(".window-dot")) return;
    
    dragWindowId = winId;
    const win = document.getElementById(`os-window-${winId}`);
    
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartLeft = win.offsetLeft;
    dragStartTop = win.offsetTop;
    
    document.addEventListener("mousemove", performWindowDrag);
    document.addEventListener("mouseup", stopWindowDrag);
    
    e.preventDefault();
}

function performWindowDrag(e) {
    if (!dragWindowId) return;
    
    const win = document.getElementById(`os-window-${dragWindowId}`);
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    
    let targetLeft = dragStartLeft + dx;
    let targetTop = dragStartTop + dy;
    
    const osWorkspaceHeight = document.getElementById("connect-os-workspace").clientHeight;
    const osWorkspaceWidth = document.getElementById("connect-os-workspace").clientWidth;
    
    targetLeft = Math.max(-100, Math.min(targetLeft, osWorkspaceWidth - 150));
    targetTop = Math.max(0, Math.min(targetTop, osWorkspaceHeight - 80));
    
    win.style.left = `${targetLeft}px`;
    win.style.top = `${targetTop}px`;
}

function stopWindowDrag() {
    dragWindowId = null;
    document.removeEventListener("mousemove", performWindowDrag);
    document.removeEventListener("mouseup", stopWindowDrag);
}

function openOSWindow(winId) {
    const win = document.getElementById(`os-window-${winId}`);
    const trayIcon = document.getElementById(`tray-icon-${winId}`);
    
    // Smart App Focus: Pull/assign window to current active desktop
    windowDesktops[winId] = activeOSDesktop;
    
    if (win) {
        win.classList.remove("window-minimized");
        openWindows[winId] = true;
        focusOSWindow(winId);
        playNotificationSound();
    }
    if (trayIcon) {
        trayIcon.classList.add("active");
    }
    
    // Synchronize window/tray display states
    syncWindowVisibilities();
}

function closeOSWindow(winId) {
    const win = document.getElementById(`os-window-${winId}`);
    const trayIcon = document.getElementById(`tray-icon-${winId}`);
    
    if (win) {
        win.classList.add("window-minimized");
        openWindows[winId] = false;
        playClickSound();
    }
    if (trayIcon) {
        trayIcon.classList.remove("active");
    }
}

function minimizeOSWindow(winId) {
    closeOSWindow(winId);
}

function maximizeOSWindow(winId) {
    const win = document.getElementById(`os-window-${winId}`);
    if (win) {
        win.classList.toggle("window-maximized");
        playClickSound();
    }
}

function focusOSWindow(winId) {
    const allWindows = document.querySelectorAll(".os-window");
    allWindows.forEach(w => w.classList.remove("window-focused"));
    
    const targetWin = document.getElementById(`os-window-${winId}`);
    if (targetWin) {
        targetWin.classList.add("window-focused");
        focusedWindow = winId;
        
        const trayIcon = document.getElementById(`tray-icon-${winId}`);
        if (trayIcon) trayIcon.classList.add("active");
        
        if (winId === 'terminal-win') {
            const input = document.getElementById("os-cli-input-box");
            if (input) input.focus();
        }
    }
}

function toggleOSWindowTray(winId) {
    if (openWindows[winId]) {
        if (focusedWindow === winId) {
            closeOSWindow(winId);
        } else {
            focusOSWindow(winId);
        }
    } else {
        openOSWindow(winId);
    }
}

function updateOSClock() {
    const clock = document.getElementById("os-clock-widget");
    if (!clock) return;
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hrs}:${mins}`;
    setTimeout(updateOSClock, 30000);
}

// ==========================================================================
// ConnectOS ROI Simulator App Math & Graph
// ==========================================================================
function runROISimulator() {
    const spend = parseInt(document.getElementById("sim-spend").value);
    const ctr = parseFloat(document.getElementById("sim-ctr").value);
    const conv = parseInt(document.getElementById("sim-conv").value);
    
    document.getElementById("sim-val-spend").textContent = spend.toLocaleString();
    document.getElementById("sim-val-ctr").textContent = ctr.toFixed(1);
    document.getElementById("sim-val-conv").textContent = conv;
    
    const cpc = 1.20;
    const visitors = Math.round(spend / cpc);
    const clicks = Math.round(visitors * (ctr / 100));
    const leads = Math.round(clicks * (conv / 100));
    const dealValue = 1800;
    const salesPipeline = leads * dealValue;
    
    document.getElementById("sim-out-visitors").textContent = visitors.toLocaleString();
    document.getElementById("sim-out-leads").textContent = leads.toLocaleString();
    document.getElementById("sim-out-pipeline").textContent = `$${salesPipeline.toLocaleString()}`;
    
    drawSimChart(visitors, clicks, leads);
    
    const contactMsg = document.getElementById("os-contact-msg");
    if (contactMsg) {
        contactMsg.value = `Simulated ROI metrics -> Budget: $${spend}/mo, Leads: ${leads}/mo, Est Pipeline: $${salesPipeline.toLocaleString()}/mo.`;
    }
}

function drawSimChart(visitors, clicks, leads) {
    const canvas = document.getElementById("sim-bar-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const maxVal = Math.max(visitors, clicks, leads, 1);
    const barWidths = [
        (visitors / maxVal) * (canvas.width - 70),
        (clicks / maxVal) * (canvas.width - 70),
        (leads / maxVal) * (canvas.width - 70)
    ];
    
    const labels = ["Visitors", "Clicks", "Leads"];
    const colors = ["#0284c7", "#db2777", "#059669"];
    
    ctx.font = "10px sans-serif";
    ctx.textBaseline = "middle";
    
    barWidths.forEach((width, index) => {
        const y = 8 + index * 26;
        
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-main').trim() || '#0f172a';
        ctx.fillText(labels[index], 5, y + 7);
        
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(55, y, canvas.width - 70, 14);
        
        ctx.fillStyle = colors[index];
        ctx.fillRect(55, y, Math.max(width, 4), 14);
        
        ctx.fillStyle = "#ffffff";
        const valText = [visitors, clicks, leads][index].toLocaleString();
        ctx.fillText(valText, 60, y + 7);
    });
}

// ==========================================================================
// ConnectOS CLI Command Prompt Parser
// ==========================================================================
let matrixRainTimer = null;

function handleTerminalCommand(e) {
    if (e.key === "Enter") {
        const input = document.getElementById("os-cli-input-box");
        const cmd = input.value.trim().toLowerCase();
        
        if (!cmd) return;
        
        if (synthAudioActive) playKeyboardClick();
        
        printCLILine(`connectos@socialconnect:~$ ${input.value}`, 'text-user');
        input.value = "";
        
        parseCLICommand(cmd);
    } else if (synthAudioActive && e.key.length === 1) {
        playKeyboardClick();
    }
}

function printCLILine(text, className) {
    const output = document.getElementById("os-cli-output");
    if (!output) return;
    
    const line = document.createElement("span");
    line.className = `cli-line ${className || ''}`;
    line.textContent = text;
    output.appendChild(line);
    
    output.scrollTop = output.scrollHeight;
}

function parseCLICommand(cmdText) {
    const parts = cmdText.trim().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1];
    
    switch (cmd) {
        case 'help':
            printCLILine("Supported command routines:", 'text-system');
            printCLILine("  help         : Print list of commands", 'text-system');
            printCLILine("  grow         : Execute simulated growth statistics", 'text-system');
            printCLILine("  matrix       : Toggle terminal hacker rain screen overlay", 'text-system');
            printCLILine("  theme [dot]  : Swap UI theme. Options: ivory, cyber-light, sage, sunset-light", 'text-system');
            printCLILine("  contact      : Open lead consultation booking deck window", 'text-system');
            printCLILine("  clear        : Flush shell logs terminal window", 'text-system');
            break;
            
        case 'clear':
            const output = document.getElementById("os-cli-output");
            if (output) output.innerHTML = "";
            break;
            
        case 'contact':
            printCLILine("Opening contact compiler window...", 'text-success');
            openOSWindow('contact-win');
            break;
            
        case 'grow':
            printCLILine("Executing marketing compiler projections...", 'text-success');
            openOSWindow('simulator-win');
            runROISimulator();
            printCLILine("Projections loaded. Adjust sliders inside ROI Simulator window.", 'text-success');
            break;
            
        case 'theme':
            if (['ivory', 'cyber-light', 'sage', 'sunset-light', 'cinematic-dark'].includes(arg)) {
                const btn = document.querySelector(`.theme-dot.${arg}`);
                if (btn) {
                    headerThemeSwap(arg, btn, true); // Pass manual override true
                    printCLILine(`Theme changed dynamically to: ${arg}`, 'text-success');
                    playNotificationSound();
                } else {
                    printCLILine(`Error: theme dot element '.theme-dot.${arg}' not found`, 'text-error');
                }
            } else {
                printCLILine("Error: Invalid theme. Options: ivory, cyber-light, sage, sunset-light, cinematic-dark", 'text-error');
            }
            break;
            
        case 'matrix':
            toggleMatrixRain();
            break;
            
        default:
            printCLILine(`sh: command not found: '${cmd}'. Type 'help' to review directory.`, 'text-error');
            break;
    }
}

// ==========================================================================
// Terminal Digital Code Rain Canvas Effect
// ==========================================================================
function toggleMatrixRain() {
    const canvas = document.getElementById("matrix-rain-canvas");
    if (!canvas) return;
    
    if (matrixRainTimer) {
        clearInterval(matrixRainTimer);
        matrixRainTimer = null;
        canvas.style.display = "none";
        printCLILine("Hacker code rain mode: DEACTIVATED.", 'text-warning');
        playClickSound();
    } else {
        canvas.style.display = "block";
        initMatrixRain(canvas);
        printCLILine("Hacker code rain mode: ACTIVATED. System secure.", 'text-success');
        playNotificationSound();
    }
}

function initMatrixRain(canvas) {
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    
    const columns = Math.floor(canvas.width / 12);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    const matrixChars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*&";
    
    function draw() {
        ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#10b981";
        ctx.font = "10px monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            const x = i * 12;
            const y = drops[i] * 12;
            
            ctx.fillText(char, x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    matrixRainTimer = setInterval(draw, 35);
}

// ==========================================================================
// ConnectOS Simulated Contact Form Submission & Helper
// ==========================================================================
function submitOSContactForm() {
    const name = document.getElementById("os-contact-name").value.trim();
    const email = document.getElementById("os-contact-email").value.trim();
    const msg = document.getElementById("os-contact-msg").value.trim();
    
    if (!name || !email || !msg) {
        alert("Please complete Name, Email, and Brief text fields.");
        return;
    }
    
    playNotificationSound();
    alert(`Success! Onboarding brief compiled. Data:\nName: ${name}\nEmail: ${email}\nMessage: ${msg}\n\nWe will schedule your consultation call shortly.`);
    
    document.getElementById("os-contact-name").value = "";
    document.getElementById("os-contact-email").value = "";
    document.getElementById("os-contact-msg").value = "";
    
    closeOSWindow('contact-win');
}

function copyTextToClipboardFromOS() {
    const text = `"Hey everyone! 🚀 We built [Company Name] because we got tired of [Common Problem]. Today, we're sharing how we plan to fix that for good. Read our story: [Link]"`;
    navigator.clipboard.writeText(text).then(() => {
        playNotificationSound();
        alert("Planner copy prompt copied successfully!");
    });
}

// ==========================================================================
// Cinematic Storytelling Preloader Logic (ElvaLabs inspired)
// ==========================================================================
function runCinematicLoader() {
    const loader = document.getElementById("cinematic-loader");
    const percentText = document.getElementById("loader-percentage");
    const progressRing = document.getElementById("loader-progress-ring");
    const statementText = document.getElementById("loader-statement");
    
    if (!loader) return;
    
    const statements = [
        "INITIALIZING CORE ENGINE...",
        "WE DO NOT JUST MAKE WEBSITES.",
        "WE DESIGN DIGITAL ECOSYSTEMS.",
        "SPEED INDEX OPTIMIZATIONS ACTIVE...",
        "AI AUTOMATIONS READY...",
        "GROWTH FORMULAS LOADED.",
        "WELCOME TO THE SOCIAL CONNECT."
    ];
    
    let progress = 0;
    const ringRadius = 44;
    const ringCircumference = 2 * Math.PI * ringRadius; // ~276.46
    
    if (progressRing) {
        progressRing.style.strokeDasharray = `${ringCircumference}`;
        progressRing.style.strokeDashoffset = `${ringCircumference}`;
    }
    
    const loaderDuration = 3200; // 3.2 seconds
    const intervalTime = 30; // ms
    const increment = 100 / (loaderDuration / intervalTime);
    
    const interval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loader.classList.add("fade-out");
                playSystemBoot();
                
                setTimeout(() => {
                    loader.remove();
                }, 1200);
            }, 500);
        }
        
        if (percentText) {
            percentText.textContent = `${Math.floor(progress)}%`;
        }
        
        if (progressRing) {
            const offset = ringCircumference - (progress / 100) * ringCircumference;
            progressRing.style.strokeDashoffset = offset;
        }
        
        if (statementText) {
            const statementIndex = Math.min(
                Math.floor((progress / 100) * statements.length),
                statements.length - 1
            );
            if (statementText.textContent !== statements[statementIndex]) {
                statementText.textContent = statements[statementIndex];
                if (synthAudioActive) {
                    playSynthTone(1000 + progress * 6, 'sine', 0.02, 0.02, 0.0001);
                }
            }
        }
    }, intervalTime);
}

// Initialize Lenis Smooth Scroll
function initSmoothScroll() {
    if (window.Lenis) {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            infinite: false
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
        window.lenisInstance = lenis;
    }
}

// ==========================================================================
// ConnectOS Start Menu Popup Controller
// ==========================================================================
function toggleStartMenu() {
    const menu = document.getElementById("os-start-menu");
    if (menu) {
        menu.classList.toggle("hidden");
        playClickSound();
    }
}

// Global click event to close Start Menu when clicking outside
document.addEventListener("click", (e) => {
    const menu = document.getElementById("os-start-menu");
    const startBtn = document.querySelector(".taskbar-start-btn");
    if (menu && !menu.classList.contains("hidden")) {
        if (!menu.contains(e.target) && !startBtn.contains(e.target)) {
            menu.classList.add("hidden");
        }
    }
});

// ==========================================================================
// ConnectOS Virtual Desktop (Workspaces) Controller
// ==========================================================================
function syncWindowVisibilities() {
    const allWindows = document.querySelectorAll(".os-window");
    allWindows.forEach(win => {
        const id = win.id.replace("os-window-", "");
        const targetDesktop = windowDesktops[id] || 1;
        
        // Update the window's badge text
        const badge = document.getElementById(`win-desktop-badge-${id}`);
        if (badge) {
            badge.textContent = `D${targetDesktop}`;
        }
        
        const trayIcon = document.getElementById(`tray-icon-${id}`);
        if (targetDesktop === activeOSDesktop) {
            win.classList.remove("window-desktop-hidden");
            if (trayIcon) {
                trayIcon.style.display = ""; // restore default display style
            }
        } else {
            win.classList.add("window-desktop-hidden");
            if (trayIcon) {
                trayIcon.style.display = "none";
            }
        }
    });
    
    // Update the system status monitor widget
    updateWorkspaceMonitor();
}

function switchOSDesktop(desktopNum) {
    if (activeOSDesktop === desktopNum) return;
    activeOSDesktop = desktopNum;
    
    // Update switcher buttons
    document.querySelectorAll(".desktop-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(`desktop-btn-${desktopNum}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Sync window visibilities
    syncWindowVisibilities();
    
    // Focus first open window on this desktop if any
    let focusedAny = false;
    const allWindows = document.querySelectorAll(".os-window");
    for (let win of allWindows) {
        const id = win.id.replace("os-window-", "");
        if (windowDesktops[id] === activeOSDesktop && openWindows[id]) {
            focusOSWindow(id);
            focusedAny = true;
            break;
        }
    }
    
    // Show floating toast notification
    showOSToast(`Switched to Virtual Desktop ${desktopNum}`);
    playClickSound();
}

function moveWindowToOtherDesktop(winId) {
    const currentDest = windowDesktops[winId] || 1;
    const newDest = currentDest === 1 ? 2 : 1;
    windowDesktops[winId] = newDest;
    
    // Sync window visibilities
    syncWindowVisibilities();
    
    // If we moved the active/focused window, focus another one on the current desktop
    if (focusedWindow === winId) {
        focusedWindow = null;
        // Find another open window on the current desktop to focus
        const allWindows = document.querySelectorAll(".os-window");
        for (let win of allWindows) {
            const id = win.id.replace("os-window-", "");
            if (windowDesktops[id] === activeOSDesktop && openWindows[id]) {
                focusOSWindow(id);
                break;
            }
        }
    }
    
    // Show toast
    showOSToast(`Moved window to Desktop ${newDest}`);
    playClickSound();
}

let osToastTimeout = null;
function showOSToast(message) {
    const toast = document.getElementById("os-toast");
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.remove("hidden");
    
    if (osToastTimeout) clearTimeout(osToastTimeout);
    osToastTimeout = setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

function updateWorkspaceMonitor() {
    const activeDesktopEl = document.getElementById("monitor-active-desktop");
    if (activeDesktopEl) {
        activeDesktopEl.textContent = `Desktop ${activeOSDesktop}`;
    }
    
    const appsListEl = document.getElementById("monitor-apps-list");
    if (!appsListEl) return;
    
    appsListEl.innerHTML = "";
    const appNames = {
        'terminal-win': 'CLI_Terminal',
        'simulator-win': 'ROI_Simulator',
        'erp-win': 'ERP_Portal',
        'planner-win': 'Social_Planner',
        'contact-win': 'Briefcase_Contact'
    };
    
    Object.keys(windowDesktops).forEach(id => {
        const desktop = windowDesktops[id];
        const isOpen = openWindows[id];
        const win = document.getElementById(`os-window-${id}`);
        const isMinimized = win ? win.classList.contains("window-minimized") : true;
        const isHidden = win ? win.classList.contains("window-desktop-hidden") : true;
        
        const row = document.createElement("div");
        row.className = "monitor-app-row";
        
        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${appNames[id]} (D${desktop})`;
        nameSpan.style.color = "var(--text-main)";
        row.appendChild(nameSpan);
        
        const statusSpan = document.createElement("span");
        statusSpan.className = `app-status-badge ${isOpen ? 'open' : 'closed'}`;
        statusSpan.textContent = isOpen ? (isMinimized ? 'MINIMIZED' : 'OPEN') : 'CLOSED';
        row.appendChild(statusSpan);
        
        appsListEl.appendChild(row);
    });
}

// ==========================================================================
// Sliding Premium Control Center Panel Logic & Wallpaper Switcher
// ==========================================================================
function toggleControlCenter() {
    const panel = document.getElementById("control-center-panel");
    if (!panel) return;
    
    panel.classList.toggle("open");
    
    // Rotate the settings cog slightly on toggle
    const toggleBtn = document.getElementById("control-panel-toggle-btn");
    if (toggleBtn) {
        const isOpen = panel.classList.contains("open");
        toggleBtn.style.transform = isOpen ? "rotate(90deg)" : "rotate(0deg)";
    }
    
    if (synthAudioActive) playClickSound();
}

function toggleSynthAudioFromSettings(btn) {
    toggleSynthAudio();
}

function changeAccentColor(primaryHex, gradientCss, glowCss, borderHoverCss, element) {
    // Update root styling variables dynamically
    document.documentElement.style.setProperty('--primary', primaryHex);
    document.documentElement.style.setProperty('--primary-gradient', gradientCss);
    document.documentElement.style.setProperty('--glow-color', glowCss);
    document.documentElement.style.setProperty('--border-color-hover', borderHoverCss);
    
    // Update active state class on preset dots
    const presets = document.querySelectorAll(".color-preset");
    presets.forEach(p => p.classList.remove("active"));
    if (element) element.classList.add("active");
    
    if (synthAudioActive) playClickSound();
}

function changeCursorSize(size, offset, element) {
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;
    
    cursor.style.width = `${size}px`;
    cursor.style.height = `${size}px`;
    cursor.style.top = `${offset}px`;
    cursor.style.left = `${offset}px`;
    
    // Update active class on selector buttons
    const buttons = document.querySelectorAll(".cursor-size-selector button");
    buttons.forEach(b => b.classList.remove("active"));
    if (element) element.classList.add("active");
    
    if (synthAudioActive) playClickSound();
}

function changeOSWallpaper(wallpaperClass) {
    const workspace = document.getElementById("connect-os-workspace");
    if (!workspace) return;
    
    // Clean up current wallpaper class definitions
    workspace.classList.remove("neon-grid", "northern-lights", "dark-space", "cyber-gradient");
    workspace.classList.add(wallpaperClass);
    
    if (synthAudioActive) playClickSound();
}

// Auto-close control center when clicking outside of it
document.addEventListener("click", (e) => {
    const panel = document.getElementById("control-center-panel");
    const toggleBtn = document.getElementById("control-panel-toggle-btn");
    
    if (panel && panel.classList.contains("open")) {
        if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
            panel.classList.remove("open");
            if (toggleBtn) toggleBtn.style.transform = "rotate(0deg)";
            if (synthAudioActive) playClickSound();
        }
    }
});

