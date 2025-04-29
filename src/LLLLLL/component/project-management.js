'use client'

import { useState } from 'react'
import { ProjectItem } from "./project-item"
import { Button } from "./ui/button"
import Link from "next/link"
import { Grid, List, Plus } from 'lucide-react'


export function ProjectManagement({ projects, fetchData }) {
  const [viewMode, setViewMode] = useState('grid')

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            aria-label="Toggle view"
          >
            {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          <Link href="/admin/projet/new" passHref>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Project
            </Button>
          </Link>
        </div>
      </div>
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {projects.map((project) => (
          <ProjectItem key={project.id_projet} project={project} fetchData={fetchData} view={viewMode} />
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-muted-foreground">No projects found.</p>
      )}
    </div>
  )
}

