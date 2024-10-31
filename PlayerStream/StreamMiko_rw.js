/*
Code: StreamMiko 
Version: v1.5 Free
Version dev: 5.6 
date: 31 okt 2024 9.20PM
Devepoler : [
1. Hirutshuji 
2. Roka
],
Change Log: 
- support role
*/
let infoEpisode = series_episode.EpisodeNow,
  info_server = series_episode.serverNow;

function defaultplay_anime(e, r, i) {
  let t = i ? streamAnime_HR08082024.defaultserver.premium : streamAnime_HR08082024.defaultserver.free,
    l = linkMap[e]?.linksPremium ? Object.values(linkMap[e].linksPremium) : [],
    n = linkMap[e]?.linksFree ? linkMap[e].linksFree : [],
    a = l.find(e => t.includes(e.quality) && e.url);
  a || (a = n.find(e => t.includes(e.quality) && e.url)), a || (a = n.find(e => e.url));
  let o = a ? a.quality : "N/A",
    s = l.includes(a) ? series_episode.badgeServerPremium : series_episode.badgeServerFree,
    d = `<span class="q_kuon">${o}<span> <span class="t_kuon">${s}</span>`;
  return document.getElementById("WacthServer").innerHTML = info_server.replace("{server}", d), a?.url
}

function formatTemplate(e, r) {
  return e.replace(/{(.*?)}/g, (e, i) => r[i] || "")
}

function SeriesEpisode(e) {
  return formatTemplate(series_episode.seriesEpisode, e)
}

function buat_ListEpisode(e, r, i) {
  let t = `episode-${r}`,
    l = 0,
    n = 0;
  i && (i.duration && (l = i.watchedTime / i.duration * 100), n = i.watchedTime || 0);
  let a = {
    fakeId: t,
    index: r + 1,
    lock: e.iconlock ? series_episode.svglistepisode_locked : "",
    title: e.title,
    progressPercentage: l,
    recentTime: formatTime(n)
  };
  return formatTemplate(series_episode.listEpisode, a)
}
let episodeMap = {},
  linkMap = {},
  IDSeries_diplay = null,
  IDEpisode_ygdiplay = null,
  IDFakeEpisode_ygdiplay = null;

function playEpisode(e) {
  let r = episodeMap[e];
  if (console.log("Player by Hirutshuji run Episode ID:", e), !r) return;
  IDFakeEpisode_ygdiplay = e, IDEpisode_ygdiplay = r, document.querySelectorAll(".list_episode li").forEach(e => {
    e.classList.remove("active")
  });
  let i = document.getElementById(e);
  i && i.classList.add("active"), dbrl.ref("series/" + IDSeries_diplay).once("value").then(i => {
    let t = i.val(),
      l = t?.episodes?.[r];
    if (l) {
      let n = document.querySelector("#playerHr"),
        a = document.getElementById("boxserver_multi"),
        o = document.getElementById("boxbtndwn_multi"),
        s = document.getElementById("boxnextprev");
      document.getElementById("WacthEpisode").innerHTML = infoEpisode.replace("{episode}", Object.keys(t.episodes).indexOf(r) + 1), initializePlayer(n, l, linkMap, e), auth.currentUser && auth.currentUser.uid;
      let d = linkMap[e]?.linksFree || [],
        u = linkMap[e]?.linksPremium || {},
        c = "";
      if (d.length > 0 && (c += `
          <div class="dropdown_f">
            <label>${series_episode.titleServerFree}</label>
            <ul id="link-select">
              ${d.map(e=>e.url&&!e.hidden?`<li><button class="serverFree" data-keylink="${encrypt_episodeId(e.keylink,"hirutshuji_datakodehiru")}">${e.quality}</button></li>`:"").join("")}
            </ul>
          </div>
        `), Object.keys(u).length > 0) {
        let p = l.role,
          y = canAccessPremium(p),
          m = y ? "" : series_episode.svg_lockedServer;
        c += `
          <div class="dropdown_p">
            <label>${series_episode.titleServerPremium}</label>
            <ul id="link-select2">
              ${Object.entries(u).map(([e,r])=>r.url&&!r.hidden?`<li><button class="serverPremium" data-keylink="${encrypt_episodeId(r.keylink,"hirutshuji_datakodehiru")}" data-key="${e}">${r.quality} ${y?"":m}</button></li>`:"").join("")}
            </ul>
          </div>
        `
      }
      let f = l.downloadLinksPremium || l.downloadLinksFree || null,
        v = "";
      f && !f.hidden && (v = `
          <button class="dwnShowEps" onclick="all_download_link('${r}')">${series_episode.btn_download}</button>
        `);
      let k = `
        <button class="prevVideo" onclick="previousEpisode()">${series_episode.prev}</button>
        <button class="nextVideo" onclick="nextEpisode()">${series_episode.next}</button>
      `;
      a.innerHTML = c, o.innerHTML = v, s.innerHTML = k, document.getElementById("player_cc_HIRU08082024").style.display = "block", document.getElementById("player_loader_HIRU08082024").style.display = "none", document.querySelectorAll("#link-select button").forEach(e => {
        e.addEventListener("click", e => {
          let r = e.target.dataset.keylink,
            i = decrypt_episodeId(r, "hirutshuji_datakodehiru"),
            t = d.find(e => e.keylink === i);
          if (t) {
            let a = document.querySelectorAll("#playerHr video, #playerHr iframe");
            "jwplayer" === l.provider ? reloadJWPlayer(n, t.url) : "plyr" === l.provider ? (a.forEach(e => e.src = t.url), initializePlyr()) : "youtube" === l.provider ? a.forEach(e => e.src = convertToEmbedUrl(t.url)) : "iframe" === l.provider && a.forEach(e => e.src = t.url), markActiveServer(e.target)
          }
        })
      }), document.querySelectorAll("#link-select2 button").forEach(r => {
        r.addEventListener("click", r => {
          let i = r.target.dataset.keylink,
            t = decrypt_episodeId(i, "hirutshuji_datakodehiru"),
            a = r.target.dataset.key,
            o = l.role,
            s = canAccessPremium(o);
          if (a && !auth.currentUser) alert(`${series_episode.notifPremium}`);
          else if (s) {
            runserverPremium(n, t, a, e, l), markActiveServer(r.target);
            return
          }
        })
      })
    } else console.error("Episode Data not found.")
  }).catch(e => {
    console.error("Error retrieving series data:", e)
  })
}

