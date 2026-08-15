import ShareBanner from "../../../Shared/ShareBanner/ShareBanner";

const AboutBanner = ({ banner }) => {

  return (
    <div>
      <ShareBanner
        bannerBg={`${banner?.banner_image}`}
        title={banner?.title_cn
        }
        des={banner?.description_cn
        }
        link={"about"}
      ></ShareBanner>
    </div>
  )
}

export default AboutBanner