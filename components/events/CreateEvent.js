import React, { useState, useContext, useEffect } from "react";
import { styles, css } from "../Animations/Animations";
import useToast from "/Hooks/useToast";
import EventContext from "/context/EventContext";
import style from "/styles/Events/CreateEvent.module.css";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { storage } from "/config/FirebaseConfig";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const Dynamic = dynamic(
  () => import("react-quill"),
  { ssr: false } // <-- not including this component on server-side
);

const CreateEvent = (props) => {
  const { closeModal, initData } = props;
  const notify = useToast();

  const [eventImg, setEventImg] = useState();
  const [description, setDescription] = useState("");

  //   const [tags, setTags] = useState(initData ? [...initData.tags] : []);

  const [detail, setDetail] = useState(
    initData === undefined || initData === null
      ? {
          title: "",
          description: "",
          price: "",
          date: "",
          time: "",
          venue: "",
          categ: "",
          image: null,
          link: "",
          member: "",
          shortDesc: "",
        }
      : {
          eId: initData.eId,
          title: initData.heading,
          description: initData.description,
          price: String(initData.price),
          date: initData.date,
          time: initData.time,
          venue: initData.venue,
          image: initData.imgSrc,
          link: initData.link,
        }
  );

  const imageLoad = (event) => {
    if (event.target.files.length !== 0) {
      setEventImg(event.target.files[0]);
    }
  };

  const handleChange = () => {
    setDetail({
      //   eId: initData && initData.eId,
      title: document.getElementById("title").value,
      // description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      venue: document.getElementById("venue").value,
      categ: document.getElementById("categ").value,
      teamSize: document.getElementById("member").value,
      shortDesc: document.getElementById("shortDesc").value,
    });
  };

  const { createEvent } = useContext(EventContext);
  //   const { createComp, editComp } = useContext(CompContext);

  // const handleCreate = () => {
  //   if (eventImg) {
  //     const metadata = {
  //       contentType: "image/jpeg",
  //     };
  //     const storageRef = ref(storage, "Events/" + eventImg.name);

  //     const uploadTask = uploadBytesResumable(storageRef, eventImg, metadata);

  //     // Listen for state changes, errors, and completion of the upload.
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         notify("info", "Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           const obj = {
  //             ...detail,
  //             description: description,
  //             eventImageURL: downloadURL,
  //           };
  //           console.log(obj);
  //           createEvent(obj);
  //           closeModal();
  //         });
  //       }
  //     );
  //   }
  // };

  const handleCreate = () => {
    if (detail && description) {
      const obj = {
        ...detail,
        description: description,
      };
      createEvent(obj);
      closeModal();
    }
  };

  const handleEdit = () => {
    // var image = document.getElementById("output-image");
    // UploadImage(image, (imgData) => {
    //   if (isComp) editComp(detail, tags, imgData, closeModal);
    //   else editEvent(detail, tags, imgData, closeModal);
    // });
  };

  return (
    <div id={`${style.createEvent}`} className={css(styles.slideInDown)}>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.screen}>
            <div className={style.screen_body}>
              <div className={`${style.screen_body_item} ${style.left}`}>
                <div className={style.app_title}>
                  <span>{initData ? "EDIT" : "CREATE"}</span>
                  {/* <span>{isComp ? "COMP" : "EVENT"}</span> */}
                </div>
                <div className={style.app_image}>
                  <div
                    style={{
                      color: "black",
                      height: "100%",
                      width: "100%",
                      lineHeight: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="file">
                      <input
                        type="file"
                        accept="image/gif, image/jpeg, image/png"
                        name="image"
                        id="file"
                        style={{
                          display: "none",
                        }}
                        onChange={imageLoad}
                      />
                      {!eventImg ? (
                        <>
                          <p>
                            <label
                              id="image-label"
                              htmlFor="file"
                              style={{
                                cursor: "pointer",
                                border: "1px solid black",
                                padding: "10px",
                                borderRadius: "5px",
                              }}
                            >
                              Upload Image
                            </label>
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                      <img
                        id="output-image"
                        style={{
                          display: "none",
                          width: "100%",
                          height: "100%",
                        }}
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.screen_body_item}>
                <div className={style.app_form}>
                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      placeholder="Event Name"
                      id="title"
                      value={detail.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${style.app_form_group} ${style.message}`}>
                    <textarea
                      className={style.app_form_control}
                      placeholder="Short Description about Event"
                      id="shortDesc"
                      value={detail.shortDesc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${style.app_form_group} ${style.message}`}>
                    {/* <textarea
                      className={style.app_form_control}
                      placeholder="About Event"
                      id="description"
                      value={detail.description}
                      onChange={handleChange}
                    /> */}
                    <Dynamic
                      value={description}
                      onChange={setDescription}
                      theme="snow"
                      placeholder="Write description"
                    />
                  </div>
                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      placeholder="Event Category"
                      id="categ"
                      value={detail.categ}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${style.app_form_group} ${style.message}`}>
                    <input
                      type="number"
                      className={style.app_form_control}
                      placeholder="Event Price"
                      id="price"
                      value={detail.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      type="date"
                      id="date"
                      value={detail.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      type="time"
                      id="time"
                      value={detail.time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      placeholder="Venue of Event"
                      id="venue"
                      value={detail.venue}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={style.app_form_group}>
                    <input
                      className={style.app_form_control}
                      placeholder="Number of member"
                      type="number"
                      id="member"
                      value={detail.member}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={style.app_form_group}>
                    {/* <TagInput tags={tags} setTags={setTags} /> */}
                  </div>

                  <div className={`${style.app_form_group} ${style.buttons}`}>
                    <button
                      className={style.app_form_button}
                      onClick={initData ? handleEdit : handleCreate}
                    >
                      {initData ? "SAVE" : "CREATE"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
