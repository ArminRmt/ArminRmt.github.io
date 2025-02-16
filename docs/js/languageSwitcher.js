const texts = {
    'en': {
        'heroSection': 'Hero Section',
        'fullName': 'Armin Rahmati',
        'occupation': 'Backend Dev',
        'resume': 'Resume',

        'aboutMeTitle': 'About Me',
        'aboutMeIntro': 'Motivated person with <strong>2</strong> years of experience in developing web applications and APIs.<br>\n' +
            '            Diligent in solving complex problems, collaborating effectively within teams, and learning new technologies.<br>\n' +
            '            Currently, studying system design and architecture, focusing on developing scalable, high-performing, and\n' +
            '            clean code optimized\n' +
            '            for data storage solutions.<br><br>' +
            '\n' +
            '\n' +
            '            Beyond the world of coding, I maintain a harmonious lifestyle by listening to podcasts, engaging in regular\n' +
            '            fitness activities, and channeling my creativity through the guitar, culminating in a fulfilling and\n' +
            '            balanced life.',
        'specializationTitle': 'My areas of specialization include:',
        'programmingLanguages': 'JavaScript: Async/Await, jQuery',
        'frameworks': 'Frameworks: Prior Stack: Laravel, Current Stack: <strong>Node.js(Express,ES6,PM2)</strong>, Tailwind CSS, Vue.js',
        'additionalSkills': 'Additional Skills: Linux(File System, bash script), <strong>SQL(PostgreSQL,MySQL)</strong> & NoSQL databases, Unit Testing, Caching, REST APIs, JavaFx, PyQt',
        'familiarityWith': 'Familiarity with: machine learning, compiler design, Hardware language, modular microservice design, Search Engines(Elasticsearch)',
        'personalInfoTitle': 'Personal Information:',
        'ageTitle': 'Age: 22',
        'degree': 'Degree: Bachelor of Science in Computer Software Engineering',
        'preferredWorkLocations': 'Preferred Work Locations: Tehran',
        'remoteWork': 'Remote Work: Open to remote positions with occasional travel as required',
        'workInPerson': 'Work in person: Availability to Start from 2024-07-08 (۱۴۰۳/۰۴/۱۸)',
        'militaryServiceStatus': 'Military Service Status: Mashmool',
        // 'maritalStatus': 'Marital Status: Single',

        'experienceTitle': 'Experience',
        'internshipTitle': 'Internship - Babol Noshirvani University of Technology',
        'teachingAssistantTitle': 'Teaching Assistant - Babol Noshirvani University of Technology',
        'dateRange1': 'Jan 2023 - Mar 2023',
        'dateRange2': 'Apr 2022 - Jan 2022',
        'internshipDescription': 'Contributed as a backend programmer within a team for a startup project, focusing on Node.js and Docker Developed a buyer\'s request management system and implemented geolocation features for locating the nearest car spare parts',
        'internshipTags': ['Node.js', 'Docker', 'Socket.io', 'Geolocation', 'REST API', 'React.js'],
        'teachingAssistantDescription': 'Instructed students on fundamental networking concepts, protocols, and technologies, including TCP/IP, DNS, DHCP, VLANs, and routing protocols Provided practical guidance on network simulation tools such as Cisco Packet Tracer and Wireshark',
        'teachingAssistantTags': ['IP Addressing', 'Routing', 'Firewalls', 'Network Security', 'Network Protocols (TCP/IP, UDP, ICMP, etc.)'],

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
        'laravelBlogDescription': 'The system enables parts buyers to submit requests for specific parts to spare parts stores. Sellers respond based on their inventory. Buyers can track responses and view seller locations on a map. The system also displays the shortest route from the buyer\'s location to the store.',
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
        'universityName2': 'National Organization for Development of Exceptional Talents (Sampad)',
        'degree2': 'High School Diploma, Mathematics',
        'date2Start': 'September 2015',
        'date2End': 'September 2020',
        'gpa2': 'GPA: 19.43/20',

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
        'occupation': 'توسعه دهنده Backend',
        'resume': 'رزومه',

        'aboutMeTitle': 'درباره من',
        'aboutMeIntro': 'فردی با انگیزه با 2 سال سابقه در توسعه برنامه های کاربردی وب و API\n' +
            'کوشا در حل مشکلات پیچیده، همکاری موثر در تیم ها و یادگیری تکنولوژی های جدید\n' +
            'در حال حاضر، در حال مطالعه طراحی و معماری سیستم، با تمرکز بر توسعه کد مقیاس پذیر، با کارایی بالا و تمیز بهینه شده برای راه حل های ذخیره سازی داده ها' +
            '\n<br><br>' +
            'فراتر از دنیای کدنویسی، من با گوش دادن به پادکست ها، درگیر شدن در فعالیت های تناسب اندام منظم و هدایت خلاقیتم از طریق گیتار، سبک زندگی هماهنگی را حفظ میکنم که به یک زندگی کامل و متعادل ختم میشود.',
        'specializationTitle': 'زمینه های تخصصی من عبارتند از:',
        'programmingLanguages': 'جاواسکریپت: Async/Await, jQuery',
        'frameworks': 'فریم ورک ها: Prior Stack: Laravel, Current Stack: <strong>Node.js(Express,ES6,PM2)</strong>, Tailwind CSS, Vue.js ',
        'additionalSkills': 'مهارت‌های اضافی: Linux(File System, bash script), <strong>SQL(PostgreSQL,MySQL)</strong> & NoSQL databases, Unit Testing, Caching, REST APIs, JavaFx, PyQt',
        'familiarityWith': 'آشنایی با: machine learning, compiler design, Hardware language, modular microservice design, Search Engines(Elasticsearch)',
        'personalInfoTitle': 'اطلاعات شخصی:',
        'ageTitle': 'سن: 22',
        'degree': 'مدرک تحصیلی: کارشناسی ارشد مهندسی کامپیوتر امنیت سایبری',
        'preferredWorkLocations': 'موقعیت‌های کار مورد علاقه: تهران',
        'remoteWork': 'کار از راه دور:  در صورت لزوم به موقعیت های راه دور با سفرهای گاه به گاه مشکلی ندارم.',
        'workInPerson': 'کار به صورت حضوری: در دسترس بودن برای شروع از ۱۴۰۳/۰۴/۱۸ .',
        'militaryServiceStatus': 'وضعیت سربازی: مشمول',
        // 'maritalStatus': 'وضعیت تاهل: مجرد',

        'experienceTitle': 'تجربه ها',
        'internshipTitle': 'برنامه نویس بک اند - دانشگاه صنعتی امیرکبیر تهران',
        'teachingAssistantTitle': 'برنامه نویس بک اند',
        'dateRange1': 'فروردین 1402 - اردیبهشت 1402',
        'dateRange2': 'فروردین 1401 - دی 1400',
        'internshipDescription': 'کاراموزی سیستم مدیریت درخواست خریدار با موقعیت جغرافیایی برای مکان یابی قطعات یدکی خودرو در نزدیکی، و پیاده سازی یک سیستم اطلاع رسانی و صف پیام با حافظه کارآمد با استفاده از مدل publish-subscribe. توسعه دهنده backend (node ​​js)',
        'internshipTags': ['Node.js', 'Docker', 'Socket.io', 'Geolocation', 'REST API', 'React.js'],
        'teachingAssistantDescription': 'توسعه وب اسکرپر و ربات چت. APIهای فیس‌بوک/اینستاگرام برای رسانه‌های اجتماعی با استفاده از شیوه‌های clean code و الگوی طراحی مدیریت وظایف ناهمزمان با استفاده از BullMQ، همین طور transactions, and promises. شرکت در code reviews برای حفظ کیفیت بالای کد شرکت کرد. تست های unit/E2E  و لاگ پرومتئوس برای همه ماژول‌ها اجرا شده است. نقش: توسعه دهنده بک اند (node ​​js)',
        'teachingAssistantTags': ['آدرس دهی IP', 'مسیریابی', 'دیواره های آتش', 'امنیت شبکه', 'پروتکل های شبکه (TCP/IP، UDP، ICMP، و غیره)'],

        'projectsTitle': 'پروژه‌ها',
        'storeLocatorTitle': 'مکان یاب فروشگاه',
        'storeLocatorDescription': 'این سیستم خریداران قطعات را قادر می سازد تا درخواست قطعات خاص را به فروشگاه های قطعات یدکی ارسال کنند. فروشندگان بر اساس موجودی خود پاسخ می دهند. خریداران می توانند پاسخ ها را ردیابی کنند و مکان های فروشنده را روی نقشه مشاهده کنند. این سیستم همچنین کوتاه ترین مسیر را از محل خریدار به فروشگاه نمایش می دهد.',
        'storeLocatorButton': 'دامنه',
        'compilerTitle': 'کامپایلر',
        'paletteTitle': 'پلت',
        'paletteDescription': 'پلت فرم مبتنی بر هوش مصنوعی برای مدیریت کسب و کار آنلاین و تعامل با رسانه های اجتماعی. داده های موجودی را از منابع متعدد برای بینش در زمان واقعی، افزایش کارایی، کاهش هزینه های پشتیبانی و افزایش رضایت مشتری یکپارچه می کند.',

        'compilerDescription': 'کامپایلر مبتنی بر پایتون که می تواند کد میانی را از فایل های ورودی تولید کند، تجزیه و تحلیل معنایی را انجام دهد و کد را از طریق تخصیص رجیستر بهینه کند.',
        'compilerButton': 'مشاهده پروژه',

        'laravelBlogTitle': 'Laravel Blog',
        'laravelBlogButton': 'مشاهده پروژه',
        'ecommerceTitle': 'تجارت الکترونیک',
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
        'universityName2': 'سازمان ملی پرورش استعدادهای استثنایی (سمپاد)',
        'degree2': 'دیپلم دبیرستان، ریاضی',
        'date2Start': 'سپتامبر ۲۰۱۵',
        'date2End': 'سپتامبر ۲۰۲۰',
        'gpa2': 'معدل: ۱۹.۴۳/۲۰',

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

function changeLanguage(language) {
    const sections = ['heroSection', 'aboutMeSection', 'ExperienceSection', 'section1', 'section2', 'section3', 'EducationSection', 'ContactSection', 'FooterSection'];
    sections.forEach(section => translateSection(language, section));
}

function translateSection(language, sectionId) {
    const elements = document.querySelectorAll(`#${sectionId} [data-translate]`);
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        let translatedText = texts[language][key];

        for (const key in boldedTexts) {
            if (boldedTexts.hasOwnProperty(key)) {
                let boldedText = '';
                if (Array.isArray(boldedTexts[key])) {
                    boldedText = boldedTexts[key].join('|');
                } else {
                    boldedText = boldedTexts[key];
                }
                const regex = new RegExp(`(${boldedText})`, 'g');
                translatedText = translatedText.replace(regex, '<strong>$1</strong>');
            }
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