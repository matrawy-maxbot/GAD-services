function showPrices() {
    document.getElementsByClassName("prices-parent")[0]?.classList.add("active");
}

function designPrices() {
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("programming");
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("marketing");
    document.getElementsByClassName("prices-parent")[0]?.classList.add("design");
    document.body.style.overflowY = "hidden";
    showPrices();
}

function programmingPrices() {
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("design");
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("marketing");
    document.getElementsByClassName("prices-parent")[0]?.classList.add("programming");
    document.body.style.overflowY = "hidden";
    showPrices();
}

function marketingPrices() {
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("programming");
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("design");
    document.getElementsByClassName("prices-parent")[0]?.classList.add("marketing");
    document.body.style.overflowY = "hidden";
    showPrices();
}

function closePrices() {
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("design");
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("programming");
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("marketing");
    document.body.style.overflowY = "auto";
    document.getElementsByClassName("prices-parent")[0]?.classList.remove("active");
}

function getFacebookPage() {
    console.log(" get Facebook page ");
}

function getBehanceAccount() {
    console.log(" get Behance page ");
}

function getWhatsappAccount() {
    console.log(" get Whatsapp page ");
}

function arabicTranslate(lang) {

    const nav = {
        clients:{ en: "Clients", ar: "العملاء" },
        services:{ en: "Services", ar: "الخدمات" },
        feedback:{ en: "Feedback", ar: "التعليقات" },
        contactUs:{ en: "Contact Us", ar: "اتصل بنا" },
        button:{ en: "Create Request", ar: "أنشئ طلب" },
    }

    const firstSection = {
        title:{ en: ["Creative", "Solution", "for Your", "business"], ar: ["أفكار", "ابداعية", "لتنمية", "أعمالك"] },
        sub_title:{ en: "Expert Design, Development and Marketing services", ar: "خدمات احترافية في التصميم، التطوير، والتسويق" },
        description:{ en: ["From crafting stunning", "websites and mobile apps", "to executing powerful", "marketing", "strategies,", "designing", "impactful ads, and managing social media", "pages, we help businesses of all sizes reach their", "goals."], ar: ["من تصميم", "مواقع ويب وتطبيقات جوال", "مذهلة إلى تنفيذ استراتيجيات", "تسويقية", "فعّالة،", "وتصميم", "إعلانات مؤثرة، وإدارة صفحات التواصل الاجتماعي، نحن نساعد الشركات من جميع الأحجام على تحقيق", "أهدافها."] },
        button:{ en: "Start your project now", ar: "ابدأ مشروعك الآن" }
    }

    const secondSection = {
        title:{ en: ["Proudly", "Serving These Clients"] , ar: ["نفخر",  "بخدمة هؤلاء العملاء"] }
    }

    const thirdSection = {
        title:{ en:"Join Our Growing Community<br>of Satisfied Clients", ar:"كن جزءاً من مجتمعنا المميز<br>بعملائنا الناجحين" },
        sub_title:{ en:"We’ve helped our clients achieve success by meeting their requirements with innovative solutions <br>in design, development, and marketing.", ar:"" }
    }


    
}