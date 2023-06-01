import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      Login Component

      <Link href={"dashboard"} className="flex w-24 p-2 bg-orange-primary">
        Dashboard
      </Link>
    </div>
  );
}