function markActiveServer(e) {
  document.querySelectorAll("#link-select button, #link-select2 button").forEach(e => {
    e.classList.remove("active")
  }), e.classList.add("active");
  let r = e.innerText;
  document.getElementById("WacthServer").innerHTML = info_server.replace("{server}", r)
}

function runserverPremium(e, r, i, t, l) {
  let n = auth.currentUser;
  if (n) {
    let a = linkMap[t]?.linksPremium[i];
    if (a && a.keylink === r) {
      let o = document.querySelectorAll("#playerHr video, #playerHr iframe");
      "jwplayer" === l.provider ? reloadJWPlayer(e, a.url) : "plyr" === l.provider ? (o.forEach(e => e.src = a.url), initializePlyr()) : "youtube" === l.provider ? o.forEach(e => e.src = convertToEmbedUrl(a.url)) : "iframe" === l.provider && o.forEach(e => e.src = convertToEmbedUrl(a.url))
    }
  }
}

function all_download_link(e) {
  let r = auth.currentUser ? auth.currentUser : null;
  if (!r) {
    alert(series_episode.notif_download_premium), console.log("perlu login");
    return
  }
  let i = {};
  dbrl.ref("series/" + IDSeries_diplay).once("value").then(r => {
    let t = r.val(),
      l = t.episodes[e];
    if (l) {
      i[e] = {
        free: l.downloadLinksFree ? l.downloadLinksFree.reduce((e, r) => (r.url && (e[r.quality] = r.url), e), {}) : {},
        premium: l.downloadLinksPremium ? l.downloadLinksPremium.reduce((e, r) => (r.url && (e[r.quality] = r.url), e), {}) : {}
      };
      let n = auth.currentUser ? auth.currentUser.uid : null,
        a = l.role,
        o = canAccessPremium(a),
        s = o ? "" : series_episode.svg_lockedServer,
        d = `
          <div class="link-list">
            <h4>${series_episode.titlebox_download}</h4>
            <button onclick="document.querySelector('.link-list').remove()" class="closeBox_dwn">${series_episode.closeBox_dwn}</button>
            <ul>
              ${Object.entries(i[e].free).map(([r,i])=>i?`<li><a href="#" data-episode="${encrypt_episodeId(e,"hirutshuji_datakodehiru")}" data-quality="${r}" class="download-linkfree download-link">${r}</a></li>`:"").join("")}
              ${o?Object.entries(i[e].premium).map(([r,i])=>i?`<li><a href="#" data-episode="${encrypt_episodeId(e,"hirutshuji_datakodehiru")}" data-quality="${r}" class="download-linkpremium download-link">${r}</a></li>`:"").join(""):Object.keys(i[e].premium).map(e=>`<li><a href="#" class="download-linkpremium download-link">${e} ${s}</a></li>`).join("")}
            </ul>
          </div>
        `;
      document.getElementById("linkdwn").innerHTML = d, document.querySelectorAll(".download-link").forEach(e => {
        e.addEventListener("click", e => {
          e.preventDefault();
          let r = e.currentTarget.getAttribute("data-episode"),
            t = e.currentTarget.getAttribute("data-quality"),
            l = decrypt_episodeId(r, "hirutshuji_datakodehiru"),
            n = i[l].free[t] || i[l].premium[t];
          n ? window.open(n, "_blank") : alert("Unable to retrieve download link.")
        })
      }), n || document.querySelectorAll(".locked").forEach(e => {
        e.addEventListener("click", e => {
          e.preventDefault(), alert(`${series_episode.notifPremium}`)
        })
      })
    } else console.error("Episode tidak ditemukan.")
  }).catch(e => {
    console.error("error saat mengambil link download:", e)
  })
}

