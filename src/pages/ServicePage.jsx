import React, { useEffect, useState } from "react";
import "./CSS/service.css";
import { auth, db, storage } from "../firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Modal from "react-responsive-modal";
import { Close } from "@mui/icons-material";
import "react-responsive-modal/styles.css";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServicePage = ({ userid, postId, settailor }) => {
  const [portList, setPortList] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const portCollectionRef = collection(db, "vendor-detail");
  const pCollectionRef = collection(db, "price-detail");
  const [price, setPrice] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const close = <Close />;
  const [imgurl, setimgUrl] = useState("");
  const [question, setQuestion] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    listAll(ref(storage, `${userid}`)).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
    console.log("useeffect", imgUrl);
    const getPortfolio = async () => {
      const data = await getDocs(portCollectionRef);
      setPortList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getPrice = async () => {
      const data = await getDocs(pCollectionRef);
      setPrice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPortfolio();

    const uniqueItems = [...new Set(imgUrl)];
    //console.log(uniqueItems)
    setImgUrl(uniqueItems);
  }, []);
  const SelfCollectionRef = collection(db, "self-delivery-detail");
  const handleDelivery = (id) => {
    //console.log("tailorid",id)
    //settailor(id)
    localStorage.setItem("vendorid", id);
    navigate("/userDashboard");
  };

  const handleSelfDelivery = async (userid) => {
    await addDoc(SelfCollectionRef, {
      userid,
      name: auth.currentUser.displayName,
      service: "self-service",
      orderid: auth.currentUser.uid,
    });
    setisModalOpen(false);
  };

  console.log("out", imgUrl);
  return (
    <div id="ServicePage">
      {portList
        .filter((p) => p.id === postId)
        .map((post) => {
          return (
           <div>
            <div className="Service-Info">
              <div className="about">
                <h1>{post.name}</h1>
                <span className="timing">Timing: 09.00am-08.00pm</span>
                <span className="status">{post.status}</span>
                <span className="rating">Rating: 4.5</span>
                <span>{post.address} </span>
                <span className="contact">{post.contact}</span>
                <p>
                  We are established tailors since 1990s with long family
                  history in the work. We provide all kinds of stitching
                  services for both men and women.
                </p>

                <button onClick={() => setisModalOpen(true)}>
                  Place order
                </button>

                <Modal
                  open={isModalOpen}
                  closeIcon={close}
                  onClose={() => setisModalOpen(false)}
                  closeOnEsc
                  centercloseOnOverlayClick={false}
                  styles={{
                    overlay: {
                      height: "auto",
                    },
                    backgroundColor: "yellow",
                  }}
                >
                  <div className="modal_btn">
                    <button
                      className="cancel"
                      onClick={() => {
                        handleSelfDelivery(post.userid);
                      }}
                    >
                      Self-Service
                    </button>
                    <button
                      onClick={() => {
                        handleDelivery(post.userid);
                      }}
                      type="submit"
                      className="add"
                    >
                      Pickup and Delivery Service
                    </button>
                  </div>
                </Modal>

                <button>Book an appointment</button>
              </div>
              <div className="directions">
                {/* iss div ko mt hatana css bigad jaegi, grid bna rkhi h */}
              </div>
              </div>
              <div>
              <div className="Service-section">
              <h2>Our Services and Rates</h2>
                <div className="Service-container">
                  {imgUrl.map((img) => {
                    return (
                      <div className="Service-section">
                        <div className="Service-container">
                          <div className="Service-card">
                            <div className="serviceImage">
                              <img src={img} alt="" />
                            </div>
                            <span>Kurti - 500</span>
                          </div>
                        </div>
                        <div className="service-samples"></div>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            </div>
            /* */
          );
        })}
    </div>
  );
};

export default ServicePage;
