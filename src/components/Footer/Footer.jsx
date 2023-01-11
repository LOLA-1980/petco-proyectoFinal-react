import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="d-flex justify-content-end">
                <img src="images/petco-footer.svg" width="100" alt="" />
            </div>
            <div className="container-fluid py-5 background-Footer">
                <div className="row">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="" target="blank">Categorías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="" target="_blank">Club petco</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="" target="_blank">Servicios para mascotas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="" target="_blank">Regístrate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="" target="_blank">Promociones</a>
                            </li>
                        </ul>
                    </div>

                    <div className="row d-flex flex-column mt-5 pt-5">
                        <div className="col-md-6 d-flex flex-column">
                            <span className="text-white">Síguenos en nuestras redes sociales</span>
                            <div className="mt-3">
                                <a href="#" className="mx-1"><img src={"images/facebook.png"} alt={"Facebook"} width={35} /></a>
                                <a href="#" className="mx-1"><img src={"images/twitter.png"} alt={"Twitter"} width={35} /></a>
                                <a href="#" className="mx-1"><img src={"images/instagram.png"} alt={"Instagram"} width={35} /></a>
                                <a href="#" className="mx-1"><img src={"images/pinterest.png"} alt={"Pinterest"} width={35} /></a>
                                <a href="#" className="mx-1"><img src={"images/youtube.png"} alt={"YouTube"} width={35} /></a>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex flex-column mt-5">
                            <span className="text-white pb-2">Descarga nuestra app</span>
                            <div className="mt-3">
                                <a href="https://apps.apple.com/mx/app/petco-m%C3%A9xico/id1491212981" target="_blank" className="mx-1"><img src="images/app_store_3x_d293084ca1.png" alt="App Store" width="115" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.wallia.petco&hl=es_US" target="_blank" className="mx-1"><img src="images/disponible_google_play_3x_c977cae3bc.png" alt="Play Store" width="129" /></a>
                                <a href="https://appgallery.huawei.com/app/C103002363?sharePrepath=ag&locale=es_US&source=appshare&subsource=C103002363&shareTo=com.whatsapp&shareFrom=appmarket" target="_blank" className="mx-1"><img src="images/huawei.png" alt="App Gallery" width="129" /></a>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="pt-4"></div>
                    <div className="border-top"></div>
                    <div className="pb-4"></div>

                    <div className="d-flex justify-content-center flex-column align-items-center align-content-center text-white">
                        <span>Términos de uso. Políticas de privacidad.</span>
                        <span>   2018 Petco, todos los derechos reservados.</span>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="buttomChat chat-buttom-fixed">Chatea con Petco</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;