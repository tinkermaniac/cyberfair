class footerhehe extends HTMLElement {
    connectedCallback(){
        this.innerHTML = '
        <footer id="footer" class="footer" style="background-image: url(./assets/img/food-collage.webp); background-repeat: no-repeat; background-size: cover;">

            <div class="footer">
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <br>
                            <br>
                            <br>
                            <p style="color: white;">Aravali International School, Sector 43 Badkal Surajkund Road,Faridabad
                                Pin Code: 121003<br>
            
                                Tel: +91 8287104808, 9873567122<br>
                                E-mail: info.ais@aravali.edu.in <br> <br><img src="assets/img/logo2.png"
                                    style="height: 5%; width: 5%; align:left;" ;>
                                <Website footer <a href="https://html.design/"> CyberFair 2023</a>
                                    <br>
                                    <br>
                                    <img src="assets/img/cyberflogofooter.JPG">
                                    <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            </footer>
        '
    }
}

customElements.define('my-footer', footerhehe)