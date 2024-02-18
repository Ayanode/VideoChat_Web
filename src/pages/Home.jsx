import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(roomCode);
    if (roomCode === "") return alert("Please enter the room Id");
    if (roomCode.includes(" ")) return alert("Room Id cannot contain spaces");
    else {
      navigate(`/room/${roomCode}`);
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "dimgray",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white", fontSize: 90 }}>
        Home
      </h1>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSumbit}
      >
        <label>Enter the room Id</label>
        <input
        style={{
          padding:10
          ,marginBottom:20
        }}
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder="Enter the room Id: "
        ></input>
        <button
          style={{
            display: "block",
            width: 280,
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            borderWidth: 0,
            height:50
            
          }}
          type="submit"
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default Home;
