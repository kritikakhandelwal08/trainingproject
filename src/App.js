import { useState } from 'react';
import './App.css';

function App() {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [contact, setContact] = useState("")
const [gender, setGender] = useState("male")
const [subjects, setSubjects] = useState({
  english:true,
  maths:false,
  physics:false
});
const [resume, setResume] = useState("");
const [url, setUrl] = useState();
const [selectedOption, setSelectedOption] = useState("");
const [about, setAbout] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(firstName,
    lastName,
    email,
    contact,
    gender,
    selectedOption,
    subjects,
    resume,
    url,
    about
  );
};
const handleSubjectChange= (sub) => {
  setSubjects((prev) => ({
    ...prev,
    [sub]: !prev[sub],
  }));
}
const handleReset = () => {
  setFirstName("");
  setLastName("");
  setEmail("");
  setContact("");
  setGender("male");
  setSubjects({
    english:true,
    math: false,
    physics: false,
  });
  setResume("");
  setUrl("");
  setSelectedOption("");
  setAbout();
}


  return (

    <div className='App'>
      <h1>Form in React</h1>
      <fieldset>
         <form action="#" method='get'>
            <label for="firstname">First Name*</label>
            <input type="text" placeholder='Enter First Name' name='firstname' id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <label htmlFor="lastname">Last Name*</label>
            <input type="text" placeholder='Enter Last Name' name='lastname' id='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
            <label htmlFor="email">Enter Email*</label>
            <input type="email" placeholder='Enter Email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <label htmlFor="tel">Contact*</label>
            <input type="tel" placeholder='Enter Mobile Number' name='contact' id='contact' value={contact} onChange={(e) => setContact(e.target.value)} required/>
            <label htmlFor="gender">Gender</label>
            <input type="radio" name='gender' value="male" id='male' checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>  Male    
            <input type="radio" name='gender' value="female" id='female' checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />  Female
            <input type="radio" name='gender' value="other" id='other' checked={gender === "other"} onChange={(e) => setGender(e.target.value)}/>  Other
            <label htmlFor="lang">Your best Subject</label>
            <input type="checkbox" name='lang' id='english' checked={subjects.english} onChange={(e) => handleSubjectChange("english")}/>English
            <input type="checkbox" name='lang' id='maths' checked={subjects.maths} onChange={(e) => handleSubjectChange("maths")} />Math
            <input type="checkbox"  name='lang' id='physics' checked={subjects.physics} onChange={(e) => handleSubjectChange("physics")}/>Physics
            <label htmlFor="file">Upload Resume</label>
            <input type="file" placeholder='Enter Upload file' name='file' id='file' onChange={(e) => setResume(e.target.files[0])} required />
            <label htmlFor="url">Enter Url</label>
            <input type="url" name='url' id='url' onChange={(e) => setUrl(e.target.value)} required placeholder='Enter URL' />
            <label>Select your choice</label>
            <select name="select" id="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="" disabled selected={selectedOption === ""}>Select your Ans</option>
            <optgroup label='Beginers'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
              </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea name="about" id="about" rows={10} cols={30} onChange={(e) => setAbout(e.target.value)} required placeholder='About your self'></textarea>
            <button type='reset' value="reset" onClick={() => handleReset()}>Reset</button>
            <button type='submit' value="submit" onClick={() => handleSubmit()}> Submit</button>
          </form>
       </fieldset>
    </div>
  );
}

export default App;
