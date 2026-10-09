/* ==========================================================
   JUBIA website – configuration (EDIT THIS BLOCK)
   ========================================================== */
const CONFIG = {
  // International format, digits only: no "+", spaces or dashes. Example: 201001234567
  // "000000000000" is a PLACEHOLDER and shows a warning until you replace it.
  whatsapp: "000000000000",
  phoneDisplay: "+00 000 000 0000",   // shown on the page
  phoneTel: "+000000000000",          // used in tel: links (with +, no spaces)
  email: "info@your-domain.example",
  // Optional real form service, e.g. "https://formspree.io/f/yourFormId".
  // Leave "" to use the WhatsApp quotation workflow (nothing is sent until the user confirms).
  formEndpoint: ""
};

(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Arabic translations (English text is read from index.html) ---------- */
  const AR = {
    title: "JUBIA | أنظمة فواصل مدرّعة للأرضيات الخرسانية الصناعية",
    desc: "تصنيع وتوريد وتركيب أنظمة الفواصل المدرّعة للأرضيات الخرسانية الصناعية. JUBIA Armor Joint – AJ Type.",
    skip: "تخطي إلى المحتوى",
    n1: "الرئيسية", n2: "المنتج", n3: "التطبيقات", n4: "من نحن", n5: "اتصل بنا", nq: "اطلب عرض سعر",
    eye: "تصنيع · توريد · تركيب",
    h1: "أنظمة فواصل مدرّعة للخدمة الشاقة للأرضيات الخرسانية الصناعية.",
    hp: "تقوم JUBIA بتصنيع وتوريد وتركيب أنظمة الفواصل المدرّعة للأرضيات الخرسانية الصناعية المعرّضة لأحمال المعدات الثقيلة.",
    bq: "اطلب عرض سعر", be: "اكتشف منتجنا",
    ph: "صورة مؤقتة — استبدلها بصورة حقيقية من JUBIA",
    hb: "لماذا نظام الفواصل المدرّعة؟",
    b1t: "حماية حواف البلاطة", b1d: "مصمّم لحماية حواف البلاطة الخرسانية من الصدمات والتآكل.",
    b2t: "صفيحة وتد مركزية", b2d: "صفيحة وتد مركزية بسماكة 5 مم تشكّل جزءاً من النظام.",
    b3t: "تثبيت في الخرسانة", b3d: "خطافات/مسامير تثبيت خرسانية للخدمة الشاقة تثبّت الفاصل في البلاطة.",
    b4t: "استيعاب حركة الخرسانة", b4d: "مصمّم لاستيعاب الحركة الطبيعية للخرسانة والمساعدة في حماية حواف الفاصل من التشقق والتلف.",
    pe: "منتجنا",
    pi: "نظام فواصل للخدمة الشاقة للأرضيات الخرسانية الصناعية المعرّضة لأحمال المعدات الثقيلة.",
    cft: "المواصفات المؤكدة",
    c1: "ملف Cosinus Wave بسماكة 5 مم، مصمّم لحماية حواف البلاطة من الصدمات والتآكل",
    c2: "صفيحة وتد مركزية بسماكة 5 مم",
    c3: "خطافات/مسامير تثبيت خرسانية للخدمة الشاقة",
    c4: "مصمّم لاستيعاب الحركة الطبيعية للخرسانة",
    wt: "بانتظار التأكيد",
    wn: "ستُضاف هذه البيانات بعد تأكيدها من JUBIA. لا تُعرض أي قيم غير مؤكدة.",
    w1: "الأبعاد والأطوال المتاحة", w2: "نوع الفولاذ ومعالجة السطح", w3: "حجم الخطافات وتباعدها",
    w4: "قدرات التحميل ونتائج الاختبارات", w5: "الشهادات والمعايير",
    ds: "صحيفة البيانات الفنية — قريباً",
    at: "التطبيقات النموذجية",
    an: "هذه تطبيقات نموذجية وليست مشاريع منفّذة من JUBIA.",
    a1t: "المستودعات الصناعية", a1d: "أرضيات تشهد حركة رافعات شوكية ومعدات.",
    a2t: "المصانع ومنشآت الإنتاج", a2d: "أرضيات خرسانية في مناطق الإنتاج الثقيلة.",
    a3t: "الأرضيات الخرسانية الصناعية الشاقة", a3d: "بلاطات تتحمل أحمال المعدات الثقيلة المتكررة.",
    a4t: "منشآت اللوجستيات والتوزيع", a4d: "مراكز تخزين وتوزيع بحركة معدات مستمرة.",
    st: "التصنيع والتوريد والتركيب",
    s1t: "التصنيع", s1d: "أنظمة فواصل مدرّعة تُصنَّع وفق متطلبات المشروع.",
    s2t: "التوريد", s2d: "توريد أنظمة الفواصل إلى مواقع المشاريع.",
    s3t: "التركيب", s3d: "تركيب الفواصل في الأرضيات الخرسانية الصناعية.",
    abt: "من نحن",
    abp: "JUBIA شركة تقوم بتصنيع وتوريد وتركيب أنظمة الفواصل المدرّعة للأرضيات الخرسانية الصناعية. منتجنا الرئيسي هو JUBIA Armor Joint – AJ Type.",
    ct: "اطلب عرض سعر",
    ci: "أرسل متطلبات مشروعك وسنتواصل معك. يمكنك أيضاً التواصل مباشرة عبر واتساب أو الهاتف.",
    wa: "واتساب", call: "اتصل بنا",
    lp: "الهاتف", le: "البريد الإلكتروني", la: "العنوان", addr: "[عنوان الشركة هنا]",
    f_name: "الاسم الكامل", f_co: "الشركة", f_mail: "البريد الإلكتروني", f_tel: "الهاتف",
    f_loc: "موقع المشروع", f_req: "متطلبات المنتج", f_qty: "الكمية التقديرية", f_msg: "رسالة",
    rv: "راجع رسالتك", cf: "تأكيد وفتح واتساب",
    ft: "جميع الحقوق محفوظة.",
    f_sub: "مراجعة الطلب وإرساله عبر واتساب", f_send: "إرسال الطلب",
    e_req: "هذا الحقل مطلوب.", e_mail: "أدخل بريداً إلكترونياً صحيحاً.", e_tel: "أدخل رقم هاتف صحيحاً.",
    s_ok: "تم إرسال طلبك.",
    s_err: "تعذّر إرسال الطلب. يرجى المحاولة عبر واتساب أو الهاتف.",
    s_nowa: "رقم واتساب غير مضبوط بعد. عدّل CONFIG في js/main.js (انظر README).",
    s_rev: "راجع الرسالة أدناه ثم أكّد لفتح واتساب. لن يُرسل شيء قبل تأكيدك.",
    wa_hi: "مرحباً JUBIA، أرغب في طلب عرض سعر لمنتج JUBIA Armor Joint – AJ Type.",
    wa_head: "طلب عرض سعر – JUBIA Armor Joint – AJ Type"
  };

  /* ---------- English strings that are not in the HTML ---------- */
  const EN = {
    f_sub: "Review & send via WhatsApp", f_send: "Send request",
    e_req: "This field is required.", e_mail: "Enter a valid email address.", e_tel: "Enter a valid telephone number.",
    s_ok: "Your request has been sent.",
    s_err: "The request could not be sent. Please try WhatsApp or telephone instead.",
    s_nowa: "WhatsApp number is not configured yet. Edit CONFIG in js/main.js (see README).",
    s_rev: "Review the message below, then confirm to open WhatsApp. Nothing is sent before you confirm.",
    wa_hi: "Hello JUBIA, I would like to request a quotation for JUBIA Armor Joint – AJ Type.",
    wa_head: "Quotation request – JUBIA Armor Joint – AJ Type",
    title: document.title,
    desc: $('meta[name="description"]').content
  };
  $$("[data-i18n]").forEach(e => { EN[e.dataset.i18n] = e.innerHTML; });

  let lang = "en";
  const t = k => (lang === "ar" && AR[k]) || EN[k] || "";
  const waOk = !/^0+$/.test(CONFIG.whatsapp);
  const waLink = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

  /* ---------- Language ---------- */
  function setLang(l) {
    lang = l === "ar" ? "ar" : "en";
    try { localStorage.setItem("jubia-lang", lang); } catch (e) { /* storage unavailable */ }
    const h = document.documentElement;
    h.lang = lang;
    h.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(e => { e.innerHTML = t(e.dataset.i18n); });
    $$("[data-ia]").forEach(e => { const [a, k] = e.dataset.ia.split(":"); e.setAttribute(a, t(k)); });
    $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = t("title");
    $('meta[name="description"]').content = t("desc");
    $('meta[property="og:title"]').content = t("title");
    $('meta[property="og:description"]').content = t("desc");
    $("#sub").textContent = t(CONFIG.formEndpoint ? "f_send" : "f_sub");
    $$("[data-k]").forEach(e => { e.textContent = t(e.dataset.k); });
    $$("[data-wa]").forEach(a => { a.href = waLink(t("wa_hi")); });
    if (!$("#review").hidden) buildReview();
  }

  /* ---------- Static config wiring ---------- */
  $$("[data-tel]").forEach(a => { a.href = "tel:" + CONFIG.phoneTel; });
  $$("[data-mail]").forEach(a => { a.href = "mailto:" + CONFIG.email; });
  $$('[data-cfg="phone"]').forEach(e => { e.textContent = CONFIG.phoneDisplay; });
  $$('[data-cfg="email"]').forEach(e => { e.textContent = CONFIG.email; });
  $("#warn").hidden = waOk;
  $("#yr").textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  const burger = $("#burger"), nav = $("#nav");
  const closeMenu = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  $$("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- Form ---------- */
  const form = $("#qf"), status = $("#status");
  const rules = {
    f1: v => v ? "" : "e_req",
    f3: v => !v ? "e_req" : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "e_mail",
    f4: v => !v ? "e_req" : /^\+?[\d\s()-]{7,20}$/.test(v) ? "" : "e_tel",
    f5: v => v ? "" : "e_req",
    f6: v => v ? "" : "e_req"
  };
  function validate() {
    let first = null;
    Object.keys(rules).forEach(id => {
      const input = $("#" + id), box = $("#e-" + id), key = rules[id](input.value.trim());
      input.setAttribute("aria-invalid", String(!!key));
      if (key) { input.setAttribute("aria-describedby", "e-" + id); box.dataset.k = key; box.textContent = t(key); first = first || input; }
      else { input.removeAttribute("aria-describedby"); delete box.dataset.k; box.textContent = ""; }
    });
    if (first) first.focus();
    return !first;
  }
  const setStatus = k => { if (k) { status.dataset.k = k; status.textContent = t(k); } else { delete status.dataset.k; status.textContent = ""; } };

  function lines() {
    return [["f_name", "f1"], ["f_co", "f2"], ["f_mail", "f3"], ["f_tel", "f4"], ["f_loc", "f5"], ["f_req", "f6"], ["f_qty", "f7"], ["f_msg", "f8"]]
      .map(([k, id]) => [k, $("#" + id).value.trim()]).filter(x => x[1])
      .map(([k, v]) => `${t(k).replace(/<[^>]*>/g, "")}: ${v}`);
  }
  function buildReview() {
    const msg = t("wa_head") + "\n\n" + lines().join("\n");
    $("#preview").textContent = msg;
    $("#confirm").href = waLink(msg);
  }

  form.addEventListener("input", () => { $("#review").hidden = true; });
  form.addEventListener("submit", async ev => {
    ev.preventDefault();
    setStatus("");
    if (!validate()) return;
    if (CONFIG.formEndpoint) {
      try {
        const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
        if (!r.ok) throw new Error(r.status);
        form.reset(); setStatus("s_ok");
      } catch (e) { setStatus("s_err"); }
      return;
    }
    buildReview();
    $("#review").hidden = false;
    setStatus("s_rev");
    $("#review").scrollIntoView({ block: "nearest" });
  });

  /* ---------- Init ---------- */
  let saved = "en";
  try { saved = localStorage.getItem("jubia-lang") || "en"; } catch (e) { /* ignore */ }
  setLang(saved);
})();
