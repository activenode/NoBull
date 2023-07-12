let lastProcess = 0;
let debounceTimeout = setTimeout(() => {});
const processPosts = () => {
  clearTimeout(debounceTimeout);

  const now = Date.now();
  if (now - lastProcess > 100) {
    // do it
    const allPosts = document.querySelectorAll(
      ".feed-shared-update-v2:not([data-bullin])"
    );

    Array.from(allPosts).forEach((post) => {
      post.setAttribute("data-bullin", "1");
      const actorElem = post.querySelector(".update-components-actor");

      if (actorElem) {
        const actorElemText = actorElem.innerText;

        if (actorElemText) {
          if (
            actorElemText.includes("• 2.") ||
            actorElemText.includes("• 3.")
          ) {
            post.setAttribute("style", "display: none !important");
          }

          //   if (!actorElemText.includes("• 1.")) {
          //     console.log("@here", actorElemText);
          //
          //   }
        }
      }
    });
  }

  debounceTimeout = setTimeout(processPosts, 40);
};

processPosts();
