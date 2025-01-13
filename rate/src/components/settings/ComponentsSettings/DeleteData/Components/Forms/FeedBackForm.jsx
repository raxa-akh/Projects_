import React, { useState } from "react";
import styles from "../../deletedata.module.css";

function FeedBackForm({ numPage, setNumPage }) {
  const [comment, setComment] = useState();

  const handleSubmit = () => {
    setNumPage(3);
  };

  return (
    <div className={styles.form_content}>
      <div className={styles.form_password}>
        <div>
          <p className={styles.intro_mail}>
            Напишите нам на почту dioc@finance.com, что вы собираетесь:
          </p>
          <p className={styles.intro_dangerous}>
            Удалить операции и отписаться от тарифа
          </p>
          <hr className={styles.divider_comment} />
        </div>
        <div>
          <p className={styles.comment_label}>Комментарий</p>
          <textarea
            placeholder="Расскажите, что вам не понравилось в нашем сервисе? Мы рассмотрим вашу заявку и свяжемся в ближайшее время"
            className={styles.feedback_input}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <p className={styles.dangerous_finish}>
            Внимание! Отменить данное действие будет невозможно.{" "}
          </p>
        </div>
      </div>
      <div style={{ float: "right", padding: "10px 24px" }}>
        <button onClick={handleSubmit} className={styles.confirm_delete_btn}>
          Отправить и продолжить
        </button>
      </div>
    </div>
  );
}

export default FeedBackForm;
