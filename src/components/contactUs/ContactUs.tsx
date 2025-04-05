import { AppInputField } from "../common/fields/AppInputField";
import styles from "./ContactUs.module.scss";
import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import { AppTextArea } from "../common/fields/AppTextArea";
import { AppButton } from "../common/buttons/AppButton";
import { Icon, IconType } from "../common/icons/Icon";
import { Link } from "react-router-dom";
import { routePaths } from "../common/infrastructure/routes/routePaths";
import { Controller, useForm } from "react-hook-form";

type ContactUsFormModel = {
  name: string;
  email: string;
  message: string;
};

export const ContactUs = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormModel>({ mode: "onSubmit" });

  const onSubmit = async (data: ContactUsFormModel) => {
    console.log("Submitteddd", data);
    // await fetch("https://formspree.io/f/xyzabcde", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className={styles.contactUs_wrapper}>
      <div className={styles.contactUs_header}>
        <div className={styles.contactUs_left}>
          <h2>{untranslated("Свържете се с нас")}</h2>
          <p>
            Имате въпроси или нужда от съдействие? Свържете се с нас – ще се
            радваме да помогнем!
          </p>

          <div className={styles.contactUs_left_links}>
            <Link
              to={"tel:+359 88 9953740"}
              className={styles.contactUs_left_links_link}
            >
              <Icon type={IconType.Phone} width={"30px"} /> Звъннете ни
            </Link>
            <Link
              to={"mailto:office@studioreform.bg"}
              className={styles.contactUs_left_links_link}
            >
              <Icon type={IconType.MailIcon} width={"30px"} /> Изпратете ни
              имейл
            </Link>

            <Link
              to={routePaths.careers}
              className={styles.contactUs_left_links_link}
            >
              <Icon type={IconType.Team} width={"30px"} />{" "}
              <span>
                Искаш да станеш част от екипа? <b>Кликни тук!</b>
              </span>
            </Link>

            <div className={styles.contactUs_left_socials}>
              <Link to={"https://www.facebook.com/groups/1732183253860779"}>
                <Icon width={"3rem"} height={"3rem"} type={IconType.Facebook} />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/studio.reform.pilates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
              >
                <Icon
                  width={"3rem"}
                  height={"3rem"}
                  type={IconType.Instagram}
                />
              </Link>
              <Link to={"mailto:office@studioreform.bg"}>
                <Icon width={"3rem"} height={"3rem"} type={IconType.MailIcon} />
              </Link>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactUs_right}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: untranslated("Полето 'Имена' е задължително"),
            }}
            render={({ field }) => (
              <AppInputField
                value={field.value}
                onChange={field.onChange}
                placeholder={untranslated("Вашите имена")}
                width={300}
              />
            )}
          />

          {errors.name && (
            <span className={styles.validation_error}>
              {errors.name.message}
            </span>
          )}

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: untranslated("Полето 'Имейл' е задължително"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: untranslated("Невалиден имейл адрес"),
              },
            }}
            render={({ field }) => (
              <AppInputField
                value={field.value}
                type="email"
                onChange={field.onChange}
                placeholder={untranslated("Вашият имейл")}
                width={300}
              />
            )}
          />
          {errors.email && (
            <span className={styles.validation_error}>
              {errors.email.message}
            </span>
          )}
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: untranslated("Полето 'Съобщение' е задължително"),
            }}
            render={({ field }) => (
              <AppTextArea
                value={field.value}
                onChange={field.onChange}
                placeholder={untranslated("Съобщение...")}
                width={300}
                rows={5}
              />
            )}
          />
          {errors.message && (
            <span className={styles.validation_error}>
              {errors.message?.message}
            </span>
          )}

          <AppButton
            className={styles.contactUs_right_button}
            text={"Изпрати запитване"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};
