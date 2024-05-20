import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get all formats
  if (req.method === "POST") {
    let { formats } = JSON.parse(req.body);
    let formatsSplitted = formats.join(",");
    const data = await fetch(
      `${process.env.BACKEND_URL}/products/formats?formatIds=${formatsSplitted}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // An example of the backend response is this:
    /*
    [{"id":"0a1b747f-a8fd-460e-ad1e-6a70a5e351a1","name":"Anillo dorado","baseprice":"120.00","addeddate":"2024-04-30","isAvailable":true,"formats":[{"id":"f8b8c6fa-2dab-4612-b882-55369514b95a","name":"Oro","price":"150.00"}],"image":"MGExYjc0N2YtYThmZC00NjBlLWFkMWUtNmE3MGE1ZTM1MWExLmpwZw=="},{"id":"aad606ec-20a1-41e4-97fa-5b0c32e411e1","name":"Collar Solstice","baseprice":"120.00","addeddate":"2023-05-20","isAvailable":true,"formats":[{"id":"f8b8c6fa-2dab-4612-b882-55369514b95a","name":"Oro","price":"150.00"}],"image":"YWFkNjA2ZWMtMjBhMS00MWU0LTk3ZmEtNWIwYzMyZTQxMWUxLmpwZw=="},{"id":"226833b7-c04e-4dcb-89e5-0553e60ffaf6","name":"Llavero Cosmos","baseprice":"30.00","addeddate":"2023-05-20","isAvailable":true,"formats":[{"id":"d9b94a23-3f77-4cdb-ae00-c5270ecd141b","name":"Chihuahua","price":"45.884"}],"image":"MjI2ODMzYjctYzA0ZS00ZGNiLTg5ZTUtMDU1M2U2MGZmYWY2LmpwZw=="},{"id":"ef3ae701-0eb9-4753-b5f3-f70ed2599b24","name":"Cinturón Orion","baseprice":"110.00","addeddate":"2023-05-20","isAvailable":true,"formats":[{"id":"d9b94a23-3f77-4cdb-ae00-c5270ecd141b","name":"Chihuahua","price":"45.884"}],"image":"ZWYzYWU3MDEtMGViOS00NzUzLWI1ZjMtZjcwZWQyNTk5YjI0LmpwZw=="}]
    */
    // the response is an array of objects, each object is a product with the formats array inside

    if (!data.ok) {
      return res.status(404).json({ error: "Formats not found" });
    }

    const products = await data.json();

    // Optionally, you can process the products data if needed before sending it back
    // For now, we'll just send it back as is
    res.status(200).json(products);
  }
}
