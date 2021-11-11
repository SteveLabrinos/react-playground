import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

function Backdrop({ onHideModal }) {
  return <div className={styles.backdrop} onClick={onHideModal}></div>;
}

function ModalOverlay({ children, onHideModal }) {
  return <div className={styles.modal}>{children}</div>;
}

function Modal(props) {
  return createPortal(
    <Fragment>
      <Backdrop onHideModal={props.onHideModal} />
      <ModalOverlay onHideModal={props.onHideModal}>{props.children}</ModalOverlay>
    </Fragment>,
    document.querySelector('#overlays')
  );
}

export default Modal;
