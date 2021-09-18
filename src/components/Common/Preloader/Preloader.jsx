import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div>
      <div className={`${s.skeletonRect} ${s.skeletonLoader}`}></div>
      <div className={`${s.skeletonLine} ${s.skeletonLoader}`}></div>
    </div>
  );
};

export default Preloader;
