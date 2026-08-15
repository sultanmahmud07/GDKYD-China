const ServiceFAQ = () => {
  const faqData = [
    {
      title: "KYD的机器有什么特别之处？",
      description: "KYD的机器可定制、耐用，配备先进的自动化系统，确保高效性和高质量。"
    },
    {
      title: "这些机器环保吗？",
      description: "是的，我们的机器设计旨在减少浪费，降低能耗，并支持可回收材料。"
    },
    {
      title: "KYD的机器能处理大规模生产吗？",
      description: "完全可以。我们的机器经过优化，能够实现高速、大批量生产，同时保证质量。"
    },
    {
      title: "你们提供哪些维护和备件支持？",
      description: "我们提供全面的维护支持，备件易于获取，并提供指导，以确保机器的平稳运行。"
    },
    {
      title: "我可以稍后升级或修改我的机器吗？",
      description: "可以，我们的机器具有可扩展性，可以根据新的生产需求进行重新配置。"
    },
    {
      title: "KYD如何支持国际客户？",
      description: "我们提供全球运输、多语言支持以及远程技术支持，为全球客户服务。"
    },
    {
      title: "我可以在哪里看到KYD的机器运行？",
      description: "您可以请求现场演示或查看我们机器的视频展示。请联系我们安排演示。"
    }
  ];

  return (
    <section id="faq_section" className="">
      <div className="main_container bg-white py-5 md:py-10 rounded-md shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
          常见问题解答
        </h2>
        {/* All faq here  */}
        <div className="faq_container m-4 md:mx-16 lg:mx-28 md:pt-5">
          {faqData.map((item, i) => {
            return (
              <div
                key={i}
                className="collapse rounded-none collapse-arrow bg-white border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {item.title}
                </div>
                <div className="collapse-content text-sm md:text-base">
                  <p>  {item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
