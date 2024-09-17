import React from "react";

const NasaAPOD = ({ apodData, error }) => {
  // Handle errors if there are any
  if (error) {
    console.error("Error fetching APOD data:", error);
    return <div>Error fetching data: {error}</div>;
  }

  // Display loading message if data is not yet available
  if (!apodData) {
    return <div>Loading...</div>;
  }

  // Render the fetched data
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{apodData.title}</h1>
      <p>
        <strong>Date:</strong> {apodData.date}
      </p>
      <p>{apodData.explanation}</p>
      {apodData.media_type === "image" && (
        <img
          src={apodData.url}
          alt={apodData.title}
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
      )}
      <p>
        <a href={apodData.hdurl} target="_blank" rel="noopener noreferrer">
          View HD Image
        </a>
      </p>
    </div>
  );
};

export default NasaAPOD;
