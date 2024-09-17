export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=nJCEkkOxx7KCjCARr7ISXBwwFLlESoFhYxbwurq6`
    );

    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const apodData = await res.json();

    // Log fetched data for debugging
    console.log("Fetched APOD data:", apodData);

    return {
      props: { apodData }, // Pass data to component
    };
  } catch (error) {
    // Log and handle errors
    console.error("Error fetching data:", error);
    return {
      props: { apodData: null, error: error.message }, // Pass error message
    };
  }
}
