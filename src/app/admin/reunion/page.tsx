"use client";

import { MeetingManagement }  from '../../../components/meeting-management'
import axios from 'axios';
import { useEffect, useState } from "react";


export default function Home() {

  const [reunions, setReunions] = useState([]);

  const fetchReunions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-all-reunion");
      console.log('reunions:', response.data);
      setReunions(response.data); 
    } catch (err) {
      console.error(err);
    } 
  };
  useEffect(() => {

    fetchReunions();
  }, []);

  return (
    <main className="min-h-screen h-screen w-full overflow-scroll bg-background py-8">
      <MeetingManagement meetings={reunions} fetchdata={fetchReunions} />
    </main>
  )
}

