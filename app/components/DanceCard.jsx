import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const DanceCard = ({ imageUrl, title, videoUrl }) => {
  return (
    <a href={videoUrl}>
    <Card className="py-4 cursor-pointer">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Dance image"
          className="object-cover rounded-xl"
          src={imageUrl}
          width={500}
        />
      </CardBody>
    </Card>
    </a>
  );
};

export default DanceCard;