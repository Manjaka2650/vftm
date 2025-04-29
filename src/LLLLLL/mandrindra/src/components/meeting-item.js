import { format } from "date-fns"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Calendar, Users, Clock, Trash2 } from 'lucide-react'
import Image from 'next/image'
import axios from "axios"
import Link from 'next/link'

function stripHtmlAndTruncate(html, wordLimit) {
  const div = document.createElement('div')
  div.innerHTML = html
  const text = div.textContent || div.innerText || ''
  const words = text.trim().split(/\s+/)
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '')
}

export function MeetingItem({ meeting, view = 'grid',fetchdata }) {
  const truncatedContent = stripHtmlAndTruncate(meeting.content, 20)

  const handleDelete= async (id_reunion)=> {
    try {
        const response = await axios.post("http://localhost:5000/delete-reunion/" + id_reunion);
        fetchdata()
        console.log("Réunion supprimée avec succès :", response.data);
    } catch (error) {
        console.error(error);
    }
}

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${view === 'list' ? 'flex' : ''}`}>
      <div className={`relative ${view === 'grid' ? 'h-48' : 'h-full w-48'}`}>
      <Button
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={() => handleDelete(meeting.id_reunion)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
        <Image 
          src={`http://localhost:5000${meeting.image}`} 
          alt={meeting.titre} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{meeting.titre}</h3>
          <div className="flex justify-between">
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <Calendar className="mr-2 h-4 w-4" />
              {format(meeting.date_reunion, 'dd/MM/yyyy')}
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <Clock className="mr-2 h-4 w-4" />
              {format(meeting.date_reunion, 'HH:mm')}
            </div>
          </div>
          
          <div className="mt-2 text-sm text-muted-foreground">
            {truncatedContent}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <Link href={`/admin/reunion/update/${meeting.id_reunion}`} passHref className="w-full">
            <Button variant="outline" className="w-full">View Details</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}

