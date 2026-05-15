const texts = {
    'en': {
        'heroSection': 'Hero Section',
        'fullName': 'Armin Rahmati',
        'occupation': 'Software Engineer',
        'resume': 'Resume',

        'aboutMeTitle': 'About Me',
        'aboutMeIntro': 'Backend and automation engineer with <strong>3</strong> years of experience (1 year corporate, 2 years freelance) building APIs, real-time platforms, and workflow automations.<br>\n' +
            '            Core stack: Node.js, Go, FastAPI, Redis, PostgreSQL/TimescaleDB, with strong focus on clean architecture, observability, and performance tuning.<br>\n' +
            '            I also work with n8n orchestration and data analytics workflows, and I am currently pursuing an MSc in cybersecurity at <strong>Amirkabir</strong> University.<br><br>' +
            '            Beyond the world of coding, I maintain a harmonious lifestyle by listening to podcasts, engaging in regular\n' +
            '            fitness activities, and channeling my creativity through the guitar, culminating in a fulfilling and\n' +
            '            balanced life.',
        'specializationTitle': 'My areas of specialization include:',
        'programmingLanguages': 'Programming: JavaScript/TypeScript, Python, Go',
        'frameworks': 'Frameworks and runtimes: <strong>Node.js (Express, Nest)</strong>, <strong>FastAPI</strong>, n8n',
        'additionalSkills': 'Additional Skills: <strong>Linux (server deployment, bash, access control)</strong>, <strong>Databases (PostgreSQL, MySQL, Redis, TimescaleDB)</strong>, BullMQ/Celery background jobs, Docker, Git/GitLab CI, Prometheus/ELK, <strong>REST APIs & WebSockets</strong>, Web Scraping (Puppeteer, Selenium)',
        'familiarityWith': 'Familiarity with: BPMN 2.0, IoT sensor analytics, NLP, cryptography fundamentals, <strong>system design patterns</strong>, and workflow automation bots',
        'personalInfoTitle': 'Personal Information:',
        'ageTitle': 'Age: 22',
        'degree': "Degree: <strong>Master's student</strong> in Computer Cyber Security at Amirkabir University of Technology",
        'preferredWorkLocations': 'Preferred Work Locations: Tehran',
        'remoteWork': 'Remote Work: Open to remote positions with occasional travel as required',
        'workInPerson': 'Work in person: Availability to Start from 2024-07-08 (۱۴۰۳/۰۴/۱۸)',
        'militaryServiceStatus': 'Military Service Status: Mashmool',
        // 'maritalStatus': 'Marital Status: Single',

        'experienceTitle': 'Experience',
        'oticampTitle': 'OTICAMP - Head of Backend Developer (FastAPI)',
        'oticampDateRange': 'Jan 2026 - Present',
        'oticampDescription': '<ul>' +
            '<li>Architected a modular monolith for a radio network monitoring system (RNMS).</li>' +
            '<li>Built a high-performance real-time layer with FastAPI WebSockets and Redis Pub/Sub for concurrent dashboard broadcasting.</li>' +
            '<li>Optimized time-series analytics with TimescaleDB for faster historical signal-quality queries.</li>' +
            '<li>Standardized API docs with Scalar OpenAPI to improve frontend integration speed.</li>' +
            '<li>Established CI/CD workflows and code-review standards based on SOLID and clean code practices.</li>' +
            '</ul>',
        'teachingAssistantTitle': 'Tasu Ventures',
        'dateRange2': 'Apr 2024 - Oct 2024',
        'teachingAssistantDescription': '<ul>' +
            '<li>Developed web scrapers with request-rate tuning to bypass client rate limits and keep data collection reliable.</li>' +
            '<li>Built an LLM-powered chatbot with RAG by indexing scraped data in PostgreSQL and enforcing business rules in prompts.</li>' +
            '<li>Managed daily async workflows with BullMQ and Redis queues to maintain high reliability.</li>' +
            '<li>Integrated Instagram and Facebook APIs using webhooks and challenge-response verification.</li>' +
            '<li>Implemented RBAC middleware for four roles and improved observability with structured Prometheus logging.</li>' +
            '<li>Participated in code reviews and maintained full unit/E2E coverage for core modules.</li>' +
            '</ul>',
        'mohaymenTitle': 'Mohaymen ICT Group - Java Backend Developer',
        'mohaymenDateRange': 'Mar 2026 - Present',
        'mohaymenDescription': '<ul>' +
            '<li>Developing the intelligent audit assistant as part of the national tax system project.</li>' +
            '<li>Building and maintaining Java-based backend services using Spring Boot for high-reliability enterprise workflows.</li>' +
            '<li>Designing RESTful APIs and integrating with tax authority data pipelines for automated audit processing.</li>' +
            '<li>Collaborating with cross-functional teams to deliver AI-assisted compliance and auditing features.</li>' +
            '</ul>',

        'projectsTitle': 'Projects',
        'storeLocatorTitle': 'Store Locator',
        'storeLocatorDescription': 'The system enables parts buyers to submit requests for specific parts to spare parts stores. Sellers respond based on their inventory. Buyers can track responses and view seller locations on a map. The system also displays the shortest route from the buyer\'s location to the store.',
        'storeLocatorButton': 'Domain',
        'compilerTitle': 'Compiler',
        'compilerDescription': 'Python-based compiler that can generate intermediate code from input files, perform semantic analysis, and optimize code through register allocation.',
        'paletteTitle': 'palette',
        'paletteDescription': 'AI-driven platform for online business management and social media engagement. It unifies inventory data from multiple sources for real-time insights, boosting efficiency, lowering support costs, and enhancing customer satisfaction.',
        
        'compilerButton': 'View Project',

        'laravelBlogTitle': 'Laravel Blog',
        'laravelBlogDescription': 'Blog platform built with Laravel, Livewire, Jetstream, and Tailwind CSS, featuring authentication, admin workflows, content management, and search-ready architecture.',
        'laravelBlogButton': 'View Project',
        'ecommerceTitle': 'Ecommerce',
        'ecommerceDescription': 'Multilingual and dynamic, order tracking, inventory management, role and access level management, product return and discount sections, rating and review, payment gateway, wishlist functionality, shopping cart, user and admin panel.',
        'ecommerceButton': 'View Project',
        'gitBranchTitle': 'Git branch',
        'gitBranchDescription': 'Implementing Git branching concepts graphically, offering hands-on experience in managing version control within a simulated environment.',
        'gitBranchButton': 'View Project',

        'smallProjectsTitle': 'Small Projects',
        'textEditorTitle': 'Text Editor',
        'textEditorDescription': 'Text editor including open/save, print, cut/copy/paste, undo/redo operations, and font customization options such as styles and sizes.',
        'textEditorButton': 'View Project',

        'educationTitle': 'Education',
        'universityName1': 'Babol Noshirvani University of Technology',
        'degree1': "Bachelor's degree, Computer Software Engineering",
        'date1Start': 'September 2020',
        'date1End': 'September 2024',
        'major1': 'Major: Computer Engineering, Computer Science Track',
        'gpa1': 'GPA: 3/4',
        'universityName2': 'Amirkabir University of Technology (Tehran Polytechnic)',
        'degree2': "Master's degree, Computer Cyber Security",
        'date2Start': 'September 2024',
        'date2End': '',
        'gpa2': '',

        'contactTitle': 'Contact',
        'github': 'Github',
        'telegram': 'Telegram',
        'gmail': 'Gmail',
        'linkedin': 'Linkedin',
        'footerText': 'MIT License'


    },
    'fa': {
        'heroSection': 'بخش شاهرگ',
        'fullName': 'آرمین رحمتی',
        'occupation': 'مهندس نرم افزار',
        'resume': 'رزومه',

        'aboutMeTitle': 'درباره من',
        'aboutMeIntro': 'مهندس بک‌اند و اتوماسیون با <strong>3</strong> سال تجربه (1 سال سازمانی، 2 سال فریلنس) در توسعه API، پلتفرم‌های بلادرنگ و گردش‌کارهای اتوماسیون.<br>\n' +
            'استک اصلی من Node.js، Go، FastAPI، Redis و PostgreSQL/TimescaleDB است و روی معماری تمیز، مشاهده‌پذیری و بهینه‌سازی عملکرد تمرکز دارم.<br>\n' +
            'همچنین روی n8n و گردش‌کارهای تحلیل داده کار می‌کنم و در حال حاضر دانشجوی کارشناسی ارشد امنیت سایبری در <strong>دانشگاه امیرکبیر</strong> هستم.<br><br>' +
            'فراتر از دنیای کدنویسی، با گوش دادن به پادکست‌ها، فعالیت ورزشی منظم و نواختن گیتار، سبک زندگی متعادلی را حفظ می‌کنم.',
        'specializationTitle': 'زمینه های تخصصی من عبارتند از:',
        'programmingLanguages': 'زبان‌ها: JavaScript/TypeScript، Python، Go',
        'frameworks': 'فریم‌ورک‌ها و محیط اجرا: <strong>Node.js (Express, Nest)</strong>، <strong>FastAPI</strong>، n8n',
        'additionalSkills': 'مهارت‌های تکمیلی: <strong>Linux (استقرار سرور، bash، کنترل دسترسی)</strong>، <strong>پایگاه‌داده‌ها (PostgreSQL، MySQL، Redis، TimescaleDB)</strong>، صف‌های BullMQ/Celery، Docker، Git/GitLab CI، Prometheus/ELK، <strong>REST APIs و WebSockets</strong>، وب‌اسکرپینگ (Puppeteer، Selenium)',
        'familiarityWith': 'آشنایی با: BPMN 2.0، تحلیل داده حسگرهای IoT، NLP، مبانی رمزنگاری، <strong>الگوهای طراحی سیستم</strong> و اتوماسیون بات‌ها',
        'personalInfoTitle': 'اطلاعات شخصی:',
        'ageTitle': 'سن: 22',
        'degree': 'مدرک تحصیلی: <strong>دانشجوی کارشناسی ارشد</strong> امنیت سایبری کامپیوتر در دانشگاه صنعتی امیرکبیر',
        'preferredWorkLocations': 'موقعیت‌های کار مورد علاقه: تهران',
        'remoteWork': 'کار از راه دور:  در صورت لزوم به موقعیت های راه دور با سفرهای گاه به گاه مشکلی ندارم.',
        'workInPerson': 'کار به صورت حضوری: در دسترس بودن برای شروع از ۱۴۰۳/۰۴/۱۸ .',
        'militaryServiceStatus': 'وضعیت سربازی: مشمول',
        // 'maritalStatus': 'وضعیت تاهل: مجرد',

        'experienceTitle': 'تجربه‌ها',
        'oticampTitle': 'OTICAMP - سرپرست توسعه بک‌اند (FastAPI)',
        'oticampDateRange': 'ژانویه 2026 - اکنون',
        'oticampDescription': '<ul>' +
            '<li>معماری Modular Monolith را برای سامانه پایش شبکه رادیویی (RNMS) طراحی و پیاده‌سازی کردم.</li>' +
            '<li>یک لایه بلادرنگ با FastAPI WebSockets و Redis Pub/Sub برای پخش همزمان داده‌ها به چندین داشبورد توسعه دادم.</li>' +
            '<li>با TimescaleDB، تحلیل داده‌های سری‌زمانی را برای گزارش‌های کیفیت سیگنال بهینه کردم.</li>' +
            '<li>مستندسازی API را با Scalar OpenAPI استاندارد کردم تا یکپارچه‌سازی فرانت‌اند سریع‌تر شود.</li>' +
            '<li>فرایندهای CI/CD و استانداردهای بازبینی کد بر پایه SOLID و Clean Code را برقرار کردم.</li>' +
            '</ul>',
        'teachingAssistantTitle': 'Tasu Ventures',
        'dateRange2': 'آوریل 2024 - اکتبر 2024',
        'teachingAssistantDescription': '<ul>' +
            '<li>وب‌اسکرپرهایی با تنظیم نرخ درخواست توسعه دادم تا محدودیت‌های نرخ کلاینت دور زده شوند و جمع‌آوری داده پایدار بماند.</li>' +
            '<li>چت‌بات مبتنی بر LLM با RAG پیاده‌سازی کردم و داده‌های اسکرپ‌شده را در PostgreSQL ایندکس کردم.</li>' +
            '<li>تسک‌های ناهمزمان روزانه را با BullMQ و Redis Queue مدیریت کردم.</li>' +
            '<li>APIهای اینستاگرام و فیسبوک را با Webhook و Challenge-Response یکپارچه کردم.</li>' +
            '<li>RBAC برای 4 نقش پیاده‌سازی کردم و با لاگ‌گذاری Prometheus قابلیت مشاهده‌پذیری را بهبود دادم.</li>' +
            '<li>در بازبینی کد مشارکت داشتم و پوشش کامل Unit/E2E برای ماژول‌های اصلی حفظ شد.</li>' +
            '</ul>',
        'mohaymenTitle': 'گروه فناوری اطلاعات و ارتباطات مهیمن - توسعه‌دهنده بک‌اند Java',
        'mohaymenDateRange': 'مارس 2026 - اکنون',
        'mohaymenDescription': '<ul>' +
            '<li>در حال توسعه دستیار هوشمند حسابرسی در قالب پروژه ملی نظام مالیاتی هستم.</li>' +
            '<li>توسعه و نگهداری سرویس‌های بک‌اند مبتنی بر Java و Spring Boot برای گردش‌کارهای سازمانی با قابلیت اطمینان بالا.</li>' +
            '<li>طراحی API‌های RESTful و یکپارچه‌سازی با پایپ‌لاین‌های داده سازمان امور مالیاتی برای پردازش خودکار حسابرسی.</li>' +
            '<li>همکاری با تیم‌های چندتخصصی برای ارائه ویژگی‌های انطباق و حسابرسی با کمک هوش مصنوعی.</li>' +
            '</ul>',

        'projectsTitle': 'پروژه‌ها',
        'storeLocatorTitle': 'مکان یاب فروشگاه',
        'storeLocatorDescription': 'این سیستم خریداران قطعات را قادر می سازد تا درخواست قطعات خاص را به فروشگاه های قطعات یدکی ارسال کنند. فروشندگان بر اساس موجودی خود پاسخ می دهند. خریداران می توانند پاسخ ها را ردیابی کنند و مکان های فروشنده را روی نقشه مشاهده کنند. این سیستم همچنین کوتاه ترین مسیر را از محل خریدار به فروشگاه نمایش می دهد.',
        'storeLocatorButton': 'دامنه',
        'compilerTitle': 'کامپایلر',
        'paletteTitle': 'پلت',
        'paletteDescription': 'پلت فرم مبتنی بر هوش مصنوعی برای مدیریت کسب و کار آنلاین و تعامل با رسانه های اجتماعی. داده های موجودی را از منابع متعدد برای بینش در زمان واقعی، افزایش کارایی، کاهش هزینه های پشتیبانی و افزایش رضایت مشتری یکپارچه می کند.',

        'compilerDescription': 'کامپایلر مبتنی بر پایتون که می تواند کد میانی را از فایل های ورودی تولید کند، تجزیه و تحلیل معنایی را انجام دهد و کد را از طریق تخصیص رجیستر بهینه کند.',
        'compilerButton': 'مشاهده پروژه',

        'laravelBlogTitle': 'وبلاگ Laravel',
        'laravelBlogDescription': 'پلتفرم وبلاگ ساخته شده با Laravel، Livewire، Jetstream و Tailwind CSS با احراز هویت، مدیریت محتوا، پنل ادمین و ساختار مناسب برای جستجو و توسعه.',
        'laravelBlogButton': 'مشاهده پروژه',
        'ecommerceTitle': 'فروشگاه آنلاین',
        'ecommerceDescription': 'چند زبانه و پویا، ردیابی سفارش، مدیریت موجودی، مدیریت نقش و سطح دسترسی، بخش های بازگشت و تخفیف محصول، رتبه بندی و بررسی، درگاه پرداخت، قابلیت لیست علاقه مندی ها، سبد خرید، پنل کاربری و مدیریت.',
        'ecommerceButton': 'مشاهده پروژه',
        'gitBranchTitle': 'شاخه گیت',
        'gitBranchDescription': 'پیاده سازی مفاهیم انشعاب Git به صورت گرافیکی، ارائه تجربه عملی در مدیریت کنترل نسخه در یک محیط شبیه سازی شده.',
        'gitBranchButton': 'مشاهده پروژه',

        'smallProjectsTitle': 'پروژه‌های کوچک',
        'textEditorTitle': 'ویرایشگر متن',
        'textEditorDescription': 'ویرایشگر متن شامل باز کردن/ذخیره، چاپ، برش/کپی/چسباندن، عملیات لغو/دوباره، و گزینه های سفارشی سازی فونت مانند سبک ها و اندازه ها.',
        'textEditorButton': 'مشاهده پروژه',

        'educationTitle': 'تحصیلات',
        'universityName1': 'دانشگاه صنعتی نوشیروانی بابل',
        'degree1': 'کارشناسی، مهندسی نرم افزار کامپیوتر',
        'date1Start': 'سپتامبر ۲۰۲۰',
        'date1End': 'سپتامبر ۲۰۲۴',
        'major1': 'رشته: مهندسی کامپیوتر، رشته علوم کامپیوتر',
        'gpa1': 'معدل: ۳/۴',
        'universityName2': 'دانشگاه صنعتی امیرکبیر (پلی تکنیک تهران)',
        'degree2': 'کارشناسی ارشد، امنیت سایبری کامپیوتر',
        'date2Start': 'سپتامبر ۲۰۲۴',
        'date2End': '',
        'gpa2': '',

        'contactTitle': 'ارتباط با من',
        'github': 'گیت‌هاب',
        'telegram': 'تلگرام',
        'gmail': 'ایمیل',
        'linkedin': 'لینکدین',
        'footerText': 'مجوز MIT'
    }
};


