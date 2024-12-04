const resourceConfig = [
    {
        t: "script",
        src: "https://example.com/script.js",
        loc: "head",
        async: true,
        crossorigin: "anonymous",
        type: "text/javascript",

        name: "Example Script 1",
        version: "1.0.0",
        releaseDate: "2024-01-01",
        lastUpdate: "2024-11-28",
        changelog: "Initial release with basic functionality."
    },
    {
        t: "script",
        src: "https://cdn.jsdelivr.net/gh/MagicReincarnation/codeHirutshuji@main/Fitur%20Bookmark/bookmark_v2.5.6.js",
        loc: "body",
        defer: true,
        type: "text/javascript",

        name: "Bookmark",
        version: "2.5.6",
        releaseDate: "2024-12-04",
        lastUpdate: "2024-12-04",
        changelog: "Added new features and fixed minor bugs."
    },
    {
        t: "link",
        href: "https://example.com/another-style.css",
        loc: "head",
        rel: "stylesheet",

        name: "Example Style",
        version: "1.0.0",
        releaseDate: "2024-03-01",
        lastUpdate: "2024-11-10",
        changelog: "Initial release of style sheet."
    }
];

async function addResources(config) {
    for (const resource of config) {
        if (resource.t === "script") {
            await handleScriptCaching(resource);
        } else {
            addElement(resource);
        }
    }
}

async function handleScriptCaching(resource) {
    const cacheKey = `cached-${resource.src}`;
    const versionKey = `version-${resource.src}`;
    const currentVersion = resource.version || "1.0.0";

    // Cek cache dan versi
    const cachedScript = localStorage.getItem(cacheKey);
    const cachedVersion = localStorage.getItem(versionKey);

    if (cachedScript && cachedVersion === currentVersion) {
        console.log(`Memuat ${resource.name} dari cache...`);
        injectScript(cachedScript, resource);
    } else {
        console.log(`Memuat ${resource.name} dari jaringan...`);
        try {
            const response = await fetch(resource.src);
            const scriptContent = await response.text();

            // Simpan ke cache
            localStorage.setItem(cacheKey, scriptContent);
            localStorage.setItem(versionKey, currentVersion);

            // Inject script
            injectScript(scriptContent, resource);
        } catch (error) {
            console.error(`Gagal memuat ${resource.name}:`, error);
        }
    }
}

function injectScript(content, resource) {
    const script = document.createElement("script");
    script.type = resource.type || "text/javascript";

    // Menambahkan atribut lain (async, defer, dll.)
    Object.keys(resource).forEach(attribute => {
        if (attribute !== "t" && attribute !== "loc" && attribute !== "src" && attribute !== "version") {
            if (resource[attribute] === true) {
                script.setAttribute(attribute, attribute);
            } else if (resource[attribute] !== false && resource[attribute] !== undefined) {
                script.setAttribute(attribute, resource[attribute]);
            }
        }
    });

    // Tambahkan isi script
    script.textContent = content;

    // Tambahkan ke lokasi yang ditentukan (head/body)
    (resource.loc === "body" ? document.body : document.head).appendChild(script);
}

function addElement(resource) {
    let element = resource.t === "link" ? document.createElement("link") : null;
    if (!element) return;

    // Menambahkan atribut
    Object.keys(resource).forEach(attribute => {
        if (attribute !== "t" && attribute !== "loc") {
            if (resource[attribute] === true) {
                element.setAttribute(attribute, attribute);
            } else if (resource[attribute] !== false && resource[attribute] !== undefined) {
                element.setAttribute(attribute, resource[attribute]);
            }
        }
    });

    // Tambahkan ke lokasi yang ditentukan (head/body)
    (resource.loc === "body" ? document.body : document.head).appendChild(element);
}

// Panggil fungsi
addResources(resourceConfig);
