
// import images
import close from "assets/images/close-modal.png";

export default function Modal({ id, body, modalStatus, setModalStatus }) { 

    return(
        <>
        {
         modalStatus &&
            <div className="modal fade show" id={id} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => setModalStatus(false)}
                            >
                                <span aria-hidden="true">
                                    <img src={close} alt="X" width="30" height="30" />
                                </span>
                            </button>
                            { body }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );

}