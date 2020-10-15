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

export async function sendEvidenceData(jsonData, evidenceType, apiEndpoint) {
  jsonData.type = evidenceType;
  await fetch(apiEndpoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(jsonData),
  })
    .then(async function (res) {
      if(res.ok) {
        var results = await res.json();
        console.log(results);
        if(results.message) {
            alert(results.message);
        }
    }
    })
    .catch(function (res) {
      alert(res.message);
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

  if (extenstion !== "none") {
    var data = await new Promise((resolve, reject) => {
      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      if (extenstion === "bib") {
        reader.readAsText(file);
      } else {
        alert("Invalid file type! Upload a bibtex file!");
      }
    }, console.log(file));
    return [data, extenstion];
  }
}