function xorEncryptDecrypt(e, r) {
  let i = "";
  for (let t = 0; t < e.length; t++) i += String.fromCharCode(e.charCodeAt(t) ^ r.charCodeAt(t % r.length));
  return i
}

function encrypt_episodeId(e, r) {
  return btoa(xorEncryptDecrypt(e, r))
}

function decrypt_episodeId(e, r) {
  return xorEncryptDecrypt(atob(e), r)
}
async function loadContent() {
  document.getElementById("player_loader_HIRU08082024").style.display = "block";
  let e = streamAnime_HR08082024.IDSeries,
    r = auth.currentUser ? auth.currentUser.uid : null;
  r || console.error("User not logged in"), dbrl.ref("series/" + e).once("value").then(async i => {
    if (i.exists()) {
      let t = i.val();
      IDSeries_diplay = e;
      let l = SeriesEpisode(t),
        n = Object.values(t.episodes).map(async (i, t) => {
          let l = `episode-${t}`;
          linkMap[l] = {
            linksFree: i.linksFree.map(e => ({
              ...e,
              keylink: `free-link-${t}-${e.quality}`
            })),
            linksPremium: Object.values(i.linksPremium).map(e => ({
              ...e,
              keylink: `premium-link-${t}-${e.quality}`
            }))
          }, episodeMap[l] = i.idpost;
          let n = await dbrl.ref("users/" + r + "/watchHistory/" + e + "/" + i.idpost).once("value"),
            a = n.val() || {};
          return buat_ListEpisode(i, t, a)
        });
      Promise.all(n).then(e => {
        document.getElementById("playerStreamSeries_HIRU08082024").innerHTML = `${l}`, document.getElementById("playerStreamEpisode_HIRU08082024").innerHTML = `
          <div class="episode_List">
            <ul class="list_episode">
              ${e.join("")}
            </ul>
          </div>
        `, runCode_episodeReady(), document.querySelectorAll(".list_episode li").forEach(e => {
          e.addEventListener("click", e => {
            e.preventDefault();
            let r = e.currentTarget.id;
            playEpisode(r)
          })
        });
        let r = streamAnime_HR08082024.IDEpisode;
        if (r) {
          let i = Object.keys(episodeMap).find(e => episodeMap[e] === r);
          i && playEpisode(i)
        }
      }).catch(e => {
        console.error("error saat membuat list episode:", e), document.getElementById("video_defaultPlay").innerHTML = "<p>Error loading episodes</p>"
      })
    } else document.getElementById("video_defaultPlay").innerHTML = "<p>No series available</p>"
  })
}

function nextEpisode() {
  dbrl.ref("series/" + IDSeries_diplay).once("value", e => {
    let r = e.val(),
      i = Object.values(r.episodes),
      t = i.findIndex(e => e.idpost === IDEpisode_ygdiplay);
    if (t >= 0 && t < i.length - 1) {
      let l = i[t + 1].idpost;
      playEpisode(Object.keys(episodeMap).find(e => episodeMap[e] === l))
    }
  })
}

