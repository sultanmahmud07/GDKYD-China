import { BASEURL } from '../../../../../Constant';
import ShareBanner from '../../../Shared/ShareBanner/ShareBanner';
const BlogBanner = ({ banner }) => {
  return (
    <ShareBanner
     bannerBg={`${banner?.banner_image}`}
    title={banner?.title_cn
    }
    des={banner?.description_cn
    } link={"blog"}
    ></ShareBanner>
  )
}

export default BlogBanner