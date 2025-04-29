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

export default function EditMeetingPage({params}) {
    const id_reunion = params.id_reunion;
    const router = useRouter()
    
    const [titre, setTitre] = useState("")
    const [date_reunion, setDate] = useState("")
    const [imageUrl, setImageUrl] = useState(null)
    const [content, setSummary] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchMeetingData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/get-single-reunion/${id_reunion}`)
                const meeting = response.data
                console.log('la reunion', meeting)
                
                setTitre(meeting.titre)
                setDate(meeting.date_reunion)
                setSummary(meeting.content)
                setImageUrl(meeting.image)
                setIsLoading(false)
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error)
                setIsLoading(false)
            }
        }
        
        fetchMeetingData()
    }, [id_reunion])

    const handleDelete= async ()=> {
        try {
            const response = await axios.post("http://localhost:5000/delete-reunion/" + id_reunion);
            console.log("Réunion supprimée avec succès :", response.data);
            router.push("/admin/reunion");
        } catch (error) {
            console.error(error);
            
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("date_reunion", date_reunion);
        formData.append("content", content);
    
        if (imageUrl instanceof File) {
            formData.append("file", imageUrl);
        }
        console.log(formData)
    
        try {
            const response = await axios.post(
                `http://localhost:5000/update-reunion/${id_reunion}`,
                formData, // Envoyer formData
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Spécifier le type
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
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
                    <CardTitle className="text-2xl font-bold">Modifier la réunion</CardTitle>
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
                                type="datetime-local"
                                value={format(date_reunion, 'yyyy-MM-dd HH:mm')}
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
                            <Label htmlFor="summary">Résumé</Label>
                            <CustomEditor content={content} setContent={setSummary} />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => router.push("/admin/reunion")}>
                        Annuler
                    </Button>
                    <Button type="submit" onClick={handleSubmit}>Mettre à jour</Button>
                </CardFooter>
            </Card>
        </div>
    )
}