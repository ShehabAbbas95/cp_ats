import { useState } from "react";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";

function App() {
  const [applicationForm, setApplicationForm] = useState({});
  console.log(applicationForm);
  return (
    <>
      <ImageUpload />
      <PersonalInfo
        applicationForm={applicationForm}
        setAppl={setApplicationForm}
      />
      <Profile applicationForm={applicationForm} setAppl={setApplicationForm} />
    </>
  );
}

export default App;
