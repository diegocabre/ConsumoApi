export default function Landing() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="landing">
            <button className="btn" onClick={() => scrollToSection("section")}>2x1 dar click aqui y revisa tus Cocktails</button>
        </div>

    )
}
