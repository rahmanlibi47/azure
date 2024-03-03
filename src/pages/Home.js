import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Home = () => {
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + '/bgm.mp3'));

  useEffect(() => {
    Swal.fire({
      title: 'Welcome to the space journey!',
      confirmButtonText: 'OK'
    }).then(() => {
      audio.play();
    });

    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <div>
      <h2>Homepage</h2>
      <br />
      <p>Welcome to home</p>
    </div>
  )
}

export default Home;