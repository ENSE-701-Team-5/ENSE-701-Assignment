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
export function submitEvidenceData(jsonData) {
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
