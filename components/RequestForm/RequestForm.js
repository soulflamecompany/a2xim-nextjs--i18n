import styles from "./RequestForm.module.scss";
import React, { useForm } from "react-hook-form";
import axios from "axios";

const RequestForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      await axios.post("http://localhost:1337/api/requests", {
        data: {
          name: formData.name,
          phone: formData.phone,
        },
      });
      reset();
      alert("Заявка успешно отправлена");
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error.message);
      // Дополнительные действия при возникновении ошибки, например, отображение сообщения об ошибке
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.title}> Оставьте заявку</h2>
          <input
            {...register("name")}
            name="name"
            type="text"
            className={styles.input}
            placeholder="Ваше имя"
          />

          <input
            {...register("phone")}
            type="tel"
            name="phone"
            className={styles.input}
            placeholder="Телефон"
          />
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.custom_checkbox}
              id="policy"
              value="yes"
              required
            />
            <label className={styles.checkboxSize} htmlFor="policy"></label>
            <span>Я согласен на обработку персональных данных</span>
          </div>
          <input type="submit" value="Отправить" className={styles.submit} />
        </form>
      </section>
    </div>
  );
};

export default RequestForm;
