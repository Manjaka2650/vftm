'use client'

import { format } from "date-fns"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Calendar, DollarSign, Trash2 } from 'lucide-react'
import Image from 'next/image'
import axios from "axios"
import Link from 'next/link'
import { Progress } from "./ui/progress"
import Swal from 'sweetalert2'

function stripHtmlAndTruncate(html, wordLimit) {
  const div = document.createElement('div')
  div.innerHTML = html
  const text = div.textContent || div.innerText || ''
  const words = text.trim().split(/\s+/)
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '')
}


export function ProjectItem({ project, view = 'grid', fetchData }) {
  const truncatedContent = stripHtmlAndTruncate(project.content, 20)
  const progressPercentage = (project.montant_obtenu / project.montant_voulu) * 100

  const handleDelete = async (id_projet) => {
    try {
      const result = await Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer !',
        cancelButtonText: 'Annuler'
      });
  
      if (result.isConfirmed) {
        const response = await axios.post(`http://localhost:5000/delete-projet/${id_projet}`);
        fetchData(); 
  
        Swal.fire(
          'Supprimé !',
          'Le projet a été supprimé avec succès.',
          'success'
        );
        console.log("Projet supprimé avec succès :", response.data);
      }
    } catch (error) {
      console.error(error);
  
      Swal.fire(
        'Erreur !',
        'Une erreur s\'est produite lors de la suppression du projet.',
        'error'
      );
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${view === 'list' ? 'flex' : ''}`}>
      <div className={`relative ${view === 'grid' ? 'h-48' : 'h-full w-48'}`}>
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={() => handleDelete(project.id_projet)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        <Image 
          src={`http://localhost:5000${project.image}`} 
          alt={project.titre} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.titre}</h3>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Calendar className="mr-2 h-4 w-4" />
            {format(new Date(project.date_projet), 'dd/MM/yyyy')}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {truncatedContent}
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progressPercentage.toFixed(2)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4" />
              {project.montant_obtenu.toLocaleString()} obtenu
            </span>
            <span className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4" />
              {project.montant_voulu.toLocaleString()}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <Link href={`/admin/projet/update/${project.id_projet}`} passHref className="w-full">
            <Button variant="outline" className="w-full">Voir Details</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}

