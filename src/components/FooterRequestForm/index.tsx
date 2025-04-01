"use client";

import { FormEvent, useState } from "react";

const FooterRequestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`
      Ваше имя ${name}
      Ваша почта ${email}
      Ваш номер ${phone}
      Ваш коментарий ${comment}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item footer__form">
        <label htmlFor="name" className="form-item__title rubik-regular">
          Your name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Please introduce yourself"
          className="form-item__field rubik-regular"
          required
        />
      </div>
      <div className="form-item footer__form">
        <label htmlFor="email" className="form-item__title rubik-regular">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="ivanov@mail.ru"
          className="form-item__field"
          required
        />
      </div>
      <div className="form-item footer__form">
        <label htmlFor="phone" className="form-item__title  rubik-regular">
          Phone number
        </label>
        <input
          className="form-item__field rubik-regular"
          placeholder="+7(999) 999 9999"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-item footer__form">
        <label htmlFor="comment" className="form-item__title rubik-regular">
          Comment
        </label>
        <input
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          name="comment"
          placeholder="Message text"
          className="form-item__field rubik-regular"
        />
      </div>
      <input type="submit" className="button footer__buttom" value="Send" />
    </form>
  );
};

export default FooterRequestForm;
