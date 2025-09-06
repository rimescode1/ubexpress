import axios from "axios";
import { DHL_API, DHL_URL } from "../../../../ENV";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  console.log("IIDDD", id, DHL_URL);

  try {
    const data = await axios.get(
      `https://api-eu.dhl.com/track/shipments?trackingNumber=${id}`,
      {
        headers: {
          Accept: "application/json",
          "DHL-API-Key": DHL_API,
        },
      }
    );

    return Response.json({ message: "API IS WORKING", data: data.data });
  } catch (error) {
    if (error.status === 404) {
      return Response.json({
        message: "Data not Found, Kindly confirm your tracking ID",
        error: error,
      });
    }
    return Response.json({ message: "Internal Server Error", error: error });
  }
}
