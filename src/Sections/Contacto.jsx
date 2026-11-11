import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/portafolio.css";

const WEB3FORMS_ACCESS_KEY = "275d54e4-2f42-402a-b8ce-4cc7ceceea6c";

const Contacto = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const enviarCorreo = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const formData = new FormData(form.current);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "Nuevo mensaje desde el portafolio");
      formData.append("from_name", "Portafolio de Kendall");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Submission failed");
      setStatus("success");
      form.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("contacto.titulo")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t("contacto.subtitulo")}
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={enviarCorreo}
        className="formulario-contacto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <input
          type="email"
          name="email"
          placeholder={t("contacto.placeholderEmail")}
          aria-label={t("contacto.placeholderEmail")}
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder={t("contacto.placeholderMensaje")}
          aria-label={t("contacto.placeholderMensaje")}
          required
        />
        <motion.button
          type="submit"
          className="boton-enviar"
          disabled={sending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {sending ? t("contacto.enviando") : t("contacto.boton")}
        </motion.button>
        {status && <p className={`formulario-estado ${status}`} role={status === "error" ? "alert" : "status"}>{t(`contacto.${status}`)}</p>}
      </motion.form>

      <motion.div
        className="redes-contacto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/KendallCa05"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-red social-github"
          aria-label="GitHub"
          whileHover={{ scale: 1.1 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://wa.me/86312971"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-red social-whatsapp"
          aria-label="WhatsApp"
          whileHover={{ scale: 1.1 }}
        >
          <i className="fab fa-whatsapp"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kendallca"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-red social-linkedin"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.1 }}
        >
          <i className="fab fa-linkedin-in"></i>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contacto;
