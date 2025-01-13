import React, { useState } from "react";
import styles from "./security.module.css";
import SecurityModal from "./modals/SecurityModal";
function SecuritySettings() {
  const [visible, setVisible] = useState(false);

  function handleOpen(pev){
    setVisible(prev => !prev)
  }

  return (
    <div className={styles.security_container}>
      <div className={styles.security_form}>
        <div className={styles.security_main}>
          <div className={styles.security_intro}>
            Двухфакторная аутентификация (Яндекс.Ключ)
          </div>
          <hr className={styles.divider} />
          <div className={styles.security_content}>
            <p className={styles.security_first}>
              Двухфакторная аутентификация — это дополнительная функция
              безопасности, предназначенная для предотвращениядоступа других
              пользователей к вашей учетной записи.
            </p>
            <p className={styles.security_second}>
              При входе в ДИОС.ФИНАНСЫ вы будете вводить пароль и код безопасности,
              сгенерированный приложением Яндекс.Ключ на вашем смартфоне.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
          <hr className={styles.divider} />
          <div className={styles.actions_footer}>
            <button 
              className={styles.connect_btn}
              onClick={handleOpen}
            >
              Подключить
            </button>
          </div>
        </div>
      <SecurityModal visible={visible} setVisible={setVisible} openModal={handleOpen}/>
    </div>
  );
}

export default SecuritySettings;
