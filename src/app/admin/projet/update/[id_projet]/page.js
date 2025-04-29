"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../../../../components/ui/button"
import { Input } from "../../../../../components/ui/input"
import { Label } from "../../../../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../../components/ui/card"
import axios from "axios"
import CustomEditor from "../../../../../components/custom-editor"
import { format } from "date-fns"
import Swal from 'sweetalert2'  


export default function EditProjectPage({ params }) {
    const id_projet = params.id_projet
    const router = useRouter()
    
    const [titre, setTitre] = useState("")
    const [date_projet, setDate] = useState("")
    const [imageUrl, setImageUrl] = useState(null)
    const [content, setContent] = useState("")
    const [montant_obtenu, setMontantObtenu] = useState(0)
    const [montant_voulu, setMontantVoulu] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const fetchProjectData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/get-single-projet/${id_projet}`)
          const project = response.data
          console.log('le projet', project)
          
          setTitre(project.titre)
          setDate(project.date_projet)
          setContent(project.content)
          setImageUrl(project.image)
          setMontantObtenu(project.montant_obtenu)
          setMontantVoulu(project.montant_voulu)
          setIsLoading(false)
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error)
          setIsLoading(false)
        }
      }
      
      fetchProjectData()
    }, [id_projet])
  
   

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("date_projet", date_projet);
    formData.append("content", content);
    formData.append("montant_obtenu", montant_obtenu.toString());
    formData.append("montant_voulu", montant_voulu.toString());

    if (imageUrl instanceof File) {
        formData.append("file", imageUrl);
    }

    try {
        const response = await axios.put(
        `http://localhost:5000/update-projet/${id_projet}`,
        formData,
        {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        }
        );

        Swal.fire(
            'Modification effectuée',
            'Projet mis à jour avec succès',
            'success'
          );

        router.push("/admin/projet");
    } catch (error) {
        Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de la mise à jour du projet.',
        });
        console.error("Erreur lors de la mise à jour:", error);
    }
    };


    if (isLoading) {
      return <div>Chargement...</div>
    }
  
    return (
      <div className="container mx-auto overflow-y-scroll p-4 py-8">
        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Modifier le projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={format(new Date(date_projet), 'yyyy-MM-dd')}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">Image</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setImageUrl(e.target.files[0])}
                  className="cursor-pointer"
                />
                {typeof imageUrl === 'string' && (
                  <div className="mt-2">
                    <img src={`http://localhost:5000${imageUrl}`} alt="Current" className="max-w-xs" />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="montant_obtenu">Montant obtenu</Label>
                <Input
                  id="montant_obtenu"
                  type="number"
                  value={montant_obtenu}
                  onChange={(e) => setMontantObtenu(Number(e.target.value))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="montant_voulu">Montant voulu</Label>
                <Input
                  id="montant_voulu"
                  type="number"
                  value={montant_voulu}
                  onChange={(e) => setMontantVoulu(Number(e.target.value))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Contenu</Label>
                <CustomEditor content={content} setContent={setContent} />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="space-x-2">
              <Button variant="outline" onClick={() => router.push("/admin/projet")}>
                Annuler
              </Button>
              <Button type="submit" onClick={handleSubmit}>Mettre à jour</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  

