import ServiceBanner from "./ServiceBanner";
import { BASEURL } from '../../../../../Constant';

const ServiceBannerWrapper = ({ banner }) => {
  // console.log("banner:", banner)
  return (
    <ServiceBanner
      bannerBg={`${banner?.banner_image}`}
      title={banner?.title_cn
      }
      des={banner?.description_cn
      }
      link={"product"}
    ></ServiceBanner>
  )
}

export default ServiceBannerWrapper