const boldedTexts = {
    'frameworks': ['Laravel', 'Node.js', 'Tailwind CSS'],
    'additionalSkills': ['Linux', ' SQL', 'REST APIs'],
    'Age': ['22'],
    'Degree': ['Bachelor of Science'],
    'مدرک تحصیلی': ['لیسانس'],
    'Location': ['Tehran'],
    'موقعیت‌های کار مورد علاقه': ['تهران'],
    'Date of Birth': ['۱۴۰۳/۰۴/۱۸'],
    'Remote Work': ['Open to remote'],
    'Military Service Status': ['Mashmool'],
    'وضعیت سربازی': ['مشمول'],
    'Marital Status': ['Single'],
    'وضعیت تاهل': ['مجرد'],
};

const boldPatterns = Object.values(boldedTexts)
    .reduce((allTexts, value) => allTexts.concat(value), [])
    .map(text => text.trim())
    .filter(Boolean);

const boldRegex = boldPatterns.length
    ? new RegExp(`(${boldPatterns.join('|')})`, 'g')
    : null;

function changeLanguage(language) {
    const sections = ['heroSection', 'aboutMeSection', 'ExperienceSection', 'section1', 'section2', 'section3', 'EducationSection', 'ContactSection', 'FooterSection'];
    sections.forEach(section => translateSection(language, section));
    updatePageLanguage(language);
    return false;
}

function translateSection(language, sectionId) {
    const elements = document.querySelectorAll(`#${sectionId} [data-translate]`);
    const sectionTexts = texts[language] || {};

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        let translatedText = sectionTexts[key];

        if (typeof translatedText !== 'string') {
            return;
        }

        if (boldRegex) {
            translatedText = translatedText.replace(boldRegex, '<strong>$1</strong>');
        }

        element.innerHTML = translatedText;
    });

    toggleRTL(sectionId, language);
}

function toggleRTL(sectionId, language) {
    const section = document.getElementById(sectionId);
    if (language === 'fa') {
        section.classList.add('rtl');
    } else {
        section.classList.remove('rtl');
    }
}

function updatePageLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';

    const label = document.querySelector('[data-language-label]');
    if (label) {
        label.textContent = language === 'fa' ? 'زبان' : 'Language';
    }
}
