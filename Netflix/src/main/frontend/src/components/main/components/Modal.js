import React from 'react';
import 'css/main/modal.css';

const Modal = (props) => {
    const { open, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <section>
                <header>{header}</header>
                <main>{props.children}</main>
            </section>
        ) : null}
    </div>
  );
};

export default Modal;