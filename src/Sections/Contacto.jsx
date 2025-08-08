import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "../styles/portafolio.css";

const Contacto = () => {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcsjzpk",
        "template_9lbkzt5",
        form.current,
        "1920pX7NdzFg80Kx7"
      )
      .then(
        () => {
          alert("¡Correo enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el correo: " + error.text);
        }
      );
  };

  return (
    <section id="contacto" className="contacto-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ¡Trabajemos juntos!
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
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Mensaje" rows="5" required></textarea>
        <motion.button
          type="submit"
          className="boton-enviar"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ENVIAR
        </motion.button>
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
