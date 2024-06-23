type TPropsModal = {
  show: boolean;
  videoUrl: string;
  onClose: () => void;
};
const ModalDepo = ({ show, videoUrl, onClose }: TPropsModal) => {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      id="depoModal"
      tabIndex={-1}
      aria-labelledby="depoModalLabel"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {videoUrl && (
              <iframe
                id="depos"
                className="w-100 aspect-ratio-16"
                src={videoUrl}
                allow="autoplay"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDepo;
