import React from "react";
import "./footer.css";

function FooterSettings() {
  return (
    <div className="footer">
      <hr className="divider" />
      <div className="actions_footer">
        <button className="back_settings">Вернуть</button>
        <button className="save_settings">Сохранить</button>
      </div>
    </div>
  );
}

export default FooterSettings;
