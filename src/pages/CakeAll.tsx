import { useEffect } from "react";

const CakeAll = () => {
  useEffect(() => {
    document.title = "Others | Baked Goodies by H";
  }, []);
  return <div>CakeAll</div>;
};

export default CakeAll;
