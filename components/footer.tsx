import { Hand } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Hand className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold font-mono text-foreground">
              Tobi Hand Game
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Scratch + Yapay Zeka ile gelistirilmistir.
          </p>
        </div>
      </div>
    </footer>
  )
}
