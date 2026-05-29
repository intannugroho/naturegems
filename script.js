const PROVINCES = [...new Set(DESTINATIONS.map(item => item.province))];

let currentScreen = "splash";
let previousScreen = "home";
let selectedDestination = DESTINATIONS[0];
let targetDestinationId = Number(localStorage.getItem("natureGemsTargetDestinationId") || DESTINATIONS[0].id);
let userLocation = JSON.parse(localStorage.getItem("natureGemsUserLocation") || "null");
let locationHistory = JSON.parse(localStorage.getItem("natureGemsLocationHistory") || "[]");
let savedIds = JSON.parse(localStorage.getItem("natureGemsSavedIds") || "[]");
let currentUser = JSON.parse(localStorage.getItem("natureGemsCurrentUser") || "null");
let offlineMode = JSON.parse(localStorage.getItem("natureGemsOfflineMode") || "false");
let offlinePack = JSON.parse(localStorage.getItem("natureGemsOfflinePack") || "null");
let roadReports = JSON.parse(localStorage.getItem("natureGemsRoadReports") || "[]");
let settings = JSON.parse(localStorage.getItem("natureGemsSettings") || JSON.stringify({
  theme: "dark",
  language: "id",
  compactCards: false,
  gpsRecommendation: true,
  notifRecommendation: true,
  notifTrip: true,
  notifNewPlace: true,
  locationPermission: true
}));

const NATIONAL_EMERGENCY_NUMBERS = {
  police: "110",
  medical: "119",
  sar: "115",
  fire: "113"
};

function getTargetDestination(){
  return DESTINATIONS.find(item => item.id === Number(targetDestinationId)) || selectedDestination || DESTINATIONS[0];
}

function setTargetDestination(id, showMessage = false){
  targetDestinationId = Number(id);
  localStorage.setItem("natureGemsTargetDestinationId", String(targetDestinationId));

  const select = document.getElementById("emergencyDestinationSelect");
  if(select) select.value = String(targetDestinationId);

  renderEmergencyContacts();
  updateOfflineUI();

  if(showMessage){
    const target = getTargetDestination();
    showToast(`Tujuan darurat diatur ke ${target.name}.`);
  }
}

function generateEmergencyContacts(destination = getTargetDestination()){
  const area = destination.province;
  const place = destination.name;

  return [
    {
      type: "Polisi Terdekat",
      name: `Polsek / layanan polisi sekitar ${place}`,
      phone: NATIONAL_EMERGENCY_NUMBERS.police,
      note: `Gunakan untuk keamanan, kehilangan, kecelakaan, atau kondisi darurat di area ${area}.`
    },
    {
      type: "Fasilitas Kesehatan",
      name: `Puskesmas / RS terdekat dari ${place}`,
      phone: NATIONAL_EMERGENCY_NUMBERS.medical,
      note: `Gunakan untuk bantuan medis, ambulans, cedera, atau kondisi kesehatan darurat saat berada di ${place}.`
    },
    {
      type: "SAR",
      name: `Basarnas / SAR wilayah ${area}`,
      phone: NATIONAL_EMERGENCY_NUMBERS.sar,
      note: `Gunakan untuk kondisi tersesat, kecelakaan alam, pendakian, pantai, air terjun, dan evakuasi.`
    },
    {
      type: "Damkar",
      name: `Pemadam Kebakaran wilayah ${area}`,
      phone: NATIONAL_EMERGENCY_NUMBERS.fire,
      note: `Gunakan untuk kebakaran, penyelamatan, evakuasi hewan, atau keadaan darurat di sekitar destinasi.`
    }
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  fillProvinceSelects();
  fillEmergencyDestinationSelect();
  applySettings();
  hydrateAuthFields();
  updateProfile();
  updateLocationUI();

  setTimeout(() => {
    if(document.getElementById("splash").classList.contains("active")){
      goAuthStart();
    }
  }, 900);

  renderDestinations();
  renderExplore();
  renderSaved();
  renderEmergencyContacts();
  updateOfflineUI();
  refreshIcons();
});

function refreshIcons(){
  if(window.lucide) lucide.createIcons();
}

function goAuthStart(){
  if(currentUser && currentUser.loggedIn){
    showScreen("home");
  }else{
    showScreen("login");
  }
}

