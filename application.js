/* ==========================================================================
   Al-Khair Public High School Umary — Admission Application Form
   Client-side only: generates a reference ID and a printable preview.
   This does NOT submit anywhere — the applicant must print/download and
   hand the form to the school office, per the school's real admission
   process.
   ========================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("admissionForm");
  if (!form) return;

  var preview = document.getElementById("applicationPreview");
  var confirmMsg = document.getElementById("confirmMessage");
  var printBtn = document.getElementById("printAppBtn");
  var editBtn = document.getElementById("editAppBtn");
  var appIdField = document.getElementById("genAppId");
  var appDateField = document.getElementById("genAppDate");

  function generateApplicationId() {
    var now = new Date();
    var year = now.getFullYear();
    var rand = Math.floor(1000 + Math.random() * 9000);
    var stamp = String(now.getTime()).slice(-4);
    return "AKPHS-" + year + "-" + rand + stamp.slice(0, 1);
  }

  function todayFormatted() {
    var d = new Date();
    var opts = { year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString("en-GB", opts);
  }

  function val(id) {
    var el = document.getElementById(id);
    if (!el) return "";
    return (el.value || "").trim();
  }

  function labelFor(id) {
    var el = document.getElementById(id);
    if (!el) return "";
    if (el.tagName === "SELECT" && el.selectedOptions.length) {
      return el.selectedOptions[0].textContent.trim();
    }
    return el.value.trim();
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text || "—";
  }

  function fillPreview(appId, dateStr) {
    setText("prevAppId", appId);
    setText("prevDate", dateStr);

    setText("prevStudentName", val("studentName"));
    setText("prevFatherName", val("fatherName"));
    setText("prevDob", val("dob"));
    setText("prevGender", labelFor("gender"));
    setText("prevCnic", val("studentCnic"));
    setText("prevClass", labelFor("classApplying"));
    setText("prevPrevSchool", val("prevSchool"));
    setText("prevPrevClass", val("prevClass"));
    setText("prevPrevMarks", val("prevMarks"));
    setText("prevPrevRoll", val("prevRoll"));

    setText("prevGuardianName", val("guardianName"));
    setText("prevGuardianCnic", val("guardianCnic"));
    setText("prevPhone", val("phone"));
    setText("prevWhatsapp", val("whatsapp"));
    setText("prevEmail", val("email"));

    setText("prevAddress", val("address"));
    setText("prevDistrict", val("district"));
    setText("prevTehsil", val("tehsil"));

    var docs = [];
    ["docPhoto", "docLeaving", "docOther"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.checked) docs.push(el.dataset.label);
    });
    setText("prevDocs", docs.length ? docs.join(", ") : "None selected");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var appId = generateApplicationId();
    var dateStr = todayFormatted();

    if (appIdField) appIdField.value = appId;
    if (appDateField) appDateField.value = dateStr;

    fillPreview(appId, dateStr);

    preview.classList.add("show");
    form.closest(".form-card").setAttribute("hidden", "hidden");
    if (confirmMsg) {
      confirmMsg.hidden = false;
    }
    preview.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (editBtn) {
    editBtn.addEventListener("click", function () {
      preview.classList.remove("show");
      form.closest(".form-card").removeAttribute("hidden");
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }
})();

