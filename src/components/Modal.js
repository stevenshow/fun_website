import "./Modal.scss";

const Modal = (props) => {
  let modal = document.getElementById("help-modal");
  const closeModal = () => {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  return (
    <div id="help-modal" className={props.className}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>Some text in the Modal...</p>
      </div>
    </div>
  );
};

export default Modal;
