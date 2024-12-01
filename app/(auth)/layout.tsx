import CustomIcon from "@/components/CustomIcon";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className="bg-gradient-to-bl from-green-100 via-sky-100 to-rose-100"
      >
        {/* HEADER */}
        <header className="flex hcb px-10 py-4">
          <div>
            <Link href="/" className='text-2xl text-primary font-heading font-bold'>
              <CustomIcon className="size-12 inline-block"
              style={{ fill: 'var(--primary-color)'}}
              />
              AINAS
            </Link>
          </div>

          <div>
            <p className="text-xs text-slate-400">Join us in reshaping the world in our image --Thanos</p>
          </div>
        </header>

        {/* CONTENT */}
       <div className="h-screen max-w-md mx-auto mt-10">
        {children}
        </div>
      </main>
  );
}
