import React from "react";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

interface TourType {
  id: string;
  name: string;
  info: string;
  image: string;
  prince: number;
}

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tourism, setTourism] = useState<TourType[]>([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTourism(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <Tours data = {tourism} />
      </main>
    </>
  );
}

export default App;
