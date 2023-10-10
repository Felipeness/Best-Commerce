"use client";

import Image from "next/image";
import { Container } from "./style";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <h1>Main</h1>
    </Container>
  );
}
