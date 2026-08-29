import TopGap from "../../components/Shared/TopGap/TopGap";
import SafeEmailLink from "../../components/Shared/SafeEmailLink";

export const metadata = {
  title: "隐私政策 | 数据保护与隐私声明",
  description: "了解广东快裕达精密机械有限公司的隐私政策。我们致力于保护您的个人隐私，并详细说明了我们如何收集、使用、保护您的个人数据，以及我们如何管理非标自动化机械的定制服务订单。"
};

const PrivacyPolicyPage = () => {
  return (
    <section className="pt-5">
      <TopGap></TopGap>
      <div className="main_container py-5 md:py-10">
        <h1 className="text-3xl font-semibold text-center mb-6">隐私政策</h1>

        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            广东快裕达精密机械有限公司（“我们”、“我们的”或“本公司”）深知保护您隐私的重要性，并致力于保障您的个人信息安全。本隐私政策概述了我们如何收集、使用和保护与我们的产品及服务相关的您的信息，包括我们研发制造的口罩机、无纺布美容与生活用品制造设备、无纺布酒店及航空用品机械等无纺布深加工设备。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">我们收集的信息</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>个人信息：</strong>您的姓名、职位、公司名称、电子邮件地址、电话号码以及您在进行业务咨询或下达订单时提供的其他详细信息。</li>
            <li><strong>业务信息：</strong>与定制机械、采购订单、设计规格及产品偏好相关的详细要求。</li>
            <li><strong>技术信息：</strong>关于您使用我们网站的信息，例如IP地址、浏览器类型和访问日志，用以改进网站功能与用户体验。</li>
            <li><strong>付款信息：</strong>处理交易所必需的账单详情和付款交易凭证。</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">我们如何使用您的信息</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>订单履行：</strong>处理并交付您购买的机械与备件订单。</li>
            <li><strong>定制化服务：</strong>根据您的具体生产要求设计和制造个性化的无纺布加工机械。</li>
            <li><strong>客户支持：</strong>回复业务咨询，提供技术售后支持并解决投诉。</li>
            <li><strong>产品及服务更新：</strong>向您发送新机型研发动态、技术更新以及促销活动信息。</li>
            <li><strong>运营改进：</strong>增强网站功能，分析使用趋势，并优化我们的制造工艺。</li>
            <li><strong>法律合规：</strong>遵守适用的法律法规、行业标准和履行合同义务。</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">信息共享与披露</h2>
          <p>
            我们尊重您的隐私，不会出售或出租您的个人信息。但是在以下情况下，我们可能会与第三方共享您的信息：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>服务提供商：</strong>我们可能会将数据共享给协助开展物流运输、付款处理和其他运营服务支持的受信第三方合作商。</li>
            <li><strong>法律义务合规：</strong>在法律法规要求或回应有效的诉讼及司法行政机关调证时，披露您的必要信息。</li>
            <li><strong>业务重组：</strong>在发生公司合并、收购、资产出售或重组时，您的信息可能会作为转让资产的一部分进行转移。</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">数据安全保障</h2>
          <p>
            我们采用稳妥的技术与管理安全措施来防止您的数据遭到未经授权的访问、篡改、泄露或损坏。这包括使用安全服务器、数据加密传输协议以及限制敏感数据的访问权限。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">您的权利</h2>
          <p>您对自己的个人数据拥有以下控制和选择权：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>访问数据：</strong>有权请求查看我们所收集的您的个人数据详情。</li>
            <li><strong>更正数据：</strong>发现数据不准确或不完整时，有权请求进行修改。</li>
            <li><strong>删除数据：</strong>在满足法律条件的前提下，有权要求我们删除您的个人数据。</li>
            <li><strong>选择退订：</strong>有权随时退订或拒绝接收我们的市场行销推广信息。</li>
          </ul>
          <p>
            如需行使上述权利，请通过本页面下方的联系信息与我们取得联系。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">Cookie 与网站追踪技术</h2>
          <p>
            我们在网站上使用 Cookie 和类似技术来改善您的浏览体验，并帮助分析网络流量。您可以通过浏览器设置选择关闭 Cookie 接收，但这可能会限制您使用我们网站的某些功能。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">数据保留期限</h2>
          <p>
            我们仅在实现本政策所述目的所必需的合理期限内，或在适用法律法规要求的保留期限内，保留您的个人信息。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">第三方网站链接</h2>
          <p>
            我们的网站可能包含指向其他第三方网站的外部链接。我们不对这些外部站点的隐私政策与数据安全声明负责，建议您在访问时仔细阅读其自身的隐私政策。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">本隐私政策的更新</h2>
          <p>
            我们保留根据公司业务变动或相关法律法规更新本隐私政策的权利。本政策的任何重大变更都将在网站上发布，并更新顶部的修订日期。
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">联系我们</h2>
          <address className="not-italic bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
            <p><strong>广东快裕达精密机械有限公司</strong></p>
            <p>地址：广东省东莞市塘厦镇东深二路321号</p>
            <p>邮箱：<SafeEmailLink textOnly={true} /></p>
            <p>电话：86-13902617335</p>
          </address>

          <p className="pt-4 border-t text-sm text-gray-500 text-center">
            您的信任对我们至关重要，我们始终致力于保护您的个人数据。感谢您选择广东快裕达精密机械有限公司。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
