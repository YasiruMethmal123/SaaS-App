"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formsSchema = z.object({
    name : z.string().min(1,{message: 'Companion is required'}),
    subject : z.string().min(1,{message : 'Subject is required'}),
    topic : z.string().min(1,{message:'Topic is required'}),
    voice : z.string().min(1,{message: 'Voice is required.'}),
    style : z.string().min(1,{message: 'Style is required.'}),
    duration :z.coerce.number().min(1, {message : 'Duration is required'},)
})
const CompanionForm = () => {
  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm