import Link from "next/link";

const Page = () => {
    return <section id="AboutUs">
        <h2 className="subtitle">¿Quiénes Somos?</h2>
        <div className="description">
            <p>Somos una multiplataforma que ayuda a los empresarios locales a posicionarse de manera eficiente.</p>
            <p>Además de ampliar tus opciones para eventos, fiestas y reuniones!</p>
            <p>Tenemos casi 2 décadas en el negocio, pero ahora queremos expandirnos y brindar nuestro servicio a todo México.</p>
        </div>
        <Link href="/Contact" className="button">Contáctanos</Link>
    </section>
}

export default Page;