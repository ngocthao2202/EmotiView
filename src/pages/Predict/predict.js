"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './predict.module.css';
import UploadFile from "../../components/UploadFile/uploadFile";
import bg from './../../assets/bg.png';
import { emotions } from './../../utilis/results';
import axios from 'axios';
import Loading from "../../components/Loading/loading";
import nodata from './../../assets/nodata.png';

const Predict = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true)
    try {
      const response = await axios.post("https://f248-34-80-80-8.ngrok-free.app/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data)
      setPrediction(response.data);
    } catch (error) {
      console.error(error.response.data);
      setError(true)
    }
    setLoading(false)
  };

  const result = emotions.find((val) => val.id === Number(prediction?.label));
  if (result) {
      console.log('Matching skin cancer info:', result);
  } else {
      console.log('No match found for label:', prediction?.label);
      console.log('And:',  emotions.find((val) => val.id === Number(prediction?.label)));
  }

  const retry = () => {
    setFile(null);
    setPrediction(null)
  }
  return (
    <>
      <div className={styles.bgImg}>
        <img style={{width:"40%"}} src={bg}/>
      </div>
      <main className={styles.main}>
        {loading ? (
            <Loading />
        ) : prediction ? (
          <div className={styles.result}>
            <h2 className={styles.sectionTitle}>Prediction Result</h2>
            <span className={styles.warning}>
              * The information in this article is for reference only. To ensure safety and accuracy, you should consult a doctor or medical professional for thorough advice and examination.
            </span>
            <div style={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap: 20}}>
              <img style={{width:"50%"}} src={URL.createObjectURL(file)}/>
              <button onClick={retry} className={styles.predictBut}><p>Try Again</p></button>
            </div>
            <h4 style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Diagnosed: <br />
              <p className={styles.resultText}>{result.label}</p>
            </h4>
            <h4>Quote for you:</h4>
            <p className={styles.resultText}>{result.quote}</p>
            <h4>Guggest musics:</h4>
            <ul>
              {result.content.music?.map((music) => (
                <li key={music.id}>
                  <p>{music.content}</p>
                </li>
              ))}
            </ul>
            <h4>Guggest podcasts:</h4>
            <ul>
              {result.content.podcasts?.map((podcast) => (
                <li key={podcast.id}>
                  <p>{podcast.content}</p>
                </li>
              ))}
            </ul>
            <h4>Guggest practices:</h4>
            <ul>
              {result.content.practices?.map((practice) => (
                <li key={practice.id}>
                  <p>{practice.content}</p>
                </li>
              ))}
            </ul>
            <h4>Guggest activities:</h4>
            <ul>
              {result.content.activities?.map((activity) => (
                <li key={activity.id}>
                  <p>{activity.content}</p>
                </li>
              ))}
            </ul>
            <h4>Guggest resources:</h4>
            <ul>
              {result.content.resources?.map((resource) => (
                <li key={resource.id}>
                  <p>{resource.content}</p>
                </li>
              ))}
            </ul>
            <h4>Guggest plan:</h4>
            <ul>
              {result.content.plan?.map((plan) => (
                <li key={plan.id}>
                  <p>{plan.content}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : !error ? (
          <div>
            <h1 className="tourney-headings" style={{padding:"16px 0"}}>Upload Shot</h1>
            <UploadFile
              setFile={setFile}
              file={file}
              setPrediction={setPrediction} 
              prediction={prediction} 
              handleSubmit={handleSubmit}
              />
          </div>
        ) : 
          <div className={styles.nodata}>
            <div className={styles.noDataImg}>
              <img src={nodata}/>
            </div>
            <h4>Don't have any result !!! Please remove and click another image !</h4>
            <button onClick={retry} className={styles.predictBut}><p>Try Again</p></button>
          </div>
        }   
    </main>
    </>
  );
};

export default Predict;
