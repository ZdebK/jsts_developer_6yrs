import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const isLearn = location.pathname.includes("/learn");

  return (
    <footer className="py-4 px-4 border-t border--default bg--card-dark">
      <div className="max-w-4xl mx-auto text-center">
        {isLearn ? (
          <p className="text--vs-muted text-sm">
            Use <kbd className="px-2 py-1 bg--input rounded text-xs">←</kbd> and{" "}
            <kbd className="px-2 py-1 bg--input rounded text-xs">→</kbd> to navigate,{" "}
            <kbd className="px-2 py-1 bg--input rounded text-xs">Space</kbd> to flip,{" "}
            <kbd className="px-2 py-1 bg--input rounded text-xs">Esc</kbd> to exit
          </p>
        ) : (
          <p className="text--vs-muted text-sm">
            © {new Date().getFullYear()} Kasia Elżbieciak
          </p>
        )}
      </div>
    </footer>
  );
}
