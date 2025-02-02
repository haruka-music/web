import React, { useRef } from "react";
import classes from "../ContactPage/Contact.module.css";
import Button from "@/app/components/elements/button/button";

const ContactPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      messageRef: messageRef.current?.value,
    };

    await fetch("pages/api/contact.ts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Contact-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メール送信成功");
    });
  };

  return (
    <section className={classes.section}>
      <h1 className={classes.headline}>Book A Table</h1>
      <p className={classes.description}>
        We consider all the drivers of change gives you the components
        <br />
        you need to change to create a truly happens.
      </p>
      <form
        className={classes.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <table className={classes.table}>
          <tbody className={classes.tbody}>
            <tr>
              <th className={classes.th}>
                <label className={classes.label} htmlFor="menu">
                  メニュー
                </label>
              </th>
              <td className={classes.td}>
                <select id="menu">
                  <option value="menu-1">質問</option>
                  <option value="menu-1">〜ついて</option>
                  <option value="menu-1">その他のお問い合わせ</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label className={classes.label} htmlFor="name">
                  名前
                </label>
              </th>
              <td>
                <input type="text" id="name" required ref={nameRef} />
              </td>
            </tr>
            <tr>
              <th>
                <label className={classes.label} htmlFor="email">
                  メール
                </label>
              </th>
              <td>
                <input
                  className={classes.input}
                  type="email"
                  id="email"
                  required
                  ref={emailRef}
                />
              </td>
            </tr>
            <tr>
              <th className={classes.label}>性別</th>
              <td>
                <label className={classes.label} htmlFor="radio">
                  <input type="radio" name="gender" value="male" />男
                </label>
                <label className={classes.label} htmlFor="radio">
                  <input type="radio" name="gender" value="femail" />女
                </label>
                <label className={classes.label} htmlFor="radio">
                  <input type="radio" name="gender" value="other" />
                  その他
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <label className={classes.label} htmlFor="detail">
                  詳細
                </label>
              </th>
              <td>
                <textarea
                  id="detail"
                  cols="30"
                  Rows="10"
                  ref={messageRef}
                ></textarea>
              </td>
            </tr>

            <Button />
          </tbody>
        </table>
      </form>

      <figure className={classes.map}>
        {/* <iframe
          src="https://www.google.com/maps/d/embed?mid=1btIm0ZjDQ9YvJ_Up8lnFbcRxEAg&hl=ja&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3283.6152913202286!2d135.48269407581347!3d34.61388838786571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x6000dd07ccfe49c9%3A0x3a86bc91d09b2c4d!2z44CSNTU5LTAwMDYg5aSn6Ziq5bqc5aSn6Ziq5biC5L2P5LmL5rGf5Yy65rWc5Y-j6KW_77yR5LiB55uu77yV4oiS77yR!3m2!1d34.613884!2d135.485269!5e0!3m2!1sja!2sjp!4v1717552951989!5m2!1sja!2sjp"
          width="600"
          height="450"
        ></iframe>
      </figure>
    </section>
  );
};

export default ContactPage;
