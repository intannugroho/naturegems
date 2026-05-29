const DESTINATIONS = [
  {
    "id": 1,
    "province": "Aceh",
    "name": "Pantai Lampuuk",
    "description": "Pantai tersembunyi dengan pasir putih dan suasana tenang.",
    "lat": 5.492,
    "lng": 95.247,
    "tags": [
      "Beach",
      "QuietVibes"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Lampuuk%20Aceh%20Indonesia%20nature%20travel"
  },
  {
    "id": 2,
    "province": "Aceh",
    "name": "Air Terjun Blang Kolam",
    "description": "Air terjun alami yang cocok untuk eksplorasi singkat.",
    "lat": 5.03,
    "lng": 97.08,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Blang%20Kolam%20Aceh%20Indonesia%20nature%20travel"
  },
  {
    "id": 3,
    "province": "Aceh",
    "name": "Pulau Weh Iboih",
    "description": "Spot snorkeling dan laut jernih di ujung barat Indonesia.",
    "lat": 5.872,
    "lng": 95.258,
    "tags": [
      "Island",
      "Sea"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Weh%20Iboih%20Aceh%20Indonesia%20nature%20travel"
  },
  {
    "id": 4,
    "province": "Aceh",
    "name": "Danau Laut Tawar",
    "description": "Danau luas dengan pemandangan pegunungan Gayo.",
    "lat": 4.611,
    "lng": 96.88,
    "tags": [
      "Lake",
      "Mountain"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Laut%20Tawar%20Aceh%20Indonesia%20nature%20travel"
  },
  {
    "id": 5,
    "province": "Aceh",
    "name": "Pantai Lhoknga",
    "description": "Pantai luas untuk menikmati sunset dan ombak.",
    "lat": 5.477,
    "lng": 95.236,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Lhoknga%20Aceh%20Indonesia%20nature%20travel"
  },
  {
    "id": 6,
    "province": "Sumatera Utara",
    "name": "Bukit Holbung",
    "description": "Bukit hijau dengan panorama Danau Toba.",
    "lat": 2.584,
    "lng": 98.75,
    "tags": [
      "Hill",
      "Lake"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Holbung%20Sumatera%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 7,
    "province": "Sumatera Utara",
    "name": "Air Terjun Sipiso-piso",
    "description": "Air terjun tinggi dengan lanskap Karo yang sejuk.",
    "lat": 2.916,
    "lng": 98.519,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Sipiso-piso%20Sumatera%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 8,
    "province": "Sumatera Utara",
    "name": "Pulau Samosir",
    "description": "Pulau di tengah Danau Toba dengan budaya Batak.",
    "lat": 2.673,
    "lng": 98.859,
    "tags": [
      "Island",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Samosir%20Sumatera%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 9,
    "province": "Sumatera Utara",
    "name": "Tangkahan",
    "description": "Ekowisata hutan dan sungai yang alami.",
    "lat": 3.69,
    "lng": 98.07,
    "tags": [
      "Forest",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Tangkahan%20Sumatera%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 10,
    "province": "Sumatera Utara",
    "name": "Pantai Pandan",
    "description": "Pantai tenang di pesisir Sibolga.",
    "lat": 1.684,
    "lng": 98.834,
    "tags": [
      "Beach",
      "Calm"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Pandan%20Sumatera%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 11,
    "province": "Sumatera Barat",
    "name": "Lembah Harau",
    "description": "Lembah dengan tebing tinggi dan air terjun kecil.",
    "lat": -0.11,
    "lng": 100.67,
    "tags": [
      "Valley",
      "Waterfall"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Lembah%20Harau%20Sumatera%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 12,
    "province": "Sumatera Barat",
    "name": "Danau Maninjau",
    "description": "Danau vulkanik dengan jalan kelok yang ikonik.",
    "lat": -0.307,
    "lng": 100.2,
    "tags": [
      "Lake",
      "View"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Maninjau%20Sumatera%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 13,
    "province": "Sumatera Barat",
    "name": "Pantai Air Manis",
    "description": "Pantai populer dengan legenda Malin Kundang.",
    "lat": -0.991,
    "lng": 100.355,
    "tags": [
      "Beach",
      "Legend"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Air%20Manis%20Sumatera%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 14,
    "province": "Sumatera Barat",
    "name": "Ngarai Sianok",
    "description": "Ngarai hijau dekat Bukittinggi.",
    "lat": -0.305,
    "lng": 100.369,
    "tags": [
      "Canyon",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Ngarai%20Sianok%20Sumatera%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 15,
    "province": "Sumatera Barat",
    "name": "Pulau Pasumpahan",
    "description": "Pulau kecil dengan laut biru dan pasir putih.",
    "lat": -1.117,
    "lng": 100.365,
    "tags": [
      "Island",
      "Sea"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Pasumpahan%20Sumatera%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 16,
    "province": "Riau",
    "name": "Pulau Rupat",
    "description": "Pantai panjang dengan suasana pulau yang tenang.",
    "lat": 2.045,
    "lng": 101.625,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Rupat%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 17,
    "province": "Riau",
    "name": "Danau Raja",
    "description": "Danau kota yang cocok untuk santai sore.",
    "lat": 0.358,
    "lng": 102.545,
    "tags": [
      "Lake",
      "Relax"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Raja%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 18,
    "province": "Riau",
    "name": "Air Terjun Aek Martua",
    "description": "Air terjun bertingkat di Rokan Hulu.",
    "lat": 0.888,
    "lng": 100.39,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Aek%20Martua%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 19,
    "province": "Riau",
    "name": "Taman Nasional Tesso Nilo",
    "description": "Kawasan konservasi hutan dataran rendah.",
    "lat": -0.19,
    "lng": 101.75,
    "tags": [
      "Forest",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Taman%20Nasional%20Tesso%20Nilo%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 20,
    "province": "Riau",
    "name": "Pantai Selat Baru",
    "description": "Pantai di Bengkalis dengan kuliner pesisir.",
    "lat": 1.536,
    "lng": 102.126,
    "tags": [
      "Beach",
      "Food"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Selat%20Baru%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 21,
    "province": "Kepulauan Riau",
    "name": "Pantai Trikora",
    "description": "Pantai alami di Bintan dengan batu granit.",
    "lat": 1.068,
    "lng": 104.64,
    "tags": [
      "Beach",
      "Granite"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Trikora%20Kepulauan%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 22,
    "province": "Kepulauan Riau",
    "name": "Pulau Penyengat",
    "description": "Pulau sejarah Melayu yang dekat dari Tanjungpinang.",
    "lat": 0.929,
    "lng": 104.421,
    "tags": [
      "Island",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Penyengat%20Kepulauan%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 23,
    "province": "Kepulauan Riau",
    "name": "Lagoi Bay",
    "description": "Kawasan pantai dan resort di Bintan.",
    "lat": 1.187,
    "lng": 104.347,
    "tags": [
      "Beach",
      "Resort"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Lagoi%20Bay%20Kepulauan%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 24,
    "province": "Kepulauan Riau",
    "name": "Pulau Abang",
    "description": "Spot snorkeling dengan terumbu karang.",
    "lat": 0.469,
    "lng": 104.204,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Abang%20Kepulauan%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 25,
    "province": "Kepulauan Riau",
    "name": "Jembatan Barelang",
    "description": "Ikon Batam dengan panorama laut dan pulau.",
    "lat": 0.963,
    "lng": 104.042,
    "tags": [
      "Bridge",
      "View"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Jembatan%20Barelang%20Kepulauan%20Riau%20Indonesia%20nature%20travel"
  },
  {
    "id": 26,
    "province": "Jambi",
    "name": "Danau Kaco",
    "description": "Danau kecil berwarna biru jernih di Kerinci.",
    "lat": -2.281,
    "lng": 101.54,
    "tags": [
      "Lake",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Kaco%20Jambi%20Indonesia%20nature%20travel"
  },
  {
    "id": 27,
    "province": "Jambi",
    "name": "Gunung Kerinci",
    "description": "Gunung tertinggi di Sumatra untuk pendaki.",
    "lat": -1.697,
    "lng": 101.264,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Kerinci%20Jambi%20Indonesia%20nature%20travel"
  },
  {
    "id": 28,
    "province": "Jambi",
    "name": "Candi Muaro Jambi",
    "description": "Kompleks candi bersejarah yang luas.",
    "lat": -1.47,
    "lng": 103.67,
    "tags": [
      "Temple",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Candi%20Muaro%20Jambi%20Jambi%20Indonesia%20nature%20travel"
  },
  {
    "id": 29,
    "province": "Jambi",
    "name": "Air Terjun Telun Berasap",
    "description": "Air terjun berkabut di kaki Kerinci.",
    "lat": -1.78,
    "lng": 101.28,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Telun%20Berasap%20Jambi%20Indonesia%20nature%20travel"
  },
  {
    "id": 30,
    "province": "Jambi",
    "name": "Danau Gunung Tujuh",
    "description": "Danau tinggi dengan jalur trekking menantang.",
    "lat": -1.72,
    "lng": 101.41,
    "tags": [
      "Lake",
      "Hiking"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Gunung%20Tujuh%20Jambi%20Indonesia%20nature%20travel"
  },
  {
    "id": 31,
    "province": "Sumatera Selatan",
    "name": "Pagar Alam",
    "description": "Kawasan sejuk dengan kebun teh dan Gunung Dempo.",
    "lat": -4.03,
    "lng": 103.24,
    "tags": [
      "Mountain",
      "Tea"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pagar%20Alam%20Sumatera%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 32,
    "province": "Sumatera Selatan",
    "name": "Air Terjun Bedegung",
    "description": "Air terjun tinggi di Muara Enim.",
    "lat": -4.05,
    "lng": 103.76,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Bedegung%20Sumatera%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 33,
    "province": "Sumatera Selatan",
    "name": "Pulau Kemaro",
    "description": "Pulau kecil bersejarah di Sungai Musi.",
    "lat": -2.976,
    "lng": 104.79,
    "tags": [
      "Island",
      "History"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Kemaro%20Sumatera%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 34,
    "province": "Sumatera Selatan",
    "name": "Danau Ranau",
    "description": "Danau luas di perbatasan Sumsel-Lampung.",
    "lat": -4.85,
    "lng": 103.93,
    "tags": [
      "Lake",
      "View"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Ranau%20Sumatera%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 35,
    "province": "Sumatera Selatan",
    "name": "Bukit Siguntang",
    "description": "Bukit sejarah dengan suasana hijau di Palembang.",
    "lat": -2.985,
    "lng": 104.735,
    "tags": [
      "Hill",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Siguntang%20Sumatera%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 36,
    "province": "Kepulauan Bangka Belitung",
    "name": "Pantai Tanjung Tinggi",
    "description": "Pantai granit ikonik dengan air jernih.",
    "lat": -2.552,
    "lng": 107.713,
    "tags": [
      "Beach",
      "Granite"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Tanjung%20Tinggi%20Kepulauan%20Bangka%20Belitung%20Indonesia%20nature%20travel"
  },
  {
    "id": 37,
    "province": "Kepulauan Bangka Belitung",
    "name": "Pulau Lengkuas",
    "description": "Pulau mercusuar dengan laut biru.",
    "lat": -2.536,
    "lng": 107.618,
    "tags": [
      "Island",
      "Lighthouse"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Lengkuas%20Kepulauan%20Bangka%20Belitung%20Indonesia%20nature%20travel"
  },
  {
    "id": 38,
    "province": "Kepulauan Bangka Belitung",
    "name": "Pantai Parai Tenggiri",
    "description": "Pantai pasir putih dan batu granit besar.",
    "lat": -1.804,
    "lng": 106.125,
    "tags": [
      "Beach",
      "Resort"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Parai%20Tenggiri%20Kepulauan%20Bangka%20Belitung%20Indonesia%20nature%20travel"
  },
  {
    "id": 39,
    "province": "Kepulauan Bangka Belitung",
    "name": "Danau Kaolin",
    "description": "Danau bekas tambang dengan warna biru unik.",
    "lat": -2.74,
    "lng": 107.66,
    "tags": [
      "Lake",
      "Photo"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Kaolin%20Kepulauan%20Bangka%20Belitung%20Indonesia%20nature%20travel"
  },
  {
    "id": 40,
    "province": "Kepulauan Bangka Belitung",
    "name": "Pantai Tikus Emas",
    "description": "Pantai luas dekat Sungailiat.",
    "lat": -1.835,
    "lng": 106.13,
    "tags": [
      "Beach",
      "Calm"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Tikus%20Emas%20Kepulauan%20Bangka%20Belitung%20Indonesia%20nature%20travel"
  },
  {
    "id": 41,
    "province": "Bengkulu",
    "name": "Pantai Panjang",
    "description": "Pantai panjang dengan jalur santai di Bengkulu.",
    "lat": -3.824,
    "lng": 102.27,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Panjang%20Bengkulu%20Indonesia%20nature%20travel"
  },
  {
    "id": 42,
    "province": "Bengkulu",
    "name": "Danau Dendam Tak Sudah",
    "description": "Danau alami dengan suasana tenang.",
    "lat": -3.78,
    "lng": 102.322,
    "tags": [
      "Lake",
      "Calm"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Dendam%20Tak%20Sudah%20Bengkulu%20Indonesia%20nature%20travel"
  },
  {
    "id": 43,
    "province": "Bengkulu",
    "name": "Bukit Kaba",
    "description": "Gunung api dengan kawah yang bisa dikunjungi.",
    "lat": -3.525,
    "lng": 102.61,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Kaba%20Bengkulu%20Indonesia%20nature%20travel"
  },
  {
    "id": 44,
    "province": "Bengkulu",
    "name": "Air Terjun Curug Sembilan",
    "description": "Air terjun bertingkat yang masih alami.",
    "lat": -3.27,
    "lng": 102.18,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Curug%20Sembilan%20Bengkulu%20Indonesia%20nature%20travel"
  },
  {
    "id": 45,
    "province": "Bengkulu",
    "name": "Benteng Marlborough",
    "description": "Benteng kolonial dekat pesisir.",
    "lat": -3.787,
    "lng": 102.251,
    "tags": [
      "History",
      "Fort"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Benteng%20Marlborough%20Bengkulu%20Indonesia%20nature%20travel"
  },
  {
    "id": 46,
    "province": "Lampung",
    "name": "Teluk Kiluan",
    "description": "Teluk indah yang dikenal dengan lumba-lumba.",
    "lat": -5.76,
    "lng": 105.11,
    "tags": [
      "Bay",
      "Dolphin"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Teluk%20Kiluan%20Lampung%20Indonesia%20nature%20travel"
  },
  {
    "id": 47,
    "province": "Lampung",
    "name": "Pulau Pahawang",
    "description": "Pulau snorkeling populer di Lampung.",
    "lat": -5.675,
    "lng": 105.215,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Pahawang%20Lampung%20Indonesia%20nature%20travel"
  },
  {
    "id": 48,
    "province": "Lampung",
    "name": "Way Kambas",
    "description": "Taman nasional dan konservasi satwa.",
    "lat": -4.92,
    "lng": 105.78,
    "tags": [
      "Forest",
      "Eco"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Way%20Kambas%20Lampung%20Indonesia%20nature%20travel"
  },
  {
    "id": 49,
    "province": "Lampung",
    "name": "Pantai Gigi Hiu",
    "description": "Pantai batu karang tajam yang dramatis.",
    "lat": -5.787,
    "lng": 105.092,
    "tags": [
      "Beach",
      "Rock"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Gigi%20Hiu%20Lampung%20Indonesia%20nature%20travel"
  },
  {
    "id": 50,
    "province": "Lampung",
    "name": "Air Terjun Putri Malu",
    "description": "Air terjun tinggi di Way Kanan.",
    "lat": -4.66,
    "lng": 104.48,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Putri%20Malu%20Lampung%20Indonesia%20nature%20travel"
  },
  {
    "id": 51,
    "province": "Banten",
    "name": "Tanjung Lesung",
    "description": "Pantai dan resort dengan suasana tropis.",
    "lat": -6.479,
    "lng": 105.66,
    "tags": [
      "Beach",
      "Resort"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tanjung%20Lesung%20Banten%20Indonesia%20nature%20travel"
  },
  {
    "id": 52,
    "province": "Banten",
    "name": "Pulau Umang",
    "description": "Pulau kecil untuk liburan santai.",
    "lat": -6.64,
    "lng": 105.584,
    "tags": [
      "Island",
      "Relax"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Umang%20Banten%20Indonesia%20nature%20travel"
  },
  {
    "id": 53,
    "province": "Banten",
    "name": "Pantai Sawarna",
    "description": "Pantai luas dengan batu karang dan goa.",
    "lat": -6.986,
    "lng": 106.307,
    "tags": [
      "Beach",
      "Cave"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Sawarna%20Banten%20Indonesia%20nature%20travel"
  },
  {
    "id": 54,
    "province": "Banten",
    "name": "Baduy Luar",
    "description": "Wisata budaya masyarakat adat.",
    "lat": -6.604,
    "lng": 106.22,
    "tags": [
      "Culture",
      "Village"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Baduy%20Luar%20Banten%20Indonesia%20nature%20travel"
  },
  {
    "id": 55,
    "province": "Banten",
    "name": "Gunung Pulosari",
    "description": "Gunung kecil dengan jalur pendakian singkat.",
    "lat": -6.342,
    "lng": 105.973,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Pulosari%20Banten%20Indonesia%20nature%20travel"
  },
  {
    "id": 56,
    "province": "DKI Jakarta",
    "name": "Kepulauan Seribu",
    "description": "Gugusan pulau untuk snorkeling dan island hopping.",
    "lat": -5.74,
    "lng": 106.61,
    "tags": [
      "Island",
      "Sea"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kepulauan%20Seribu%20DKI%20Jakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 57,
    "province": "DKI Jakarta",
    "name": "Hutan Kota GBK",
    "description": "Ruang hijau modern di tengah kota.",
    "lat": -6.218,
    "lng": 106.803,
    "tags": [
      "Park",
      "City"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Hutan%20Kota%20GBK%20DKI%20Jakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 58,
    "province": "DKI Jakarta",
    "name": "Taman Wisata Alam Angke",
    "description": "Area mangrove untuk jalan santai dan foto.",
    "lat": -6.105,
    "lng": 106.735,
    "tags": [
      "Mangrove",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Taman%20Wisata%20Alam%20Angke%20DKI%20Jakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 59,
    "province": "DKI Jakarta",
    "name": "Setu Babakan",
    "description": "Kawasan budaya Betawi dan danau.",
    "lat": -6.34,
    "lng": 106.823,
    "tags": [
      "Lake",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Setu%20Babakan%20DKI%20Jakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 60,
    "province": "DKI Jakarta",
    "name": "Pantai Ancol",
    "description": "Pantai kota dengan akses mudah.",
    "lat": -6.122,
    "lng": 106.842,
    "tags": [
      "Beach",
      "City"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Ancol%20DKI%20Jakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 61,
    "province": "Jawa Barat",
    "name": "Curug Cilember Tersembunyi",
    "description": "Air terjun sejuk dengan nuansa hidden gem.",
    "lat": -6.6522,
    "lng": 106.94,
    "tags": [
      "Waterfall",
      "QuietVibes"
    ],
    "crowd": "Sangat Sepi",
    "image": "https://source.unsplash.com/900x650/?Curug%20Cilember%20Tersembunyi%20Jawa%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 62,
    "province": "Jawa Barat",
    "name": "Kawah Putih",
    "description": "Danau kawah berwarna putih kehijauan.",
    "lat": -7.166,
    "lng": 107.402,
    "tags": [
      "Crater",
      "Photo"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Kawah%20Putih%20Jawa%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 63,
    "province": "Jawa Barat",
    "name": "Situ Patenggang",
    "description": "Danau sejuk di kawasan Ciwidey.",
    "lat": -7.166,
    "lng": 107.357,
    "tags": [
      "Lake",
      "Tea"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Situ%20Patenggang%20Jawa%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 64,
    "province": "Jawa Barat",
    "name": "Green Canyon Pangandaran",
    "description": "Sungai hijau di antara tebing batu.",
    "lat": -7.735,
    "lng": 108.456,
    "tags": [
      "River",
      "Canyon"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Green%20Canyon%20Pangandaran%20Jawa%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 65,
    "province": "Jawa Barat",
    "name": "Tebing Keraton",
    "description": "Spot sunrise dengan pemandangan hutan Bandung.",
    "lat": -6.835,
    "lng": 107.663,
    "tags": [
      "Hill",
      "Sunrise"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tebing%20Keraton%20Jawa%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 66,
    "province": "Jawa Tengah",
    "name": "Dieng Plateau",
    "description": "Dataran tinggi dengan telaga dan candi.",
    "lat": -7.204,
    "lng": 109.914,
    "tags": [
      "Highland",
      "Temple"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Dieng%20Plateau%20Jawa%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 67,
    "province": "Jawa Tengah",
    "name": "Karimunjawa",
    "description": "Kepulauan tropis dengan laut jernih.",
    "lat": -5.879,
    "lng": 110.435,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Karimunjawa%20Jawa%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 68,
    "province": "Jawa Tengah",
    "name": "Candi Borobudur",
    "description": "Candi Buddha terbesar dan ikon wisata.",
    "lat": -7.6079,
    "lng": 110.2038,
    "tags": [
      "Temple",
      "History"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Candi%20Borobudur%20Jawa%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 69,
    "province": "Jawa Tengah",
    "name": "Umbul Ponggok",
    "description": "Mata air jernih untuk foto underwater.",
    "lat": -7.613,
    "lng": 110.637,
    "tags": [
      "Spring",
      "Photo"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Umbul%20Ponggok%20Jawa%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 70,
    "province": "Jawa Tengah",
    "name": "Brown Canyon Semarang",
    "description": "Tebing unik bekas galian yang fotogenik.",
    "lat": -7.057,
    "lng": 110.486,
    "tags": [
      "Canyon",
      "Photo"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Brown%20Canyon%20Semarang%20Jawa%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 71,
    "province": "DI Yogyakarta",
    "name": "Pantai Timang",
    "description": "Pantai karang dengan gondola tradisional.",
    "lat": -8.174,
    "lng": 110.665,
    "tags": [
      "Beach",
      "Adventure"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Timang%20DI%20Yogyakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 72,
    "province": "DI Yogyakarta",
    "name": "Hutan Pinus Pengger",
    "description": "Hutan pinus dengan spot foto malam.",
    "lat": -7.871,
    "lng": 110.459,
    "tags": [
      "Forest",
      "Photo"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Hutan%20Pinus%20Pengger%20DI%20Yogyakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 73,
    "province": "DI Yogyakarta",
    "name": "Goa Jomblang",
    "description": "Goa vertikal dengan cahaya surga.",
    "lat": -8.028,
    "lng": 110.638,
    "tags": [
      "Cave",
      "Adventure"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Goa%20Jomblang%20DI%20Yogyakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 74,
    "province": "DI Yogyakarta",
    "name": "Kalibiru",
    "description": "Spot pemandangan waduk dan perbukitan.",
    "lat": -7.803,
    "lng": 110.128,
    "tags": [
      "Hill",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kalibiru%20DI%20Yogyakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 75,
    "province": "DI Yogyakarta",
    "name": "Pantai Nglambor",
    "description": "Pantai snorkeling di Gunungkidul.",
    "lat": -8.181,
    "lng": 110.68,
    "tags": [
      "Beach",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Nglambor%20DI%20Yogyakarta%20Indonesia%20nature%20travel"
  },
  {
    "id": 76,
    "province": "Jawa Timur",
    "name": "Gunung Bromo",
    "description": "Lautan pasir dan sunrise yang ikonik.",
    "lat": -7.942,
    "lng": 112.953,
    "tags": [
      "Mountain",
      "Sunrise"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Bromo%20Jawa%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 77,
    "province": "Jawa Timur",
    "name": "Kawah Ijen",
    "description": "Kawah biru dengan fenomena blue fire.",
    "lat": -8.058,
    "lng": 114.242,
    "tags": [
      "Crater",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kawah%20Ijen%20Jawa%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 78,
    "province": "Jawa Timur",
    "name": "Tumpak Sewu",
    "description": "Air terjun besar berbentuk tirai.",
    "lat": -8.23,
    "lng": 112.917,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tumpak%20Sewu%20Jawa%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 79,
    "province": "Jawa Timur",
    "name": "Pantai Papuma",
    "description": "Pantai dengan batu karang dan sunrise.",
    "lat": -8.43,
    "lng": 113.553,
    "tags": [
      "Beach",
      "Sunrise"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Papuma%20Jawa%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 80,
    "province": "Jawa Timur",
    "name": "Pulau Sempu",
    "description": "Pulau konservasi dengan laguna tersembunyi.",
    "lat": -8.445,
    "lng": 112.688,
    "tags": [
      "Island",
      "Lagoon"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Sempu%20Jawa%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 81,
    "province": "Bali",
    "name": "Nusa Penida Kelingking",
    "description": "Tebing pantai berbentuk unik dengan laut biru.",
    "lat": -8.751,
    "lng": 115.473,
    "tags": [
      "Cliff",
      "Beach"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Nusa%20Penida%20Kelingking%20Bali%20Indonesia%20nature%20travel"
  },
  {
    "id": 82,
    "province": "Bali",
    "name": "Campuhan Ridge Walk",
    "description": "Jalur jalan kaki dengan perbukitan hijau.",
    "lat": -8.495,
    "lng": 115.255,
    "tags": [
      "Hill",
      "Walk"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Campuhan%20Ridge%20Walk%20Bali%20Indonesia%20nature%20travel"
  },
  {
    "id": 83,
    "province": "Bali",
    "name": "Air Terjun Sekumpul",
    "description": "Air terjun bertingkat di Bali Utara.",
    "lat": -8.173,
    "lng": 115.182,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Sekumpul%20Bali%20Indonesia%20nature%20travel"
  },
  {
    "id": 84,
    "province": "Bali",
    "name": "Pantai Amed",
    "description": "Pantai tenang untuk snorkeling dan sunrise.",
    "lat": -8.337,
    "lng": 115.66,
    "tags": [
      "Beach",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Amed%20Bali%20Indonesia%20nature%20travel"
  },
  {
    "id": 85,
    "province": "Bali",
    "name": "Jatiluwih",
    "description": "Sawah terasering luas dan sejuk.",
    "lat": -8.369,
    "lng": 115.131,
    "tags": [
      "RiceField",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Jatiluwih%20Bali%20Indonesia%20nature%20travel"
  },
  {
    "id": 86,
    "province": "Nusa Tenggara Barat",
    "name": "Gili Trawangan",
    "description": "Pulau kecil dengan snorkeling dan sunset.",
    "lat": -8.35,
    "lng": 116.038,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Gili%20Trawangan%20Nusa%20Tenggara%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 87,
    "province": "Nusa Tenggara Barat",
    "name": "Pantai Pink Lombok",
    "description": "Pantai berpasir merah muda yang unik.",
    "lat": -8.858,
    "lng": 116.575,
    "tags": [
      "Beach",
      "Photo"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Pink%20Lombok%20Nusa%20Tenggara%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 88,
    "province": "Nusa Tenggara Barat",
    "name": "Gunung Rinjani",
    "description": "Gunung dengan Danau Segara Anak.",
    "lat": -8.411,
    "lng": 116.458,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Rinjani%20Nusa%20Tenggara%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 89,
    "province": "Nusa Tenggara Barat",
    "name": "Bukit Merese",
    "description": "Bukit sunset dekat Mandalika.",
    "lat": -8.912,
    "lng": 116.317,
    "tags": [
      "Hill",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Merese%20Nusa%20Tenggara%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 90,
    "province": "Nusa Tenggara Barat",
    "name": "Air Terjun Tiu Kelep",
    "description": "Air terjun hijau di kaki Rinjani.",
    "lat": -8.3,
    "lng": 116.407,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Tiu%20Kelep%20Nusa%20Tenggara%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 91,
    "province": "Nusa Tenggara Timur",
    "name": "Pulau Komodo",
    "description": "Habitat komodo dan lanskap savana.",
    "lat": -8.589,
    "lng": 119.441,
    "tags": [
      "Island",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Komodo%20Nusa%20Tenggara%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 92,
    "province": "Nusa Tenggara Timur",
    "name": "Danau Kelimutu",
    "description": "Danau tiga warna di Ende.",
    "lat": -8.765,
    "lng": 121.813,
    "tags": [
      "Lake",
      "Mountain"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Kelimutu%20Nusa%20Tenggara%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 93,
    "province": "Nusa Tenggara Timur",
    "name": "Pantai Nihiwatu",
    "description": "Pantai eksotis di Sumba.",
    "lat": -9.772,
    "lng": 119.372,
    "tags": [
      "Beach",
      "Luxury"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Nihiwatu%20Nusa%20Tenggara%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 94,
    "province": "Nusa Tenggara Timur",
    "name": "Wae Rebo",
    "description": "Desa adat di atas pegunungan Flores.",
    "lat": -8.769,
    "lng": 120.284,
    "tags": [
      "Village",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Wae%20Rebo%20Nusa%20Tenggara%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 95,
    "province": "Nusa Tenggara Timur",
    "name": "Pulau Padar",
    "description": "Bukit ikonik dengan tiga teluk.",
    "lat": -8.66,
    "lng": 119.575,
    "tags": [
      "Island",
      "Hiking"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Padar%20Nusa%20Tenggara%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 96,
    "province": "Kalimantan Barat",
    "name": "Taman Nasional Danau Sentarum",
    "description": "Kawasan danau musiman dan hutan rawa.",
    "lat": 0.83,
    "lng": 112.07,
    "tags": [
      "Lake",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Taman%20Nasional%20Danau%20Sentarum%20Kalimantan%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 97,
    "province": "Kalimantan Barat",
    "name": "Pantai Temajuk",
    "description": "Pantai perbatasan dengan suasana tenang.",
    "lat": 2.018,
    "lng": 109.63,
    "tags": [
      "Beach",
      "Border"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Temajuk%20Kalimantan%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 98,
    "province": "Kalimantan Barat",
    "name": "Bukit Kelam",
    "description": "Batu monolit besar dengan panorama Sintang.",
    "lat": 0.071,
    "lng": 111.645,
    "tags": [
      "Hill",
      "Rock"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Kelam%20Kalimantan%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 99,
    "province": "Kalimantan Barat",
    "name": "Air Terjun Riam Merasap",
    "description": "Air terjun lebar di Bengkayang.",
    "lat": 1.07,
    "lng": 109.9,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Riam%20Merasap%20Kalimantan%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 100,
    "province": "Kalimantan Barat",
    "name": "Pulau Randayan",
    "description": "Pulau kecil dengan pantai dan snorkeling.",
    "lat": 0.837,
    "lng": 108.835,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Randayan%20Kalimantan%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 101,
    "province": "Kalimantan Tengah",
    "name": "Tanjung Puting",
    "description": "Taman nasional orangutan dan sungai.",
    "lat": -2.742,
    "lng": 111.735,
    "tags": [
      "Forest",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tanjung%20Puting%20Kalimantan%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 102,
    "province": "Kalimantan Tengah",
    "name": "Bukit Tangkiling",
    "description": "Bukit granit dekat Palangka Raya.",
    "lat": -1.94,
    "lng": 113.75,
    "tags": [
      "Hill",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Tangkiling%20Kalimantan%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 103,
    "province": "Kalimantan Tengah",
    "name": "Danau Tahai",
    "description": "Danau merah alami dengan jembatan kayu.",
    "lat": -2.12,
    "lng": 113.89,
    "tags": [
      "Lake",
      "Forest"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Tahai%20Kalimantan%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 104,
    "province": "Kalimantan Tengah",
    "name": "Pantai Ujung Pandaran",
    "description": "Pantai luas di Kotawaringin Timur.",
    "lat": -3.21,
    "lng": 113.01,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Ujung%20Pandaran%20Kalimantan%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 105,
    "province": "Kalimantan Tengah",
    "name": "Air Terjun Batu Mahasur",
    "description": "Air terjun kecil di kawasan hijau.",
    "lat": -1.78,
    "lng": 113.38,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Batu%20Mahasur%20Kalimantan%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 106,
    "province": "Kalimantan Selatan",
    "name": "Pasar Terapung Lok Baintan",
    "description": "Wisata sungai khas Kalimantan Selatan.",
    "lat": -3.281,
    "lng": 114.727,
    "tags": [
      "River",
      "Culture"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Pasar%20Terapung%20Lok%20Baintan%20Kalimantan%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 107,
    "province": "Kalimantan Selatan",
    "name": "Bukit Matang Kaladan",
    "description": "Bukit dengan panorama pulau-pulau kecil.",
    "lat": -3.523,
    "lng": 114.92,
    "tags": [
      "Hill",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Matang%20Kaladan%20Kalimantan%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 108,
    "province": "Kalimantan Selatan",
    "name": "Pulau Samber Gelap",
    "description": "Pulau kecil dengan laut biru.",
    "lat": -3.74,
    "lng": 116.265,
    "tags": [
      "Island",
      "Sea"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Samber%20Gelap%20Kalimantan%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 109,
    "province": "Kalimantan Selatan",
    "name": "Air Terjun Haratai",
    "description": "Air terjun di kawasan Loksado.",
    "lat": -2.78,
    "lng": 115.47,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Haratai%20Kalimantan%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 110,
    "province": "Kalimantan Selatan",
    "name": "Loksado",
    "description": "Kawasan pegunungan dan bamboo rafting.",
    "lat": -2.78,
    "lng": 115.46,
    "tags": [
      "River",
      "Adventure"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Loksado%20Kalimantan%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 111,
    "province": "Kalimantan Timur",
    "name": "Pulau Derawan",
    "description": "Pulau tropis dengan penyu dan snorkeling.",
    "lat": 2.285,
    "lng": 118.247,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Derawan%20Kalimantan%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 112,
    "province": "Kalimantan Timur",
    "name": "Labuan Cermin",
    "description": "Danau dua rasa dengan air sangat jernih.",
    "lat": 1.183,
    "lng": 118.88,
    "tags": [
      "Lake",
      "Hidden"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Labuan%20Cermin%20Kalimantan%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 113,
    "province": "Kalimantan Timur",
    "name": "Bukit Bangkirai",
    "description": "Hutan dengan canopy bridge.",
    "lat": -1.025,
    "lng": 116.867,
    "tags": [
      "Forest",
      "Bridge"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Bangkirai%20Kalimantan%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 114,
    "province": "Kalimantan Timur",
    "name": "Kakaban",
    "description": "Pulau dengan danau ubur-ubur.",
    "lat": 2.14,
    "lng": 118.525,
    "tags": [
      "Island",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kakaban%20Kalimantan%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 115,
    "province": "Kalimantan Timur",
    "name": "Berau Mangrove",
    "description": "Kawasan mangrove untuk wisata alam.",
    "lat": 2.152,
    "lng": 117.494,
    "tags": [
      "Mangrove",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Berau%20Mangrove%20Kalimantan%20Timur%20Indonesia%20nature%20travel"
  },
  {
    "id": 116,
    "province": "Kalimantan Utara",
    "name": "Pantai Amal",
    "description": "Pantai populer di Tarakan.",
    "lat": 3.345,
    "lng": 117.655,
    "tags": [
      "Beach",
      "Food"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Amal%20Kalimantan%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 117,
    "province": "Kalimantan Utara",
    "name": "Air Terjun Semolon",
    "description": "Air terjun bertingkat dengan aliran hangat.",
    "lat": 3.54,
    "lng": 116.62,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Semolon%20Kalimantan%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 118,
    "province": "Kalimantan Utara",
    "name": "Pulau Sapi",
    "description": "Desa wisata dan alam perbatasan.",
    "lat": 3.84,
    "lng": 116.6,
    "tags": [
      "Village",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Sapi%20Kalimantan%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 119,
    "province": "Kalimantan Utara",
    "name": "Gunung Putih Bulungan",
    "description": "Bukit batu kapur untuk panorama kota.",
    "lat": 2.842,
    "lng": 117.372,
    "tags": [
      "Hill",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Putih%20Bulungan%20Kalimantan%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 120,
    "province": "Kalimantan Utara",
    "name": "Hutan Mangrove Tarakan",
    "description": "Kawasan konservasi bekantan dan mangrove.",
    "lat": 3.31,
    "lng": 117.59,
    "tags": [
      "Mangrove",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Hutan%20Mangrove%20Tarakan%20Kalimantan%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 121,
    "province": "Sulawesi Utara",
    "name": "Bunaken",
    "description": "Taman laut terkenal dengan terumbu karang.",
    "lat": 1.623,
    "lng": 124.76,
    "tags": [
      "Island",
      "Diving"
    ],
    "crowd": "Ramai",
    "image": "https://source.unsplash.com/900x650/?Bunaken%20Sulawesi%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 122,
    "province": "Sulawesi Utara",
    "name": "Pulau Siladen",
    "description": "Pulau tenang dekat Bunaken.",
    "lat": 1.63,
    "lng": 124.8,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Siladen%20Sulawesi%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 123,
    "province": "Sulawesi Utara",
    "name": "Danau Linow",
    "description": "Danau warna-warni dekat Tomohon.",
    "lat": 1.257,
    "lng": 124.82,
    "tags": [
      "Lake",
      "Photo"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Linow%20Sulawesi%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 124,
    "province": "Sulawesi Utara",
    "name": "Gunung Lokon",
    "description": "Gunung api aktif untuk pendakian.",
    "lat": 1.358,
    "lng": 124.792,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Lokon%20Sulawesi%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 125,
    "province": "Sulawesi Utara",
    "name": "Tangkoko",
    "description": "Cagar alam dengan satwa endemik.",
    "lat": 1.56,
    "lng": 125.17,
    "tags": [
      "Forest",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tangkoko%20Sulawesi%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 126,
    "province": "Gorontalo",
    "name": "Pulau Saronde",
    "description": "Pulau kecil dengan pasir putih.",
    "lat": 0.926,
    "lng": 122.858,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Saronde%20Gorontalo%20Indonesia%20nature%20travel"
  },
  {
    "id": 127,
    "province": "Gorontalo",
    "name": "Pantai Botubarani",
    "description": "Spot melihat hiu paus musiman.",
    "lat": 0.505,
    "lng": 123.085,
    "tags": [
      "Beach",
      "Wildlife"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Botubarani%20Gorontalo%20Indonesia%20nature%20travel"
  },
  {
    "id": 128,
    "province": "Gorontalo",
    "name": "Benteng Otanaha",
    "description": "Benteng sejarah dengan panorama danau.",
    "lat": 0.56,
    "lng": 123.005,
    "tags": [
      "Fort",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Benteng%20Otanaha%20Gorontalo%20Indonesia%20nature%20travel"
  },
  {
    "id": 129,
    "province": "Gorontalo",
    "name": "Air Terjun Lombongo",
    "description": "Air terjun dan pemandian alam.",
    "lat": 0.536,
    "lng": 123.22,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Lombongo%20Gorontalo%20Indonesia%20nature%20travel"
  },
  {
    "id": 130,
    "province": "Gorontalo",
    "name": "Danau Limboto",
    "description": "Danau luas dekat kota Gorontalo.",
    "lat": 0.583,
    "lng": 122.975,
    "tags": [
      "Lake",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Limboto%20Gorontalo%20Indonesia%20nature%20travel"
  },
  {
    "id": 131,
    "province": "Sulawesi Tengah",
    "name": "Kepulauan Togean",
    "description": "Kepulauan tropis untuk snorkeling dan diving.",
    "lat": -0.397,
    "lng": 121.86,
    "tags": [
      "Island",
      "Diving"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kepulauan%20Togean%20Sulawesi%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 132,
    "province": "Sulawesi Tengah",
    "name": "Danau Poso",
    "description": "Danau besar dengan air jernih.",
    "lat": -1.89,
    "lng": 120.59,
    "tags": [
      "Lake",
      "Calm"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Poso%20Sulawesi%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 133,
    "province": "Sulawesi Tengah",
    "name": "Pantai Tanjung Karang",
    "description": "Pantai pasir putih di Donggala.",
    "lat": -0.681,
    "lng": 119.74,
    "tags": [
      "Beach",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Tanjung%20Karang%20Sulawesi%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 134,
    "province": "Sulawesi Tengah",
    "name": "Lore Lindu",
    "description": "Taman nasional dengan megalit dan hutan.",
    "lat": -1.5,
    "lng": 120.2,
    "tags": [
      "Forest",
      "History"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Lore%20Lindu%20Sulawesi%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 135,
    "province": "Sulawesi Tengah",
    "name": "Air Terjun Saluopa",
    "description": "Air terjun bertingkat yang jernih.",
    "lat": -1.86,
    "lng": 120.54,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Saluopa%20Sulawesi%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 136,
    "province": "Sulawesi Barat",
    "name": "Pantai Dato Majene",
    "description": "Pantai tebing karang dengan laut biru.",
    "lat": -3.536,
    "lng": 118.95,
    "tags": [
      "Beach",
      "Cliff"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Dato%20Majene%20Sulawesi%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 137,
    "province": "Sulawesi Barat",
    "name": "Pulau Karampuang",
    "description": "Pulau dekat Mamuju dengan snorkeling.",
    "lat": -2.65,
    "lng": 118.85,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Karampuang%20Sulawesi%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 138,
    "province": "Sulawesi Barat",
    "name": "Air Terjun Tamasapi",
    "description": "Air terjun alami dekat Mamuju.",
    "lat": -2.707,
    "lng": 118.91,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Tamasapi%20Sulawesi%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 139,
    "province": "Sulawesi Barat",
    "name": "Puncak Mambulilling",
    "description": "Kawasan pegunungan Mamasa yang sejuk.",
    "lat": -2.94,
    "lng": 119.35,
    "tags": [
      "Mountain",
      "View"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Puncak%20Mambulilling%20Sulawesi%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 140,
    "province": "Sulawesi Barat",
    "name": "Pantai Manakarra",
    "description": "Pantai kota untuk menikmati sunset.",
    "lat": -2.68,
    "lng": 118.89,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Manakarra%20Sulawesi%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 141,
    "province": "Sulawesi Selatan",
    "name": "Tana Toraja",
    "description": "Kawasan budaya dengan lanskap pegunungan.",
    "lat": -2.97,
    "lng": 119.9,
    "tags": [
      "Culture",
      "Mountain"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Tana%20Toraja%20Sulawesi%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 142,
    "province": "Sulawesi Selatan",
    "name": "Rammang-Rammang",
    "description": "Karst dan sungai dengan pemandangan unik.",
    "lat": -4.928,
    "lng": 119.602,
    "tags": [
      "Karst",
      "River"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Rammang-Rammang%20Sulawesi%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 143,
    "province": "Sulawesi Selatan",
    "name": "Pantai Bira",
    "description": "Pantai pasir putih di Bulukumba.",
    "lat": -5.612,
    "lng": 120.47,
    "tags": [
      "Beach",
      "Sea"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Bira%20Sulawesi%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 144,
    "province": "Sulawesi Selatan",
    "name": "Pulau Samalona",
    "description": "Pulau kecil dekat Makassar.",
    "lat": -5.123,
    "lng": 119.342,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Samalona%20Sulawesi%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 145,
    "province": "Sulawesi Selatan",
    "name": "Air Terjun Takapala",
    "description": "Air terjun di Malino dengan udara sejuk.",
    "lat": -5.25,
    "lng": 119.9,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Takapala%20Sulawesi%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 146,
    "province": "Sulawesi Tenggara",
    "name": "Wakatobi",
    "description": "Surga diving dengan terumbu karang.",
    "lat": -5.326,
    "lng": 123.595,
    "tags": [
      "Island",
      "Diving"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Wakatobi%20Sulawesi%20Tenggara%20Indonesia%20nature%20travel"
  },
  {
    "id": 147,
    "province": "Sulawesi Tenggara",
    "name": "Pulau Labengki",
    "description": "Pulau dengan laguna dan tebing karst.",
    "lat": -3.435,
    "lng": 122.435,
    "tags": [
      "Island",
      "Lagoon"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Labengki%20Sulawesi%20Tenggara%20Indonesia%20nature%20travel"
  },
  {
    "id": 148,
    "province": "Sulawesi Tenggara",
    "name": "Pulau Bokori",
    "description": "Pulau pasir putih dekat Kendari.",
    "lat": -3.967,
    "lng": 122.69,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Bokori%20Sulawesi%20Tenggara%20Indonesia%20nature%20travel"
  },
  {
    "id": 149,
    "province": "Sulawesi Tenggara",
    "name": "Air Terjun Moramo",
    "description": "Air terjun bertingkat di Konawe Selatan.",
    "lat": -4.238,
    "lng": 122.6,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Moramo%20Sulawesi%20Tenggara%20Indonesia%20nature%20travel"
  },
  {
    "id": 150,
    "province": "Sulawesi Tenggara",
    "name": "Danau Biru Kolaka",
    "description": "Danau kecil jernih berwarna biru.",
    "lat": -4.06,
    "lng": 121.594,
    "tags": [
      "Lake",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Biru%20Kolaka%20Sulawesi%20Tenggara%20Indonesia%20nature%20travel"
  },
  {
    "id": 151,
    "province": "Maluku",
    "name": "Pantai Ora",
    "description": "Pantai jernih dengan resort di Seram.",
    "lat": -2.96,
    "lng": 129.15,
    "tags": [
      "Beach",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Ora%20Maluku%20Indonesia%20nature%20travel"
  },
  {
    "id": 152,
    "province": "Maluku",
    "name": "Pulau Banda Neira",
    "description": "Pulau sejarah rempah dan diving.",
    "lat": -4.523,
    "lng": 129.9,
    "tags": [
      "Island",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Banda%20Neira%20Maluku%20Indonesia%20nature%20travel"
  },
  {
    "id": 153,
    "province": "Maluku",
    "name": "Natsepa",
    "description": "Pantai dekat Ambon dengan rujak terkenal.",
    "lat": -3.629,
    "lng": 128.284,
    "tags": [
      "Beach",
      "Food"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Natsepa%20Maluku%20Indonesia%20nature%20travel"
  },
  {
    "id": 154,
    "province": "Maluku",
    "name": "Pintu Kota Ambon",
    "description": "Batu karang berlubang di tepi laut.",
    "lat": -3.775,
    "lng": 128.095,
    "tags": [
      "Rock",
      "Beach"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pintu%20Kota%20Ambon%20Maluku%20Indonesia%20nature%20travel"
  },
  {
    "id": 155,
    "province": "Maluku",
    "name": "Pulau Kei",
    "description": "Pantai pasir putih lembut di Maluku.",
    "lat": -5.65,
    "lng": 132.73,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Kei%20Maluku%20Indonesia%20nature%20travel"
  },
  {
    "id": 156,
    "province": "Maluku Utara",
    "name": "Pulau Morotai",
    "description": "Pulau sejarah dengan pantai dan diving.",
    "lat": 2.32,
    "lng": 128.4,
    "tags": [
      "Island",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Morotai%20Maluku%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 157,
    "province": "Maluku Utara",
    "name": "Danau Tolire",
    "description": "Danau kawah di Ternate.",
    "lat": 0.825,
    "lng": 127.315,
    "tags": [
      "Lake",
      "Crater"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Tolire%20Maluku%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 158,
    "province": "Maluku Utara",
    "name": "Pantai Sulamadaha",
    "description": "Pantai jernih dekat Ternate.",
    "lat": 0.858,
    "lng": 127.335,
    "tags": [
      "Beach",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Sulamadaha%20Maluku%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 159,
    "province": "Maluku Utara",
    "name": "Gunung Gamalama",
    "description": "Gunung api ikonik Ternate.",
    "lat": 0.809,
    "lng": 127.332,
    "tags": [
      "Mountain",
      "Hiking"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Gunung%20Gamalama%20Maluku%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 160,
    "province": "Maluku Utara",
    "name": "Pulau Dodola",
    "description": "Pulau cantik dengan pasir putih.",
    "lat": 2.207,
    "lng": 128.18,
    "tags": [
      "Island",
      "Beach"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Dodola%20Maluku%20Utara%20Indonesia%20nature%20travel"
  },
  {
    "id": 161,
    "province": "Papua Barat",
    "name": "Raja Ampat Wayag",
    "description": "Gugusan pulau karst paling ikonik.",
    "lat": -0.17,
    "lng": 130.03,
    "tags": [
      "Island",
      "Diving"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Raja%20Ampat%20Wayag%20Papua%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 162,
    "province": "Papua Barat",
    "name": "Piaynemo",
    "description": "Viewpoint pulau karst Raja Ampat.",
    "lat": -0.565,
    "lng": 130.27,
    "tags": [
      "View",
      "Island"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Piaynemo%20Papua%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 163,
    "province": "Papua Barat",
    "name": "Arborek",
    "description": "Kampung wisata bahari di Raja Ampat.",
    "lat": -0.566,
    "lng": 130.573,
    "tags": [
      "Village",
      "Snorkeling"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Arborek%20Papua%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 164,
    "province": "Papua Barat",
    "name": "Teluk Kabui",
    "description": "Teluk tenang dengan pulau-pulau karst.",
    "lat": -0.41,
    "lng": 130.62,
    "tags": [
      "Bay",
      "View"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Teluk%20Kabui%20Papua%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 165,
    "province": "Papua Barat",
    "name": "Pantai Tanjung Kasuari",
    "description": "Pantai dekat Sorong untuk bersantai.",
    "lat": -0.77,
    "lng": 131.251,
    "tags": [
      "Beach",
      "Relax"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Tanjung%20Kasuari%20Papua%20Barat%20Indonesia%20nature%20travel"
  },
  {
    "id": 166,
    "province": "Papua Barat Daya",
    "name": "Kepulauan Misool",
    "description": "Kawasan laguna dan karst Raja Ampat Selatan.",
    "lat": -1.9,
    "lng": 130.1,
    "tags": [
      "Island",
      "Lagoon"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Kepulauan%20Misool%20Papua%20Barat%20Daya%20Indonesia%20nature%20travel"
  },
  {
    "id": 167,
    "province": "Papua Barat Daya",
    "name": "Pantai Waisai",
    "description": "Pantai kota kecil pintu masuk Raja Ampat.",
    "lat": -0.423,
    "lng": 130.817,
    "tags": [
      "Beach",
      "City"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Waisai%20Papua%20Barat%20Daya%20Indonesia%20nature%20travel"
  },
  {
    "id": 168,
    "province": "Papua Barat Daya",
    "name": "Pulau Friwen",
    "description": "Pulau kecil dengan air laut jernih.",
    "lat": -0.496,
    "lng": 130.695,
    "tags": [
      "Island",
      "Snorkeling"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Pulau%20Friwen%20Papua%20Barat%20Daya%20Indonesia%20nature%20travel"
  },
  {
    "id": 169,
    "province": "Papua Barat Daya",
    "name": "Kalibiru Warsambin",
    "description": "Sungai jernih berwarna biru alami.",
    "lat": -0.308,
    "lng": 130.9,
    "tags": [
      "River",
      "Hidden"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kalibiru%20Warsambin%20Papua%20Barat%20Daya%20Indonesia%20nature%20travel"
  },
  {
    "id": 170,
    "province": "Papua Barat Daya",
    "name": "Saporkren",
    "description": "Kampung wisata untuk birdwatching dan pantai.",
    "lat": -0.328,
    "lng": 130.71,
    "tags": [
      "Village",
      "Wildlife"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Saporkren%20Papua%20Barat%20Daya%20Indonesia%20nature%20travel"
  },
  {
    "id": 171,
    "province": "Papua",
    "name": "Danau Sentani",
    "description": "Danau besar dengan pulau-pulau kecil.",
    "lat": -2.6,
    "lng": 140.56,
    "tags": [
      "Lake",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Danau%20Sentani%20Papua%20Indonesia%20nature%20travel"
  },
  {
    "id": 172,
    "province": "Papua",
    "name": "Pantai Base-G",
    "description": "Pantai pasir putih dekat Jayapura.",
    "lat": -2.515,
    "lng": 140.703,
    "tags": [
      "Beach",
      "Relax"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Base-G%20Papua%20Indonesia%20nature%20travel"
  },
  {
    "id": 173,
    "province": "Papua",
    "name": "Bukit Teletubbies Sentani",
    "description": "Bukit hijau dengan pemandangan danau.",
    "lat": -2.575,
    "lng": 140.505,
    "tags": [
      "Hill",
      "View"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Teletubbies%20Sentani%20Papua%20Indonesia%20nature%20travel"
  },
  {
    "id": 174,
    "province": "Papua",
    "name": "Air Terjun Cycloop",
    "description": "Air terjun alami di kawasan pegunungan.",
    "lat": -2.555,
    "lng": 140.62,
    "tags": [
      "Waterfall",
      "Nature"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Cycloop%20Papua%20Indonesia%20nature%20travel"
  },
  {
    "id": 175,
    "province": "Papua",
    "name": "Kampung Yoboi",
    "description": "Kampung warna-warni di Danau Sentani.",
    "lat": -2.61,
    "lng": 140.525,
    "tags": [
      "Village",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kampung%20Yoboi%20Papua%20Indonesia%20nature%20travel"
  },
  {
    "id": 176,
    "province": "Papua Tengah",
    "name": "Taman Nasional Lorentz",
    "description": "Kawasan pegunungan dan ekosistem lengkap.",
    "lat": -4.75,
    "lng": 137.9,
    "tags": [
      "Mountain",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Taman%20Nasional%20Lorentz%20Papua%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 177,
    "province": "Papua Tengah",
    "name": "Danau Paniai",
    "description": "Danau luas dengan panorama dataran tinggi.",
    "lat": -3.9,
    "lng": 136.33,
    "tags": [
      "Lake",
      "Highland"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Paniai%20Papua%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 178,
    "province": "Papua Tengah",
    "name": "Lembah Baliem Mini",
    "description": "Lanskap lembah dan budaya pegunungan.",
    "lat": -3.82,
    "lng": 137.0,
    "tags": [
      "Valley",
      "Culture"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Lembah%20Baliem%20Mini%20Papua%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 179,
    "province": "Papua Tengah",
    "name": "Air Terjun Bihewa",
    "description": "Air terjun alami di Nabire.",
    "lat": -3.365,
    "lng": 135.51,
    "tags": [
      "Waterfall",
      "Hidden"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Air%20Terjun%20Bihewa%20Papua%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 180,
    "province": "Papua Tengah",
    "name": "Pantai Nabire",
    "description": "Pantai kota untuk sunset di pesisir Papua.",
    "lat": -3.36,
    "lng": 135.5,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Nabire%20Papua%20Tengah%20Indonesia%20nature%20travel"
  },
  {
    "id": 181,
    "province": "Papua Pegunungan",
    "name": "Lembah Baliem",
    "description": "Lembah pegunungan dengan budaya Dani.",
    "lat": -4.095,
    "lng": 138.95,
    "tags": [
      "Valley",
      "Culture"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Lembah%20Baliem%20Papua%20Pegunungan%20Indonesia%20nature%20travel"
  },
  {
    "id": 182,
    "province": "Papua Pegunungan",
    "name": "Bukit Wamena",
    "description": "Perbukitan hijau dengan udara dingin.",
    "lat": -4.07,
    "lng": 138.92,
    "tags": [
      "Hill",
      "View"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Bukit%20Wamena%20Papua%20Pegunungan%20Indonesia%20nature%20travel"
  },
  {
    "id": 183,
    "province": "Papua Pegunungan",
    "name": "Danau Habema",
    "description": "Danau tinggi dekat kawasan Trikora.",
    "lat": -4.14,
    "lng": 138.68,
    "tags": [
      "Lake",
      "Highland"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Danau%20Habema%20Papua%20Pegunungan%20Indonesia%20nature%20travel"
  },
  {
    "id": 184,
    "province": "Papua Pegunungan",
    "name": "Pasir Putih Aikima",
    "description": "Fenomena pasir putih di dataran tinggi.",
    "lat": -4.045,
    "lng": 138.945,
    "tags": [
      "Unique",
      "Photo"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pasir%20Putih%20Aikima%20Papua%20Pegunungan%20Indonesia%20nature%20travel"
  },
  {
    "id": 185,
    "province": "Papua Pegunungan",
    "name": "Mumi Jiwika",
    "description": "Wisata budaya dan sejarah lokal.",
    "lat": -3.995,
    "lng": 138.94,
    "tags": [
      "Culture",
      "History"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Mumi%20Jiwika%20Papua%20Pegunungan%20Indonesia%20nature%20travel"
  },
  {
    "id": 186,
    "province": "Papua Selatan",
    "name": "Taman Nasional Wasur",
    "description": "Savana Papua dengan burung dan rawa.",
    "lat": -8.55,
    "lng": 140.5,
    "tags": [
      "Savanna",
      "Wildlife"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Taman%20Nasional%20Wasur%20Papua%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 187,
    "province": "Papua Selatan",
    "name": "Pantai Lampu Satu",
    "description": "Pantai dekat Merauke untuk sunset.",
    "lat": -8.505,
    "lng": 140.376,
    "tags": [
      "Beach",
      "Sunset"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Pantai%20Lampu%20Satu%20Papua%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 188,
    "province": "Papua Selatan",
    "name": "Rawa Biru",
    "description": "Danau/rawa alami di kawasan Wasur.",
    "lat": -8.64,
    "lng": 140.62,
    "tags": [
      "Lake",
      "Eco"
    ],
    "crowd": "Sepi",
    "image": "https://source.unsplash.com/900x650/?Rawa%20Biru%20Papua%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 189,
    "province": "Papua Selatan",
    "name": "Monumen Kapsul Waktu",
    "description": "Ikon modern di Merauke.",
    "lat": -8.493,
    "lng": 140.401,
    "tags": [
      "Landmark",
      "City"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Monumen%20Kapsul%20Waktu%20Papua%20Selatan%20Indonesia%20nature%20travel"
  },
  {
    "id": 190,
    "province": "Papua Selatan",
    "name": "Kali Maro",
    "description": "Sungai besar yang membelah Merauke.",
    "lat": -8.49,
    "lng": 140.39,
    "tags": [
      "River",
      "City"
    ],
    "crowd": "Sedang",
    "image": "https://source.unsplash.com/900x650/?Kali%20Maro%20Papua%20Selatan%20Indonesia%20nature%20travel"
  }
];
