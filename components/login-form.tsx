import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[rgba(0,0,0,0.911)] text-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-[#b1d450]">
            Welcome back
          </CardTitle>
          <CardDescription className="text-gray-300">
            Login with your Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full border-[#b1d450] text-[#b1d450] hover:bg-[hsl(103,93%,37%)] hover:text-white transition"
                >
                  Login with Google
                </Button>
              </div>
              <div className="relative text-center text-sm text-gray-300 after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-500">
                <span className="relative z-10 bg-[rgba(0,0,0,0.911)] px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#b1d450]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-gray-800 border border-gray-500 text-white focus:ring-[#b1d450] focus:border-[#b1d450]"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-[#b1d450]">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto text-sm text-gray-300 hover:text-[#b1d450]"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="bg-gray-800 border border-gray-500 text-white focus:ring-[#b1d450] focus:border-[#b1d450]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#b1d450] text-black font-semibold hover:bg-[hsl(103,93%,37%)] transition"
                >
                  Login
                </Button>
              </div>
              <div className="text-center text-sm text-gray-300">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline hover:text-[#b1d450]">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-gray-400">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-[#b1d450]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-[#b1d450]">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  )
}
