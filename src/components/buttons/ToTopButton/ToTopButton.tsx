import classes from "./ToTopButton.module.scss";

export function ToTopButton() {
  const buttonHandler = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={buttonHandler} className={classes.wrapper}>
      ↑
    </button>
  );
}
