
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-96 flex justify-center items-center">
      <RingLoader
        color={"#FF9B2F"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
