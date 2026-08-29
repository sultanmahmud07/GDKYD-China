const OrderingProcess = () => {
  const steps = [
    {
      title: "获取报价",
      description:
        "通过我们的在线询价系统上传您的设计文件，以获取个性化报价。",
    },
    {
      title: "确认订单",
      description: "确认规格和价格后，下达您的订单并提供送货信息。",
    },
    {
      title: "产品制造",
      description:
        "我们选择最合适的生产技术和材料，立即开始制造。",
    },
    {
      title: "质量检测",
      description: "每个部件都经过质量和功能检查，以满足我们的标准。",
    },
    {
      title: "包装出货",
      description: "您的订单将安全包装，并根据所选的配送方式进行发货。",
    },
  ];

  return (
    <div className=" py-3 md:pb-8">
      <div className="main_container p-3 md:p-6 bg-white shadow md:shadow-lg rounded-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:mb-7">
          我们的订购流程
        </h2>
         {/* Horizontal line */}
         <div className="flex justify-center top-9 left-0  right-0 w-full py-3 md:py-4">
            <div className="h-0.5 bg-black w-4/5 relative">
              <div className="absolute top-[-5px] left-0 right-0 flex items-center justify-between w-full ">
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
                <div className="w-3 h-3 bg-gray-800 rounded-full " />
              </div>
            </div>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-3  w-full">
         {steps.map((step, index) => (
            <div
              key={index}
              className="md:pt-5 flex flex-col items-center text-center"
            >
              {/* <div className="w-3 h-3 bg-gray-800 rounded-full mb-10 hidden md:block" /> */}
              <h3 className="font-semibold text-gray-800 text-md">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderingProcess;
