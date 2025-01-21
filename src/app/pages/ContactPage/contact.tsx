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
      <h1 className={classes.headline}> - お問い合わせ -</h1>
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
        <figcaption className={classes.mapinfo}>
          <div className={classes.maplogo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 192.756 192.756"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M133.057 137.084l.066-.086c3.297-3.734 6.041-8.02 8.242-12.414 3.623 2.416 8.016 3.955 12.633 3.955 10.215 0 19.334-5.162 20.873-15.709h-17.906V98.217h32.957v43.943h-13.625v-7.908c-5.932 5.604-13.182 9.008-22.299 9.008-7.691 0-14.834-2.197-20.875-6.262-.328-.109-.658-.33-.988-.549-10.107-7.361-16.809-19.664-16.809-33.617 0-4.066.441-7.799 1.209-11.426l-16.26 51.195H84.457L65.67 83.716c.112 1.21.33 2.417.33 3.626H50.401c-.112-.55-.219-1.209-.441-1.867-.769-2.747-2.636-4.944-3.953-5.823-.441-.331-1.21-.768-2.197-1.209-1.21-.55-2.857-1.099-4.725-1.537-2.197 5.055-3.845 10.545-4.505 16.26.549.108 1.099.219 1.759.219 1.978.33 4.614.55 7.471.88 2.085.219 4.172.549 6.15.988 4.286.876 8.461 2.197 11.315 4.395 5.604 4.613 8.351 10.986 7.472 20.65-.661 6.924-5.055 13.516-9.557 17.029-1.648 1.1-4.617 2.307-7.583 3.297 1.759 2.527 8.021 6.701 12.084 8.9h54.163c4.834-2.639 10.984-7.584 14.279-11.428v.111c.33-.33.66-.66.988-1.102a.679.679 0 0 1-.064-.021zm-91.444-8.875c2.746 4.613 6.042 8.789 9.888 12.414-4.836 1.648-10.548 2.967-16.92 2.967-9.887 0-17.905-3.406-22.299-6.922-4.616-3.734-9.446-11.535-9.446-20.762H19.2c0 9.115 9.449 12.963 17.027 12.963 1.76 0 3.627-.33 5.386-.66zm-6.811-19.336c-.552-3.074-.661-6.041-.661-9.115 0-2.201.109-4.395.331-6.484-7.363-.879-13.844-3.296-13.844-7.909 0-5.712 6.591-8.789 12.084-9.008 1.979-.111 4.175.219 6.262.657a55.756 55.756 0 0 1 8.239-13.402c-3.623-.988-7.909-1.428-12.192-1.428-9.338 0-18.018 3.407-23.731 8.35-5.273 4.613-7.029 10.434-7.029 17.688 0 4.284 1.756 7.471 6.264 12.085 3.842 4.064 16.584 7.248 24.277 8.566zm55.807-65.64c16.205-.055 31.141 7.031 41.525 18.292 1.336 1.449 2.578 2.788 3.754 4.281 5.006-2.344 10.965-3.625 17.668-3.731 19.445.108 33.287 8.678 36.254 26.915h-16.588c-2.857-7.36-8.131-12.744-19.666-12.744-3.844 0-7.471 1.209-10.547 3.076-1.848-4.783-4.342-9.354-7.27-13.281a44.477 44.477 0 0 0-3.605 2.076c-6.15 3.954-10.656 9.669-13.291 16.479l6.918-22.521h-16.037l-17.358 55.917-1.978-5.932L74.9 62.075H58.86l4.284 13.292c-1.429-2.747-3.405-5.053-5.712-6.919-2.197-1.758-4.725-3.077-7.471-4.064-.769-.222-1.648-.552-2.525-.771.77-.988 1.648-1.978 2.525-2.966 10.216-10.66 24.444-17.358 40.648-17.414zm-46.799 67.29a37.478 37.478 0 0 0-5.715-1.209c-.768-.221-1.975-.33-3.185-.551 1.099 6.922 3.515 13.514 6.811 19.445.771-.107 1.429-.219 2.089-.33 1.317-.219 2.305-.439 2.966-.658 1.206-.33 2.308-1.098 3.185-2.307 1.867-2.086 2.857-5.055 2.419-7.252-.441-1.426-1.209-2.635-2.419-3.734-1.538-1.536-3.735-2.636-6.151-3.404zm88.325-16.7c-.879 2.855-1.318 5.935-1.318 9.009 0 3.186.439 6.152 1.318 8.898 1.76 5.273 5.055 9.777 9.449 12.744a57.16 57.16 0 0 0 5.602-24.717c0-7.142-1.318-14.064-3.955-20.546-5.165 3.185-9.01 8.461-11.096 14.612z"
                  fill="#757fb5"
                />
              </g>
            </svg>
            相談支援センター ハル
          </div>
          <address className={classes.mapaddress}>
            〒559-0006 大阪市住之江区浜口西一丁目５番１号
            <br />
            <a href="https://maps.app.goo.gl/cWZgCUgTfSGaduQCA" target="_blank">
              Google Map
            </a>
          </address>
        </figcaption>
      </figure>
      <p className={classes.p}>
        ※施設や教室の場所が正確に表示されていない場合がございますので、
        <br />
        正確な場所については施設へ直接お問い合わせ頂きますようお願い致します。
      </p>
    </section>
  );
};

export default ContactPage;
