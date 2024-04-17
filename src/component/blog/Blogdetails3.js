import React from "react";
import "./bolgdetails.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Blogcomponent1 from "./Blogcomponent1";
import blog33 from "./blog-1.jpg";
import blog55 from "./blog-inside-post.jpg";
import Card from "react-bootstrap/Card";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineDriveFileMove } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import Blogcomment from "./Blogcomment";

import { AiOutlineArrowUp } from "react-icons/ai";

const Blogdetails3 = () => {

  function scrolltotop() {
    window.scrollTo(0, 0);
  }


  return (
    <div>
      <div className="bg9">
        <div className="text1">
          <div className="txt12">
            <strong>Blog Details</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item>
                <NavLink to="/"> Home </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/Blog"> Blog Details </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="blog-details-md">
        <div className="blog-details-left">
          <Card id="blog-dc" style={{ width: "90%" }}>
            <Card.Img variant="top" src={blog33} />
            <Card.Body>
              <Card.Title id="set-bdt">
                <b>
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </b>
              </Card.Title>
              <Card.Text>
                <p id="pet2">
                  <MdOutlineManageAccounts id="det" />
                  Jonh Deo <BsClock id="det" /> Jan1, 2022{" "}
                  <FaRegCommentDots id="det" />
                  12 Comments
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  dam animinitdisc praeseium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniets enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                  eta quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendised dolore.
                  <br />
                  <br />
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
                  reiciendis. Sequi acusamus harum vel aspernatur. Excepturi
                  numquam nihil cumque odio. Et voluptate sckisoias cupiditate.
                </p>
              </Card.Text>
              <Card.Text>
                <div className="card-in">
                  <p>
                    <b>
                      <i>
                        Et vero doloremque tempore voluptatem ratione vel aut.
                        Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                        autem quos.
                      </i>
                    </b>
                  </p>
                </div>
              </Card.Text>
              <Card.Text>
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                dicta inventore tempore provident voluptas mollitia aliquid. Id
                repellendus quia. Asperiores nihil magni dicta est suscipit
                perspiciatis. Voluptate ex rerum assumenda dolores nihil
                quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                exercitationem harum qui qui blanditiis neque. Iusto autem
                itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto
                voluptatem magni. Vel magnam quod et tempora deleniti error
                rerum nihil tempora.
              </Card.Text>
              <Card.Text>
                <div className="card-inn">
                  <p>
                    <b>Et quae iure vel ut odit alias.</b>
                  </p>
                </div>
              </Card.Text>
              <Card.Text>
                Officiis animi maxime nulla quo et harum eum quis a. Sit hic in
                qui quos fugit ut rerum atque. Optio provident dolores atque
                voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis
                ullam quibusdam perspiciatis nulla nostrum. Voluptatum est
                libero eum nesciunt aliquid qui. Quia et suscipit non sequi.
                Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut
                ratione aspernatur dolor. Sint harum eveniet dicta
                exercitationem minima. Exercitationem omnis asperiores natus
                aperiam dolor consequatur id ex sed. Quibusdam rerum dolores
                sint consequatur quidem ea. Beatae minima sunt libero soluta
                sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam
                voluptatem voluptatem accusamus mollitia aut atque aut.
              </Card.Text>
              <Card.Img variant="top" src={blog55} />
            </Card.Body>
            <Card.Text>
              <div className="card-inn">
                <p>
                  <b>Ut repellat blanditiis est dolore sunt dolorum quae.</b>
                </p>
              </div>
            </Card.Text>
            <Card.Text>
              <p id="last-t">
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                dicta inventore tempore provident voluptas mollitia aliquid. Id
                repellendus quia. Asperiores nihil magni dicta est suscipit
                perspiciatis. Voluptate ex rerum assumenda dolores nihil
                quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut
                at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum
                exercitationem harum qui qui blanditiis neque. Iusto autem
                itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto
                voluptatem magni. Vel magnam quod et tempora deleniti error
                rerum nihi tempora.
              </p>
            </Card.Text>
            <Card.Text>
              <p id="last-t">
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis
                voluptatem magni. Vel magnam quod et tempora deleniti error
                rerum nihi tempora.
              </p>
            </Card.Text>
            <Card.Text id="last-fl">
              <p id="last-ic">
                <MdOutlineDriveFileMove id="icm" />
                Business
                <MdOutlineAttachment id="icm" /> Creative ,Tips, Marketing
              </p>
            </Card.Text>
          </Card>
        </div>
        <div className="blog-details-right">
          <Blogcomponent1 />
        </div>
      </div>
      <div className="comment1">
        <div className="comment1-center">
          <div className="comment-left">
            <div className="comment-img">
              <img id="set-comment-img" src={blog33} />
            </div>
          </div>
          <div className="comment-right">
            <div className="right-title" >
              <h4><b>Jane Smith</b></h4>
            </div>
            <div className="right-icns" >
              <AiOutlineTwitter/><BsFacebook/><AiOutlineInstagram/>
            </div>
            <div className="right-details" >
              <p><i>Itaque quidem optio quia voluptatibus dolorem dolor. 
                Modi eumd possimus accusantium. Quas reptatem 
                officia numquam sint aspernatur voluptas. 
                Esse et accusantium ut unde voluptas.</i></p>
            </div>
          </div>
        </div>
      </div>
      <Blogcomment/>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Blogdetails3;
