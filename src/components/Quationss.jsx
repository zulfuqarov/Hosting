import React, { useState } from 'react'

const faq = [
    {
        question: "Hosting planları haqqında necə məlumat ala bilərəm?",
        answer: "Bizim müxtəlif hosting planlarımız haqqında ətraflı məlumatı 'Hosting Planları' bölməsində tapa bilərsiniz. Əlavə suallarınız üçün müştəri xidmətlərimizə müraciət edə bilərsiniz."
    },
    {
        question: "Tək kliklə quraşdırma nə deməkdir?",
        answer: "Tək kliklə quraşdırma, seçdiyiniz platforma və ya tətbiqin serverinizə avtomatik olaraq sadə və sürətli şəkildə yüklənməsini təmin edən bir xüsusiyyətdir. Bu, uzun və çətin quraşdırma proseslərini asanlaşdırır."
    },
    {
        question: "Hosting xidmətiniz təhlükəsizdirmi?",
        answer: "Bəli, hosting xidmətimiz SSL sertifikatları ilə təmin olunub, məlumatlarınızın təhlükəsizliyini qorumaq üçün ən son şifrələmə metodlarından istifadə edirik."
    },
    {
        question: "Yedəkləmə (Backup) funksiyası varmı?",
        answer: "Bəli, hər bir hosting paketimiz avtomatik yedəkləmə xüsusiyyəti ilə gəlir. İstədiyiniz zaman məlumatlarınızı bərpa edə bilərsiniz."
    },
    {
        question: "Hosting xidmətini necə idarə edə bilərəm?",
        answer: "Hosting xidmətinizi asanlıqla idarə etmək üçün intuitiv bir idarəetmə paneli təklif edirik. Buradan server resurslarınızı, e-poçt hesablarınızı və saytınızı rahatlıqla idarə edə bilərsiniz."
    },
    {
        question: "Müştəri dəstəyi nə vaxt mövcuddur?",
        answer: "Müştəri dəstəyimiz 7/24 fəaliyyət göstərir. Hər hansı bir probleminiz və ya sualınız varsa, bizimlə əlaqə saxlaya bilərsiniz."
    },
    {
        question: "Server yerləşdirmə (Deployment) prosesi necə işləyir?",
        answer: "Server yerləşdirmə prosesi çox sadədir. Tək kliklə quraşdırma və ya FTP vasitəsilə fayllarınızı serverə yükləyərək layihənizi dərhal yayımlaya bilərsiniz."
    }
];

const Quationss = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <div className="py-[60px] mx-auto container">
            <div className="flex justify-between max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center">
                <div className='space-y-6'>
                    {faq.slice(0, 4).map((oneFaq, index) => (
                        <div key={index}>
                            <button
                                className="w-full text-left px-8 py-5 bg-gray-200 text-gray-800 font-semibold focus:outline-none hover:bg-gray-300 transition duration-300"
                                onClick={() => toggleAccordion(index)}>
                                {oneFaq.question}
                            </button>
                            <div className={`px-8 py-5 w-[500px] max-[768px]:w-full ${openIndex === index ? 'block' : 'hidden'}`}>
                                <span>{oneFaq.answer}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='space-y-6'>
                    {faq.slice(4).map((oneFaq, index) => (
                        <div key={index + 4}>
                            <button
                                className="w-full text-left px-8 py-5 bg-gray-200 text-gray-800 font-semibold focus:outline-none hover:bg-gray-300 transition duration-300"
                                onClick={() => toggleAccordion(index + 4)}>
                                {oneFaq.question}
                            </button>
                            <div className={`px-8 py-5 w-[500px] max-[768px]:w-full ${openIndex === index + 4 ? 'block' : 'hidden'}`}>
                                <span>{oneFaq.answer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Quationss;
