import Image from "next/image";
import styles from "./page.module.css";
import NasaAPOD from "./components/apod";

export default function Home() {
  return (
    <main>
      <NasaAPOD />
    </main>
  );
}
