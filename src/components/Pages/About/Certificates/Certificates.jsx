import CertificatesContent from "./CertificatesContent";

const Certificates = ({ certificatesData }) => {
  
  return (
    <CertificatesContent 
      title={"认证与奖项"}
      items={certificatesData}
    />
  );
};

export default Certificates;