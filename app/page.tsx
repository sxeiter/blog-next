import { Metadata } from "next";
import { Card, Htag, P, Tag } from "@/components";
import { Button } from "@/components/Button/Button";

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
