async function addComment(event) {
    event.preventDefault();

    const commentText = document.querySelector('#comment-text').value.trim();
    const entryId = document.querySelector('#entry-id').innerHTML;

    console.log(commentText);
    console.log(entryId);

    if (commentText && entryId) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                comment: commentText,
                entry_id: entryId,
            })
        });

        console.log('RES:', response);

        if (response.ok) {
            document.location.replace("/");
          } else {
            console.log(response.statusText);
            alert(response.statusText);
          }
    }
}

document.querySelector("#addComment").addEventListener('click', addComment);