import ContactForm from "../../../Shared/ContactFrom/ContactFrom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import SafeEmailLink from "../../../Shared/SafeEmailLink";

const ContactBox = () => {
    return (
    <div className="py-5 md:py-10">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="contact_content w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-2 ">
              {"联系我们"}
            </h2>
            <div className="border-b-2 py-2 md:py-4">
              <p>
                {"有关于KYD设备的问题或需要更多详细信息？今天就联系我们吧——我们随时为您提供适合您业务的解决方案。"}
                <span className="text-secondary font-semibold">KYD</span>
              </p>
            </div>
            <h6 className="text-md md:text-lg font-semibold text-[#333333] my-2 md:my-5">
              {"公司总部"}
            </h6>
            <div
              className="flex flex-col gap-2 md:gap-3 mb-2"
              itemScope
              itemType="https://schema.org/Organization"
            >
              {/* Hidden Name for Schema context (Optional but recommended) */}
              <meta itemProp="name" content="KYD Precision Machinery" />

              {/* 1. Phone - Clickable & Microdata */}
              <a
                href="tel:+8613902617335"
                className="flex items-center gap-2 md:gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
              >
                <p className="p-2 md:p-3 shadow bg-[#D3E5F0] text-md md:text-xl rounded text-black group-hover:bg-[#064a9b] group-hover:text-white transition-colors">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </p>
                <p>
                  {"电话"} :{" "}
                  <span className="font-semibold" itemProp="telephone">
                    +86-13902617335
                  </span>
                </p>
              </a>

              {/* 2. WhatsApp - Clickable (No schema property for WP specifically, usually treated as SameAs or ContactPoint) */}
              <a
                href="https://wa.me/8613902617335"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity"
              >
                <p className="p-2 md:p-3 shadow bg-[#D3E5F0] text-md md:text-xl rounded text-black group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <span>
                    <FaWhatsapp />
                  </span>
                </p>
                <p>
                  {"微信/WhatsApp"} :{" "}
                  <span className="font-semibold">
                    +86-13902617335
                  </span>
                </p>
              </a>

              {/* 3. Email - Clickable & Microdata */}
              <SafeEmailLink
                className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity"
                itemProp="email"
              >
                <p className="p-2 md:p-3 shadow bg-[#D3E5F0] text-md md:text-xl rounded text-black group-hover:bg-[#064a9b] group-hover:text-white transition-colors">
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                </p>
                <p>
                  {"邮箱"} :{" "}
                  <span className="font-semibold">
                    <SafeEmailLink textOnly={true} />
                  </span>
                </p>
              </SafeEmailLink>

              {/* 4. Address - Microdata */}
              <div
                className="flex items-center gap-2"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <p className="p-2 md:p-3 shadow bg-[#D3E5F0] text-md md:text-xl rounded text-black">
                  <span>
                    <FaLocationDot />
                  </span>
                </p>
                <p>
                  KYD :{" "}
                  <span className="font-semibold" itemProp="streetAddress">
                    {"广东省东莞市东深二路321号"}
                  </span>
                </p>
              </div>
            </div>
            {/*============= Social media link or icon here =============== */}
            <p className="text-sm md:text-base my-2 md:my-5 md:pt-3">
              {"联系我们。只需点击即可！"}
            </p>
            <div className="flex items-center text-md md:text-2xl gap-3 md:gap-6 text-black my-3">
              <a
                target="blank"
                href="https://x.com/KYD_Precision"
                className=" "
              >
                <FaSquareXTwitter />
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/guangdongkyd"
                className=" "
              >
                <FaFacebookF />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
                className=" "
              >
                <FaLinkedinIn />
              </a>
              <a
                target="blank"
                href="https://www.tiktok.com/@kyd_precision_machinery"
                className="text-black "
              >
                <IoLogoTiktok />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                // href="https://wa.me/+86-13902617335"
                href="https://api.whatsapp.com/send?phone=+86-13902617335&text=Hello,%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20details?"
                className=""
              >
                <RiWhatsappFill />
              </a>
            </div>
          </div>
          <div className="w-full">
            <ContactForm
              name={"姓名"}
              phone={"电话号码"}
              email={"电子邮箱"}
              product={"您的咨询内容是什么？"}
              note={"附加信息"}
            ></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
