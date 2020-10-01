export const EVIDENCE_TYPES = [
  { name: "Article" },
  { name: "Proceedings" },
  { name: "Book" },
];

export const RESEARCH_METHOS = {
  CASE_STUDY: "Case Study",
  FIELD_OBSERVATION: "Field Observation",
  EXPERIMENT: "Experiment",
  INTERVIEW: "Interview",
  SURVEY: "Survey",
};

export function submitEvidenceData(jsonData, evidenceType) {
  jsonData.submittedDate = new Date();
  jsonData.type = evidenceType;
  fetch("/api/submit/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(jsonData),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

export async function readFile(e) {
  const file = e.target.files[0];
  if (file == null) return;
  var extenstion = file.name.substr(
    file.name.lastIndexOf(".") + 1,
    file.name.length
  );
  const reader = new FileReader();

  if (extenstion != "none") {
    var data = await new Promise((resolve, reject) => {
      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      if (extenstion == "pdf") {
        reader.readAsBinaryString(file);
      } else if (extenstion == "bib") {
        reader.readAsText(file);
      }
    }, console.log(file));
    return [data, extenstion]
  } else {
    alert("Invalid file type! Either upload a bibtex or pdf file.");
  }
}
