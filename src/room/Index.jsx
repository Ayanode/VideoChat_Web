import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
  const { roomId } = useParams();
  const MyMeeting = async (element) => {
    const appID = 1841815654;
    const serverSecret = "3e0aace1e1733ce3c2ea71fe5640b89a";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'Ayan',
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
        container: element,
        scenario: {
            mode:ZegoUIKitPrebuilt.VideoConference
        }
    })
  };
  return (
    <div>
     <div ref={MyMeeting}/>
    </div>
  );
};

export default RoomPage;
