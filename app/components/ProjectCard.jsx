import React from 'react';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const ProjectCard = ({imageurl, name, githuburl}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      style={{width:'300px', height:'300px'}}
    >
      <Image
        alt="project"
        className="object-cover"
        height={300}
        src={imageurl}
        width={300}
        radius="lg"
      />
      
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p style={{ color: '#121212'}}>{name}</p>
        
        <a href={githuburl}>
        <Button radius="full" className="bg-gradient-to-br from-[#b2a5db] to-[#faaca8] text-[#121212] shadow-lg px-4 py-1 text-sm">
          View
        </Button>
        </a>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard;