import { redirect } from "next/navigation";

export default function LandOwnerPage() {
  redirect("/landOwner/dashboard");
  return null; 
}