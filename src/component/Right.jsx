import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import "./right.css";
import { useState } from "react";
import axios from "axios";


export const Right = () => {
  const [segmentName, setSegmentName] = useState("");
  const [schema, setSchema] = useState([]);
  const [currentSelectedObj, setCurentSelectedObj] = useState({})

  const handleAdd = () => {
    const newObj = { ...currentSelectedObj };
    setSchema([...schema, newObj]);
  };
  const options = [
    { "first_name": "First name" },
    { "last_name": "Last name" },
    { "gender": "Gender" },
    { "age": "Age" },
    { "account_name": "Account Name" },
    { "city": "City" },
    { "state": "State" }
  ]

  const saveSegment = () => {
    const apiParams = {
      "segment_name": segmentName,
      "schema": schema
    }
    //api call to post the apiparams as post request at an end point using axios
    axios.post("https://webhook.site/9d42ff77-6137-4318-abd2-8b505f51f8ba", apiParams)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="container rightwrapper">

      <div className="one">
        <FontAwesomeIcon icon={faAngleLeft} className="icon" />
        <h1> Saving Segment</h1>
      </div>

      <div className="two">
        <label className="lbl">Enter the Name of the Segment</label>
        <input onChange={(e) => { setSegmentName(e.target.value) }} type="text" placeholder="Name of the segment" className="inpt" />
        <br />

        <p className="lbl2">
          To save your segment, you need to add the schemas to build the query
        </p>


        <Dropdown setCurentSelectedObj={setCurentSelectedObj} options={options} onlyShow={false} />

        {
          schema?.map((schemaObj) => (
            <Dropdown schemaObj={schemaObj} schema={schema} setCurentSelectedObj={setCurentSelectedObj} options={options} onlyShow={true} />
          ))
        }

        <button
          title="+Add new schema"
          className="link-button"
          onClick={() => handleAdd()}
        >
          +Add new schema
        </button>

      </div>

      <div className="three">
        <button onClick={saveSegment} className="btn0">Save the Segement</button>
        <button className="btn1">Cancel</button>
      </div>
    </div>
  );
};
