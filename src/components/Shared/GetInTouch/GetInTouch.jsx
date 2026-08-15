import GetInTouchContent from "./GetInTouchContent";

const GetInTouch = () => {
  
  // Prepare simple object to pass to client
  const translations = {
    title: "联系我们",
    description: "我们邀请您与我们联系！ ",
    office: "公司总部",
    callLabel: "电话",
    wpLabel: "微信/WhatsApp",
    mailLabel: "邮箱",
    address: "广东省东莞市东深二路321号",
    socialText: "联系我们。只需点击即可！",
  };

  const formLabels = {
    name: "姓名",
    phone: "电话号码",
    email: "电子邮箱",
    product: "您的咨询内容是什么？",
    note: "附加信息",
  };

  return (
    <GetInTouchContent 
      translations={translations} 
      formLabels={formLabels}
    />
  );
};

export default GetInTouch;