export const NAV_LINKS = [
  { en: "Products", ar: "المنتجات", href: "#products" },
  { en: "Features", ar: "المميزات", href: "#features" },
  { en: "How It Works", ar: "كيف يعمل", href: "#how-it-works" },
  { en: "Contact", ar: "تواصل معنا", href: "#contact" },
];

export const PRODUCTS = [
  {
    id: "ishifaa",
    name: { en: "iShifaa", ar: "آي شفاء" },
    tagline: { en: "Your Health, In Your Hands", ar: "صحتك بين يديك" },
    description: {
      en: "A seamless mobile experience for patients to manage their healthcare journey — from booking appointments to accessing medical records.",
      ar: "تجربة متنقلة سلسة للمرضى لإدارة رحلتهم الصحية — من حجز المواعيد إلى الوصول للسجلات الطبية.",
    },
    features: [
      { en: "Online appointment booking", ar: "حجز المواعيد إلكترونياً" },
      { en: "Digital health records access", ar: "الوصول للسجلات الصحية الرقمية" },
      { en: "Prescription management", ar: "إدارة الوصفات الطبية" },
      { en: "Real-time queue tracking", ar: "تتبع الدور في الوقت الفعلي" },
    ],
    accent: "sky" as const,
    icon: "📱",
  },
  {
    id: "qms",
    name: { en: "Shifaa QMS", ar: "شفاء QMS" },
    tagline: { en: "Smart Queue, Zero Wait", ar: "طابور ذكي، بدون انتظار" },
    description: {
      en: "Intelligent queue management that transforms patient flow — reducing wait times and maximizing operational efficiency across your facility.",
      ar: "إدارة ذكية للطوابير تحول تدفق المرضى — تقليل أوقات الانتظار وتحقيق أقصى كفاءة تشغيلية في منشأتك.",
    },
    features: [
      { en: "Intelligent queue algorithms", ar: "خوارزميات طوابير ذكية" },
      { en: "Digital signage integration", ar: "تكامل مع اللافتات الرقمية" },
      { en: "Real-time analytics dashboard", ar: "لوحة تحليلات فورية" },
      { en: "Multi-branch management", ar: "إدارة متعددة الفروع" },
    ],
    accent: "gold" as const,
    icon: "⚡",
  },
  {
    id: "clinic",
    name: { en: "Shifaa Clinic", ar: "شفاء كلينك" },
    tagline: { en: "Your Clinic, Fully Digital", ar: "عيادتك، رقمية بالكامل" },
    description: {
      en: "A comprehensive clinic management system that handles everything from electronic medical records to billing and scheduling — all in one platform.",
      ar: "نظام إدارة عيادات شامل يتولى كل شيء من السجلات الطبية الإلكترونية إلى الفواتير والجدولة — في منصة واحدة.",
    },
    features: [
      { en: "Complete EMR system", ar: "نظام سجلات طبية إلكترونية متكامل" },
      { en: "Smart scheduling engine", ar: "محرك جدولة ذكي" },
      { en: "Automated billing & invoicing", ar: "فوترة وإصدار فواتير تلقائي" },
      { en: "Performance analytics", ar: "تحليلات الأداء" },
    ],
    accent: "navy" as const,
    icon: "🏥",
  },
];

export const FEATURES = [
  {
    icon: "📱",
    title: { en: "Online Booking", ar: "الحجز الإلكتروني" },
    description: {
      en: "24/7 appointment scheduling from any device — patients book on their terms.",
      ar: "جدولة المواعيد على مدار الساعة من أي جهاز — المرضى يحجزون بشروطهم.",
    },
  },
  {
    icon: "📋",
    title: { en: "Electronic Health Records", ar: "السجلات الصحية الإلكترونية" },
    description: {
      en: "Secure, centralized patient data accessible instantly by authorized staff.",
      ar: "بيانات مرضى آمنة ومركزية يمكن الوصول إليها فوراً من قبل الموظفين المصرح لهم.",
    },
  },
  {
    icon: "⚡",
    title: { en: "Smart Queue Management", ar: "إدارة الطوابير الذكية" },
    description: {
      en: "Reduce wait times by up to 60% with intelligent patient flow optimization.",
      ar: "قلل أوقات الانتظار بنسبة تصل إلى 60% مع تحسين ذكي لتدفق المرضى.",
    },
  },
  {
    icon: "🌐",
    title: { en: "Bilingual Interface", ar: "واجهة ثنائية اللغة" },
    description: {
      en: "Full Arabic and English support with RTL layout — built for the Gulf region.",
      ar: "دعم كامل للعربية والإنجليزية مع تخطيط RTL — مصمم لمنطقة الخليج.",
    },
  },
  {
    icon: "📊",
    title: { en: "Analytics Dashboard", ar: "لوحة التحليلات" },
    description: {
      en: "Real-time insights into clinic performance, patient flow, and revenue metrics.",
      ar: "رؤى فورية لأداء العيادة وتدفق المرضى ومقاييس الإيرادات.",
    },
  },
  {
    icon: "🔒",
    title: { en: "Secure & Compliant", ar: "آمن ومتوافق" },
    description: {
      en: "Enterprise-grade encryption and compliance with healthcare data regulations.",
      ar: "تشفير على مستوى المؤسسات والتوافق مع لوائح بيانات الرعاية الصحية.",
    },
  },
];

