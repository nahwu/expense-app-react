// Library docuemntation @ https://www.npmjs.com/package/react-qr-scanner
// Library Github @ https://github.com/kybarg/react-qr-scanner

// TODO CHECK OUT https://www.npmjs.com/package/modern-react-qr-reader

import { useState } from "react";
import "../NewExpense/NewExpensePanel.css";
import NewExpenseForm from "../NewExpense/NewExpenseForm";

import QrReader from "react-qr-scanner";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const QrScannerPanel = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [qrResult, setQrResult] = useState("No result");
  const [qrDelay, setQrDelay] = useState(500);
  const [cameraListSelection, setCameraListSelection] = useState();
  const [zoomLevel, setZoomLevel] = useState(2.0);
  const [myMediaConstraintsState, setMyMediaConstraintsState] = useState({
    video: {
      //facingMode: "environment",
      zoom: zoomLevel,
    },
  });
  const [displayQrComponent, setDisplayQrComponent] = useState(true);

  const saveExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddExpense(expenseData); // Pass data to parent
  };

  const openNewExpenseFormHandler = (event) => {
    //setIsEditing(true);

    navigator.mediaDevices
      .getUserMedia(myMediaConstraintsDefault)
      .then((stream) => {
        return navigator.mediaDevices.enumerateDevices();
      })
      .then(gotDevices)
      .catch((error) => {
        console.error(error);
      });
  };

  const closeNewExpenseFormHandler = () => {
    setIsEditing(false);
  };

  const handleQrScan = (scannedData) => {
    console.log("hi");
    if (scannedData) {
      setQrResult(scannedData.text);
    }
  };

  const handleQrError = (error) => {
    console.error(error);
  };

  const previewStyle = {
    //height: 240,
    width: 320,
  };

  const myMediaConstraintsDefault = {
    video: {
      //facingMode: "environment",
      zoom: zoomLevel,
    },
  };

  const gotDevices = (mediaDevices) => {
    let cameraListTemp = [];
    let listJsx;
    mediaDevices.forEach((mediaDevice) => {
      if (mediaDevice.label && mediaDevice.deviceId) {
        console.log(
          "gotDevices() - " + mediaDevice.label + " - " + mediaDevice.deviceId
        );
        const currentCamera = {
          label: mediaDevice.label,
          deviceId: mediaDevice.deviceId,
        };
        cameraListTemp.push(currentCamera);
      }
    });
    //console.log(cameraListTemp);
    let tempKey = 0;
    listJsx = cameraListTemp.map((cameraItem) => (
      <MenuItem key={tempKey++} value={cameraItem.deviceId}>
        {cameraItem.label}
      </MenuItem>
    ));
    setCameraListSelection(listJsx);

    //setQrDelay(qrDelay + 1);
  };

  const selectedCameraHandler = (event) => {
    setMyMediaConstraintsState({
      video: {
        //facingMode: "environment",
        zoom: zoomLevel,
        deviceId: {
          exact: event.target.value,
        },
      },
    });
  };

  const selectedCameraZoomHandler = (event) => {
    //zoomValue = event.target.value;
    setZoomLevel(event.target.value);
    console.log(event.target.value);
  };

  const toggleQrReaderComponent = () => {
    setDisplayQrComponent(!displayQrComponent);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Camera</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          defaultValue={""}
          label="Camera"
          autoWidth
          onChange={selectedCameraHandler}
        >
          {cameraListSelection}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label2">Zoom</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label2"
          defaultValue={2.0}
          label="Zoom"
          autoWidth
          onChange={selectedCameraZoomHandler}
        >
          <MenuItem value={1.0}>1</MenuItem>
          <MenuItem value={2.0}>2</MenuItem>
          <MenuItem value={3.0}>3</MenuItem>
          <MenuItem value={4.0}>4</MenuItem>
        </Select>
      </FormControl>

      {displayQrComponent && (
        <QrReader
          delay={qrDelay}
          style={previewStyle}
          onError={handleQrError}
          onScan={handleQrScan}
          constraints={myMediaConstraintsState}
        />
      )}
      <p>{qrResult}</p>

      <div className="new-expense">
        {!isEditing && (
          <>
            <button onClick={openNewExpenseFormHandler}>
              Load camera list
            </button>
            <button onClick={toggleQrReaderComponent}>Toggle QR</button>
          </>
        )}
        {isEditing && (
          <NewExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelUpdateParent={closeNewExpenseFormHandler}
          />
        )}
      </div>
    </>
  );
};

export default QrScannerPanel;
