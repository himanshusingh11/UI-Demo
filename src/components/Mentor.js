import React from 'react';

import image from "../images/user.jpg"
const Mentor = () => {
    const mentorData = [
    {
      id: 1,
      name: 'Himanshu',
      image:'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 5,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 6,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 7,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 8,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 1,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/150', 
    }
  ];

  const containerStyle = {
    padding: '10px',
  };

  const flexContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '10px',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent:'space-between',
    marginTop:'10px'
  };

  const cardStyle = {
    width: '200px',
    height: '250px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    padding: '10px',
  };

  const imageContainerStyle = {
    textAlign: 'center',
    marginBottom: '10px',
  };

  const imageStyle = {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
  };

 
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  
  const mentorRows = chunkArray(mentorData, 6);

  return (
    <div style={containerStyle}>
      <div style={flexContainerStyle}>
        <h4 style={{ color: 'green', fontWeight: 'bold', margin: '0' }}>Mentors</h4>
        <span style={{ color: 'green', marginLeft: '10px', textAlign: 'center' }}>See All 30</span>
      </div>

      {mentorRows.map((row, rowIndex) => (
        <div key={rowIndex} style={cardContainerStyle}>
          {row.map((mentor, index) => (
            <div className="card" key={index} style={cardStyle}>
              <div style={imageContainerStyle}>
                <img src={image} alt={`Mentor ${index + 1}`} style={imageStyle} />
              </div>
              <h6 style={{ margin: '0', textAlign:'center' }}>{mentor.name}</h6>
              <p style={{ margin: '5px 0', textAlign:'center' }}>Engineer</p>
              <div style={{textAlign:'center'}}> <span style = {{backgroundColor:'#90ee90', width:'50%', margin: '5px 0', color:'green'}}class="badge">Expertise</span></div>
             
              <div style={buttonsContainerStyle}>
                <button style={{width:'50%', backgroundColor:'white',color:'black', border:'1px solid black'}} type="button" className="btn btn-sm btn-secondary">
                  Email
                </button>
                <button style={{width:'50%',backgroundColor:'white',color:'black', border:'1px solid black'}} type="button" className="btn btn-sm btn-success">
                  Connect
                </button>
              </div>
            </div>
            
          ))}
        </div>
        
      ))}
    </div>
  );
};

export default Mentor;