function previousEpisode() {
  dbrl.ref("series/" + IDSeries_diplay).once("value", e => {
    let r = e.val(),
      i = Object.values(r.episodes),
      t = i.findIndex(e => e.idpost === IDEpisode_ygdiplay);
    if (t > 0) {
      let l = i[t - 1].idpost;
      playEpisode(Object.keys(episodeMap).find(e => episodeMap[e] === l))
    }
  })
}

function initializePlayer(e, r, i, t) {
  if (!e || !r || !i || !t) {
    console.error("Parameter yang diperlukan tidak ada untuk menginstal player.");
    return
  }
  e.innerHTML = "";
  let l = auth.currentUser,
    n = r.role,
    a = canAccessPremium(n),
    o = defaultplay_anime(t, l, a);
  if (!o) {
    console.error("Tidak ditemukan URL video yang valid."), console.error("Error Url:", o);
    return
  }
  switch (r.provider) {
    case "plyr":
      setupPlyr(e, o);
      break;
    case "jwplayer":
      initializeJWPlayer(e, r, i, t);
      break;
    case "youtube":
      setupYouTube(e, o);
      break;
    case "iframe":
      setupIframe(e, o);
      break;
    case "html5":
      setupHtml5(e, o, l, t);
      break;
    default:
      e.innerHTML = "Unsupported provider Player", console.error("Unsupported provider.")
  }
}
async function initializePlyr() {
  let e = document.getElementById("playerx"),
    r = auth.currentUser ? auth.currentUser.uid : null,
    i = IDEpisode_ygdiplay,
    t = IDFakeEpisode_ygdiplay,
    l = new Plyr(e, {
      controls: isMobile() ? mobileControls : desktopControls,
      ...plyrSettings
    });
  l.on("loadedmetadata", async () => {
    let e = await dbrl.ref("users/" + r + "/watchHistory/" + IDSeries_diplay + "/" + i).once("value"),
      t = e.val() || {},
      n = t.watchedTime || 0,
      a = l.duration;
    n <= a && (l.currentTime = n), l.play()
  });
  let n = 0,
    a = 0;

  function o() {
    if (r) {
      let e = {
        episodeId: t,
        realId: IDEpisode_ygdiplay,
        watchedTime: n || 0,
        duration: l.duration || 0,
        timestamp: new Date().toISOString()
      };
      dbrl.ref("users/" + r + "/watchHistory/" + IDSeries_diplay + "/" + i).set(e).then(() => console.log("Watch time saved successfully")).catch(e => console.error("Error saving watch time:", e))
    }
  }
  l.on("timeupdate", () => {
    let e = l.currentTime;
    e > a && (n += e - a, a = e)
  }), l.on("seeked", () => {
    a = l.currentTime
  }), l.on("pause", o), l.on("ended", o), window.plyr = l
}
async function initializeJWPlayer(e, r, i, t) {
  e.innerHTML = "";
  let l = auth.currentUser,
    n = l ? auth.currentUser.uid : null,
    a = r.role,
    o = canAccessPremium(a),
    s = defaultplay_anime(t, l, o);
  e.innerHTML = `<div id="${e}"></div>`;
  let d = await dbrl.ref("users/" + n + "/watchHistory/" + IDSeries_diplay + "/" + IDEpisode_ygdiplay).once("value"),
    u = d.val() || {},
    c = u.watchedTime || 0,
    p = jwplayer(e).setup({
      file: s,
      image: streamAnime_HR08082024.thumbnailAnime,
      width: "100%",
      height: "100%",
      primary: "html5",
      advertising: setupAdvertising(),
      starttime: c
    });
  p.on("ready", function() {
    let e = p.getDuration();
    c <= e && p.seek(c), p.play()
  });
  let y = c,
    m = c,
    f = 0;

  function v() {
    if (n) {
      f || (f = p.getDuration());
      let e = {
        episodeId: t,
        realId: IDEpisode_ygdiplay,
        watchedTime: m || 0,
        duration: f || 0,
        timestamp: new Date().toISOString()
      };
      dbrl.ref("users/" + n + "/watchHistory/" + IDSeries_diplay + "/" + IDEpisode_ygdiplay).set(e).then(() => console.log("Watch time saved successfully")).catch(e => console.error("Error saving watch time:", e))
    }
  }
  p.on("time", e => {
    let {
      position: r
    } = e;
    r > m && (y += r - m), m = r
  }), p.on("seek", e => {
    m = e.offset, v()
  }), p.on("play", function(e) {
    f = e.duration || p.getDuration()
  }), p.on("pause", v), p.on("complete", v)
}