function showScreen(id){
  if(!["login", "register", "splash"].includes(id) && (!currentUser || !currentUser.loggedIn)){
    showToast("Silakan login terlebih dahulu.");
    id = "login";
  }

  if(id !== "detail") previousScreen = currentScreen;
  currentScreen = id;

  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll("[data-screen]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === id);
  });

  const appShell = document.getElementById("appShell");
  appShell.classList.toggle("auth-open", ["login", "register", "splash"].includes(id));

  if(id === "home") renderDestinations();
  if(id === "explore") renderExplore();
  if(id === "saved") renderSaved();
  if(id === "profile") updateProfile();
  if(id === "offline") { fillEmergencyDestinationSelect(); renderEmergencyContacts(); updateOfflineUI(); }

  window.scrollTo({top:0, behavior:"smooth"});
  refreshIcons();
}

function backToPrevious(){
  showScreen(previousScreen || "home");
}

/* AUTH */
function hydrateAuthFields(){
  const lastUser = JSON.parse(localStorage.getItem("natureGemsLastRegisteredUser") || "null");
  if(lastUser){
    document.getElementById("loginEmail").value = lastUser.email || "";
  }
}

function registerUser(event){
  event.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value;
  const province = document.getElementById("regProvince").value;

  if(password.length < 6){
    showToast("Password minimal 6 karakter.");
    return;
  }

  const user = {
    name,
    email,
    password,
    province,
    initial: getInitial(name),
    joinedAt: new Date().toISOString(),
    loggedIn: true
  };

  localStorage.setItem("natureGemsLastRegisteredUser", JSON.stringify(user));
  localStorage.setItem("natureGemsCurrentUser", JSON.stringify(user));
  currentUser = user;

  document.getElementById("provinceSelect").value = province || "all";
  document.getElementById("loginEmail").value = email;
  document.getElementById("loginPassword").value = "";

  updateProfile();
  showToast("Registrasi berhasil. Data tersimpan di profile.");
  showScreen("home");
}

function loginUser(event){
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("natureGemsLastRegisteredUser") || "null");

  if(!user){
    showToast("Belum ada akun. Silakan daftar dulu.");
    showScreen("register");
    return;
  }

  if(user.email !== email || user.password !== password){
    showToast("Email atau password salah.");
    return;
  }

  user.loggedIn = true;
  currentUser = user;
  localStorage.setItem("natureGemsCurrentUser", JSON.stringify(user));

  updateProfile();
  showToast("Login berhasil.");
  showScreen("home");
}

function logout(){
  if(currentUser){
    currentUser.loggedIn = false;
    localStorage.setItem("natureGemsCurrentUser", JSON.stringify(currentUser));
  }
  showToast("Berhasil keluar.");
  showScreen("login");
}

function getInitial(name){
  return (name || "I").trim().charAt(0).toUpperCase();
}

/* SELECT & DATA */
function fillProvinceSelects(){
  const defaultOption = `<option value="all">Semua Provinsi</option>`;
  const options = PROVINCES.map(p => `<option value="${escapeHTML(p)}">${escapeHTML(p)}</option>`).join("");

  document.getElementById("provinceSelect").innerHTML = defaultOption + options;
  document.getElementById("exploreProvinceSelect").innerHTML = defaultOption + options;
  document.getElementById("regProvince").innerHTML = `<option value="">Pilih provinsi</option>` + options.replace('<option value="all">Semua Provinsi</option>', "");

  const savedUser = currentUser || JSON.parse(localStorage.getItem("natureGemsLastRegisteredUser") || "null");
  document.getElementById("provinceSelect").value = savedUser?.province || "Jawa Barat";
}

function getHomeFiltered(){
  const province = document.getElementById("provinceSelect").value;
  const keyword = document.getElementById("homeSearch").value.trim().toLowerCase();

  let list = DESTINATIONS.filter(item => {
    const matchProvince = province === "all" || item.province === province;
    const matchKeyword = !keyword || searchableText(item).includes(keyword);
    return matchProvince && matchKeyword;
  });

  if(userLocation && province === "all"){
    list = list.map(item => ({
      ...item,
      distance: getDistanceKm(userLocation.lat, userLocation.lng, item.lat, item.lng)
    })).sort((a,b) => a.distance - b.distance);
  }

  return list;
}

