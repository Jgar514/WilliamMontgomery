import React from "react";
import { Text, Html, Billboard } from "@react-three/drei";
import Background from "../assets/william.png";
import { FaMusic } from "react-icons/fa";
import comedyShows from "../data/comedyShows";
const ShowsComponent = ({ isMobile }) => {
  const fontSize = 0.4;

  const show1 = () => {
    // Define action for show 1
    console.log("Show 1 tickets clicked");
    window.open("https://detroit.houseofcomedy.net/attraction/william-montgomery/", "_blank");
  };

  const show2 = () => {
    // Define action for show 2
    console.log("Show 2 tickets clicked");
    window.open("https://www.spokanecomedyclub.com/events/86588", "_blank");
  };

  const show3 = () => {
    // Define action for show 3
    console.log("Show 3 tickets clicked");
    window.open("https://www.louisvillecomedy.com/events/86589", "_blank");
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return { month, day };
  };

  return (
    <>
      <Billboard>
        <Html
          center
          zIndexRange={[100, 0]}
          position={[4.9, 3.2, 0]}
          style={{ zIndex: 4 }}
        >
          <div className=" flex flex-col p-4 h-[490px] overflow-y-auto bg-gray-700 border-b-2 shadow-white shadow-md">
            {comedyShows.map((show, index) => (
              <div key={index} className="bg-gray-100 border-2 border-red-600 w-[420px] rounded-lg p-2 mb-4 shadow-md flex flex-row justify-between">
                <div className="text-black font-bold text-xl px-2 flex flex-col  ">
                  <div className="">{formatDate(show.date).month}</div>
                  <div className="flex justify-center">{formatDate(show.date).day}</div>
                </div>
                <div className="flex flex-col grow items-center">
                  <div className="text-gray-700 text-xl font-bold m">{show.location}</div>
                  <div className="  text-lg">{show.venue}</div>
                </div>

                <a href={show.link} className="bg-white hover:bg-yellow-200  text-black font-bold px-2 border-black border-2 rounded-lg hover:underline flex items-center shadow-md ">
                  Buy Tickets
                </a>
              </div>
            ))}
          </div>
        </Html>
      </Billboard>
      {/* <Billboard>
        <Text color="white" position={[3.1, 5.2, 0]} fontSize={fontSize}>
          2/23-24 Detroit House of Comedy
        </Text>
        <Text color="white" position={[3, 3.7, 0]} fontSize={fontSize}>
          2/29-3/2 Spokane Comedy Club
        </Text>
        <Text color="white" position={[2.8, 2.1, 0]} fontSize={fontSize}>
          3/7-9 Louisville Comedy Club
        </Text>
        <Html
          center
          zIndexRange={[100, 0]}
          position={[7, 5.5, 0]}
          style={{ zIndex: 4 }}
        >
          <div className="bg-white w-40">TEST</div>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              borderRadius: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show1}
          >

            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
        <Html center zIndexRange={[100, 0]} position={[7, 4, 0]} style={{ zIndex: 4 }}>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show2} // Attach onClick event listener to this div
          >

            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
        <Html center zIndexRange={[100, 0]} position={[7, 2.5, 0]} style={{ zIndex: 4 }}>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show3} // Attach onClick event listener to this div
          >

            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
      </Billboard> */}
    </>
  );
};

export default ShowsComponent;
