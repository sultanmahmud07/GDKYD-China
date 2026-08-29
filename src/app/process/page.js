import React from 'react'
import ProductProcesses from '../../components/Pages/Process/ProductProcess'
import TopGap from '../../components/Shared/TopGap/TopGap'
import HowWorks from '../../components/Pages/Home/HowWorks/HowWorks'
export const metadata = {
  title: "工艺流程与生产管理解决方案 | 快裕达",
  description: "为全球采购商提供高速口罩机制造工艺和流程，包含全自动医用口罩机、无纺布制品生产线、一次性卫材制造设备。为您提供值得信赖的精密机械设备工艺管理。"
};
const page = () => {
      return (
            <div>
                  <TopGap></TopGap>
                  <ProductProcesses />
                  <HowWorks></HowWorks>
            </div>
      )
}

export default page