function renderDestinations(){
  const list = getHomeFiltered();
  document.getElementById("resultCount").textContent = `${list.length} destinasi ditemukan`;
  document.getElementById("homeSubtitle").textContent =
    userLocation ? "Lokasi GPS aktif. Destinasi bisa dibuka langsung ke Google Maps." :
    "Pilih provinsi atau gunakan GPS untuk mencari destinasi terdekat.";

  document.getElementById("homeList").innerHTML = list.slice(0, 12).map(cardTemplate).join("") || emptyTemplate("Destinasi tidak ditemukan.");
  refreshIcons();
}

function renderExplore(){
  const province = document.getElementById("exploreProvinceSelect").value;
  const keyword = document.getElementById("exploreSearch").value.trim().toLowerCase();

  let list = DESTINATIONS.filter(item => {
    const matchProvince = province === "all" || item.province === province;
    const matchKeyword = !keyword || searchableText(item).includes(keyword);
    return matchProvince && matchKeyword;
  });

  if(userLocation){
    list = list.map(item => ({
      ...item,
      distance: getDistanceKm(userLocation.lat, userLocation.lng, item.lat, item.lng)
    })).sort((a,b) => a.distance - b.distance);
  }

  document.getElementById("exploreList").innerHTML = list.map(cardTemplate).join("") || emptyTemplate("Destinasi tidak ditemukan.");
  renderProvinceSummary(province);
  refreshIcons();
}

function renderProvinceSummary(selectedProvince){
  const summary = document.getElementById("provinceSummary");
  const provincesToShow = selectedProvince === "all" ? PROVINCES : [selectedProvince];

  summary.innerHTML = provincesToShow.map(prov => {
    const total = DESTINATIONS.filter(item => item.province === prov).length;
    return `<div class="province-chip"><strong>${escapeHTML(prov)}</strong><span>${total} destinasi tersedia</span></div>`;
  }).join("");
}

function cardTemplate(item){
  const isSaved = savedIds.includes(item.id);
  const distanceText = userLocation
    ? `${formatDistance(getDistanceKm(userLocation.lat, userLocation.lng, item.lat, item.lng))} dari lokasimu`
    : `${item.province}`;

  return `
    <article class="card">
      <div class="card-img" onclick="openDetail(${item.id})">
        <img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${encodeURIComponent(item.name)}/900/650';">
        <span class="badge"><i data-lucide="map-pin"></i>${escapeHTML(distanceText)}</span>
        <button class="save-btn ${isSaved ? "saved" : ""}" onclick="event.stopPropagation(); toggleSaved(${item.id})" title="Simpan">
          <i data-lucide="bookmark"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-province">${escapeHTML(item.province)} • ${escapeHTML(item.crowd)}</div>
        <h4>${escapeHTML(item.name)}</h4>
        <p>${escapeHTML(item.description)}</p>
        <div class="tags">${item.tags.map(tag => `<span>#${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="secondary-btn" onclick="openDetail(${item.id})">Detail</button>
          <button class="primary-btn" onclick="navigateTo(${item.id})"><i data-lucide="navigation"></i> Navigasi</button>
        </div>
      </div>
    </article>
  `;
}

function emptyTemplate(text){
  return `<div class="empty">${escapeHTML(text)}</div>`;
}

function openDetail(id){
  selectedDestination = DESTINATIONS.find(item => item.id === id) || DESTINATIONS[0];
  setTargetDestination(id, false);

  document.getElementById("detailHero").style.backgroundImage = `url('${selectedDestination.image}')`;
  document.getElementById("detailProvince").textContent = selectedDestination.province;
  document.getElementById("detailName").textContent = selectedDestination.name;
  document.getElementById("detailCoordinate").textContent = `${selectedDestination.lat}, ${selectedDestination.lng}`;
  document.getElementById("detailDescription").textContent = selectedDestination.description;
  document.getElementById("detailTags").innerHTML = selectedDestination.tags.map(tag => `<span>#${escapeHTML(tag)}</span>`).join("");
  document.getElementById("detailCrowd").textContent = selectedDestination.crowd;
  document.getElementById("detailLatLng").textContent = `${selectedDestination.lat}, ${selectedDestination.lng}`;

  showScreen("detail");
}

