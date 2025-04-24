export function Contact() {
    return `
      <section class="contact">
        <h2>Contáctame</h2>
        <form onsubmit="event.preventDefault(); alert('Mensaje enviado!')">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    `;
  }
  