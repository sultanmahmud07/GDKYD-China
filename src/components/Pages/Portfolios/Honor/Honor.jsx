import HonorContent from "./HonorContent";

const Honor = ({ honors }) => {
  // Corrected the title key if needed (Honor vs Honer)
  // Assuming "Our Honors" is the intent
  const title = "获得荣誉";

  return (
    <HonorContent
      title={title}
      honors={honors}
    />
  );
};

export default Honor;