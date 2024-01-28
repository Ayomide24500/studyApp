import React, { FC, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast/headless";
// import { createStudys } from "../Api/Api";
import { useNavigate } from "react-router-dom";
interface iToggle {
  isOpen: any;
  onClose: any;
  message: any;
}
const Modal: FC<iToggle> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-4 rounded-md">
        <p className="text-lg font-semibold">{message}</p>
        <button
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const StudyForm = () => {
  const navigate = useNavigate();
  const [studyDuration, setStudyDuration] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [breakDuration, setBreakDuration] = useState("");
  const [studyCreated, setStudyCreated] = useState(false);
  const [isBreakPopupOpen, setIsBreakPopupOpen] = useState(false);
  const [isEndOfBreakPopupOpen, setIsEndOfBreakPopupOpen] = useState(false);
  const [isEndOfStudyPopupOpen, setIsEndOfStudyPopupOpen] = useState(false);

  const handleCreateStudy = async (studentID: any) => {
    try {
      const response = await axios.post(
        `http://localhost:2300/api/create-study/${studentID}`,
        {
          breakDuration,
          breakTime,
          studyDuration,
        }
      );

      console.log("Type of studentID:", typeof studentID);
      console.log("Type of studentID:", typeof studentID);
      console.log("Value of studentID:", studentID);

      console.log("Request payload:", {
        breakDuration,
        breakTime,
        studyDuration,
      });

      console.log("response", response);

      if (response.data.msg === "Study created") {
        setStudyCreated(true);
        scheduleStudyEvents();
      }
    } catch (error) {
      console.error("Error creating study:", error);
    }
  };

  const notify = toast.success("Successfully toasted!");

  const scheduleStudyEvents = () => {
    const breakTimeMillis = Number(breakTime) * 60000;
    const breakDurationMillis = Number(breakDuration) * 60000;
    const studyDurationMillis = Number(studyDuration) * 3600000;

    setTimeout(() => {
      setIsBreakPopupOpen(true);
    }, breakTimeMillis);

    setTimeout(() => {
      setIsEndOfBreakPopupOpen(true);
    }, breakTimeMillis + breakDurationMillis);

    setTimeout(() => {
      setIsEndOfStudyPopupOpen(true);
    }, breakTimeMillis + breakDurationMillis + studyDurationMillis);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4">Create Study</h2>
      <div className="mb-4">
        <label
          htmlFor="endingTime"
          className="block text-sm font-medium text-gray-700"
        >
          study Duration (in hours):
        </label>
        <input
          type="text"
          id="endingTime"
          name="endingTime"
          value={studyDuration}
          onChange={(e) => setStudyDuration(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="breakTime"
          className="block text-sm font-medium text-gray-700"
        >
          Break Time (in minutes):
        </label>
        <input
          type="text"
          id="breakTime"
          name="breakTime"
          value={breakTime}
          onChange={(e) => setBreakTime(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="breakDuration"
          className="block text-sm font-medium text-gray-700"
        >
          Break Duration (in minutes):
        </label>
        <input
          type="text"
          id="breakDuration"
          name="breakDuration"
          value={breakDuration}
          onChange={(e) => setBreakDuration(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600"
        onClick={(studentID: any) => {
          handleCreateStudy(studentID).then(() => {
            navigate("/dashboard");
          });
        }}
      >
        Create Study
      </button>

      {studyCreated && <div className="mt-4">{notify}</div>}

      {studyCreated && (
        <>
          <Modal
            isOpen={isBreakPopupOpen}
            onClose={() => setIsBreakPopupOpen(false)}
            message="You can go for a break now."
          />
          <Modal
            isOpen={isEndOfBreakPopupOpen}
            onClose={() => setIsEndOfBreakPopupOpen(false)}
            message="You can now continue studying."
          />
          <Modal
            isOpen={isEndOfStudyPopupOpen}
            onClose={() => setIsEndOfStudyPopupOpen(false)}
            message="Your study period has ended."
          />
        </>
      )}
    </div>
  );
};

export default StudyForm;
