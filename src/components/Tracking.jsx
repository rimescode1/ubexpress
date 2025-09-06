"use client";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
const Tracking = () => {
  const [trackingID, setTrackingID] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);
  console.log(data, "SLSLSLLSL");

  const handleSubmitTracking = async () => {
    console.log();
    if (!trackingID) {
      toast.error("Kindly Input your TRACKING ID");
      return;
    }
    setIsLoading(true);
    try {
      const data = await axios.get(
        `www.ubxexpress.com/api/dhl?id=${trackingID}&service=express`
      );
      setData(data.data.data.shipments[0]);
      setIsData(true);
      toast.success("Shipment Found");
      return;
    } catch (error) {
      toast.error(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="tracking" className="section-padding bg-white">
      <p className=" text-2xl md:text-4xl text-black text-center font-bold">
        Track Your <span className=" text-red-700">Shipment</span>
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 section-padding">
        <div>
          <Image src="/bike.png" height={300} width={500} alt="Delivery Bike" />
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-red-700 rounded-2xl p-8 text-white">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Track Your Shipment</h3>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <input
                onChange={(e) => setTrackingID(e.target.value)}
                value={trackingID}
                type="text"
                placeholder="Enter tracking number"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-black placeholder-white/70 focus:outline-none focus:border-ub-yellow"
              />
              {isLoading ? (
                <div className=" w-full  mt-4 flex justify-center items-center bg-red-700 rounded-md">
                  <ClipLoader
                    color="white"
                    className=" w-full flex justify-center items-center"
                  />
                  <span>Loading...</span>
                </div>
              ) : (
                <button
                  onClick={handleSubmitTracking}
                  className="w-full mt-4 bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-red-700 hover:text-white transition-colors"
                >
                  Track Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isData && (
        <div className="  shadow-2xl border border-gray-200 rounded-2xl">
          <div className="  p-4 border border-black/5">
            <Accordion
              type="single"
              collapsible
              className=" w-full text-black"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Destination</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>Location: {data.destination?.address?.addressLocality}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className=" ">
                    Service Type:{" "}
                    <span className=" font-bold uppercase">{data.service}</span>{" "}
                  </p>
                  {data.estimatedTimeOfDelivery ? (
                    <p>
                      Estimated Delivery Date: {data.estimatedTimeOfDelivery}
                    </p>
                  ) : null}
                  {data.estimatedTimeOfDeliveryRemark ? (
                    <p>
                      Estimated Delivery Remark:
                      {data.estimatedTimeOfDeliveryRemark}
                    </p>
                  ) : null}

                  {data.proofOfDeliverySignedAvailable ? (
                    <p>
                      Proof of Delivery: {data.proofOfDeliverySignedAvailable}
                    </p>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Shipments Events</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {data?.events?.map((item, index) => (
                    <div className=" border p-2 rounded-sm " key={index}>
                      <div className=" flex flex-row items-center my-1 gap-3 bg-amber-500 w-fit px-3 rounded-[4px]">
                        <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                        <p>{new Date(item.timestamp).toLocaleTimeString()}</p>
                      </div>

                      <p>{item.description}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tracking;
