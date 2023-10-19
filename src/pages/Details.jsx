import React from "react";
import Navbar from "../components/Navbar";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import jsonData from "../data/CA.json";

function Details() {
  const { name } = useParams();
  const person = jsonData.details.find((p) => p.name === name);
  if (!person) {
    return <div>Person not found</div>;
  }

  // const services = [
  //   "Financial accounting",
  //   "Financial statements",
  //   "Bookkeeping ",
  //   "Accounting and finance",
  //   "Corporate Finance",
  //   "Maintain Charts of Accounts",
  //   "Profit and loss statements",
  //   "Bank Reconciliation",
  //   "Balance Sheets",
  // ];

  // const hired = [
  //   "One-time delivery",
  //   "24/7 customer support",
  //   "Error-free documents",
  // ];

  // const person = {
  //   id: 1,
  //   name: "Michael Jackson",
  //   image:
  //     "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
  //   intro:
  //     "Expertise in accounting and finance, specializing in financial statements and auditing.",
  //   rating: 4.8,
  //   reviewCount: 89,
  //   taskComplexity: "Basic to complex tasks",
  //   price: "€4,370",
  //   deliveryTime: "Delivers within 2 days",
  //   testimonial: {
  //     text: "Exceptional service in managing personal finances and deep understanding of financial markets.",
  //     author: "John Doe",
  //   },
  //   about: {
  //     from: "INDIA",
  //     partnerSince: 2011,
  //     averageResponseTime: "30 minutes",
  //     description:
  //       "Professional Chartered Accountant offering diverse accounting and financial services.",
  //     services: ["Financial accounting", "Bookkeeping", "Balance Sheets"],
  //     benefits: ["One-time delivery", "24/7 support"],
  //   },
  // };

  // console.log(person.name);
  return (
    <div className="bg-blue-50">
      <Navbar />

      <div className="font-poppins grid grid-cols-3 justify-between  mt-16 ml-16 mr-6">
        <div className="col-span-1">
          <h2>{person.name}</h2>
          <span>{person.intro}</span>
          <p className="items-center flex gap-2">
            <StarIcon color="primary" /> {person.rating} ({person.reviewCount})
          </p>

          <div className="bg-white rounded-xl shadow-2xl p-3 pb-2 mt-16">
            <span className="flex justify-between items-center ">
              {person.taskComplexity}{" "}
              <p className="font-bold">{person.price}</p>
            </span>
            <span className="items-center flex">
              <CalendarMonthIcon color="primary" />
              {person.deliveryTime}
            </span>
            <div className="flex justify-between items-center ml-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none cursor-pointer">
                Request Proposal
              </button>
              <button class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded mx-4 my-4 cursor-pointer">
                Chat with me
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-3 pb-2 mt-16">
            <h1>What people say?</h1>
            <p>
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>
        <div className="col-span-2 ml-16">
          <img
            src={person.image}
            className="w-11/12 h-80 rounded-2xl shadow-lg"
          />
          <h1>About {person.name}</h1>
          <div className="grid grid-cols-3 list-none text-md">
            <li>
              <p className="text-slate-500 font-semibold">FROM</p>
              <p>{person.about.from}</p>
            </li>
            <li>
              <p className="text-slate-500 font-semibold">PARTNER SINCE</p>
              <p>{person.about.partnerSince}</p>
            </li>
            <li>
              <p className="text-slate-500 font-semibold">
                AVERAGE RESPONSE TIME
              </p>
              <p>{person.about.averageResponseTime}</p>
            </li>
          </div>
          <div className="mr-24">
            <h4 className="text-slate-500">About</h4>
            <p>
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance, financial statements,
              Bookkeeping in affordable price.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h4 className="text-slate-500">SERVICES I OFFER</h4>
              <ul>
                {person.about.services.map((service) => (
                  <li>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-slate-500">WHY ME?</h4>
              <ul>
                {person.about.benefits.map((benefit) => (
                  <li>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <h1 className="font-poppins ml-16 text-2xl md:text-3xl lg:text-4xl">
          Recommended for you
        </h1>
        <div className="grid grid-cols-3 ml-16 font-poppins pb-40">
          <div className="bg-blue-50 shadow-2xl rounded-2xl w-[380px]">
            <img src="/rectangle.png" alt="" className="h-52 w-[380px]" />
            <h2 className="ml-6 mb-0 mt-0 flex justify-between items-center">
              Michal Jackson
              <p className="font-bold text-mid mr-6">₹4,333</p>
            </h2>
            <span className="ml-6 mb-0 flex align-middle mr-6 text-sm">
              I will do business evaluation and corporate services
            </span>
            <p className="items-center gap-2 flex ml-6 mt-0">
              <StarIcon color="primary" /> 4.6 (84)
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 mb-6 mt-8 w-80 rounded border-none cursor-pointer">
              View services
            </button>
          </div>
          <div className="bg-blue-50 shadow-2xl rounded-2xl w-[380px] justify-evenly">
            <img src="/rectangle.png" className="h-52 w-[380px]" />
            <h2 className="ml-6 mb-0 mt-0 flex justify-between items-center">
              Michal Jackson
              <p className="font-bold text-mid mr-6">₹4,333</p>
            </h2>
            <span className="ml-6 mb-0 flex align-middle mr-6 text-sm">
              I will do business evaluation and corporate services
            </span>
            <p className="items-center flex gap-2 ml-6 mt-0">
              <StarIcon color="primary" /> 4.6 (84)
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 mb-6 mt-8 w-80 rounded border-none cursor-pointer">
              View services
            </button>
          </div>
          <div className="bg-blue-50 shadow-2xl rounded-2xl w-[380px]">
            <img src="/rectangle.png" alt="" className="h-52 w-[380px]" />
            <h2 className="ml-6 mb-0 mt-0 flex justify-between items-center">
              Michal Jackson
              <p className="font-bold text-mid mr-6">₹4,333</p>
            </h2>
            <span className="ml-6 mb-0 flex align-middle mr-6 text-sm">
              I will do business evaluation and corporate services
            </span>
            <p className="items-center flex gap-2 ml-6 mt-0">
              <StarIcon color="primary" /> 4.6 (84)
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 mb-6 mt-8 w-80 rounded border-none cursor-pointer">
              View services
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Details;
