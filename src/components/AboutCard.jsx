import React, { useState } from 'react'
import Card from './Card'
import Accordion from './Accordion ';

const hostingOptions = [
    {
        title: "VDS Server",
        subtitle: [
            {
                heading: "Tam İdarəetmə və Güvənlik",
                description: "VDS Server ilə sərbəstliyə və güvənliyə sahib olun. İstədiyiniz zaman tam nəzarətə sahib olun və xidmətinizi optimallaşdırın."
            },
            {
                heading: "Yüksək Performans, Hər Zaman Etibarlı",
                description: "Böyük layihələr üçün idealdır. Güclü CPU, geniş RAM və sürətli SSD-lər ilə işinizi inkişaf etdirin."
            },
            {
                heading: "Tam Kontrollü VDS Server ilə Tamazlıq və Performans!",
                description: "Özəllikləri tam idarə edin, təhlükəsizlik önlemlərini özünüz seçin."
            }
        ]
    },
    {
        title: "VPS Server",
        subtitle: [
            {
                heading: "İstənilən vaxt genişlənən VPS Server",
                description: "Resurslarınızı artırın və layihənizi istədiyiniz zaman böyüdün. Sərbəstlik, sürət və etibarlılıq!"
            },
            {
                heading: "Sürətli, Güclü və Mükəmməl VPS Server!",
                description: "İstədiyiniz zaman server resurslarını asanlıqla artırın, gecikmə və yavaşlığa son!"
            },
            {
                heading: "Güclü və sərfəli VPS Server - Performansınızı Yüksəldin!",
                description: "Fərdi konfiqurasiya və yüksək performansla veb saytınızı daha sürətli və etibarlı edin."
            }
        ]
    },
    {
        title: "Ümumi Hosting",
        subtitle: [
            {
                heading: "Sürətli və Etibarlı Hosting Xidmətləri ilə Bizə Etibar Edin!",
                description: "Hosting xidmətlərimiz ilə saytınızın sürətini artırın və performansınızı yüksəldin."
            },
            {
                heading: "Hosting ilə İşinizi Böyüdün, Bizə Etibar Edin!",
                description: "Hər zaman yüksək performans, 7/24 dəstək və təhlükəsizlik!"
            },
            {
                heading: "Ən Yüksək Performanslı Hosting Xidmətləri ilə Tanış Olun!",
                description: "Təhlükəsiz, sürətli və etibarlı hosting ilə işinizi hər zaman ön planda saxlayın."
            }
        ]
    }
];


const AboutCard = () => {

    const [DetailHosting, setDetailHosting] = useState(false)
    const [hostingIndex, sethostingIndex] = useState()

    const toggleDetail = (index) => {
        setDetailHosting(!DetailHosting)
        sethostingIndex(index)
    }

    return (
        <div className='bg-[#E5E5E5] py-[60px] '>
            <div className='mx-auto container'>
                {DetailHosting ?
                    <Accordion hostingIndex={hostingIndex} hostingOptions={hostingOptions} toggleDetail={toggleDetail} />
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                        {
                            hostingOptions.map((option, index) => (
                                <Card toggleDetail={toggleDetail} keys={index} titile={option.title} subtitle={option.subtitle} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AboutCard