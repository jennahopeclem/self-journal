async function deleteEntry(event) {
  event.preventDefault();
  const deleteEntryId = event.target.getAttribute("data-deleteEntry-id");
  console.log(deleteEntryId);

  if (deleteEntryId) {
    const response = await fetch(`/api/entry/${deleteEntryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/entries");
    } else {
      console.log(response.statusText);
      // alert(response.statusText);
    }
  }
}

const deleteEntryBtns = document.querySelectorAll(".deleteEntry");
deleteEntryBtns.forEach((btn) => {
  console.log(`click`);
  btn.addEventListener("click", deleteEntry);
});
