import { Metadata } from "next";
import { Card } from "@/components";

export const metadata: Metadata = {
  title: "Проект блога",
  description: "это учебный проект блога Next.js",
};

export default function Home() {
  return (
    <>
      <Card />
    </>
  );
}
