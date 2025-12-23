import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-800 mr-2 mt-2`}
              key={section.id}
            >
              <span className={`mr-2`}>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen text-white bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header className={`text-center mb-12 transition-colors $ {
        isDark ? "text-white" : "text-gray-800"}`}>

   <h1 className="text-5xl font-bold mb-4">React props explained</h1>
   <p className={`text-xl $ {isDark ? "text-gray-300" : "text-gray-600"}`}>
    A comprehensive guide to understanding props in react
   </p>
    </header>
    <div className="space-y-8">
      <div id ="basic" className="scroll-mt-200">
        <BasicProps />
      </div>
      <div id ="basic" className="scroll-mt-200">
        <ChildrenProps />
      </div>
      <div id ="basic" className="scroll-mt-200">
        <ComplexProps />
      </div>
      <div id ="basic" className="scroll-mt-200">
        <RefProps />
      </div>
      <div id ="basic" className="scroll-mt-200">
        <ThemeToggler />
      </div>
    </div>
      </div>
    </div>
  );
}
function App() {
  return <AppContent />;
}

export default App;
