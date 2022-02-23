import ModalCloseIcon from '../images/ModalCloseIcon.svg';

/**
 * Modal Component- Information collection for action button
 * 
 * Child components: None
 * 
 */

const Modal = (props: any) => {
    const { handleClose, open } = props;
    return open ? (
        <div className="modal">
            <div className="modal-overlay">
                <div className="modal-container">
                    <button className="modal-container-close" onClick={handleClose}>
                        <img src={ModalCloseIcon} alt={"Close Icon"} />
                    </button>
                    <h3>Please fill in the following details</h3>
                    <form>
                        <div className="input-container">
                            <label>Name *</label>
                            <input id="Name" type="text" name="Name" value=""></input>
                        </div>
                        <div className="input-container">
                            <label>Email *</label>
                            <input id="email" type="text" name="email" value=""></input>
                        </div>
                        <div className="input-container">
                            <label>Movie Name *</label>
                            <input id="Movie" type="text" name="Movie" value=""></input>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal;
