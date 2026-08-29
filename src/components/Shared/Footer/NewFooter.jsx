"use client";
import logo from "../../../../public/assets/logo/logo.webp";
import qrCode from "../../../../public/assets/footer-img/qr-code.jpg";
import shap from "../../../../public/assets/footer-img/footer-top-shap.png";
import m1 from "../../../../public/assets/footer-img/peyment-mathod/amex.png";
import m2 from "../../../../public/assets/footer-img/peyment-mathod/paypal.png";
import m3 from "../../../../public/assets/footer-img/peyment-mathod/unionpay.png";
import m4 from "../../../../public/assets/footer-img/peyment-mathod/4.png";
import m5 from "../../../../public/assets/footer-img/peyment-mathod/5.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SafeEmailLink from "../SafeEmailLink";
import { BASEURL } from "../../../../Constant";
import axios from "axios";

const NewFooter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const paymentMathod = [
    {
      id: 1,
      name: "",
      mathod: m1,
      link: "/",
    },
    {
      id: 2,
      name: "",
      mathod: m2,
      link: "/",
    },
    {
      id: 3,
      name: "",
      mathod: m3,
      link: "/",
    },
    {
      id: 4,
      name: "",
      mathod: m4,
      link: "/",
    },
    {
      id: 5,
      name: "",
      mathod: m5,
      link: "/",
    },
  ];
  const handleSubscribe = async () => {
    // console.log(inputValue);
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(inputValue)) {
      // If email is valid, perform subscription logic
      // console.log("Email is valid:", inputValue);
      const data = {
        email: inputValue,
      };
      try {
        const response = await axios.post(`${BASEURL}/user/subscribe`, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        // console.log(response)
        // console.log(response?.data);
        if (response?.data?.success) {
          window.alert(response?.data?.message);
          setInputValue("");
        }
      } catch (error) {
        console.error("Booking cancel error:", error);
      }
      setIsValidEmail(true);
      // Add your subscription logic here
    } else {
      // If email is not valid, set isValidEmail state to false
      // console.log("Invalid email:", inputValue);
      setIsValidEmail(false);
    }
  };
  return (
    <section
      id="footer"
      className="bg-secondary text-xs md:text-base mt-10  md:mt-20 relative  md:mb-0"
    >
      <div className="shap relative top-[-2px]  left-0 w-full">
        <Image src={shap} alt="logo" width={800} className="w-full" />
      </div>
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-4 pt-12 text-[#FFFFFFE5] capitalize">
          <div className=" flex flex-col gap-2">
            <Image
              src={logo}
              alt="logo"
              width={200}
              className="w-24 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
            />
            <div className="mt-2 flex flex-col gap-3">
              {/* <p className='flex items-start gap-3 text-[#FFFFFFE5]'><span className="text-xl font-semibold text-primary"><FaLocationDot /></span><span>House 04, Road 15, Block-D, (2nd floor), banani, dhaka-1213</span></p> */}
              <p className="flex items-center gap-3 text-[#FFFFFFE5]">
                <span className="text-xs md:text-sm">
                  地址：广东省东莞市塘厦镇东深二路321号
                </span>
              </p>
              <div className="mt-2" itemScope itemType="https://schema.org/Organization">
                {/* Phone Link */}
                <a
                  href="tel:+86076987937128"
                  className="flex items-center gap-3 text-[#FFFFFFE5] hover:text-white transition-colors group"
                  itemProp="telephone"
                >
                  <span className="text-xl font-semibold text-primary group-hover:scale-110 transition-transform">
                    <MdOutlinePhonelinkRing />
                  </span>
                  <span className="text-xs md:text-sm">0769-87937128</span>
                </a>

                {/* Email Link */}
                <SafeEmailLink
                  className="flex items-center gap-3 text-[#FFFFFFE5] hover:text-white transition-colors group mt-2"
                  itemProp="email"
                >
                  <span className="text-xl font-semibold text-primary group-hover:scale-110 transition-transform">
                    <MdOutlineEmail />
                  </span>
                  <SafeEmailLink textOnly={true} className="lowercase text-xs md:text-sm" />
                </SafeEmailLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-normal">
            <p className="text-white font-bold  mb-3">网站导航</p>
            <Link href="/about">
              <span>关于快裕达</span>
            </Link>
            <Link href="/portfolio">
              <span>案例展示</span>
            </Link>
            <Link href="/product">
              <span>全部产品</span>
            </Link>
            <Link href="/contact">
              <span>联系我们</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2  font-normal">
            <p className="text-white font-bold  mb-3">快捷链接</p>
            <Link href="/terms-conditions">
              <span>服务条款</span>
            </Link>
            <Link href="/privacy-policy">
              <span>退款政策</span>
            </Link>
            {/* <Link href="/cencellation-policy"><span>cancellation policy</span></Link> */}
            <Link href="/privacy-policy">
              <span>隐私政策</span>
            </Link>
            <Link href="/news">
              <span>新闻与文章</span>
            </Link>
          </div>
          <div className=" flex flex-col gap-3">
            <p className="text-white font-bold uppercase mb-2">保持联系</p>
            <div className="w-full">
              <div className="join text-black w-full">
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  type="email"
                  required
                  placeholder="输入您的电子邮箱"
                  className={`input input-sm input-bordered join-item w-full ${isValidEmail ? "" : "border-red-500"
                    }`} // Add red border when email is not valid
                />
                <button
                  onClick={handleSubscribe}
                  className="btn btn-sm btn-primary join-item text-white"
                >
                  订阅
                </button>
              </div>
            </div>
            {!isValidEmail && (
              <p className="text-red-500 text-sm">
                请输入有效的电子邮箱地址。
              </p>
            )}{" "}
            {/* Display error message when email is not valid */}
            <p className="text-[#FFFFFFE5] normal-case">
              输入您的电子邮箱以获取促销信息与最新动态。
            </p>
          </div>
        </div>
        <div className="footer_border py-2 md:py-4 w-full text-[#939393] flex flex-col-reverse md:flex-row justify-between items-center gap-3 mt-4 ">
          <div className="md:w-1/2 md:flex flex-col items-start">
            <div className=" flex items-center justify-center md:justify-start gap-3">
              <Link
                href={
                  "https://www.facebook.com/guangdongkyd"
                }
                target="blank"
              >
                <span className="flex items-center justify-center bg-primary text-white h-8 w-8 text-lg rounded-full font-bold shadow hover:bg-[#3b5998] hover:scale-110 transition duration-300 ease-in-out">
                  <FaFacebookF />
                </span>
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
                }
                target="blank"
                className="flex items-center justify-center bg-primary text-white h-8 w-8 text-lg rounded-full font-bold shadow hover:bg-[#0077b5] hover:scale-110 transition duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href={"https://x.com/KYD_Precision"}
                target="blank"
                className="flex items-center justify-center bg-primary text-white h-8 w-8 text-lg rounded-full font-bold shadow hover:bg-[#1da1f2] hover:scale-110 transition duration-300 ease-in-out"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@kyd_precision_machinery"
                }
                target="blank"
                className="flex items-center justify-center bg-primary text-white h-8 w-8 text-lg rounded-full font-bold shadow hover:bg-[#ff0000] hover:scale-110 transition duration-300 ease-in-out"
              >
                <IoLogoTiktok />
              </Link>
              {/* WeChat QR Code */}
              <div className="QR_Code">
                <Image
                  src={qrCode}
                  alt="QR Code"
                  width={200}
                  className="w-16 md:w-20"
                />
              </div>
            </div>
          </div>
          <div className="md:flex justify-end w-full md:w-1/2">
            <div className="flex justify-center md:justify-end gap-2 items-center md:gap-3">
              <p className="text-sm text-center md:text-base md:text-end md:tracking-[3px] text-white">
                支持支付方式
              </p>
              {paymentMathod.map((mathod, i) => {
                return (
                  <div key={i} className="l">
                    <Image
                      src={mathod?.mathod}
                      alt="logo"
                      width={100}
                      className="w-12 md:w-16"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-sm text-center text-white mt-4 md:mt-4 w-full">
          © 广东快裕达精密机械有限公司 {currentYear} 版权所有 - 保留所有权利。
        </p>
        <p className="text-sm  text-center text-[#d4d4d4] py-3 w-full">
          <a
            className="hover:underline"
            target="blank"
            href="https://www.gdkyd.com/"
          >
            ICP：粤ICP备2023126606号
          </a>
        </p>
      </div>
    </section>
  );
};

export default NewFooter;