export const STEPS = [
  {
    number: 1,
    title: { en: "Sign Up", ar: "التسجيل" },
    description: {
      en: "Create your Shifaa account in minutes — no credit card required.",
      ar: "أنشئ حسابك في شفاء خلال دقائق — بدون بطاقة ائتمان.",
    },
  },
  {
    number: 2,
    title: { en: "Connect", ar: "الربط" },
    description: {
      en: "Link your clinic or healthcare practice to the platform.",
      ar: "اربط عيادتك أو ممارستك الصحية بالمنصة.",
    },
  },
  {
    number: 3,
    title: { en: "Configure", ar: "الإعداد" },
    description: {
      en: "Set up your services, schedules, staff, and preferences.",
      ar: "أعد خدماتك وجداولك وموظفيك وتفضيلاتك.",
    },
  },
  {
    number: 4,
    title: { en: "Go Live", ar: "الانطلاق" },
    description: {
      en: "Start serving patients digitally — we're with you every step.",
      ar: "ابدأ بخدمة المرضى رقمياً — نحن معك في كل خطوة.",
    },
  },
];

export const STATS = [
  { value: "500+", label: { en: "Clinics", ar: "عيادة" } },
  { value: "1M+", label: { en: "Patients", ar: "مريض" } },
  { value: "50K+", label: { en: "Daily Appointments", ar: "موعد يومي" } },
  { value: "99.9%", label: { en: "Uptime", ar: "وقت التشغيل" } },
];

export const TESTIMONIALS = [
  {
    quote: {
      en: "iShifaa has completely transformed how our patients engage with us. Appointment no-shows dropped by 40% within the first three months.",
      ar: "لقد غيّر آي شفاء تماماً طريقة تفاعل مرضانا معنا. انخفضت حالات عدم الحضور بنسبة 40% خلال الأشهر الثلاثة الأولى.",
    },
    name: { en: "Dr. Ahmed Al-Sabah", ar: "د. أحمد الصباح" },
    title: { en: "Chief Medical Officer", ar: "المدير الطبي" },
    clinic: { en: "Kuwait Medical Center", ar: "مركز الكويت الطبي" },
    initials: "AS",
    color: "sky" as const,
  },
  {
    quote: {
      en: "The QMS system reduced our average wait time from 45 minutes to under 15. Our patients and staff are both happier than ever.",
      ar: "خفض نظام QMS متوسط وقت الانتظار لدينا من 45 دقيقة إلى أقل من 15. مرضانا وموظفونا أسعد من أي وقت مضى.",
    },
    name: { en: "Sarah Al-Mutairi", ar: "سارة المطيري" },
    title: { en: "Operations Director", ar: "مديرة العمليات" },
    clinic: { en: "Al-Razi Hospital", ar: "مستشفى الرازي" },
    initials: "SM",
    color: "gold" as const,
  },
  {
    quote: {
      en: "Shifaa Clinic streamlined everything — scheduling, billing, records. We saved 20 hours a week on administrative work alone.",
      ar: "نظّم شفاء كلينك كل شيء — الجدولة والفواتير والسجلات. وفرنا 20 ساعة أسبوعياً من العمل الإداري وحده.",
    },
    name: { en: "Dr. Fatima Al-Kandari", ar: "د. فاطمة الكندري" },
    title: { en: "Clinic Director", ar: "مديرة العيادة" },
    clinic: { en: "Modern Care Clinic", ar: "عيادة الرعاية الحديثة" },
    initials: "FK",
    color: "navy" as const,
  },
];

export const FOOTER_LINKS = {
  company: {
    title: { en: "Company", ar: "الشركة" },
    links: [
      { en: "About", ar: "عن شفاء", href: "#" },
      { en: "Careers", ar: "الوظائف", href: "#" },
      { en: "Press", ar: "الصحافة", href: "#" },
      { en: "Contact", ar: "تواصل معنا", href: "#contact" },
    ],
  },
  products: {
    title: { en: "Products", ar: "المنتجات" },
    links: [
      { en: "iShifaa", ar: "آي شفاء", href: "#" },
      { en: "Shifaa QMS", ar: "شفاء QMS", href: "#" },
      { en: "Shifaa Clinic", ar: "شفاء كلينك", href: "#" },
      { en: "Pricing", ar: "الأسعار", href: "#" },
    ],
  },
  resources: {
    title: { en: "Resources", ar: "الموارد" },
    links: [
      { en: "Blog", ar: "المدونة", href: "#" },
      { en: "Documentation", ar: "الوثائق", href: "#" },
      { en: "API", ar: "واجهة البرمجة", href: "#" },
      { en: "Support", ar: "الدعم", href: "#" },
    ],
  },
  legal: {
    title: { en: "Legal", ar: "قانوني" },
    links: [
      { en: "Privacy Policy", ar: "سياسة الخصوصية", href: "#" },
      { en: "Terms of Service", ar: "شروط الخدمة", href: "#" },
      { en: "Cookie Policy", ar: "سياسة الكوكيز", href: "#" },
    ],
  },
};
