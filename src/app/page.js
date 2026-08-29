import HomePage from "../components/Pages/Home/HomePage";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gdkyd.com/#organization",
        "name": "广东快裕达精密机械有限公司",
        "alternateName": "快裕达精密机械",
        "url": "https://gdkyd.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://gdkyd.com/#logo",
          "url": "https://gdkyd.com/assets/logo/main-logo.webp",
          "caption": "广东快裕达公司 Logo"
        },
        "image": {
          "@id": "https://gdkyd.com/#logo"
        },
        "description": "广东快裕达精密机械制造有限公司专业研发和制造高端无纺布医用口罩制造机、手术衣制造机、鞋套制造机等全自动个人防护用品生产设备。FDA和CE认证，全球信赖的机械设备供应商。",
        "telephone": "+86-13902617335",
        "email": "kyd@kuaiyuda.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No.321 Dongshen Road, Tangxia Town",
          "addressLocality": "Dongguan City",
          "addressRegion": "Guangdong Province",
          "addressCountry": "CN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+86-13902617335",
            "contactType": "客户服务",
            "areaServed": "World",
            "availableLanguage": ["英语", "中文"]
          }
        ],
        "sameAs": [
          "https://x.com/KYD_Precision",
          "https://www.facebook.com/guangdongkyd",
          "https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gdkyd.com/#website",
        "url": "https://gdkyd.com",
        "name": "快裕达",
        "description": "无纺布个人防护装备与医疗设备机械制造商",
        "publisher": {
          "@id": "https://gdkyd.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage></HomePage>
    </div>
  );
}
