import {ButtonDark} from "@/app/components/ui/button"

export default function NotFound() {
    return (
        <div className="grid min-h-screen place-items-center bg-(--bg) px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center">
            <p className="text-base font-semibold text-(--text) font-mono">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-(--text) font-serif">
            Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-(--text-faint)">
            Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonDark href="/" text="Return home"></ButtonDark>

            </div>
        </div>
        </div>
    );
}

