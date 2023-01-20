const addGoal = async (event) => {
    event.preventDefault();

    console.log("Adding Goal...");

    const newGoal = document.querySelector('#goal-text').value.trim();
    console.log(newGoal);

    if (newGoal) {
        console.log("form filled out, starting fetch");
        const response = await fetch("/api/goal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                goal: newGoal,
            })
        });

        if (response.ok) {
            document.location.replace("/wellness");
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
};

// const deleteGoal = async (event) => {
//     event.preventDefault();

//     console.log("Removing Goal...");

//     const response = await fetch(`/api/goal/delete/:id`, {

//     })
// }

document.querySelector('#goal-btn').addEventListener('click', addGoal)
// document.querySelector('#delete-goal').addEventListener('click', deleteGoal);
