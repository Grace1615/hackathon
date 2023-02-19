import React, { useState, useEffect } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import io from 'socket.io-client';
import CornerAnimation from '../components/corner';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
const WebSocketComponent = () => {
  const [data, setNumber] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNumber(data.number);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          {/* {data.map((item) => (
          <div key={item}>Component with data: {item}</div>
        ))} */}
        <h1>Random Number: {data}</h1>
        <CornerAnimation/>
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
    </div>

  );
};

export default WebSocketComponent;
