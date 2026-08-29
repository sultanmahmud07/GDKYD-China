import TopGap from "../../components/Shared/TopGap/TopGap";
import SafeEmailLink from "../../components/Shared/SafeEmailLink";

export const metadata = {
  title: "使用条款 | 广东快裕达精密机械",
  description: "欢迎阅读广东快裕达精密机械有限公司网站及产品服务的使用条款与条件。使用我们的服务即表示您同意并遵守以下全部条款与政策。"
};

const TermsAndConditions = () => {
  return (
    <section className="pt-5">
      <TopGap />
      <div className="main_container py-5 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          使用条款与条件
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <div>
            <p>
              欢迎访问广东快裕达精密机械有限公司（“我们”、“我们的”或“本公司”）网站。访问或使用我们的网站及相关产品服务，即表示您同意受本使用条款与条件的约束。请仔细阅读以下内容。如果您不同意这些条款，则不得访问或使用我们的各项服务。
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">接受条款</h2>
            <p>
              通过使用我们的网站、产品及服务，您确认已阅读、理解并同意遵守本使用条款与条件，以及我们发布的隐私政策。
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">隐私政策</h2>
            <p>
              我们致力于保护您的隐私。我们的隐私政策详细说明了我们如何收集、使用和保护您的个人信息。通过使用我们的服务，您同意我们按照隐私政策收集和使用您的相关信息。
            </p>
          </div>

          {/* Products and Services */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">产品与服务</h2>
            <p>
              我们专注于无纺布制品深加工设备的研发、制造和供应，这包括但不限于：
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>全自动医疗及劳保口罩制造机</li>
              <li>无纺布美容与生活用品制造设备</li>
              <li>无纺布酒店及航空用品机械</li>
              <li>各种非标定制及自动化生产线</li>
            </ul>
            <p className="mt-2">
              所有产品规格、价格和供应情况如有更改，恕不另行通知。
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">知识产权</h2>
            <p>
              本网站上的所有内容，包括但不限于文字、图像、图形、徽标、视听资料和软件，均属于广东快裕达精密机械有限公司或其内容供应商的财产，并受到适用知识产权法律及著作权法的保护。严禁任何未经授权擅自使用、修改或复制内容的行为。
            </p>
          </div>

          {/* User Obligations */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">用户义务</h2>
            <p>您在使用我们的网站及服务时，同意并承诺：</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>仅出于合法目的使用我们的网站和服务。</li>
              <li>在提交询价或联系我们时，提供真实、准确且完整的信息。</li>
              <li>不参与任何可能损害、干扰或强行中断我们网站及服务正常运行的活动。</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">责任限制</h2>
            <p>
              在适用法律允许的最大范围内，广东快裕达精密机械有限公司不对您使用或无法使用我们的网站、产品或服务所导致的任何直接、间接、附带、特别或后果性损害（包括利润损失或业务中断）承担责任。
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">第三方网站链接</h2>
            <p>
              我们的网站可能包含指向第三方网站的外部链接。我们不对这些外部站点的隐私政策、数据安全或内容承担任何明示或暗示的责任。访问此类站点所产生的风险由您自行承担。
            </p>
          </div>

          {/* Modification of Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">条款的修改</h2>
            <p>
              我们保留随时修改本使用条款与条件的权利，恕不另行通知。修改内容自发布于我们网站之日起立即生效。您在此之后继续使用我们的服务即表示您接受修订后的条款。
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">准据法及争议解决</h2>
            <p>
              这些条款与条件应受中华人民共和国法律管辖，并根据其解释，排除其冲突法原则的应用。因本条款产生或与其相关的任何争议，应提交至本公司所在地有管辖权的人民法院解决。
            </p>
          </div>

          {/* Contact Information */}
          <div className="pt-4">
            <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-2">联系我们</h2>
            <p className="mb-2">
              如果您对本使用条款与条件有任何疑问或疑问，请通过以下方式联系我们：
            </p>
            <ul className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
              <li>
                <strong>公司名称：</strong> 广东快裕达精密机械有限公司
              </li>
              <li>
                <strong>地址：</strong> 广东省东莞市东深二路321号
              </li>
              <li>
                <strong>邮箱：</strong> <SafeEmailLink textOnly={true} />
              </li>
              <li>
                <strong>电话：</strong> 86-13902617335
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
