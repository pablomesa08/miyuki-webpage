import React from "react";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function Fotter() {
  return (
    <Card className="mt-10 bg-focus">
      <CardBody className="flex flex-row justify-evenly">
        <div className="flex items-center ">
          <AcmeLogo />
          <Link href="/" color="primary" className="text-primary">
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            size="sm"
            variant="solid"
            className="font-bold bg-success text-success-foreground hover:text-success-foreground focus:text-success-foreground"
          >
            {"información"}
          </Button>
          <Button
            size="sm"
            variant="solid"
            color="secondary"
            className="font-bold bg-success text-success-foreground hover:text-success-foreground focus:text-success-foreground"
           >
            {"información"}
          </Button>
          <Button
            size="sm"
            variant="solid"
            color="secondary"
            className="font-bold bg-success text-success-foreground hover:text-success-foreground focus:text-success-foreground"
          >
            {"información"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
