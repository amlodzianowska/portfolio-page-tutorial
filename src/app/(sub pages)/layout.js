import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10 sm:px-32 py-20">
        <HomeBtn />
        {children}
    </main>
  );
}
