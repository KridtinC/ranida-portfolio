interface ModalProps {
    isShow: boolean
    err: string
}

const Modal = (props: ModalProps) => {
    return (
        <div>
            {
                props.isShow ? <div className="modal contact-popup" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send Email</h5>
                                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {props.err}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    )
}

export {
    Modal
}