function navigateSelected(){
  navigateTo(selectedDestination.id);
}

function navigateTo(id){
  const item = DESTINATIONS.find(dest => dest.id === id);
  if(!item) return;
  setTargetDestination(id, false);

  const origin = userLocation ? `&origin=${userLocation.lat},${userLocation.lng}` : "";
  const url = `https://www.google.com/maps/dir/?api=1${origin}&destination=${item.lat},${item.lng}&travelmode=driving`;
  window.open(url, "_blank");
}

function toggleSelectedSaved(){
  toggleSaved(selectedDestination.id);
}

function toggleSaved(id){
  if(savedIds.includes(id)){
    savedIds = savedIds.filter(savedId => savedId !== id);
    showToast("Destinasi dihapus dari Saved");
  }else{
    savedIds.push(id);
    showToast("Destinasi berhasil disimpan");
  }

  localStorage.setItem("natureGemsSavedIds", JSON.stringify(savedIds));
  renderDestinations();
  renderExplore();
  renderSaved();
  updateProfile();
  refreshIcons();
}

function renderSaved(){
  const saved = DESTINATIONS.filter(item => savedIds.includes(item.id));
  document.getElementById("savedSubtitle").textContent = `${saved.length} destinasi`;
  document.getElementById("savedList").innerHTML = saved.map(cardTemplate).join("") || emptyTemplate("Belum ada destinasi tersimpan.");
  refreshIcons();
}

