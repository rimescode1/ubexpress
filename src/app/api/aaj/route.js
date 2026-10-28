import axios from "axios";
import { AAJ_KEY, AAJ_URL } from "../../../../ENV";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  if (!id) {
    return Response.json(
      { message: "Tracking ID is required" },
      { status: 400 },
    );
  }

  try {
    const { data } = await axios.get(`${AAJ_URL}${id}?extraDetails=false`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${AAJ_KEY}`,
      },
    });

    if (!data?.success) {
      return Response.json(
        { message: data?.message || "Shipment not found" },
        { status: 404 },
      );
    }

    return Response.json({ message: "API IS WORKING", data: data.data });
  } catch (error) {
    if (error?.response?.status === 404) {
      return Response.json(
        {
          message: "Data not Found, Kindly confirm your tracking ID",
          error: error.message,
        },
        { status: 404 },
      );
    }

    return Response.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
}
