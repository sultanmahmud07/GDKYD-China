const FAQ = () => {
  const faqData = [
    {
      title: "你们服务哪些行业？",
      dis: "我们服务于广泛的行业，包括医疗保健（医用口罩）、美容（生活用品）、酒店（酒店和航空产品）、劳保等。我们的机器多功能且可定制，以满足各个行业的具体需求。"
    },
    {
      title: "如何获得定制机器的报价？",
      dis: "只需联系我们并提供您的机器规格，我们的团队将评估您的需求，并根据您的要求（包括生产能力、定制化和功能）提供个性化的报价。"
    },
    {
      title: "制造和交付的交货时间是多少？",
      dis: "交货时间通常为 4 到 6 周，具体取决于机器的复杂程度和所需的定制化程度。我们致力于确保按时生产和交付，以满足您的运营需求。"
    },
    {
      title: "你们是否提供安装和培训服务？",
      dis: "是的，我们提供完整的现场安装服务，确保您的机器正确安装。我们还为您的团队提供实践培训，确保他们熟练操作和维护设备。"
    },
    {
      title: "你们提供什么样的售后支持？",
      dis: "我们的售后服务包括持续的技术支持、定期维护以及备件供应，以确保您的机器顺畅运行。通常，我们的机器配有 1 年保修，供您安心使用。"
    },
    {
      title: "我可以定制适合我特定生产需求的机器吗？",
      dis: "当然可以！我们专注于定制设计的机器。我们的经验丰富的工程师将与您密切合作，开发符合您精确生产要求的机器，确保最大效率和性能。"
    },
    {
      title: "你的机器兼容哪些材料？",
      dis: "我们的机器设计用于处理各种无纺布，包括医疗、工业和消费应用中的无纺布。我们可以根据您的具体材料需求提供更多详细信息。"
    },
    {
      title: "你们是否提供融资或付款计划？",
      dis: "我们理解投资机器可能是一个重要的决定。虽然我们不直接提供融资，但我们很乐意协助您通过第三方提供商探索融资选项。"
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
                className="collapse rounded-none collapse-arrow bg-white border-gray-200 border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {item.title}
                </div>
                <div className="collapse-content text-gray-500 text-sm md:text-base">
                  <p>  {item.dis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
