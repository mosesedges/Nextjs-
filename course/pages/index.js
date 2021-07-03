import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <h1>Home page </h1>
    </div>
  );
}
