import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen nav-pad flex flex-col">
      <div className="flex p-10 items-center justify-center">
        <h1 className="text-black text-4xl font-semibold">admin page</h1>
      </div>

      <div className="grid lg:grid-cols-3 max-lg:grid-rows-3 gap-4 py-10 w-[50%] mx-auto">
        <Button variant="primary" className="text-md md:text-xl h-14">
          <Link href={"/admin/products"}>manage products</Link>
        </Button>
        <Button variant="primary" className="text-md md:text-xl h-14">
          user management
        </Button>
        <Button variant="primary" className="text-md md:text-xl h-14">
          settings
        </Button>
      </div>
    </div>
  );
}
