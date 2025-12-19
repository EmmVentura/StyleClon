import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaTimes, FaBars, FaSearch, FaChevronDown, FaChevronUp, FaStar, FaFilter } from "react-icons/fa";

interface Artista {
  nombre: string;
  categorias: string[];
  destacado?: boolean;
}

export default function ArtistasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [expandedLetters, setExpandedLetters] = useState<string[]>(["A", "B", "C"]);
   const [selectedCategory, setSelectedCategory] = useState<string>("");

  
  const artistas: Artista[] = [
    // A
    { nombre: "Acuareela Blanca", categorias: ["Porn", "Español"], destacado: true },
    { nombre: "Aareani ASMR", categorias: ["Variado", "Español", "Whispers"], destacado: false },
    { nombre: "Aimee ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Alejandra ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Alme ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Amny ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Andoresu ASMR", categorias: ["Variado", "Japonés"], destacado: false },
    { nombre: "Annabelle Rogers", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Ariana Pan", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Ariana RealTv ASMR", categorias: ["Variado", "Inglés", "Roleplay"], destacado: true },
    { nombre: "ASMR Agustina", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "ASMR NetWork", categorias: ["Variado", "Inglés"], destacado: false },
    { nombre: "ASMR EN GENERAL", categorias: ["Comunidad", "General"], destacado: false },
    { nombre: "Asiatico", categorias: ["Asiático", "Variado"], destacado: false },
    { nombre: "Akuma", categorias: ["Variado", "Español", "Roleplay"], destacado: true },
    { nombre: "AudeyandSadie", categorias: ["Porn", "Inglés"], destacado: false },
    
    // B
    { nombre: "Babe ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "BabyJackezASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "BarbilandASMR", categorias: ["Variado", "Español", "Comedia"], destacado: true },
    { nombre: "BeatrixariasASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "BecariaASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Boni3GG", categorias: ["Porn", "Español"], destacado: false },
    { nombre: "Brea Rose", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    
    // C
    { nombre: "Careta ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Carol Mendoza / Medusa Only", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Casandra ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Cece ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    { nombre: "Celina Whispers", categorias: ["Whispers", "Español", "Soft Spoken"], destacado: false },
    { nombre: "Centolain", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Charlotte Mami", categorias: ["Variado", "Español", "Roleplay"], destacado: true },
    { nombre: "CherryCute666", categorias: ["Variado", "Roleplay"], destacado: true },
    
    // D
    { nombre: "Daki ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Darkygirl / ASMR LRM", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Dayale ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Denut ASMR", categorias: ["Variado", "Español"], destacado: false },
    
    // E
    { nombre: "Edena Princess ASMR", categorias: ["Inglés", "Variado"], destacado: true },
    { nombre: "Eli Olive / Onlyeeeli", categorias: ["Variado", "Roleplay"], destacado: false },
    { nombre: "Elis Scratching ASMR", categorias: ["Scratching", "Sounds", "Español"], destacado: false },
    { nombre: "Ella ST Roman", categorias: ["POV", "JOI", "Español"], destacado: true },
    { nombre: "EmmaRuby ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    { nombre: "Emily Black", categorias: ["Variado", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Esmeraldita / Raldita", categorias: ["Porn", "Español"], destacado: false },
    { nombre: "Esther Olive ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Evelyn Jade", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Evolet ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // F
    { nombre: "FifiRifis ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // G
    { nombre: "GalaMV", categorias: ["POV","Roleplay", "Español", "Inglés"], destacado: true },
    { nombre: "Ginger ASMR", categorias: ["Variado", "Inglés", "Pov", "JOI"], destacado: true },
    
    // H
    { nombre: "Hermanas Verastegui", categorias: ["Variado", "Español", "Hermanas"], destacado: true },
    { nombre: "Holy Yoly", categorias: ["Variado", "Español"], destacado: false },
    
    // J
    { nombre: "Jade ASMR", categorias: ["Variado", "Español", "Roleplay"], destacado: true },
    { nombre: "Janesita ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Jaybbgirl", categorias: ["POV", "Roleplay", "Inglés", "JOI" ], destacado: true },
    { nombre: "JazminLuna", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Jessica Starling", categorias: ["POV", "Roleplay", "Inglés"], destacado: true },
    { nombre: "Joselis VIP", categorias: ["Porn", "Español"], destacado: false },
    { nombre: "Juicy ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    
    // K
    { nombre: "Karilu", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "KatWhitthe", categorias: ["Porn", "Español"], destacado: true },
    { nombre: "Kitana ASMR", categorias: ["Variado", "Español"], destacado: false },
    
    // L
    { nombre: "Ledaah ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    { nombre: "Leina Sex", categorias: ["Adulto", "Porn", "Español"], destacado: true },
    { nombre: "Lena ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Lepus ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Lila ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Lilyyyyxx", categorias: ["Variado", "POV", "Inglés"], destacado: true },
    { nombre: "Luli ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Lumi ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // M
    { nombre: "MaferShof", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Mamá Susurros", categorias: ["Variado", "Español", "Maternal"], destacado: true },
    { nombre: "Maredorazio", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Marly ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Massage ASMR", categorias: ["Massage", "Relax", "Inglés"], destacado: true },
    { nombre: "Maddy ASMR", categorias: ["Variado", "Inglés", "POV"], destacado: true },
    { nombre: "MerlyMess", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Mia Garcia", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Mila Volker", categorias: ["POV","JOI", "Inglés"], destacado: true },
    { nombre: "Mindarina ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Miss Alexa Perl", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Miss Cassi ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    
    // N
    { nombre: "Nastasha Jade", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Nessie ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Nina ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // O
    { nombre: "Okina Mune", categorias: ["Porn","Roleplay", "Español"], destacado: true },
    { nombre: "Olive Wood ASMR", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Orenda ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // P
    { nombre: "PaoloPoliss", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Puffin ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    
    // R
    { nombre: "Rinapo Boobs", categorias: ["JOI", "Porn", "Japones"], destacado: false },
    { nombre: "RuthLee", categorias: ["Porn", "Español"], destacado: true },
    
    // S
    { nombre: "Sami Herrera", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Sarahi ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Satella ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Sayury ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "ShofsofSimone", categorias: ["Variado", "Inglés"], destacado: true },
    { nombre: "Skylar Mae", categorias: ["POV", "Inglés"], destacado: true },
    { nombre: "Sloansmoans Sloane Sabbath", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "Sofi Coquita", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Sofifrencfry ASMR", categorias: ["Variado", "Español", "Inglés"], destacado: true },
    { nombre: "Sophie-Queen", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "SweetBabe ASMR", categorias: ["Porn", "Español"], destacado: true },
    { nombre: "SweetLine", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "SweetMia / AryaASMR", categorias: ["Variado", "Español"], destacado: false },
    
    // T
    { nombre: "Tatum Christine", categorias: ["POV", "Inglés", "Roleplay"], destacado: true },
    { nombre: "ThiccFruitsnacc", categorias: ["Variado", "Inglés", "Roleplay"], destacado: true },
    
    // V
    { nombre: "Valeshhh ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Valeruky", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "Vico ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "VioletWood ASMR", categorias: ["Variado", "Inglés"], destacado: true },
    { nombre: "Virtual Sex / JOI", categorias: ["Adulto", "JOI", "Explicit"], destacado: false },
    { nombre: "Vivi ASMR", categorias: ["Variado", "Español"], destacado: false },
    { nombre: "VSM ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // W
    { nombre: "Wendy ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "WhyNot ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Wokies ASMR", categorias: ["Variado", "Inglés"], destacado: false },
    
    // X
    { nombre: "XXX-general", categorias: ["Adulto", "Porn", "General"], destacado: false },
    
    // Y
    { nombre: "Yao ASMR", categorias: ["Variado", "Español"], destacado: true },
    { nombre: "Yeya ASMR", categorias: ["Variado", "Español"], destacado: true },
    
    // Z
    { nombre: "Zujei ASMR", categorias: ["Variado", "Español"], destacado: true },
  ].sort((a, b) => a.nombre.localeCompare(b.nombre));

  // Obtener letras únicas
  const letters = Array.from(new Set(artistas.map(a => a.nombre.charAt(0).toUpperCase())));
  
  // Obtener todas las categorías únicas (de arrays)
  const allCategories = useMemo(() => {
    const categoriasSet = new Set<string>();
    artistas.forEach(artista => {
      artista.categorias.forEach(cat => categoriasSet.add(cat));
    });
    return Array.from(categoriasSet).sort();
  }, [artistas]);

  // Estadísticas
  const stats = useMemo(() => {
    const totalArtistas = artistas.length;
    const totalDestacados = artistas.filter(a => a.destacado).length;
    const totalLetras = letters.length;
    const totalCategorias = allCategories.length;
    
    // Conteo por categoría popular
    const categoriaCounts: Record<string, number> = {};
    artistas.forEach(artista => {
      artista.categorias.forEach(cat => {
        categoriaCounts[cat] = (categoriaCounts[cat] || 0) + 1;
      });
    });
    
    // Top 5 categorías más populares
    const topCategorias = Object.entries(categoriaCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([cat, count]) => ({ cat, count }));
    
    // Conteo por idioma (basado en categorías)
    const idiomas = {
      Español: artistas.filter(a => a.categorias.includes("Español")).length,
      Inglés: artistas.filter(a => a.categorias.includes("Inglés")).length,
      Japonés: artistas.filter(a => a.categorias.includes("Japonés")).length,
    };
    
    return {
      totalArtistas,
      totalDestacados,
      totalLetras,
      totalCategorias,
      topCategorias,
      idiomas,
    };
  }, [artistas, letters, allCategories]);

  // Filtrar artistas según búsqueda
  const filteredArtistas = artistas.filter(artista => {
    const matchesSearch = searchTerm === "" || 
      artista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artista.categorias.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFavorites = !showFavorites || artista.destacado;
    
    const matchesCategory = !selectedCategory || artista.categorias.includes(selectedCategory);
    
    return matchesSearch && matchesFavorites && matchesCategory;
  });

  // Agrupar artistas por letra
  const groupedArtistas = letters.reduce((acc, letter) => {
    const artistasByLetter = filteredArtistas.filter(a => a.nombre.charAt(0).toUpperCase() === letter);
    if (artistasByLetter.length > 0) {
      acc[letter] = artistasByLetter;
    }
    return acc;
  }, {} as Record<string, Artista[]>);

  // Función para obtener color de categoría
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Porn": "bg-red-100 text-red-800",
      "Adulto": "bg-red-100 text-red-800",
      "Explicit": "bg-red-100 text-red-800",
      "POV": "bg-blue-100 text-blue-800",
      "Roleplay": "bg-blue-100 text-blue-800",
      "Variado": "bg-gray-100 text-gray-800",
      "Español": "bg-green-100 text-green-800",
      "Inglés": "bg-indigo-100 text-indigo-800",
      "Japonés": "bg-pink-100 text-pink-800",
      "Whispers": "bg-teal-100 text-teal-800",
      "Scratching": "bg-orange-100 text-orange-800",
      "Massage": "bg-amber-100 text-amber-800",
      "Comunidad": "bg-yellow-100 text-yellow-800",
      "General": "bg-yellow-100 text-yellow-800",
      "Princess": "bg-purple-100 text-purple-800",
      "Fantasy": "bg-purple-100 text-purple-800",
      "JOI": "bg-red-100 text-red-800",
      "VIP": "bg-purple-100 text-purple-800",
      "Comedia": "bg-lime-100 text-lime-800",
      "Maternal": "bg-pink-100 text-pink-800",
      "Hermanas": "bg-pink-100 text-pink-800",
      "Relax": "bg-cyan-100 text-cyan-800",
      "Soft Spoken": "bg-teal-100 text-teal-800",
      "Sounds": "bg-orange-100 text-orange-800",
      "Asiático": "bg-rose-100 text-rose-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  // Función para alternar expansión de letra
  const toggleLetter = (letter: string) => {
    setExpandedLetters(prev => 
      prev.includes(letter) 
        ? prev.filter(l => l !== letter)
        : [...prev, letter]
    );
  };

  // Función para expandir/contraer todas
  const toggleAll = () => {
    if (expandedLetters.length === letters.length) {
      setExpandedLetters([]);
    } else {
      setExpandedLetters([...letters]);
    }
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setShowFavorites(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <header className="bg-white/90 shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            StyleClon
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Planes
            </Link>
            <Link href="/legal" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Legal
            </Link>
            <Link href="/artistas" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Artistas
            </Link>
            <Link href="/comunidad" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Comunidad
            </Link>
            <Link href="https://t.me/ASMR_Latam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1">
              <FaTelegram className="text-xl" />
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none z-50" aria-label="Menú">
            {isMenuOpen ? (
              <div className="fixed top-4 right-6 bg-white p-1 rounded-md shadow-md">
                <FaTimes size={24} />
              </div>
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden">
            <div className="flex flex-col space-y-6 text-lg">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-4 text-gray-900">Planes</Link>
              <Link href="/legal" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-4 text-gray-900">Legal</Link>
              <Link href="/artistas" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-4 text-gray-900">Artistas</Link>
              <Link href="/comunidad" onClick={() => setIsMenuOpen(false)} className="border-b border-gray-100 pb-4 text-gray-900">Comunidad</Link>
              <Link href="https://t.me/ASMR_Latam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 border-b border-gray-100 pb-4">
                <FaTelegram className="text-xl" /> Unirse al Canal
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section*/}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Catálogo de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Artistas ASMR</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explora nuestra colección exclusiva de más de {artistas.length} artistas ASMR con múltiples categorías.
            </p>
          </div>
          
          {/* Estadísticas  */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600">{stats.totalArtistas}</div>
              <div className="text-sm text-gray-600">Artistas Totales</div>
              <div className="text-xs text-gray-400 mt-1">+{stats.totalDestacados} destacados</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-blue-600">{stats.totalCategorias}</div>
              <div className="text-sm text-gray-600">Categorías</div>
              <div className="text-xs text-gray-400 mt-1">{stats.topCategorias[0]?.cat}: {stats.topCategorias[0]?.count}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-green-600">{stats.totalLetras}</div>
              <div className="text-sm text-gray-600">Letras</div>
              <div className="text-xs text-gray-400 mt-1">De la A a la {letters[letters.length - 1]}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-3xl font-bold text-pink-600">{stats.idiomas.Español}</div>
              <div className="text-sm text-gray-600">En Español</div>
              <div className="text-xs text-gray-400 mt-1">+{stats.idiomas.Inglés} en inglés</div>
            </div>
          </div>

          {/* Top Categorías */}
          
        </div>
      </section>

      {/* Controles de Filtrado MEJORADOS */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              {/* Barra de búsqueda */}
              <div className="relative flex-1 w-full">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artista o categoría..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Filtros */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowFavorites(!showFavorites)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                    showFavorites
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <FaStar className={showFavorites ? "text-white" : "text-yellow-500"} />
                  Destacados
                </button>

                <button
                  onClick={toggleAll}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                >
                  {expandedLetters.length === letters.length ? <FaChevronUp /> : <FaChevronDown />}
                  {expandedLetters.length === letters.length ? "Contraer" : "Expandir"}
                </button>

                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                >
                  Limpiar
                </button>
              </div>
            </div>

            {/* Filtro rápido por categoría */}
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">Filtrar por categoría:</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    !selectedCategory 
                      ? "bg-purple-100 text-purple-700 ring-1 ring-purple-300" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Todas
                </button>
                {["Porn", "POV", "Español", "Inglés", "Variado", "JOI", "Roleplay"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      selectedCategory === cat
                        ? `${getCategoryColor(cat)} ring-1 ring-opacity-50`
                        : `${getCategoryColor(cat).replace('text-', 'text-opacity-70 ')} hover:opacity-90`
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Info de resultados */}
            <div className="mt-4 text-sm text-gray-600 flex flex-wrap items-center gap-4">
              <span className="font-medium">
                Mostrando <span className="text-purple-600">{filteredArtistas.length}</span> de {artistas.length} artistas
              </span>
              {searchTerm && (
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
              {searchTerm}
              </span>
              )}
              {showFavorites && (
                <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded">Destacados</span>
              )}
              {selectedCategory && (
                <span className={`px-2 py-1 rounded ${getCategoryColor(selectedCategory)}`}>
                  {selectedCategory}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Artistas */}
      <main className="flex-1 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {Object.keys(groupedArtistas).length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron artistas</h3>
              <p className="text-gray-500 mb-4">Intenta con otros términos de búsqueda</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Navegación lateral por letras */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaFilter /> Navegación Rápida
                  </h3>
                  <div className="space-y-2">
                    {letters.map(letter => (
                      <button
                        key={letter}
                        onClick={() => {
                          document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          Object.keys(groupedArtistas).includes(letter)
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 hover:from-blue-100 hover:to-purple-100"
                            : "text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        <span className="font-medium">{letter}</span>
                        <span className="float-right text-sm">
                          ({groupedArtistas[letter]?.length || 0})
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Categorías populares */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Categorías Populares</h3>
                    <div className="space-y-2">
                      {stats.topCategorias.map(({ cat, count }) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === cat
                              ? `${getCategoryColor(cat)} font-medium`
                              : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{cat}</span>
                            <span className="text-xs opacity-70">{count}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista principal de artistas */}
              <div className="lg:col-span-3">
                {Object.entries(groupedArtistas).map(([letter, artistas]) => (
                  <div key={letter} id={`letter-${letter}`} className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Encabezado de letra */}
                    <button
                      onClick={() => toggleLetter(letter)}
                      className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {letter}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Letra {letter}</h3>
                          <p className="text-sm text-gray-600">{artistas.length} artista{artistas.length !== 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      {expandedLetters.includes(letter) ? (
                        <FaChevronUp className="text-gray-500 text-xl" />
                      ) : (
                        <FaChevronDown className="text-gray-500 text-xl" />
                      )}
                    </button>

                    {/* Lista de artistas (expandible) */}
                    {expandedLetters.includes(letter) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="p-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {artistas.map((artista, index) => (
                            <motion.div
                              key={artista.nombre}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                                artista.destacado
                                  ? "border-yellow-200 bg-gradient-to-br from-yellow-50/50 to-white"
                                  : "border-gray-100 bg-white"
                              }`}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-gray-900">{artista.nombre}</h4>
                                {artista.destacado && (
                                  <FaStar className="text-yellow-500 flex-shrink-0 mt-1" title="Destacado" />
                                )}
                              </div>
                              
                              {/* MÚLTIPLES CATEGORÍAS */}
                              <div className="flex flex-wrap gap-1.5">
                                {artista.categorias.map((categoria, catIndex) => (
                                  <span
                                    key={catIndex}
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(categoria)}`}
                                    title={categoria}
                                  >
                                    {categoria}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                StyleClon
              </h2>
              <p className="text-gray-400">Tu acceso exclusivo a contenido premium</p>
              <div className="flex space-x-4">
                <Link href="https://t.me/ASMR_Latam" className="text-gray-400 hover:text-white transition-colors">
                  <FaTelegram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Planes</Link></li>
                <li><Link href="/legal" className="text-gray-400 hover:text-white transition-colors">Términos</Link></li>
                <li><Link href="/legal" className="text-gray-400 hover:text-white transition-colors">Privacidad</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400">.....</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400">+52 Linea de Perreo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400">Veracruz, México</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Suscríbete</h3>
              <p className="text-gray-400">Recibe actualizaciones y promociones exclusivas.</p>
              <form className="flex space-x-2">
                <input type="email" placeholder="No funciona pero se ve bonito!" className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Enviar</button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} MrJarocho. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}