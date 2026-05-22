export default function NovaStartupCameras() {
  const imagePath = "/images/cameras/";

  const cameraCategories = [
    {
      category: "Caméras IP",
      description:
        "Les caméras IP fonctionnent via le réseau internet et offrent une excellente qualité d’image. Certaines versions WiFi fonctionnent sans câblage réseau.",
      models: [
        {
          name: "Caméra IP WiFi Smart",
          resolution: "2MP Full HD",
          connectivity: "Sans câblage réseau",
          ports: "RJ45 + WiFi",
          brand: "Hikvision",
          storage: "Carte SD / Cloud",
          price: "65 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Caméra IP Extérieure",
          resolution: "4MP Ultra HD",
          connectivity: "Câble Réseau",
          ports: "RJ45",
          brand: "Dahua",
          storage: "NVR / Cloud",
          price: "95 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Caméra PTZ IP",
          resolution: "8MP 4K",
          connectivity: "WiFi + Ethernet",
          ports: "RJ45 + POE",
          brand: "Uniview",
          storage: "NVR",
          price: "180 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "Caméras Analogiques",
      description:
        "Les caméras analogiques utilisent un câblage coaxial relié à un DVR. Elles sont idéales pour les installations économiques.",
      models: [
        {
          name: "Caméra Analogique HD",
          resolution: "720P",
          connectivity: "Câble coaxial",
          ports: "BNC",
          brand: "Dahua",
          storage: "DVR",
          price: "30 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Caméra Analogique Full HD",
          resolution: "1080P",
          connectivity: "Câble coaxial",
          ports: "BNC",
          brand: "Hikvision",
          storage: "DVR",
          price: "45 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Caméra Analogique 5MP",
          resolution: "5MP",
          connectivity: "Câble coaxial",
          ports: "BNC",
          brand: "XVR Safire",
          storage: "DVR",
          price: "60 000 FCFA",
          image:
            "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
        },
      ],
    },
  ];

  const recorderTable = [
    {
      type: "DVR 4 Ports",
      use: "4 Caméras Analogiques",
      storage: "1 Disque Dur",
      price: "75 000 FCFA",
    },
    {
      type: "DVR 8 Ports",
      use: "8 Caméras Analogiques",
      storage: "2 Disques Durs",
      price: "120 000 FCFA",
    },
    {
      type: "NVR 4 Ports",
      use: "4 Caméras IP",
      storage: "Cloud + HDD",
      price: "95 000 FCFA",
    },
    {
      type: "NVR 16 Ports",
      use: "16 Caméras IP",
      storage: "Serveur + HDD",
      price: "250 000 FCFA",
    },
  ];

  const panels = [
    {
      name: "Panneau Solaire Caméra",
      description: "Alimentation autonome pour caméra extérieure.",
      price: "85 000 FCFA",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Coffret de Sécurité Réseau",
      description: "Protection des équipements de surveillance.",
      price: "45 000 FCFA",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const kits = [
    {
      title: "Kit Maison Basic",
      cameras: "4 Caméras Analogiques",
      recorder: "DVR 4 Ports",
      storage: "500 Go",
      installation: "Incluse",
      price: "180 000 FCFA",
    },
    {
      title: "Kit Commerce Pro",
      cameras: "8 Caméras IP",
      recorder: "NVR 8 Ports",
      storage: "2 To",
      installation: "Incluse",
      price: "550 000 FCFA",
    },
    {
      title: "Kit Entreprise Premium",
      cameras: "16 Caméras 4K",
      recorder: "NVR 16 Ports",
      storage: "4 To",
      installation: "Professionnelle",
      price: "1 200 000 FCFA",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <header className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-blue-950 py-20 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Surveillance • Sécurité • Technologie
            </span>

            <h1 className="text-6xl font-black leading-tight mt-6 mb-6">
              Nova Startup Technologie CI
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
              Solutions professionnelles de vidéosurveillance IP et analogique pour maisons, commerces, entreprises et sites industriels.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition">
                Voir les Produits
              </button>

              <button className="border border-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition">
                Demander un Devis
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Nos Services
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <span>Installation Caméras</span>
                <span className="text-green-400">Disponible</span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <span>Configuration Réseau</span>
                <span className="text-green-400">Disponible</span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <span>Maintenance & Support</span>
                <span className="text-green-400">24/7</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Accès Mobile à Distance</span>
                <span className="text-green-400">Inclus</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white text-black rounded-3xl p-8 overflow-x-auto shadow-2xl">
          <h2 className="text-4xl font-black mb-8">
            Tableau Comparatif des Technologies
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Technologie</th>
                <th className="p-4">Qualité</th>
                <th className="p-4">Installation</th>
                <th className="p-4">Avantage</th>
                <th className="p-4">Prix</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Caméra IP</td>
                <td className="p-4">HD à 4K</td>
                <td className="p-4">Réseau / WiFi</td>
                <td className="p-4">Accès intelligent et mobile</td>
                <td className="p-4">Moyen à Élevé</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-semibold">Caméra Analogique</td>
                <td className="p-4">720P à 5MP</td>
                <td className="p-4">Câble coaxial</td>
                <td className="p-4">Économique et stable</td>
                <td className="p-4">Accessible</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold">Caméra PTZ</td>
                <td className="p-4">4K Ultra HD</td>
                <td className="p-4">IP / POE</td>
                <td className="p-4">Zoom & Rotation intelligente</td>
                <td className="p-4">Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-7xl mx-auto space-y-16">
          {cameraCategories.map((group, index) => (
            <div key={index}>
              <div className="mb-8">
                <h2 className="text-4xl font-black mb-4">{group.category}</h2>
                <p className="text-gray-300 text-lg max-w-4xl">
                  {group.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {group.models.map((camera, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1f2937] rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500 transition shadow-xl group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={camera.image}
                        alt={camera.name}
                        className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                      />

                      <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {camera.price}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-black leading-tight">
                            {camera.name}
                          </h3>

                          <p className="text-blue-400 text-sm mt-1">
                            {camera.brand}
                          </p>
                        </div>

                        <span className="bg-black px-3 py-1 rounded-full text-xs border border-gray-700 whitespace-nowrap">
                          {camera.resolution}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                        <div className="bg-[#111827] rounded-2xl p-3 border border-gray-700">
                          <p className="text-gray-400 text-xs mb-1">Connexion</p>
                          <p className="font-semibold">{camera.connectivity}</p>
                        </div>

                        <div className="bg-[#111827] rounded-2xl p-3 border border-gray-700">
                          <p className="text-gray-400 text-xs mb-1">Ports</p>
                          <p className="font-semibold">{camera.ports}</p>
                        </div>
                      </div>

                      <details className="bg-[#111827] rounded-2xl border border-gray-700 overflow-hidden">
                        <summary className="cursor-pointer px-5 py-4 font-semibold hover:bg-[#172033] transition list-none flex items-center justify-between">
                          <span>En savoir plus</span>
                          <span className="text-blue-400">+</span>
                        </summary>

                        <div className="px-5 pb-5 pt-2 border-t border-gray-700">
                          <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex justify-between">
                              <span>Stockage</span>
                              <span>{camera.storage}</span>
                            </div>

                            <div>
                              <h4 className="text-green-400 font-bold mb-2">Avantages</h4>
                              <ul className="space-y-1 list-disc pl-5">
                                <li>Vision haute définition</li>
                                <li>Surveillance mobile</li>
                                <li>Installation professionnelle</li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-red-400 font-bold mb-2">Inconvénients</h4>
                              <ul className="space-y-1 list-disc pl-5">
                                <li>Configuration réseau requise</li>
                                <li>Prix variable selon les options</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl overflow-x-auto">
          <h2 className="text-4xl font-black mb-8">
            Enregistreurs DVR / NVR
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Type</th>
                <th className="p-4">Utilisation</th>
                <th className="p-4">Stockage</th>
                <th className="p-4">Tarif</th>
              </tr>
            </thead>

            <tbody>
              {recorderTable.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 font-semibold">{item.type}</td>
                  <td className="p-4">{item.use}</td>
                  <td className="p-4">{item.storage}</td>
                  <td className="p-4">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Panneaux & Accessoires
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {panels.map((panel, index) => (
              <div key={index} className="bg-[#1f2937] rounded-3xl overflow-hidden border border-gray-700">
                <img
                  src={panel.image}
                  alt={panel.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{panel.name}</h3>
                    <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                      {panel.price}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 shadow-2xl overflow-x-auto">
          <h2 className="text-4xl font-black mb-8 text-center">
            Kits Professionnels
          </h2>

          <table className="w-full border-collapse bg-white text-black rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Kit</th>
                <th className="p-4">Caméras</th>
                <th className="p-4">Enregistreur</th>
                <th className="p-4">Stockage</th>
                <th className="p-4">Installation</th>
                <th className="p-4">Prix</th>
              </tr>
            </thead>

            <tbody>
              {kits.map((kit, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 font-semibold">{kit.title}</td>
                  <td className="p-4">{kit.cameras}</td>
                  <td className="p-4">{kit.recorder}</td>
                  <td className="p-4">{kit.storage}</td>
                  <td className="p-4">{kit.installation}</td>
                  <td className="p-4 font-bold text-blue-700">{kit.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-20 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              Nova Startup Technologie CI
            </span>

            <h2 className="text-5xl font-black mt-6 mb-6 leading-tight">
              Sécurisez votre maison ou votre entreprise dès aujourd’hui
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Nous proposons des solutions de vidéosurveillance intelligentes adaptées aux particuliers, commerces, bureaux et entreprises industrielles.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#111827] border border-gray-700 rounded-3xl p-6">
                <h3 className="text-2xl font-bold mb-3">Installation Professionnelle</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mise en place complète des équipements avec configuration réseau et accès mobile.
                </p>
              </div>

              <div className="bg-[#111827] border border-gray-700 rounded-3xl p-6">
                <h3 className="text-2xl font-bold mb-3">Maintenance & Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Assistance technique et maintenance pour garantir la sécurité continue de vos installations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] border border-gray-700 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-black mb-8">
              Demander un Devis Gratuit
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-[#1f2937] border border-gray-600 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Adresse email"
                className="w-full bg-[#1f2937] border border-gray-600 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Numéro WhatsApp"
                className="w-full bg-[#1f2937] border border-gray-600 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <select className="w-full bg-[#1f2937] border border-gray-600 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500">
                <option>Type d’installation</option>
                <option>Maison</option>
                <option>Commerce</option>
                <option>Bureau</option>
                <option>Entreprise</option>
              </select>

              <textarea
                rows="5"
                placeholder="Décrivez votre besoin"
                className="w-full bg-[#1f2937] border border-gray-600 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500"
              ></textarea>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold text-lg">
                Envoyer la Demande
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#030712] border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-black mb-4 text-white">
              Nova Startup Technologie CI
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Spécialiste en vidéosurveillance, sécurité électronique et solutions technologiques intelligentes.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Produits</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Caméras IP</li>
              <li>Caméras Analogiques</li>
              <li>DVR & NVR</li>
              <li>Kits Professionnels</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Installation</li>
              <li>Maintenance</li>
              <li>Configuration Réseau</li>
              <li>Support Technique</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>📍 Côte d’Ivoire</li>
              <li>📞 +225 XX XX XX XX</li>
              <li>📧 contact@novastartup.ci</li>
              <li>💬 WhatsApp Disponible</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Nova Startup Technologie CI — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
 
