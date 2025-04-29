import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {Label} from "./ui/label"


export function NewMeetingForm(onSubmit, onCancel) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [attendees, setAttendees] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      title,
      date: new Date(date),
      attendees: attendees.split(",").map(a => a.trim()),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="attendees">Attendees (comma-separated)</Label>
        <Input
          id="attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Meeting</Button>
      </div>
    </form>
  )
}

