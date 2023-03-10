import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import CornerAnimation from '../components/corner';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Wait = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:8080');

    socket.on('initialData', (data) => {
      setData(data.data);
    });

    socket.on('newData', (data) => {
      setData((prevData) => {
        const newData = [...prevData];
        newData.pop();
        newData.unshift(data.data);
        return newData;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          {data.map((item) => (
          <div key={item}>Component with data: {item}</div>
        ))}
        <CornerAnimation/>
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
    </div>
  );
};

export default Wait;
