import { Metadata } from "next";
import { Card } from "@/components";
import { Like } from "@/components/Like/Like";

export const metadata: Metadata = {
  title: "Проект блога",
  description: "это учебный проект блога Next.js",
};

export default function Home() {
  return (
    <>
      <Card />
      <Like id={1} />
    </>
  );
}
