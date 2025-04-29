"use client";

import { ProjectManagement }  from '../../../components/project-management'
import axios from 'axios';
import { useEffect, useState } from "react";


export default function Home() {

  const [reunions, setReunions] = useState([]);

  const fetchProjets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-all-projet");
      console.log('reunions:', response.data);
      setReunions(response.data); 
    } catch (err) {
      console.error(err);
    } 
  };
  useEffect(() => {

    fetchProjets();
  }, []);

  return (
    <main className="min-h-screen h-screen w-full overflow-scroll bg-background py-8">
      <ProjectManagement projects={reunions} fetchData={fetchProjets} />
    </main>
  )
}

