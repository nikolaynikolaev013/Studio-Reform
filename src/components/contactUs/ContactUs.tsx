import { AppInputField } from "../common/fields/AppInputField";
import styles from "./ContactUs.module.scss";
import { untranslated } from "../common/infrastructure/utilities/untranslsated";
import { AppTextArea } from "../common/fields/AppTextArea";
import { AppButton } from "../common/buttons/AppButton";
import { Icon, IconType } from "../common/icons/Icon";
import { Link } from "react-router-dom";
import { routePaths } from "../common/infrastructure/routes/routePaths";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { useState } from "react";
import { Seo } from "../common/Seo";

type ContactUsFormModel = {
  name: string;
  email: string;
  message: string;
};

export const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormModel>({ mode: "onSubmit" });

  const onSubmit = async (data: ContactUsFormModel) => {
    setIsLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xqapyrae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(untranslated("Съобщението Ви беше изпратено успешно!"));
        reset();
      }
    } catch {
      toast.error(
        "За съжаление не успехме да изпратим съобщението. Моля опитайте по-късно."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
          }}
        >
          <MoonLoader color="#fff" size={60} />
        </div>
      )}

      <Seo
        title={"Свържете се с нас"}
        description={
          "Свържи се с нас за въпроси, резервации или повече информация относно класовете в Studio Reform. Очакваме те!"
        }
      />

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
                area-label="Call us"
              >
                <Icon type={IconType.Phone} width={"30px"} /> Звъннете ни
              </Link>
              <Link
                to={"mailto:office@studioreform.bg"}
                className={styles.contactUs_left_links_link}
                area-label="Send us an email"
              >
                <Icon type={IconType.MailIcon} width={"30px"} /> Изпратете ни
                имейл
              </Link>

              <Link
                to={routePaths.careers}
                className={styles.contactUs_left_links_link}
                zarea-label="Go to 'Careers' page"
              >
                <Icon type={IconType.Team} width={"30px"} />{" "}
                <span>
                  Искаш да станеш част от екипа? <b>Кликни тук!</b>
                </span>
              </Link>

              <div className={styles.contactUs_left_socials}>
                <Link
                  to={"https://facebook.com/reformerpilatesvarna"}
                  area-label="Go to our Facebook page"
                >
                  <Icon
                    width={"3rem"}
                    height={"3rem"}
                    type={IconType.Facebook}
                  />
                </Link>
                <Link
                  to={
                    "https://www.instagram.com/studio.reform.pilates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  }
                  area-label="Go to our Instagram page"
                >
                  <Icon
                    width={"3rem"}
                    height={"3rem"}
                    type={IconType.Instagram}
                  />
                </Link>
                <Link
                  to={
                    "https://www.tiktok.com/@studioreformpilates?_t=ZN-8wg670EUoAo&_r=1"
                  }
                  area-label="TikTok"
                >
                  <Icon width={"3rem"} height={"3rem"} type={IconType.TikTok} />
                </Link>
                <Link
                  to={"mailto:office@studioreform.bg"}
                  area-label="Send us an email"
                >
                  <Icon
                    width={"3rem"}
                    height={"3rem"}
                    type={IconType.MailIcon}
                  />
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
    </>
  );
};
