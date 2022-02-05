import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

// PREGUNTARLE A GUILLE

const InfoCard = () => {
    return (
        
        <Card >
            <img className="rounded-lg"
                src="https://s3.sa-east-1.amazonaws.com/titulares.ar/wp-content/uploads/2021/08/01110236/Estados-de-EEUU-prohiben-las-PC-gamer-de-alta-gama.jpg"
               
            />

            <CardBody>
                <H6 color="gray">Card Title</H6>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the human
                    foundation in truth And I love you like Kanye loves Kanye I love
                    Rick Owens’ bed design but the back is...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}

export default InfoCard;



// HACER MAPEO inforcards