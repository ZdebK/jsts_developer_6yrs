export function Footer() {
  return (
    <footer className="py-4 px-4 border-t border--default bg--card-dark">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text--vs-muted text-sm">
          © {new Date().getFullYear()} Kasia Elżbieciak
        </p>
      </div>
    </footer>
  );
}
