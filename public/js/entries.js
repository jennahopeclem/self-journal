async function renderEntries() {
  const name = "";
  const text = "";

  const response = await fetch("/api/entry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, text }),
  });
  if (response.ok) {
    console.log("response is good");
  } else {
    console.log("response was bad");
  }
}
