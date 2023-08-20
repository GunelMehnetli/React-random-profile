import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./RandomProfile.css";
function RandomProfile() {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.lasts}`
      );
      setProfileCell(res.data.results[0].cell);
      setProfileImage(res.data.results[0].picture.large);
      setProfileEmail(res.data.results[0].email);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    profileData();
  }, []);

  return (
    <div className="App">
      <div className="profileContainer">
        <img src={profileImage} alt="" />
        <h1>{profileName}</h1>
        <p>{profileEmail}</p>
        <p>{profileCell}</p>
        <button onClick={profileData}>Click for new profile</button>
      </div>
    </div>
  );
}

export default RandomProfile;
