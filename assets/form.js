/* FP | Sofia Camussi | Qualifying form handler. Plain JS, no dependencies. */
(function () {
  "use strict";

  var form = document.getElementById("fp-qualifying-form");
  if (!form) return;

  var CFG = window.FP_CONFIG || {};
  var SEND_TIMEOUT_MS = 2500;
  var QUALIFIED_ROLE = "Founder / owner / CEO";
  var QUALIFIED_REVENUE = ["$500K to $1M", "$1M to $5M", "$5M+"];
  var FIELDS = ["first_name", "last_name", "email", "company", "role", "revenue", "team", "admin_hours", "timing"];
  var REQUIRED = ["first_name", "last_name", "email", "role", "revenue", "team", "admin_hours", "timing"];
  var MESSAGES = {
    first_name: "Add your first name.",
    last_name: "Add your last name.",
    email: "Add a valid email so we can send your link.",
    role: "Pick the option that fits you best.",
    revenue: "Pick your annual revenue range.",
    team: "Pick your team size.",
    admin_hours: "Pick the closest range.",
    timing: "Pick when you want help."
  };

  var button = form.querySelector("[type=submit]");
  var buttonLabel = button ? button.textContent : "";
  var statusEl = document.getElementById("fp-form-status");
  var sending = false;

  function getValue(name) {
    var els = form.elements[name];
    if (!els) return "";
    if (els.length !== undefined && els.type === undefined) {
      for (var i = 0; i < els.length; i++) {
        if (els[i].checked) return els[i].value;
      }
      return "";
    }
    return (els.value || "").trim();
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  }

  function errorEl(name) {
    return document.getElementById("err-" + name);
  }

  function setError(name, msg) {
    var el = errorEl(name);
    if (el) el.textContent = msg || "";
    var group = form.querySelector('[data-field="' + name + '"]');
    if (group) {
      if (msg) group.setAttribute("data-invalid", "true");
      else group.removeAttribute("data-invalid");
    }
    var els = form.elements[name];
    if (!els) return;
    var list = els.length !== undefined && els.type === undefined ? els : [els];
    for (var i = 0; i < list.length; i++) {
      if (msg) list[i].setAttribute("aria-invalid", "true");
      else list[i].removeAttribute("aria-invalid");
    }
  }

  function validateField(name) {
    if (REQUIRED.indexOf(name) === -1) return true;
    var v = getValue(name);
    var ok = v !== "";
    if (ok && name === "email") ok = isValidEmail(v);
    setError(name, ok ? "" : MESSAGES[name]);
    return ok;
  }

  function validateAll() {
    var firstBad = null;
    for (var i = 0; i < REQUIRED.length; i++) {
      if (!validateField(REQUIRED[i]) && !firstBad) firstBad = REQUIRED[i];
    }
    return firstBad;
  }

  function focusField(name) {
    var els = form.elements[name];
    if (!els) return;
    var el = els.length !== undefined && els.type === undefined ? els[0] : els;
    if (el && el.focus) el.focus();
  }

  function isQualified(role, revenue) {
    return role === QUALIFIED_ROLE && QUALIFIED_REVENUE.indexOf(revenue) !== -1;
  }

  function buildPayload(qualified) {
    var params = new URLSearchParams();
    FIELDS.forEach(function (f) { params.append(f, getValue(f)); });
    params.append("qualified", qualified ? "yes" : "no");
    params.append("source", "landing");
    params.append("page_url", window.location.origin + window.location.pathname);
    var q = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach(function (k) {
      var v = q.get(k);
      if (v) params.append(k, v);
    });
    return params;
  }

  function send(params) {
    return new Promise(function (resolve) {
      var url = CFG.APPS_SCRIPT_URL;
      if (!url || typeof fetch !== "function") { resolve(); return; }
      var done = false;
      var timer = setTimeout(function () { if (!done) { done = true; resolve(); } }, SEND_TIMEOUT_MS);
      function finish() { if (!done) { done = true; clearTimeout(timer); resolve(); } }
      try {
        fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
          keepalive: true
        }).then(finish, finish);
      } catch (e) { finish(); }
    });
  }

  // Inline validation: check a field when the person leaves it or changes it.
  FIELDS.forEach(function (name) {
    var els = form.elements[name];
    if (!els) return;
    var list = els.length !== undefined && els.type === undefined ? els : [els];
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener("change", function () { validateField(name); });
      if (list[i].type === "text" || list[i].type === "email") {
        list[i].addEventListener("blur", function () { validateField(name); });
        list[i].addEventListener("input", function () {
          if (this.getAttribute("aria-invalid") === "true") validateField(name);
        });
      }
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    var firstBad = validateAll();
    if (firstBad) {
      if (statusEl) statusEl.textContent = "A few answers are missing. Check the highlighted fields.";
      focusField(firstBad);
      return;
    }
    if (statusEl) statusEl.textContent = "";

    var qualified = isQualified(getValue("role"), getValue("revenue"));
    sending = true;
    if (button) {
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Sending...";
    }

    try {
      sessionStorage.setItem("fp_first_name", getValue("first_name"));
      sessionStorage.setItem("fp_qualified", qualified ? "yes" : "no");
    } catch (err) { /* storage can be blocked; pages still work */ }

    send(buildPayload(qualified)).then(function () {
      window.location.href = qualified ? "book/" : "thanks/";
    });
  });

  // Restore the button if the person comes back with the browser back button.
  window.addEventListener("pageshow", function (ev) {
    if (ev.persisted && button) {
      sending = false;
      button.disabled = false;
      button.removeAttribute("aria-busy");
      button.textContent = buttonLabel;
    }
  });
})();
