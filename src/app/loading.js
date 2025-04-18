// app/loading.js
import Loader from "@/components/loading";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
}