/* GPS */
function useGPS(){
  if(!settings.locationPermission){
    showToast("Izin lokasi sedang dinonaktifkan di menu Privasi dan Keamanan.");
    return;
  }

  if(!("geolocation" in navigator)){
    showToast("Browser tidak mendukung GPS/geolocation.");
    return;
  }

  showToast("Mendeteksi lokasi... izinkan akses lokasi ya.");

  navigator.geolocation.getCurrentPosition(
    position => {
      userLocation = {
        lat: Number(position.coords.latitude.toFixed(6)),
        lng: Number(position.coords.longitude.toFixed(6)),
        time: new Date().toLocaleString("id-ID")
      };

      localStorage.setItem("natureGemsUserLocation", JSON.stringify(userLocation));

      const nearest = [...DESTINATIONS]
        .map(item => ({...item, distance: getDistanceKm(userLocation.lat, userLocation.lng, item.lat, item.lng)}))
        .sort((a,b) => a.distance - b.distance)[0];

      locationHistory.unshift({
        lat: userLocation.lat,
        lng: userLocation.lng,
        time: userLocation.time,
        nearest: nearest.name,
        province: nearest.province
      });
      locationHistory = locationHistory.slice(0, 10);
      localStorage.setItem("natureGemsLocationHistory", JSON.stringify(locationHistory));

      updateLocationUI(nearest);
      document.getElementById("provinceSelect").value = "all";
      renderDestinations();
      renderExplore();
      updateProfile();

      showToast("Lokasi berhasil terdeteksi.");
    },
    error => {
      let message = "Gagal mendeteksi lokasi.";
      if(error.code === 1) message = "Izin lokasi ditolak. Aktifkan permission lokasi di browser.";
      if(error.code === 2) message = "Lokasi tidak tersedia. Coba nyalakan GPS/WiFi.";
      if(error.code === 3) message = "Deteksi lokasi terlalu lama. Coba lagi.";
      showToast(message);
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

function updateLocationUI(nearest = null){
  if(userLocation){
    document.getElementById("currentLocationText").textContent = `GPS aktif: ${userLocation.lat}, ${userLocation.lng}`;
    document.getElementById("sidebarLocation").textContent = nearest ? `Terdekat: ${nearest.name}` : `Lokasi terakhir: ${userLocation.lat}, ${userLocation.lng}`;
  }
}

function getDistanceKm(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}
function toRad(value){return value * Math.PI / 180}
function formatDistance(km){return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`}
function searchableText(item){return `${item.name} ${item.province} ${item.description} ${item.tags.join(" ")} ${item.crowd}`.toLowerCase()}

/* PROFILE PANELS */
function updateProfile(){
  const user = currentUser || JSON.parse(localStorage.getItem("natureGemsLastRegisteredUser") || "null") || {
    name: "intan",
    email: "email@example.com",
    province: "-",
    initial: "I"
  };

  ["topAvatar", "exploreAvatar", "savedAvatar", "offlineAvatar", "profileAvatar"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = user.initial || getInitial(user.name);
  });

  document.getElementById("profileName").textContent = user.name || "intan";
  document.getElementById("profileEmail").textContent = user.email || "email@example.com";
  document.getElementById("profileProvince").textContent = `Domisili: ${user.province || "-"}`;
  document.getElementById("savedTotal").textContent = savedIds.length;
}

function openProfilePanel(type){
  const panel = document.getElementById("profilePanel");

  if(type === "settings"){
    panel.innerHTML = `
      <div class="panel">
        <h3>Pengaturan</h3>
        <p>Atur tampilan dan preferensi aplikasi.</p>

        <div class="setting-group">
          <div class="setting-row">
            <div><strong>Mode terang</strong><span>Mengubah tampilan menjadi light mode.</span></div>
            <button class="switch ${settings.theme === "light" ? "active" : ""}" onclick="toggleTheme()"></button>
          </div>
          <div class="setting-row">
            <div><strong>Kartu compact</strong><span>Membuat kartu destinasi lebih pendek.</span></div>
            <button class="switch ${settings.compactCards ? "active" : ""}" onclick="toggleCompactCards()"></button>
          </div>
          <div class="setting-row">
            <div><strong>Bahasa</strong><span>Pilih bahasa tampilan.</span></div>
            <select onchange="setLanguage(this.value)">
              <option value="id" ${settings.language === "id" ? "selected" : ""}>Indonesia</option>
              <option value="en" ${settings.language === "en" ? "selected" : ""}>English</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }

  if(type === "notifications"){
    panel.innerHTML = `
      <div class="panel">
        <h3>Notifikasi</h3>
        <p>Atur notifikasi rekomendasi destinasi, pengingat perjalanan, dan update tempat baru.</p>

        <div class="setting-group">
          <div class="setting-row">
            <div><strong>Rekomendasi destinasi</strong><span>Notifikasi saat ada hidden gem yang cocok.</span></div>
            <button class="switch ${settings.notifRecommendation ? "active" : ""}" onclick="toggleSetting('notifRecommendation')"></button>
          </div>
          <div class="setting-row">
            <div><strong>Pengingat perjalanan</strong><span>Pengingat sebelum rencana perjalanan.</span></div>
            <button class="switch ${settings.notifTrip ? "active" : ""}" onclick="toggleSetting('notifTrip')"></button>
          </div>
          <div class="setting-row">
            <div><strong>Update tempat baru</strong><span>Info jika ada destinasi baru ditambahkan.</span></div>
            <button class="switch ${settings.notifNewPlace ? "active" : ""}" onclick="toggleSetting('notifNewPlace')"></button>
          </div>
        </div>
      </div>
    `;
  }

  if(type === "privacy"){
    panel.innerHTML = `
      <div class="panel">
        <h3>Privasi dan Keamanan</h3>
        <p>Kelola izin lokasi, keamanan akun, dan data yang disimpan di browser.</p>

        <div class="setting-group">
          <div class="setting-row">
            <div><strong>Izin lokasi aplikasi</strong><span>Jika mati, tombol Gunakan GPS tidak dapat digunakan.</span></div>
            <button class="switch ${settings.locationPermission ? "active" : ""}" onclick="toggleSetting('locationPermission')"></button>
          </div>
          <div class="setting-row">
            <div><strong>Ganti password lokal</strong><span>Password disimpan lokal untuk simulasi aplikasi.</span></div>
            <input id="newPassword" type="password" placeholder="Password baru" />
          </div>
          <button class="primary-btn full" onclick="changePassword()">Simpan Password</button>
          <button class="danger-btn full" onclick="clearAllUserData()"><i data-lucide="trash-2"></i> Hapus Semua Data Lokal</button>
        </div>
      </div>
    `;
  }

  if(type === "history"){
    const items = locationHistory.length
      ? locationHistory.map((h, i) => `
        <div class="history-item">
          <strong>${i + 1}. ${escapeHTML(h.nearest)} - ${escapeHTML(h.province)}</strong>
          <span>${escapeHTML(h.time)} • ${h.lat}, ${h.lng}</span>
        </div>
      `).join("")
      : `<div class="empty">Belum ada riwayat lokasi. Klik Gunakan GPS untuk mendeteksi lokasi otomatis.</div>`;

    panel.innerHTML = `
      <div class="panel">
        <h3>Riwayat Lokasi</h3>
        <p>Menampilkan 10 lokasi terakhir yang berhasil dideteksi oleh GPS browser.</p>
        <div class="history-list">${items}</div>
        <button class="danger-btn full" onclick="clearLocationHistory()"><i data-lucide="trash-2"></i> Hapus Riwayat Lokasi</button>
      </div>
    `;
  }

  refreshIcons();
}

function saveSettings(){
  localStorage.setItem("natureGemsSettings", JSON.stringify(settings));
  applySettings();
}

function applySettings(){
  document.body.classList.toggle("light-mode", settings.theme === "light");
  document.body.classList.toggle("compact-cards", !!settings.compactCards);
}

function toggleTheme(){
  settings.theme = settings.theme === "dark" ? "light" : "dark";
  saveSettings();
  openProfilePanel("settings");
  showToast("Tema berhasil diubah.");
}

function toggleCompactCards(){
  settings.compactCards = !settings.compactCards;
  saveSettings();
  openProfilePanel("settings");
  renderDestinations();
  renderExplore();
  renderSaved();
}

function setLanguage(value){
  settings.language = value;
  saveSettings();
  showToast(value === "id" ? "Bahasa diatur ke Indonesia." : "Language set to English.");
}

function toggleSetting(key){
  settings[key] = !settings[key];
  saveSettings();

  if(["notifRecommendation", "notifTrip", "notifNewPlace"].includes(key)){
    openProfilePanel("notifications");
  }else if(key === "locationPermission"){
    openProfilePanel("privacy");
  }

  showToast("Pengaturan berhasil diperbarui.");
}

function changePassword(){
  const input = document.getElementById("newPassword");
  const newPass = input.value.trim();

  if(newPass.length < 6){
    showToast("Password baru minimal 6 karakter.");
    return;
  }

  const lastUser = JSON.parse(localStorage.getItem("natureGemsLastRegisteredUser") || "null");
  if(lastUser){
    lastUser.password = newPass;
    localStorage.setItem("natureGemsLastRegisteredUser", JSON.stringify(lastUser));
  }

  if(currentUser){
    currentUser.password = newPass;
    localStorage.setItem("natureGemsCurrentUser", JSON.stringify(currentUser));
  }

  input.value = "";
  showToast("Password berhasil diganti.");
}

function clearLocationHistory(){
  locationHistory = [];
  localStorage.setItem("natureGemsLocationHistory", JSON.stringify(locationHistory));
  openProfilePanel("history");
  showToast("Riwayat lokasi dihapus.");
}

function clearAllUserData(){
  const confirmDelete = confirm("Yakin ingin menghapus akun, saved, setting, dan riwayat lokasi dari browser?");
  if(!confirmDelete) return;

  localStorage.removeItem("natureGemsLastRegisteredUser");
  localStorage.removeItem("natureGemsCurrentUser");
  localStorage.removeItem("natureGemsSavedIds");
  localStorage.removeItem("natureGemsUserLocation");
  localStorage.removeItem("natureGemsLocationHistory");
  localStorage.removeItem("natureGemsSettings");

  currentUser = null;
  savedIds = [];
  userLocation = null;
  locationHistory = [];
  showToast("Semua data lokal sudah dihapus.");
  showScreen("register");
}


/* OFFLINE MODE & EMERGENCY CONTACTS */
function toggleOfflineMode(){
  offlineMode = !offlineMode;
  localStorage.setItem("natureGemsOfflineMode", JSON.stringify(offlineMode));
  updateOfflineUI();
  showToast(offlineMode ? "Mode offline aktif." : "Mode offline nonaktif.");
}
function downloadOfflinePack(){
  offlinePack = { downloadedAt: new Date().toLocaleString("id-ID"), destinations: DESTINATIONS.slice(0, 190), emergencyContacts: generateEmergencyContacts(getTargetDestination()),
    targetDestination: getTargetDestination() };
  offlineMode = true;
  localStorage.setItem("natureGemsOfflinePack", JSON.stringify(offlinePack));
  localStorage.setItem("natureGemsOfflineMode", JSON.stringify(offlineMode));
  updateOfflineUI();
  showToast("Peta, destinasi, dan kontak darurat tersimpan offline.");
}
function clearOfflinePack(){
  offlinePack = null;
  offlineMode = false;
  localStorage.removeItem("natureGemsOfflinePack");
  localStorage.setItem("natureGemsOfflineMode", JSON.stringify(false));
  updateOfflineUI();
  showToast("Data offline sudah dihapus.");
}
function updateOfflineUI(){
  const switchEl = document.getElementById("offlineSwitch");
  const statusEl = document.getElementById("offlineStatus");
  if(switchEl) switchEl.classList.toggle("active", offlineMode);
  if(statusEl){
    if(offlinePack){
      statusEl.textContent = `Paket offline aktif untuk ${getTargetDestination().name}. Terakhir diunduh: ${offlinePack.downloadedAt}. Total data: ${offlinePack.destinations.length} destinasi dan ${offlinePack.emergencyContacts.length} kontak darurat sesuai tujuan.`;
    }else if(offlineMode){
      statusEl.textContent = "Mode offline aktif, tetapi paket data belum diunduh. Klik Unduh Paket Offline.";
    }else{
      statusEl.textContent = "Aktifkan mode offline untuk menyimpan data darurat.";
    }
  }
}
function fillEmergencyDestinationSelect(){
  const select = document.getElementById("emergencyDestinationSelect");
  if(!select) return;

  select.innerHTML = DESTINATIONS.map(item => `
    <option value="${item.id}">${escapeHTML(item.province)} - ${escapeHTML(item.name)}</option>
  `).join("");

  select.value = String(targetDestinationId);
}

function changeEmergencyDestination(id){
  setTargetDestination(id, true);
}

function openEmergencyForSelected(){
  setTargetDestination(selectedDestination.id, false);
  showScreen("offline");
}

function renderEmergencyContacts(){
  const list = document.getElementById("emergencyList");
  const count = document.getElementById("emergencyCount");
  const info = document.getElementById("emergencyDestinationInfo");
  if(!list) return;

  const destination = getTargetDestination();
  const contacts = generateEmergencyContacts(destination);

  if(count) count.textContent = `${contacts.length} kontak untuk destinasi tujuan`;

  if(info){
    info.innerHTML = `
      <strong>${escapeHTML(destination.name)}</strong>
      <span>${escapeHTML(destination.province)} • ${destination.lat}, ${destination.lng}</span>
    `;
  }

  list.innerHTML = contacts.map(contact => `
    <div class="emergency-item">
      <div class="contact-main">
        <h4>${escapeHTML(contact.type)}</h4>
        <p>${escapeHTML(contact.name)}</p>
        <div class="contact-note">${escapeHTML(contact.note)}</div>
      </div>
      <div class="emergency-actions">
        <a href="tel:${escapeHTML(contact.phone)}">${escapeHTML(contact.phone)}</a>
        <button onclick="navigateTo(${destination.id})">Maps</button>
      </div>
    </div>
  `).join("");
}

/* ROAD CONDITION REPORT */
function openRoadReport(){ document.getElementById("roadReportModal").classList.add("open"); }
function closeRoadReport(){ document.getElementById("roadReportModal").classList.remove("open"); }
function submitRoadReport(condition){
  const report = { destinationId: selectedDestination.id, destinationName: selectedDestination.name, province: selectedDestination.province, condition, time: new Date().toLocaleString("id-ID"), lat: selectedDestination.lat, lng: selectedDestination.lng };
  roadReports.unshift(report);
  roadReports = roadReports.slice(0, 50);
  localStorage.setItem("natureGemsRoadReports", JSON.stringify(roadReports));
  closeRoadReport();
  showToast(`Laporan jalan "${condition}" berhasil dikirim.`);
}

/* UTILS */
function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHTML(value){
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
