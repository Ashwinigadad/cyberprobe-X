
"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const services = [

  {
    id: 1,
    name: "Cyber Advisory & Consultancy",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Compliance roadmap development and implementation guidance"
  },
  {
    id: 2,
    name: "vCISO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Security governance framework design and continuous security posture improvement"
  },
  {
    id: 3,
    name: "vDPO",
    description: "Strategic security roadmap development and implementation oversight",
    description1: "Security governance framework design and continuous security posture improvement"
  },
  {
    id: 4,
    name: "Regulatory Compliance",
    description: "Gap analysis against regional frameworks (SAMA, NESA, PDPL, CBB, etc.)",
    description1: "Compliance roadmap development and implementation guidance"
  },
  {
    id: 5,
    name: "Regulatory Assessment",
    description: "Incident response and advanced threat hunting",
    description1: "Evidence collection and chain of custody management"
  },
  {
    id: 6,
    name: "ISO 27001 Certification",
    description: "ISMS framework development and implementation",
    description1: "Pre-certification readiness assessment and audit support"
  },
  {
    id: 7,
    name: "PCI DSS Compliance",
    description: "Gap assessment against latest PCI DSS requirements",
    description1: "Remediation planning and certification preparation"
  }
]

const ServiceCardItem = ({ service, index }: { service: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const isEven = (index + 1) % 2 === 0;
  const number = (index + 1).toString().padStart(2, "0")  


  return (
    <motion.div
      key={service.id}
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isEven ? -100 : 100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-4 px-4 md:px-8"
    >
      {isEven ? (
        <div className="flex justify-center w-full">
          <Card className="relative py-8 md:py-12 overflow-hidden bg-black border-opacity-35 border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CardHeader>
              <Image
                src={`/icons/${service.id}.png`}
                alt="icon"
                width={100}
                height={100}
                className="rounded-full border mb-6 border-white"
              />
              <CardTitle className="text-primary-yellow text-xl md:text-2xl">{service.name}</CardTitle>
              <CardDescription className="text-gray-300 text-sm md:text-base">{service.description}</CardDescription>
              {service.description1 && <CardDescription className="text-sm md:text-base">{service.description1}</CardDescription>}
            </CardHeader>
            <CardContent></CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      ) : (
        <div className="hidden md:flex justify-center">
          <span className="text-white text-8xl font-bold opacity-30">{number}</span>
        </div>
      )}

      {isEven ? (
        <div className="hidden md:flex justify-center">
          <span className="text-white text-8xl font-bold opacity-30">{number}</span>
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <Card className="relative py-8 md:py-12 overflow-hidden bg-black border-opacity-35 border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CardHeader>
              <Image
                src={`/icons/${service.id}.png`}
                alt="icon"
                width={80}
                height={80}
                className="rounded-full border mb-6 border-white"
              />
              <CardTitle className="text-primary-yellow text-xl md:text-2xl">{service.name}</CardTitle>
              <CardDescription className="text-gray-300 text-sm md:text-base">{service.description}</CardDescription>
              {service.description1 && <CardDescription className="text-sm md:text-base">{service.description1}</CardDescription>}
            </CardHeader>
            <CardContent></CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      )}
    </motion.div>
  );
};

export function ServiceCard() {
  return (
    <div className="grid grid-cols-1 gap-8 w-full px-4 pb-16 md:px-12 overflow-x-hidden">
      {services.map((service, index) => (
        <ServiceCardItem key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

