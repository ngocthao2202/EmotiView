import React, { useState } from "react";
import styles from './uploadFile.module.css'
import uploadType from './../../assets/uploadType.png'
import videoPlayer from './../../assets/videoPlayer.png'
import uploadIcon from './../../assets/upload.png'
import ButtonColor from "../ButtonColor/buttonColor";

const UploadFile = ({setFile, file, handleSubmit, prediction, setPrediction}) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const retry = () => {
    setFile(null);
    setPrediction(null)
  }
  return (
    <div className={styles.uploadPart}>
      {file && (
        <div  className={styles.uploadedImg}>
          <div className={styles.imageUpload}>
            <img
              alt="not found"
              width={"50%"}
              src={URL.createObjectURL(file)}
            />
            <p style={{display:"flex", justifyContent:"center"}}>{file.name}</p>
          </div>
          <div className={styles.buttons}>
            {prediction === null && (
              <button className={styles.deleteBut} onClick={() => setFile(null)}>Remove</button>
            )}
            {prediction !== null ? (
              <button onClick={retry} className={styles.predictBut}><p>Thử lại</p></button>
            ) : (
              <div onClick={handleSubmit}>
                <ButtonColor text={'Predict'}/>
              </div>
            )}
          </div>
        </div>
      )}
      {!file && (
        <div className={styles.selectedImg}>
          <form className={styles.form}>
             <div className={styles.rules}>
              <div className={styles.eachRule}>
                <div className={styles.imageIconRules}>
                  <img src={uploadType}/>
                </div>
                  <div>
                    <h2>Images</h2>
                    <p>PNG, JPG, GIF</p>
                  </div>
              </div>
              <div className={styles.eachRule}>
              <div className={styles.imageIconRules}>
                  <img src={videoPlayer}/>
                </div>
                  <div>
                    <h2>Videos</h2>
                    <p>MP4, 4:3, up to 24 seconds</p>
                  </div>
              </div>
             </div>
             <div className={styles.inputBox}>
              <input
                   type="file"
                   name="myImage"
                   className={styles.customUpload}
                   id="myImage"
                   onChange={handleFileChange}
              />
              <label className={`${styles.customButton} ${styles.customCursorDefaultHover}`} htmlFor="myImage">
                <div className={styles.imageIcon}>
                  <img src={uploadIcon}/>
                </div>
                Click to upload file
              </label>
             </div>
           </form>
        </div>
      )}

    </div>
  );
};
export default UploadFile;