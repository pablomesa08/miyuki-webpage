import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get all categories
  if (req.method === "POST") {
    // from the hook we have something like this to call this
    /*
    The categories are a array of strings with each category name
    const responseCategories = await fetch(`/api/product/categories`, {
      method: "POST",
      body: JSON.stringify({ categories }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    */
    // to call the backend an example is this:
    /**
     * http://localhost:3001/products/categories?categoryIds=c70a7ae8-c82a-4e1d-bd56-1a484d231e15,d9b94a23-3f77-4cdb-ae00-c5270ecd141b
     */
    // if you look, the query parameter is categoryIds and the value is a comma separated list of category ids
    // lest do the code
    let { categories } = JSON.parse(req.body);
    let categriesSplitted = categories.join(",");
    const data = await fetch(
      `${process.env.BACKEND_URL}/products/categories?categoryIds=${categriesSplitted}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!data.ok) {
      return res.status(404).json({ error: "Categories not found" });
    }

    const products = await data.json();

    // Optionally, you can process the products data if needed before sending it back
    // For now, we'll just send it back as is
    res.status(200).json(products);
  }
}
