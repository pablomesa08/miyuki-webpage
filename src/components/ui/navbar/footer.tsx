import React from "react";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function Fotter() {
  return (
    <Card className="mt-10">
      <CardBody className="flex flex-row justify-evenly">
        <div className="flex items-center ">
          <AcmeLogo />
          <Link href="/" color="foreground">
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            size="sm"
            variant="solid"
            color="secondary"
            className="font-bold"
          >
            {"información"}
          </Button>
          <Button
            size="sm"
            variant="solid"
            color="secondary"
            className="font-bold"
          >
            {"información"}
          </Button>
          <Button
            size="sm"
            variant="solid"
            color="secondary"
            className="font-bold"
          >
            {"información"}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
