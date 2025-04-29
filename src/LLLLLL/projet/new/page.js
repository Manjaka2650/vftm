"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"
import axios from "axios"

import CustomEditor from "../../../../components/custom-editor"


export default function NewMeetingPage() {
  const router = useRouter()
  const [titre, setTitre] = useState("")
  const [montant, setMontant] = useState(null)
  const [date_projet, setDate] = useState("")
  const [imageUrl, setImageUrl] = useState(null); 
  const [content, setSummary] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("montant_voulu", montant);
    formData.append("date_projet", new Date(date_projet).toISOString());
    
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput.files[0]) {
      formData.append("file", fileInput.files[0]);
    }
    formData.append("content", content);
  
    try {
      console.log("FormData content:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      const response = await axios.post("http://localhost:5000/create-projet", formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
        }
      });
      console.log("Réunion créée avec succès :", response.data);
      Swal.fire(
        'enregistrement effectué',
        'Projet créé avec succès',
        'success'
      );
      router.push("/admin/projet");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l\'ajout du projet.',
        });
      console.error("Erreur détaillée:", error.response?.data);
      console.error("Status:", error.response?.status);
      console.error("Headers:", error.response?.headers);
    }
  };
  

  return (
    <div className="container mx-auto overflow-y-scroll p-4 py-8">
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Meeting</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">titre</Label>
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
                value={date_projet}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
               <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              /> 
              <input 
                type="file" 
                onChange={(e) => setImageUrl(e.target.files[0])} 
              />
            </div> */}
            <div className="space-y-2">
              <Label htmlFor="file">Image</Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setImageUrl(e.target.files[0])}
                className="cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Montat</Label>
              <Input
              type="number"
                id="montant"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              {/* <CKEditor
                editor={ClassicEditor}
                data={summary}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setSummary(data);
                }}
              /> */}
              <CustomEditor content={content} setContent={setSummary} />
            </div>
            
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}>Add Meeting</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

