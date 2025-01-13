import React, { useEffect, useState } from "react";
import Modal from "../../../../../ui/modal/Modal";
import "../../../Styles/mainModal.css";
import dangerous from "../../../../../../assets/dangerous.svg";
import PasswordForm from "../Forms/PasswordForm";
import FeedBackForm from "../Forms/FeedBackForm";
import FinishForm from "../Forms/FinishForm";
import x from "../../../../../../assets/x.svg";

function ModalDeleteData({ visible, setVisible, openModal }) {
  const [page, setPage] = useState("password");
  const [numPage, setNumPage] = useState(1);


  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div className="container_modal">
        <div className="modal_header_delete_data">
          <div style={{ display: "flex" }}>
            {numPage === 3 ? (
              <img
                alt="dangerous"
                src={dangerous}
                style={{ width: "20px", height: "20px", marginRight: 12 }}
              />
            ) : (
              <></>
            )}
            <h3>{numPage !== 3 ? "Удаление / Отписка" : "Внимание"}</h3>
          </div>
          <img
            alt="close modal"
            src={x}
            onClick={() => {
              openModal()
              setNumPage(1);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        {numPage === 1 && (
          <PasswordForm numPage={numPage} setNumPage={setNumPage} />
        )}
        {numPage === 2 && (
          <FeedBackForm numPage={numPage} setNumPage={setNumPage} />
        )}
        {numPage === 3 && (
          <FinishForm numPage={numPage} setNumPage={setNumPage} />
        )}
        {/* {numPage === 4 && (
          <FinishForm numPage={numPage} setNumPage={setNumPage} />
        )}   */}
      </div>
    </Modal>
  );
}

export default ModalDeleteData;
