const Wrapper = (props) => {
  // let active = document.querySelector(".wrapper");
  // !props.login
  //   ? active.classList.add("active")
  //   : active.classList.remove("active");
  return (
    <div className="wrapper">
      <div className="icon-close">
        <ion-icon name="close"></ion-icon>
      </div>
      {props.children}
    </div>
  );
};

export default Wrapper;
