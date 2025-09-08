export function Footer() {
  return (
    <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Jharkhand Explorer. All rights reserved.
            </p>
        </div>
    </footer>
  );
}
