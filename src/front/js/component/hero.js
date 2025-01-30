import React from "react";
import mainImage1 from "../../img/mainImage1.jpeg";
import image1 from "../../img/image1.jpeg";
import image2 from "../../img/image2.jpeg";
import image4 from "../../img/image4.jpeg";

export const Hero = () => {
    const commonText = "Aprende en un entorno inmersivo. Imagina un aula donde las paredes cobran vida. Aquí, cada lección se proyecta en pantallas envolventes que transforman el aprendizaje en una experiencia interactiva y emocionante.";

    return (
        <div
            className="p-5 text-start bg-image rounded-3 id-hero"
            style={{
                backgroundImage: `url(${mainImage1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                marginBottom: "600px"
            }}
        >
            <div className="mask h-100 pb-5" marginBottom="600px">
                <div
                    className="d-flex flex-column justify-content-center align-items-start h-80 w-100"
                    style={{ color: "black" }}
                >
                    <div className="text-black">
                        <h1 className="mb-3" id="titulo2">Edu Sphere</h1>
                        <h4 className="mb-3" id="subtitulo2">
                            En WallStudio creemos que existe una manera diferente de hacer negocios
                        </h4>
                        <a
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-light btn-lg"
                            href="#!"
                            role="button"
                        >
                            Call to action
                        </a>
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-around mt-5">
                <div className="text-center">
                    <img src={image1} alt="Imagen 1" className="img-fluid rounded" style={{ width: "400px", height: "400px" }} />
                    <p>{commonText}</p>
                </div>
                <div className="text-center">
                    <img src={image2} alt="Imagen 2" className="img-fluid rounded" style={{ width: "400px", height: "400px" }} />
                    <p>{commonText}</p>
                </div>
                <div className="text-center">
                    <img src={image4} alt="Imagen 3" className="img-fluid rounded" style={{ width: "400px", height: "400px" }} />
                    <p>{commonText}</p>
                </div>
            </div>
        </div>
    );
};
