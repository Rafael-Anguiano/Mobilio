

const Page = () => {
    return <section id="Contact">
        <h2 className="subtitle">Contáctanos</h2>
        <p>¡Estamos aquí para ayudar! Envíenos cualquier pregunta que tenga. Esperamos con interés escuchar de usted.</p>
        <form className="form">
            <div className="two-columns">
                <div className="form-field">
                    <label>Nombre</label>
                    <input type="text" required />
                </div>
                <div className="form-field">
                    <label>Teléfono</label>
                    <input type="tel" pattern="[0-9]{2} [0-9]{4}-[0-9]{4}" required />
                </div>
            </div>
            <div className="form-field">
                <label>Correo electrónico</label>
                <input type="email" required />
            </div>
            <div className="form-field">
                <label>Mensaje</label>
                <input type="text" required/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </section>
}

export default Page