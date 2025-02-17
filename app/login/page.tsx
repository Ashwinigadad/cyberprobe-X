import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "../../components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.99)] p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {/* <a href="#" className="flex items-center gap-2 self-center font-medium text-white">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#b1d450] text-black">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a> */}
        <LoginForm />
      </div>
    </div>
  )
}
