import ClipLoader from "react-spinners/ClipLoader";
import "./loader.scss";
const Loader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="loader">
      <ClipLoader
        color={"red"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
