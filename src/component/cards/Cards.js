import React from 'react'
import './cards.css';
import img1 from "./cards-1.jpg";
import img2 from "./cards-2.jpg";
import img3 from "./cards-3.jpg";
import img4 from "./cards-4.jpg";

const Cards = () => {
  return (
    <div>
    <section id="services-cards" className="services-cards">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg">
                  <img src={img1} id="set-img12" />
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Eligendi omnis sunt veritatis.</b>
                  </h4>
                  <p>
                    Fuga in dolorum et iste et culpa. Commodi possimus
                    nesciunt modi voluptatem placeat deleniti adipisci. Cum
                    delectus doloribus non veritatis. Officia temporibus
                    illo magnam. Dolor eos et.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg">
                  <img src={img2} id="set-img12" />
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Possimus ut sed velit assumenda</b>
                  </h4>
                  <p>
                    Sunt deserunt maiores voluptatem autem est rerum
                    perferendis rerum blanditiis. Est laboriosam qui iste
                    numquam laboriosam voluptatem architecto. Est laudantium
                    sunt at quas aut hic. Eum dignissimos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg">
                  <img src={img3} id="set-img12" />
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">
                  <b> Error beatae dolor inventore aut</b>
                  </h4>
                  <p>
                    Dicta porro nobis. Velit cum in. Nesciunt dignissimos
                    enim molestiae facilis numquam quae quaerat ipsam omnis.
                    Neque debitis ipsum at architecto officia laboriosam
                    odit. Ut sunt temporibus nulla culpa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg">
                  <img src={img4} id="set-img12" />
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">
                  <b> Expedita voluptas ut ut nesciunt</b>
                  </h4>
                  <p>
                    Aut est quidem doloremque voluptatem magnam quis
                    excepturi vero quia. Eum eos doloremque architecto illo
                    at beatae dolore. Fugiat suscipit et sint ratione
                    dolores. Aut aliquid ea dolores libero nobis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Cards