function reloadJWPlayer(e, r) {
  let i = document.getElementById(e);
  i && i.remove(), e.innerHTML = `<div id="${e}"></div>`, jwplayer(e).setup({
    file: r,
    image: streamAnime_HR08082024.thumbnailAnime,
    width: "100%",
    height: "100%",
    primary: "html5",
    advertising: setupAdvertising()
  })
}
async function runplayer5(e, r) {
  let i = document.getElementById("playerx");
  if (!i) {
    console.error("Video element not found.");
    return
  }
  let t = await dbrl.ref("users/" + e.uid + "/watchHistory/" + IDSeries_diplay + "/" + IDEpisode_ygdiplay).once("value"),
    l = t.val() || {},
    n = l.watchedTime || 0;
  i.addEventListener("loadedmetadata", () => {
    let e = i.duration;
    n <= e && (i.currentTime = n), i.play()
  });
  let a = n,
    o = n;

  function s() {
    if (e) {
      let t = {
        episodeId: r,
        realId: IDEpisode_ygdiplay,
        watchedTime: Math.max(a, n) || 0,
        duration: i.duration || 0,
        timestamp: new Date().toISOString()
      };
      dbrl.ref("users/" + e.uid + "/watchHistory/" + IDSeries_diplay + "/" + IDEpisode_ygdiplay).set(t).then(() => console.log("Watch time saved successfully")).catch(e => console.error("Error saving watch time:", e))
    }
  }
  i.addEventListener("timeupdate", () => {
    let e = i.currentTime;
    e > o && (a += e - o, o = e)
  }), i.addEventListener("seeked", () => {
    o = i.currentTime, s()
  }), i.addEventListener("pause", s), i.addEventListener("ended", s)
}

function setupPlyr(e, r) {
  let i = {
      poster: streamAnime_HR08082024.thumbnailAnime,
      videoUrl: r
    },
    t = formatTemplate(config_playerDiv.playerDiv.plyr, i);
  e.innerHTML = t, initializePlyr()
}

function setupYouTube(e, r) {
  let i = {
      videoUrl: convertToEmbedUrl(r)
    },
    t = formatTemplate(config_playerDiv.playerDiv.youtube, i);
  e.innerHTML = t
}

function setupIframe(e, r) {
  let i = formatTemplate(config_playerDiv.playerDiv.iframe, {
    videoUrl: r
  });
  e.innerHTML = i
}

function setupHtml5(e, r, i, t) {
  let l = {
      poster: streamAnime_HR08082024.thumbnailAnime,
      videoUrl: r
    },
    n = formatTemplate(config_playerDiv.playerDiv.html5, l);
  e.innerHTML = n, runplayer5(i, t)
}

function formatTime(e) {
  if (isNaN(e) || null == e) return "";
  let r = Math.floor(e / 3600),
    i = Math.floor(e % 3600 / 60),
    t = Math.floor(e % 60);
  if (r > 0) {
    let l = r < 10 ? `0${r}` : r,
      n = i < 10 ? `0${i}` : i,
      a = t < 10 ? `0${t}` : t;
    return `${l}:${n}:${a}`
  } {
    let o = i < 10 ? `0${i}` : i,
      s = t < 10 ? `0${t}` : t;
    return `${o}:${s}`
  }
}

function convertToEmbedUrl(e) {
  let r = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return r && 11 === r[2].length ? `https://www.youtube.com/embed/${r[2]}?autoplay=1` : null
}
auth.onAuthStateChanged(e => {
  loadContent(),
  getUserRole()
});

let userRole;
async function getUserRole() {
  let e = auth.currentUser ? auth.currentUser.uid : null;
  if (e) try {
    let r = await db.collection("users").doc(e).get();
    if (r.exists) return userRole = r.data().role,    	 console.log("user role: ", userRole), userRole
  } catch (i) {
    console.error("Error get user role: ", i)
  }
}

function akses_role_HR() {
  return {
    Admin: ["Admin", "Member", "User"],
    Member: ["Member", "User"],
    User: ["User", "Member"]
  }
}
async function canAccessPremium(e) {
  if(!userRole){
  getUserRole();
  }
  let r = akses_role_HR();
  return r[userRole]?.includes(e)
}
